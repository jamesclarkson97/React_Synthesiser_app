import React, {Component} from 'react';
import Synthesiser from '../Component/Synthesiser';
import * as Tone from 'tone';

class SynthesiserContainer extends Component {
  constructor(){
    super()

    this.state = {
      synth1: new Tone.PolySynth(Tone.Synth).toDestination()
    }
  }

  render() {
      return(
          <>
          <Synthesiser synth1={this.state.synth1}/>
          </>
      )
    }
}

export default SynthesiserContainer;