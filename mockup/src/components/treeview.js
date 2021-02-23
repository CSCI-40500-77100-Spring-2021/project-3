import React from 'react';

class TreeView extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup-inner'>
            <h1>A tree showing the history of these tracks would go here</h1>
            <p class="popup-p">{this.props.text}</p>
            <button class='popup-close-button' onClick={this.props.toggleTreeView}>X</button>
        </div>
      </div>
    );
  }
}

export default TreeView;