import React, {Component} from 'react';

class MIDIAccess extends Component {

    start = () => {
        return new Promise((resolve, reject) => {
            this._requestAccess().then(access => {
                this.initialise(access);
                resolve();
            }).catch(() => reject('Something went wrong.'));
        });
    }

    _requestAccess = () => {
        return new Promise((resolve, reject) => {
            if (navigator.requestMIDIAccess) {
                navigator.requestMIDIAccess()
                .then(resolve)
                .catch(reject);
            } else {
                reject()
            }
        })
    }

    initialise = (access) => {
        const devices = access.inputs.values();
        for (let device of devices) this.initialiseDevice(device); 
    }

    initialiseDevice = (device) => {
        device.onmidimessage = this.onMessage.bind(this);
    }

    onMessage = (message) => {
        this.props.onDeviceInput(message);
    }


    render() {
        this.start().catch(console.error);
        return(
            <>
            </>
        )
    }
}

export default MIDIAccess;