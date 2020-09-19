import React, {Component} from 'react';
import Synthesiser from '../Component/Synthesiser';
import * as Tone from 'tone';

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
          <>
          <select defaultValue="3" onChange={this.handleSelect} className="octave-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <Synthesiser octave={this.state.octave} synth1={this.state.synth1}/>
          </>
      )
    }
}

export default SynthesiserContainer;