import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import mic_icon from '../mic_black_24dp.png';
import stop_recording_icon from '../stop_button_black.png';

 
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false
    }
  }
 
  startRecording = () => {
    this.setState({ record: true });
  }
 
  stopRecording = () => {
    this.setState({ record: false });
  }
 
  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }
 
  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
  }
 
  render() {
    return (
      <div>
        <ReactMic
          record={this.state.record}
          className="sound-wave-coontainer"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#FF4081" /><br/>
        <button onClick={this.startRecording} type="button"><img className="img-user-profile"  src={mic_icon} alt="microphone icon" /></button>
        <button onClick={this.stopRecording} type="button"><img className="img-user-profile"  src={stop_recording_icon} alt="stop recording icon" /></button>
      </div>
    );
  }
}