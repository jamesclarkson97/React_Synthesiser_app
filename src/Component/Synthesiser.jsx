import React, { Component } from 'react';
import keydown from 'react-keydown';
import * as Tone from 'tone';
import './Synthesiser.css';

import { setBinding } from 'react-keydown/dist/event_handlers';
class Synthesiser extends Component {
  constructor(){
    super()

    this.state = {
      synth1: new Tone.PolySynth(Tone.Synth).toDestination(),
      now: Tone.now()
    }
  }
  
  

    // function handleOnMouseDown(e) {
    //   Tone.start().then(
    //   synth1.triggerAttackRelease(e.target.value, Tone.now))
    // }
    
    handleOnDown = (e) => {
      Tone.start()
      this.state.synth1.triggerAttack(e.target.id , "32n")
     
    }
    
    handleOnLeave = (e) => {
      this.state.synth1.triggerRelease(e.target.id)
    }



  render() {
    
    return (
      <div className="synthesiser-notes">
        
        <div id="B4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave} onKeyDown={this.handleOnDown} onKeyUp={this.handleOnLeave} tabIndex={0} className="white-note">B4
          <div  id="A#4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">A#4</div>
        </div>
        <div  id="A4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">A4
          <div id="G#4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">G#4</div>
        </div>
        <div  id="G4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">G4
          <div id="F#4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">F#4</div>
        </div>
        <div  id="F4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">F4
        </div>
        <div id="E4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">E4
          <div id="D#4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">D#4</div>
        </div>
        <div  id="D4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">D4
          <div id="C#4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">C#4</div>
        </div>
        <div id="C4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">C4
        </div>
        <div  id="B3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">B3
          <div  id="A#3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">A#3</div>
        </div>
        <div id="A3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">A3
          <div id="G#3"  onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">G#3</div>
        </div>
        <div  id="G3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">G3
          <div id="F#3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">F#3</div>
        </div>
        <div  id="F3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">F3
        </div>
        <div  id="E3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">E3
          <div id="D#3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">D#3</div>
        </div>
        <div  id="D3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">D3
          <div id="C#3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">C#3</div>
        </div>
        <div id="C3" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">C3
        </div>
        <div  id="B2"onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">B2
          <div  id="A#2"onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave} className="black-note">A#2</div>
        </div>
        <div id="A2"onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave} className="white-note">A2
          <div id="G#2" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">G#2</div>
        </div>
        <div id="G2" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">G2
          <div id="F#2" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">F#2</div>
        </div>
        <div id="F2" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">F2
        </div>
        <div id="E2" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">E2
          <div id="D#2" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">D#2</div>
        </div>
        <div id="D2" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">D2
          <div id="C#2" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="black-note">C#2</div>
        </div>
        <div id="C2"onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave}className="white-note">C2
        </div>
        

        
      </div>
      
      
    );
  }
}

export default Synthesiser;