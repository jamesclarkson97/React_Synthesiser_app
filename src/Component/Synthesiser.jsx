import React, { Component } from 'react';

class Synthesiser extends Component {

  render() {
    const whiteNotes = ["C", "D", "E", "F", "G", "A", "B"];

    const whiteNoteNodes = whiteNotes.map((note, index) => {
        return <div key={index} className="white-notes">{note}</div>
    })

    const blackNotes = ["C#", "D#", "F#", "G#", "A#"];
  
    const blackNoteNodes = blackNotes.map((note, index) => {
        return <div key={index} className="black-notes">{note}</div>
    })

    return (
      <>
      {whiteNoteNodes}
      {blackNoteNodes}
      </>
    );
  }
}

export default Synthesiser;