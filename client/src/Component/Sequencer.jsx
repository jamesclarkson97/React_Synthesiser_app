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
            sequence: []
        }
    }

    submitSequence (e) {
        e.preventDefault()
  
        SequencerService.postSequence({
          name: this.name,
          score: this.score
        })
    }

    handleCheck = (e) => {
        const {id} = e.target
        console.log(id)
        console.log(e.target.className)
        this.setState(prevState => ({
            ...prevState,
            sequence: [
                ...prevState.sequence,
                id
            ]
        }));  
    }






    componentDidMount() {
        document.documentElement.addEventListener('mousedown', () => {
            if (Tone.context.state !== 'running') Tone.context.resume();
        });
        this.setState({rows : document.querySelectorAll('div.row')})
        this.setState({notes: document.getElementById("Notes").childNodes})
    }

    play = () => {
        this.stop();
        Tone.start();
        Tone.Transport.bpm.value = this.state.tempo;
        Tone.Transport.scheduleRepeat(() => {
            this.repeat();
        }, "8n");
        Tone.Transport.start();
    }

    repeat = () => {
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
            this.props.synth1.triggerAttackRelease(notes, '8n')
        }
        let newIndex = this.state.index + 1
        this.setState({index: newIndex});      
    }

    stop = () => {
        Tone.Transport.stop()
        Tone.Transport.cancel();
        this.setState({index: 0})
    }

    save = () => {

    }

    tempoChange = (event) => {
        const bpm = parseInt(event.target.value)
        this.setState({tempo: bpm})
        Tone.Transport.bpm.value = this.state.tempo
    }


    render() {
        var newOctave = Number(this.props.octave) + 1;
        return(
            <>
            
            <div id="sequencer">
            <h4 id="tempo-heading">{this.state.tempo} BPM</h4> 
            <div id="sequencer-controls">
            <button onClick={this.play}>Play</button>
            <button onClick={this.stop}>Stop</button>
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
            <div id="Notes">
            <div id={"C" + newOctave} className="row">
                <input id={"C" + newOctave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + newOctave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + newOctave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + newOctave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + newOctave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + newOctave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + newOctave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + newOctave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"B" + this.props.octave}>
                <input id={"B" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"B" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"A#" + this.props.octave}>
                <input id={"A#" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#" + this.props.octave + "3"}className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#" + this.props.octave + "4"}className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#" + this.props.octave + "5"}className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#" + this.props.octave + "6"}className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#" + this.props.octave + "7"}className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A#" + this.props.octave + "8"}className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"A" + this.props.octave}>
                <input id={"A" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"A" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"G#" + this.props.octave}>
                <input id={"G#" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G#" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"G" + this.props.octave}>
                <input id={"G" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"G" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"F#" + this.props.octave}>
                <input id={"F#" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F#" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"F" + this.props.octave}>
                <input id={"F" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"F" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"E" + this.props.octave}>
                <input id={"E" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"E" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"D#" + this.props.octave}>
                <input id={"D#" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D#" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"D" + this.props.octave}>
                <input id={"D" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"D" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"C#" + this.props.octave}>
                <input id={"C#" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C#" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>
            <div id={"C" + this.props.octave}>
                <input id={"C" + this.props.octave + "1"} className="1" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + this.props.octave + "2"} className="2" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + this.props.octave + "3"} className="3" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + this.props.octave + "4"} className="4" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + this.props.octave + "5"} className="5" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + this.props.octave + "6"} className="6" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + this.props.octave + "7"} className="7" onChange={this.handleCheck} type="checkbox"/>
                <input id={"C" + this.props.octave + "8"} className="8" onChange={this.handleCheck} type="checkbox"/>
            </div>

            </div>
            </div>
            </>
        )
    }

}

export default Sequencer;