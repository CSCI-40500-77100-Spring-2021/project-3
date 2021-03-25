import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import Post from './post';

class Feed extends React.Component {
    constructor(props)  {
      super(props);
    }

    render () {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'cadetblue'
        }}>
          <div class='feed-postbox'>
            <input class='feed-postbox-textbox'></input>
            <div>
              <button>Record Track</button>
              <button>Upload Track</button>
              <button>Submit</button>
            </div>
          </div>
          <div class='feed'>
            <Post toggleTreeView={this.props.toggleTreeView} toggleAddTrackView={this.props.toggleAddTrackView} />
            <Post toggleTreeView={this.props.toggleTreeView} toggleAddTrackView={this.props.toggleAddTrackView} />
            <Post toggleTreeView={this.props.toggleTreeView} toggleAddTrackView={this.props.toggleAddTrackView} />
            <Post toggleTreeView={this.props.toggleTreeView} toggleAddTrackView={this.props.toggleAddTrackView} />
          </div>
        </View>
      );
    }
  };
  
  export default Feed;