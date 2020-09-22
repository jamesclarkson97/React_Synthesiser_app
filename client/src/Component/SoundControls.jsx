import React, {Component} from 'react';
// import { Tone } from 'tone/build/esm/core/Tone';
import * as Tone from 'tone';
import './SoundControls.css';

class SoundControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gain: 0,
            distortion: 0,
            synth: this.props.synth1
        }
        this.gainChange = this.gainChange.bind(this)
        this.distortionChange = this.distortionChange.bind(this)
    }

    changeWaveForm = (e) => this.setState({synth: this.props.synth1.set({oscillator: {type: e.target.value}})})
    
    updateSynth = (e) => {
        switch(e.target.value) {
            default:
                break;
            case "Tone.Synth":
                this.props.changeSynth(Tone.Synth);
                break;
            case "Tone.AMSynth":
                this.props.changeSynth(Tone.AMSynth);
                break;
            case "Tone.FMSynth":
                this.props.changeSynth(Tone.FMSynth);
                break;
            case "Tone.MembraneSynth":
                this.props.changeSynth(Tone.MembraneSynth);
                break;
            case "Tone.MetalSynth":
                this.props.changeSynth(Tone.MetalSynth)
                break;
            case "Tone.PluckSynth":
                this.props.changeSynth(Tone.PluckSynth)
                break;
        }
        
    }

    gainChange = (e) => {
        let gain = e.target.value
        const gainNode = new Tone.Gain(gain).toDestination();
        this.state.synth.connect(gainNode, 0)
        this.setState({gain})
    }

    distortionChange = (e) => {
        let distortion = e.target.value
        const distortionNode = new Tone.Distortion(distortion).toDestination();
        this.state.synth.connect(distortionNode, 0)
        this.setState({distortion})
    }

    render() {

        return(
            <div>
                <h6>Waveform</h6>
                <select defaultValue="triangle">
                    <option value="triangle" onChange={this.changeWaveForm}>Triangle</option>
                    <option value="sine" onChange={this.changeWaveForm}>Sine</option>
                    <option value="square" onChange={this.changeWaveForm}>Square</option>
                    <option value="sawtooth" onChange={this.changeWaveForm}>Sawtooth</option>
                </select>
                <h6>Gain</h6>
                <input id="gain" type="range" min="0.0" max="10.0" step="0.1" value={this.state.gain} onChange={this.gainChange}></input>
                <h6>Distortion</h6>
                <input id="distortion" type="range" min="0.0" max="10.0" step="0.1" value={this.state.distortion} onChange={this.distortionChange}></input>
                <div id="synth-buttons">
                    <button onClick={this.updateSynth} value="Tone.Synth">Synth</button>
                    <button onClick={this.updateSynth} value="Tone.AMSynth">AM Synth</button>
                    <button onClick={this.updateSynth} value="Tone.FMSynth">FM Synth</button>
                    <button onClick={this.updateSynth} value="Tone.MembraneSynth">Membrane Synth</button>
                    <button onClick={this.updateSynth} value="Tone.MetalSynth">Metal Synth</button>
                    <button onClick={this.updateSynth} value="Tone.PluckSynth">Pluck Synth</button>
                </div>
            </div>
        )
    }

}

export default SoundControls;