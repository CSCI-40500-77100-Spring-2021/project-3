import React from 'react';

class AddTrackView extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup-inner'>
            <h1>Record or upload a track</h1>
            <p class="popup-p">{this.props.text}</p>
            <button>Record a Track</button>
            <button>Upload a Track</button>
            <div>
              <button onClick={this.props.toggleAddTrackView}>Submit</button>
              <button onClick={this.props.toggleAddTrackView}>Cancel</button>
            </div>
            <button class='popup-close-button' onClick={this.props.toggleAddTrackView}>X</button>
        </div>
      </div>
    );
  }
}

export default AddTrackView;