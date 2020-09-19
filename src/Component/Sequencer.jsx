import React, {Component} from 'react';
import * as Tone from 'tone';

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
        this.setState({notes: [document.getElementById("Notes").childNodes]})
    }

    play = () => {
        // console.log(this.state.notes[0][8].id)
        // let input = this.state.rows[0].querySelector(`input:nth-child(1)`);
        // console.log(input.checked)
        

        Tone.Transport.scheduleRepeat(() => {
            this.repeat()
            Tone.start()
        }, '1m');
        Tone.Transport.start();
    //    this.props.synth1.triggerAttackRelease("C4", '8n')
    }

    repeat = () => {
        // this.props.synth1.triggerAttackRelease("C4", '8n')
        let beat = this.state.index % 8;
        let row = this.state.rows[0]
        for (let i = 0; i < this.state.notes[0].length; i++) {
            let note = this.state.notes[0][i]

            let input = note.querySelector(`input:nth-child(${beat + 1})`);
            
            let noteId = note.id

            if (input.checked) {
                this.props.synth1.triggerAttackRelease(noteId, '8n')
            }
            this.setState({index: +1});  
        }
            
        

        
    }
    

    render() {
        var newOctave = Number(this.props.octave) + 1;
        return(
            <>
            <button onClick={this.play}>Play</button>
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
            </>
        )
    }

}

export default Sequencer;