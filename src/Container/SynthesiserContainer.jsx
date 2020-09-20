import React, {Component} from 'react';
import Synthesiser from '../Component/Synthesiser.jsx';
import Sequencer from '../Component/Sequencer.jsx';
import * as Tone from 'tone';
import './SynthesiserContainer.css';
import SoundControls from '../Component/SoundControls.jsx';

class SynthesiserContainer extends Component {
  constructor(){
    super()

    this.state = {
      synth1: new Tone.PolySynth(Tone.Synth).toDestination(),
      octave: '3'
    }
  }

  handleSelect = (e) => this.setState({octave: e.target.value});

  render() {

      return(
          <div className="synthesiser-container">
            <div className="octave-select-container">
              <h6>Octave</h6>
              <select defaultValue="3" onChange={this.handleSelect} className="octave-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <SoundControls synth1={this.state.synth1}/>
            </div>
            <Synthesiser octave={this.state.octave} synth1={this.state.synth1}/>
            <Sequencer octave={this.state.octave} synth1={this.state.synth1}/>
          </div>
      )
    }
}

export default SynthesiserContainer;