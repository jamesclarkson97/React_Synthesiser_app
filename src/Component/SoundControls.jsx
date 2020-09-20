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
        // this.gainChange = this.gainChange.bind(this)
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
                <h6>Gain</h6>
                <input id="gain" type="range" min="0.0" max="10.0" step="0.1" value={this.state.gain} onChange={this.gainChange}></input>
                <h6>Distortion</h6>
                <input id="distortion" type="range" min="0.0" max="10.0" step="0.1" value={this.state.distortion} onChange={this.distortionChange}></input>
            </div>
        )
    }

}

export default SoundControls;