import React from 'react';
import ReactPlayer from "react-player";
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

class Post extends React.Component {

    constructor(props)  {
      super(props);
    }

    render() {
      return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'white',
        }}>

          <div class='post'>

              <div class='post-header'>
                  <img class='post-op-avi' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-resources.ableton.com%2Floop.uploads%2Ffiler_public_thumbnails%2Ffiler_public%2F4b%2F13%2F4b132ba1-36be-4579-b90b-67c5c39ee154%2Floop-artist-imag_1.jpg__600x600_q85_crop_subsampling-2_upscale.jpg&f=1&nofb=1'></img>
                  <h2 class='post-op-username'>Username</h2>
              </div>

              <div class='post-content'>
                  <p class='post-content-text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus magna, accumsan non dolor et, accumsan blandit sapien. 
                  </p>
                  <ReactPlayer
                      url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
                      width="100%"
                      height="50px"
                      playing={false}
                      controls={true}
                  />
              </div>

              <div class='post-footer'>

                <button>Like</button>
                <button>Share</button>
                <button onClick={this.props.toggleTreeView}>View Tree</button>
                <button onClick={this.props.toggleAddTrackView}>Add Track</button>

              </div>

          </div>

        </View>
      );
    }
  };
  
  export default Post;