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

  changeSynth = (synthChoice) => {
    this.setState({synth1: new Tone.PolySynth(synthChoice).toDestination()})
  }

  

  changeWaveForm = (waveformChoice) => {
    this.setState({synth1: this.state.synth1.set({oscillator: {type: waveformChoice}})})
  }

  handleKeyDown = (e) => {
    let upperOctave = Number(this.state.octave) + 1;
    e = window.event;
    let k = e.keyCode;
    switch(k){
      default:
        
        break;
      // Octave
      case 49:
        this.setState({octave: '1'})
        document.getElementById("octave-select").value = '1'
        break;
      case 50:
        this.setState({octave: '2'})
        document.getElementById("octave-select").value = '2'
        break;
      case 51:
        this.setState({octave: '3'})
        document.getElementById("octave-select").value = '3'
        break;
      case 52:
        this.setState({octave: '4'})
        document.getElementById("octave-select").value = '4'
        break;
      case 53:
        this.setState({octave: '5'})
        document.getElementById("octave-select").value = '5'
        break;

      // Notes
      case 75:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`C${upperOctave}`, "8n")
        break;
      case 74:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`B${this.state.octave}`, "8n")
        break;
      case 85:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`A#${this.state.octave}`, "8n")
        break;
      case 72:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`A${this.state.octave}`, "8n")
        break;
      case 89:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`G#${this.state.octave}`, "8n")
        break;
      case 71:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`G${this.state.octave}`, "8n")
        break;
      case 84:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`F#${this.state.octave}`, "8n")
        break;
      case 70:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`F${this.state.octave}`, "8n")
        break;
      case 68:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`E${this.state.octave}`, "8n")
        break;
      case 69:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`D#${this.state.octave}`, "8n")
        break;
      case 83:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`D${this.state.octave}`, "8n")
        break;
      case 87:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`C#${this.state.octave}`, "8n")
        break;
      case 65:
        Tone.start()
        this.state.synth1.triggerAttackRelease(`C${this.state.octave}`, "8n")
        break;
      }
  }

  handleSelect = (e) => this.setState({octave: e.target.value});

  render() {

      return(
          <div className="synthesiser-container" onKeyDown={this.handleKeyDown} tabIndex="0">
            <div className="controls-container">
              <h6>Octave</h6>
              <select id="octave-select" defaultValue="3" onChange={this.handleSelect} className="octave-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <SoundControls synth1={this.state.synth1} changeWaveForm={this.changeWaveForm} changeSynth={this.changeSynth}/>
            </div>
            <Synthesiser octave={this.state.octave} synth1={this.state.synth1}/>
            <Sequencer octave={this.state.octave} synth1={this.state.synth1}/>
          </div>
      )
    }
}

export default SynthesiserContainer;