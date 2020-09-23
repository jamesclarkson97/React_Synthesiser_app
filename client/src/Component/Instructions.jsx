import React from 'react';
import './Instructions.css';

const Instructions = () => {
    
    return(
        <div id="instructions-container">

            <div className="box">
                <a className="instructions-btn" href="#instructions">?</a>
            </div>

            <div id="instructions" className="overlay">
                <a className="close" href="#">&times;</a>
                <h4>Welcome to React Synth.</h4>
                <div className="content">
                    <p>Use the control panel on the left to alter the sound of all synths in the app.</p>
                    <p>Press the virtual keys on screen or use the following keys on your keyboard:</p>
                    <p>A, W, S, E, D, F, T, G, Y, H, U, J and K (in ascending order).</p>
                    <p>You can press 1, 2, 3, 4 and 5 to select octave quickly.</p>
                    <p>Click any box in the Step-Sequencer grid, and press play and watch it loop at a tempo of your choice! You can then save your favourite sequences, and load them in again later!</p>
                    <p>Note: MIDI functionality is currently experiemental, and does result in a crackling sound.</p>
                </div>
            </div>
        </div>
    )
    
}

export default Instructions