import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class  extends Component {

  render() {
    return ( 
        <div id="add-media-container">
            <h2>Add a new audio track</h2>
            <form action="/action_page.php">
                <label for="audio">Choose audio:</label>
                <input type="file" id="audio" name="audio" accept="audio/*,video/*,"/>
                <label for="record">Choose audio:</label>
                <input type="file" id="record" name="record" accept="audio/*,video/*,"/>
                <button name="submit">Add audio</button>
            </form>
        </div>
        
    );
  }
}