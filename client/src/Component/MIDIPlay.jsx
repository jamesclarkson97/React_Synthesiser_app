import React, {Component} from 'react';
import * as Tone from 'tone';
import MIDIAccess from './MIDIAccess.jsx';

class MIDIPlay extends Component {

    onDeviceInput = (message) => {
        Tone.start();
        message.stopPropagation() 
        let [onOff, input, value] = message.data;
        let newValue = value / 127.0;
        switch(input) {
          default: 
            break;
          case 36:
            if (onOff === 144) this.props.synth1.triggerAttack('C2', 0, newValue);
            else this.props.synth1.triggerRelease('C2');
            break;
          case 37:
            if (onOff === 144) this.props.synth1.triggerAttack('C#2', 0, newValue);
            else this.props.synth1.triggerRelease('C#2');
            break;
          case 38:
            if (onOff === 144) this.props.synth1.triggerAttack('D2', 0, newValue);
            else this.props.synth1.triggerRelease('D2');
             break;
          case 39:
            if (onOff === 144) this.props.synth1.triggerAttack('D#2', 0, newValue);
            else this.props.synth1.triggerRelease('D#2');
            break;
          case 40:
            if (onOff === 144) this.props.synth1.triggerAttack('E2', 0, newValue);
            else this.props.synth1.triggerRelease('E2');
          break;
          case 41:
            if (onOff === 144) this.props.synth1.triggerAttack('F2', 0, newValue);
            else this.props.synth1.triggerRelease('F2');
            break;
          case 42:
            if (onOff === 144) this.props.synth1.triggerAttack('F#2', 0, newValue);
            else this.props.synth1.triggerRelease('F#2');
            break;
          case 43:
            if (onOff === 144) this.props.synth1.triggerAttack('G2', 0, newValue);
            else this.props.synth1.triggerRelease('G2');
             break;
          case 44:
            if (onOff === 144) this.props.synth1.triggerAttack('G#2', 0, newValue);
            else this.props.synth1.triggerRelease('G#2');
            break;
          case 45:
            if (onOff === 144) this.props.synth1.triggerAttack('A2', 0, newValue);
            else this.props.synth1.triggerRelease('A2');
          break;
          case 46:
            if (onOff === 144) this.props.synth1.triggerAttack('A#2', 0, newValue);
            else this.props.synth1.triggerRelease('A#2');
            break;
          case 47:
            if (onOff === 144) this.props.synth1.triggerAttack('B2', 0, newValue);
            else this.props.synth1.triggerRelease('B2');
            break;
          case 48:
            if (onOff === 144) this.props.synth1.triggerAttack('C3', 0, newValue);
            else this.props.synth1.triggerRelease('C3');
            break;
          case 49:
            if (onOff === 144) this.props.synth1.triggerAttack('C#3', 0, newValue);
            else this.props.synth1.triggerRelease('C#3');
            break;
          case 50:
            if (onOff === 144) this.props.synth1.triggerAttack('D3', 0, newValue);
            else this.props.synth1.triggerRelease('D3');
            break;
          case 51:
            if (onOff === 144) this.props.synth1.triggerAttack('D#3', 0, newValue);
            else this.props.synth1.triggerRelease('D#3');
            break;
          case 52:
            if (onOff === 144) this.props.synth1.triggerAttack('E3', 0, newValue);
            else this.props.synth1.triggerRelease('E3');
          break;
          case 53:
            if (onOff === 144) this.props.synth1.triggerAttack('F3', 0, newValue);
            else this.props.synth1.triggerRelease('F3');
            break;
          case 54:
            if (onOff === 144) this.props.synth1.triggerAttack('F#3', 0, newValue);
            else this.props.synth1.triggerRelease('F#3');
            break;
          case 55:
            if (onOff === 144) this.props.synth1.triggerAttack('G3', 0, newValue);
            else this.props.synth1.triggerRelease('G3');
             break;
          case 56:
            if (onOff === 144) this.props.synth1.triggerAttack('G#3', 0, newValue);
            else this.props.synth1.triggerRelease('G#3');
            break;
          case 57:
            if (onOff === 144) this.props.synth1.triggerAttack('A3', 0, newValue);
            else this.props.synth1.triggerRelease('A3');
          break;
          case 58:
            if (onOff === 144) this.props.synth1.triggerAttack('A#3', 0, newValue);
            else this.props.synth1.triggerRelease('A#3');
            break;
          case 59:
            if (onOff === 144) this.props.synth1.triggerAttack('B3', 0, newValue);
            else this.props.synth1.triggerRelease('B3');
            break;
          case 60:
            if (onOff === 144) this.props.synth1.triggerAttack('C4', 0, newValue);
            else this.props.synth1.triggerRelease('C4');
            break;
          case 61:
            if (onOff === 144) this.props.synth1.triggerAttack('C#4', 0, newValue);
            else this.props.synth1.triggerRelease('C#4');
            break;
          case 62:
            if (onOff === 144) this.props.synth1.triggerAttack('D4', 0, newValue);
            else this.props.synth1.triggerRelease('D4');
            break;
          case 63:
            if (onOff === 144) this.props.synth1.triggerAttack('D#4', 0, newValue);
            else this.props.synth1.triggerRelease('D#4');
            break;
          case 64:
            if (onOff === 144) this.props.synth1.triggerAttack('E4', 0, newValue);
            else this.props.synth1.triggerRelease('E4');
            break;
          case 65:
            if (onOff === 144) this.props.synth1.triggerAttack('F4', 0, newValue);
            else this.props.synth1.triggerRelease('F4');
            break;
          case 66:
            if (onOff === 144) this.props.synth1.triggerAttack('F#4', 0, newValue);
            else this.props.synth1.triggerRelease('F#4');
            break;
          case 67:
            if (onOff === 144) this.props.synth1.triggerAttack('G4', 0, newValue);
            else this.props.synth1.triggerRelease('G4');
            break;
          case 68:
            if (onOff === 144) this.props.synth1.triggerAttack('G#4', 0, newValue);
            else this.props.synth1.triggerRelease('G#4');
            break;
          case 69:
            if (onOff === 144) this.props.synth1.triggerAttack('A4', 0, newValue);
            else this.props.synth1.triggerRelease('A4');
            break;
          case 70:
            if (onOff === 144) this.props.synth1.triggerAttack('A#4', 0, newValue);
            else this.props.synth1.triggerRelease('A#4');
            break;
          case 71:
            if (onOff === 144) this.props.synth1.triggerAttack('B4', 0, newValue);
            else this.props.synth1.triggerRelease('B4');
            break;
          case 72:
            if (onOff === 144) this.props.synth1.triggerAttack('C5', 0, newValue);
            else this.props.synth1.triggerRelease('C5');
            break;
          case 73:
            if (onOff === 144) this.props.synth1.triggerAttack('C#5', 0, newValue);
            else this.props.synth1.triggerRelease('C#5');
            break;
          case 74:
            if (onOff === 144) this.props.synth1.triggerAttack('D5', 0, newValue);
            else this.props.synth1.triggerRelease('D5');
            break;
          case 75:
            if (onOff === 144) this.props.synth1.triggerAttack('D#5', 0, newValue);
            else this.props.synth1.triggerRelease('D#5');
            break;
          case 76:
            if (onOff === 144) this.props.synth1.triggerAttack('E5', 0, newValue);
            else this.props.synth1.triggerRelease('E5');
            break;
          case 77:
            if (onOff === 144) this.props.synth1.triggerAttack('F5', 0, newValue);
            else this.props.synth1.triggerRelease('F5');
            break;
          case 78:
            if (onOff === 144) this.props.synth1.triggerAttack('F#5', 0, newValue);
            else this.props.synth1.triggerRelease('F#5');
            break;
          case 79:
            if (onOff === 144) this.props.synth1.triggerAttack('G5', 0, newValue);
            else this.props.synth1.triggerRelease('G5');
            break;
          case 80:
            if (onOff === 144) this.props.synth1.triggerAttack('G#5', 0, newValue);
            else this.props.synth1.triggerRelease('G#5');
            break;
          case 81:
            if (onOff === 144) this.props.synth1.triggerAttack('A5', 0, newValue);
            else this.props.synth1.triggerRelease('A5');
            break;
          case 82:
            if (onOff === 144) this.props.synth1.triggerAttack('A#5', 0, newValue);
            else this.props.synth1.triggerRelease('A#5');
            break;
          case 83:
            if (onOff === 144) this.props.synth1.triggerAttack('B5', 0, newValue);
            else this.props.synth1.triggerRelease('B5');
            break;
          case 84:
            if (onOff === 144) this.props.synth1.triggerAttack('C6', 0, newValue);
            else this.props.synth1.triggerRelease('C6');
            break;
        }
    }

    render() {
        return(
            <MIDIAccess onDeviceInput={this.onDeviceInput}/>
        )
    }
}

export default MIDIPlay;