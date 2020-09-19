import React, { Component } from 'react';
import * as Tone from 'tone';
import './Synthesiser.css';

class Synthesiser extends Component {
  constructor(){
    super()

    this.state = {
      synth1: new Tone.PolySynth(Tone.Synth).toDestination()
    }
  }
    
    handleOnDown = (e) => {
      console.log(e);
      e.stopPropagation();
      this.state.synth1.triggerAttack(e.target.id , Tone.now());
      Tone.start();
    }

    handleKeyDown = (e) => {
      e = window.event;
      let k = e.keyCode;
	    switch(k){
        default:
          
        case 74:
          Tone.start()
          this.state.synth1.triggerAttackRelease("B4", "8n")
          break;
          case 85:
          Tone.start()
          this.state.synth1.triggerAttackRelease("A#4", "8n")
          break;
          case 72:
          Tone.start()
          this.state.synth1.triggerAttackRelease("A4", "8n")
        break;
      }
    }
    
    handleOnLeave = (e) => {
      this.state.synth1.triggerRelease(e.target.id);
    }

    stopPropagation = (e) => e.stopPropagation();


  render() {
    
    return (
      <div className="synthesiser-notes" onKeyDown={this.handleKeyDown} tabIndex="0">
        
        <div id="B4" onMouseDown={this.handleOnDown} onMouseUp={this.handleOnLeave} onMouseOut={this.handleOnLeave} className="white-note">B4
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