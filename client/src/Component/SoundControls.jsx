import React, {Component} from 'react';
// import { Tone } from 'tone/build/esm/core/Tone';
import * as Tone from 'tone';
import './SoundControls.css';

class SoundControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            waveForm: this.props.synth1.get().oscillator.type
        }
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
                Tone.Master.volume.value = -5;
                break;
            case "Tone.AMSynth":
                this.props.changeSynth(Tone.AMSynth);
                Tone.Master.volume.value = -5;
                break;
            case "Tone.FMSynth":
                this.props.changeSynth(Tone.FMSynth);
                Tone.Master.volume.value = -7;
                break;
            case "Tone.MembraneSynth":
                this.props.changeSynth(Tone.MembraneSynth);
                Tone.Master.volume.value = -10;
                break;
            case "Tone.MetalSynth":
                this.props.changeSynth(Tone.MetalSynth);
                Tone.Master.volume.value = -10;
                break;
            case "Tone.PluckSynth":
                this.props.changeSynth(Tone.PluckSynth);
                Tone.Master.volume.value = -5;
                break;
        }
        
    }

    updateGain = (e) => {
        this.props.changeGain(e.target.value)
    }

    updateReverb = (e) => {
        this.props.changeReverb(e.target.value)
    }

    render() {
        return(
            <div id="sound-controls">

                <h6 className="sound-control-heading">Synth</h6>
                <select defaultValue="Tone.Synth" id="synth-buttons" onChange={this.updateSynth}>
                    <option value="Tone.Synth">Synth</option>
                    <option value="Tone.AMSynth">AM Synth</option>
                    <option value="Tone.FMSynth">FM Synth</option>
                    <option value="Tone.MembraneSynth">Membrane Synth</option>
                    <option value="Tone.MetalSynth">Metal Synth</option>
                    <option value="Tone.PluckSynth">Pluck Synth</option>
                </select>

                <h6 className="sound-control-heading">Waveform</h6>
                <select id="waveform-select" defaultValue="default" onChange={this.updateWaveForm}>
                    <option disabled value="default">Default: {this.state.waveForm}</option>
                    <option value="triangle" >Triangle</option>
                    <option value="sine">Sine</option>
                    <option value="square">Square</option>
                    <option value="sawtooth">Sawtooth</option>
                </select>

                <h6 className="sound-control-heading">Gain</h6>
                <input id="gain" type="range" min="0.0" max="20.0" step="0.1" value={this.props.gain} onChange={this.updateGain}></input>
                <h6 className="sound-control-heading">Reverb</h6>
                <input id="reverb" type="range" min="0.0" max="20.0" step="0.1" value={this.props.reverb} onChange={this.updateReverb}></input>
                
            </div>
        )
    }

}

export default SoundControls;