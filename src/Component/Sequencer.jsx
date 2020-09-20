import React, {Component} from 'react';
import * as Tone from 'tone';
import './Sequencer.css';

class Sequencer extends Component {
    constructor() {
        super();
        
        this.state = {
            rows : '',
            notes: '',
            index :0
        }
    }

    componentDidMount() {
        this.setState({rows : document.querySelectorAll('div.row')})
        this.setState({notes: document.getElementById("Notes").childNodes})
    }

    play = () => {
        this.stop();
        Tone.Transport.scheduleRepeat(() => {
            this.repeat();
        }, '4n');
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
        Tone.Transport.cancel();
        this.setState({index: 0})
    }


    render() {
        var newOctave = Number(this.props.octave) + 1;
        return(
            <>
            <div id="sequencer">
            <button onClick={this.play}>Play</button>
            <button onClick={this.stop}>Stop</button>
            <div id="Notes">
            <div id={"C" + newOctave} className="row">
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"B" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"A#" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"A" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"G#" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"G" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"F#" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"F" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"E" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"D#" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"D" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"C#" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>
            <div id={"C" + this.props.octave}>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
                <input type="checkbox"/>
            </div>

            </div>
            </div>
            </>
        )
    }

}

export default Sequencer;