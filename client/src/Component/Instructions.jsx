import React from 'react';
import './Instructions.css';

const Instructions = () => {
    
    return(
        <div id="instructions">
        <h5>Welcome to React Synth.</h5>
        <p>Use the global controls to alter the sound of all synths in the app.</p>
        <p>Press the virtual keys on screen or use the following keys on your keyboard:</p>
        <p>A, W, S, E, D, F, T, G, Y, H, U, J and K (They assend in chromatic order).</p>
        <p>You can use the 1, 2, 3, 4 and 5 to select octave quickly.</p>
        <p>Click any box in the Step-Sequencer grid, and press play and watch it loop at a tempo of your choice! You can then save your favourite sequences, and load them in again later!</p>
        </div>
    )
    
}

export default Instructions