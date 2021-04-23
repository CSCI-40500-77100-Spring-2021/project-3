import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class  extends Component {

  render() {
    return ( 
        <div id="add-media-container">
            <h2>Add a new audio track</h2>
            <form action="">
                <label for="audio">Choose audio:</label><br/>
                <input type="file" id="audio" name="audio" accept="audio/*,video/*,"/><br/>
                <br/><p>Or Record Track</p><br/>
                <label for="record">Choose audio:</label><br/>
                <input type="file" id="record" name="record" accept="audio/*,video/*,"/><br/>
                <button id="submit-button" name="submit">Add audio</button>
            </form>
        </div>
        
    );
  }
}