import React, {Component} from 'react';
// import { Tone } from 'tone/build/esm/core/Tone';
import * as Tone from 'tone';

class SoundControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gain: 0,
            synth: this.props.synth1
        }
        // this.gainChange = this.gainChange.bind(this)
    }

    gainChange = (e) => {
        let gain = e.target.value
        const gainNode = new Tone.Gain(e.target.value).toDestination();
        this.state.synth.connect(gainNode, 0)
        this.setState({gain})
    }

    render() {

        return(
            <div>
                <h6>Gain</h6>
                <input type="range" min="0.0" max="10.0" step="0.1" value={this.state.gain} onChange={this.gainChange}></input>
            </div>
        )
    }

}

export default SoundControls;