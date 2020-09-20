import React, {Component} from 'react';
// import { Tone } from 'tone/build/esm/core/Tone';
import * as Tone from 'tone';

class SoundControls extends Component {

    state = {
        gain: 0
    }

    gainChange = (e) => {
        const gain = new Tone.Gain(e.target.value).toDestination();
        this.setState({gain: e.target.value})
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