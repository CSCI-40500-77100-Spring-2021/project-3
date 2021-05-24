import React, { Component } from 'react';
import account_icon from '../user_account_icon_black.png';
import test_audio from '../test_audio.mp3';


export default class PostMediaBox extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: [] };
    }
    callAPI() {
        fetch("http://localhost:9000/audio/add")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }
    componentDidMount() {
        this.callAPI();
        
    }
      render() {
        
          return (
            <p className="App-intro">{this.state.apiResponse}</p>
          );
    }
      
  
}