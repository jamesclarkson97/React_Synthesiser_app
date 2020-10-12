# React Synthesiser

### Summary
This is a synthesiser and step-sequencer web app I have created in collaboration with @stephenh369 (https://github.com/stephenh369) to use as my final project for CodeClan.

### Technologies
#### Front-end
* React
* JavaScript
* Tone.js
* Web MIDI API
* CSS(Vanilla)

#### Back-end
* Express.js
* JavaScript/Node.js
* MongoDB

### How To Run
To run this app on your local machine:
* Clone this repository.
* Have Node.js installed, then navigate to the project folder and run terminal command ```npm i``` or ```npm install``` in both client and server folders to install dependancies.
* In server folder, run command ```npm run server:dev``` in terminal to start the express server. Leave this open in background.
* In client folder run command ```npm start``` in terminal to start the main application. Leave this open in background.
* React should automatically open the app in your browser, if not just type localhost:3000 in your browser. It should now be running!

### Screenshots
#### The App
![The App](/client/src/images/react_synth.png)
The app, in all it's glory.

#### Instructions
![Instructions Button](/client/src/images/react_synth_instructions_btn.png)
![Instructions Overlay](/client/src/images/react_synth_instructions_overlay.png)
This intriguing little question mark takes you to the instructions which appears on an overlay as shown.

#### Virtual Keyboard
![Virtual Keyboard](/client/src/images/react_synth_keys.png)
This is a virtual keyboard that can be played by clicking and holding the notes, or by pressing the key-binds listed in instructions.

#### Sound Controls
![Sound Controls](/client/src/images/react_synth_controls.png)
These controls apply to both the keyboard and the step-sequencer on the right. You can select octaves 1-5 (also key-bound), select a synth preset, waveform (triangle, sine, square and sawtooth) and you can adjust gain and reverb effects.

#### Step Sequencer
![Sequencer](/client/src/images/react_synth_sequencer.png)
This is the step sequencer. You can select which notes you want to loop over and press the 'play' or 'stop' button to control playback. This will then play your chosen selection on notes in time to a set tempo and with the selected synth settings, currently this is strictly 1 repeated measure of 8th notes, however you can also play along! 

#### Tempo Slider
![Tempo Slider](/client/src/images/react_synth_tempo.png)
A tempo slider that controls the sequencer playback tempo. This can be adjusted while the sequencer is on or off and it will dynamically adjust to the new tempo.

#### Saving Sequences
![Save Button](/client/src/images/react_synth_save_sequence.png)
If you want to save a particular sequence, just hit this button and you will find it stored in the adjacent dropdown! This information is stored in a local database on your machine.
