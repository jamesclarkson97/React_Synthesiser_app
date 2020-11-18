import React, {Component} from 'react';
import * as Tone from 'tone';
import './Sequencer.css';
import SequencerService from '../services/SequencerService.js';

class Sequencer extends Component {
    constructor() {
        super();
        
        this.state = {
            rows : '',
            notes: '',
            index: 0,
            tempo: 120,
            sequence: [],
            sequenceList: []
        }
    }

    loadSequence = () => {
            SequencerService.getSequences()
            .then(sequences => sequences)
            .then(sequenceList => {
                this.setState({sequenceList})
            })
     };

    submitSequence = (e)  => {
        e.preventDefault()
        const name = prompt('Enter sequence name:');
        if (name !== '') {
            const sequence = this.state.sequence;
            SequencerService.postSequence({
              name: name,
              sequence: sequence
            })
        } else {
            alert('You must enter a name!');
        }
    }

    deleteSequence = (e) => {
        e.preventDefault()
        let found = false;
        const sequenceToDelete = prompt('Enter name of sequence.');
        for (let sequence of this.state.sequenceList) {
            if (sequence.name === sequenceToDelete) {
                found = true;
                SequencerService.deleteSequence(sequence._id);
                break;
            }
        }
        found ? alert('Deleted.') : alert('Not found.');
    }

    handleCheck = (e) => {
        const {id} = e.target
        let newSequence = [...this.state.sequence]
        if (newSequence.includes(id)) {
            let index = newSequence.indexOf(id)
            newSequence.splice(index, 1)
            this.setState({sequence: newSequence});  
        } else {
            this.setState(prevState => ({
            ...prevState,
            sequence: [
                ...prevState.sequence,
                id
                ]
            }));   
        }     
    }

    componentDidMount() {
        document.documentElement.addEventListener('mousedown', () => {
            if (Tone.context.state !== 'running') Tone.context.resume();
        });
        this.setState({rows : document.querySelectorAll('div.row')})
        this.setState({notes: document.getElementById("Notes").childNodes})
        this.loadSequence();
        this.checkForChecked();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.sequenceList !== prevState.sequenceList) {
            this.loadSequence();
        }
        this.checkForChecked()
    }

    play = () => {
        this.stop();
        Tone.Transport.bpm.value = this.state.tempo;
        Tone.Transport.scheduleRepeat((time) => {
            Tone.start();
            this.repeat(time);
        }, "8n")
        Tone.Transport.start();
    }

    repeat = (time) => {
        let beat = this.state.index % 8;
        for (let i = 0; i < this.state.rows.length; i++) {
            let notes = [];
            for (let n = 0; n < this.state.notes.length; n++) {
                let input = this.state.notes[n].querySelector(`input:nth-child(${beat+1})`)
                let note = this.state.notes[n].id
                if (input.checked) {
                    notes.push(note)
                }  
            }
            
            this.props.synth1.triggerAttackRelease(notes,"8n", time)
            
        }
        let newIndex = this.state.index + 1
        this.setState({index: newIndex});      
    }

    stop = () => {
        Tone.Transport.stop()
        Tone.Transport.cancel();
        this.setState({index: 0})
    }

    tempoChange = (event) => {
        const bpm = parseInt(event.target.value)
        this.setState({tempo: bpm})
        Tone.Transport.bpm.value = this.state.tempo
    }

    checkForChecked = () => {
        let sequence = [...this.state.sequence]
        sequence.map((id) => 
            document.getElementById(id).checked = true
            );
    }

    uncheckAll = () => {
        let sequence = [...this.state.sequence]
        sequence.map((id) => 
            document.getElementById(id).checked = false
            );
    }

    sequenceSelect = (e) => {
        this.uncheckAll();
        this.setState({sequence: e.target.value.split(',')})
    }

    render() {
        var newOctave = Number(this.props.octave) + 1;
        return(
            <>
            
            <div id="sequencer">
            <h4 id="tempo-heading"><span id="tempo-span">{this.state.tempo}</span> BPM</h4> 
            <div id="sequencer-controls">
            <button className="btn" onClick={this.play}>Play</button>
            <button className="btn" onClick={this.stop}>Stop</button>
            <button className="btn" onClick={this.submitSequence}>Save</button>
            <select id="sequence-selector" disabled={this.state.sequenceList ? null : true} defaultValue="select-sequence" onChange={this.sequenceSelect}>
                <option disabled value="select-sequence">Select Sequence</option>
                {this.state.sequenceList.map((sequence) => <option key={sequence._id} value={sequence.sequence}>{sequence.name}</option>)}
            </select>
            <button className="btn" onClick={this.deleteSequence}>Delete</button>
            <input
                type="range"
                name="tempo" 
                id="tempo"
                min="40"
                max="218"
                value={this.state.tempo}
                onChange={this.tempoChange}
                /> 
            </div>
            <div id="beats"><p>1 2 3 4 5 6 7 8</p></div>
            <div id="note-container">
            <div id="note-labels"><span>C B A# A G# G F# F E D# D C# C</span></div>
            <div id="Notes">
            <div id={"C" + newOctave} className="row">
                <input id={"CU1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"CU2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"CU3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"CU4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"CU5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"CU6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"CU7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"CU8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"B" + this.props.octave}>
                <input id={"B1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"BN3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"A#" + this.props.octave}>
                <input id={"A#1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#L3"}className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#4"}className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#5"}className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#6"}className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#7"}className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#8"}className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"A" + this.props.octave}>
                <input id={"A1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"AL3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"G#" + this.props.octave}>
                <input id={"G#1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#L3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"G" + this.props.octave}>
                <input id={"G1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"GL3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"F#" + this.props.octave}>
                <input id={"F#1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#L3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"F" + this.props.octave}>
                <input id={"F1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"FL3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"E" + this.props.octave}>
                <input id={"E1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"EL3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"D#" + this.props.octave}>
                <input id={"D#1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#L3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"D" + this.props.octave}>
                <input id={"D1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"DL3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"C#" + this.props.octave}>
                <input id={"C#1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#L3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"C" + this.props.octave}>
                <input id={"C1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"CL3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            </div>
            </div>
            </div>
            </>
        )
    }

}

export default Sequencer;