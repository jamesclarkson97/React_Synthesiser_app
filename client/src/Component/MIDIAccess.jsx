import React, {Component} from 'react';
import * as Tone from 'tone';

class MIDIAccess extends Component {
    constructor() {
        super();
        // this.ondeviceInput = args.onDeviceInput
        
            // this.props.onDeviceInput appears to be a function from args
    }

    start = () => {
        console.log("start called")
        return new Promise((resolve, reject) => {
            this._requestAccess().then(access => {
                this.initialise(access);
                resolve();
            }).catch(() => reject('Something went wrong.'));
        });
    }

    _requestAccess = () => {
        console.log("_requestAccess called")
        return new Promise((resolve, reject) => {
            if (navigator.requestMIDIAccess) {
                console.log("requestMIDIAccess called")
                navigator.requestMIDIAccess()
                .then(resolve)
                .catch(reject);
            } else {
                console.log("requestMIDIAccess failed?")
                reject()
            }
        })
    }

    initialise = (access) => {
        console.log("initialise called. Here is access:", access)
        const devices = access.inputs.values();
        for (let device of devices) this.initialiseDevice(device); 
    }

    initialiseDevice = (device) => {
        console.log("initialiseDevice called. Here is device:", device)
        device.onmidimessage = this.onMessage.bind(this);
    }

    onMessage = (message) => {
        console.log("onMessage called. Here is message:", message)
        let [_, input, value] = message.data;
        // originally this.onDeviceInput, but will make it state because I have a hunch
        this.props.onDeviceInput({input, value})
    }

    // componentDidMount() {
        
    // }

    render() {
        this.start().then(() => {
            console.log('STARTED!');
        }).catch(console.error);
        return(
            <>
            </>
        )
    }
}

export default MIDIAccess;