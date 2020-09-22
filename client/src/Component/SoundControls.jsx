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
            synth: this.props.synth1,
            waveForm: this.props.synth1.get().oscillator.type
        }
        this.gainChange = this.gainChange.bind(this)
        this.distortionChange = this.distortionChange.bind(this)
    }

    
    
    updateWaveForm = (e) => {
        this.props.changeWaveForm(e.target.value)
    }

    updateSynth = (e) => {
        document.getElementById('waveform-select').value = 'default';
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
                <select id="waveform-select" defaultValue="default" onChange={this.updateWaveForm}>
                    <option disabled value="default">Default: {this.state.waveForm}</option>
                    <option value="triangle" >Triangle</option>
                    <option value="sine">Sine</option>
                    <option value="square">Square</option>
                    <option value="sawtooth">Sawtooth</option>
                </select>
                <h6>Gain</h6>
                <input id="gain" type="range" min="0.0" max="10.0" step="0.1" value={this.state.gain} onChange={this.gainChange}></input>
                <h6>Distortion</h6>
                <input id="distortion" type="range" min="0.0" max="10.0" step="0.1" value={this.state.distortion} onChange={this.distortionChange}></input>
                <select defaultValue="Tone.Synth" id="synth-buttons" onChange={this.updateSynth}>
                    <option value="Tone.Synth">Synth</option>
                    <option value="Tone.AMSynth">AM Synth</option>
                    <option value="Tone.FMSynth">FM Synth</option>
                    <option value="Tone.MembraneSynth">Membrane Synth</option>
                    <option value="Tone.MetalSynth">Metal Synth</option>
                    <option value="Tone.PluckSynth">Pluck Synth</option>
                </select>
            </div>
        )
    }

}

export default SoundControls;