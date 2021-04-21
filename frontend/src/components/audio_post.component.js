import React, { Component } from 'react';
import account_icon from '../user_account_icon_black.png';
import test_audio from '../test_audio.mp3';

import { Link } from 'react-router-dom';

export default class PostMediaBox extends Component {

  render() {
    return ( 
        <div>
            <div className="post-media-container">     
                <img className="post-img-user-profile"  src={account_icon} alt="user account icon" />
                <audio controls>
                
                <source src={test_audio} type="audio/mpeg"/>
                Your browser does not support the audio element.
                </audio>
                <ul className="ul-post-comment-box">
                    <li>like</li>
                    <li>comment</li>
                    <li>follow</li>   
                </ul>

            </div>
            <div className="post-media-container">     
                <img className="post-img-user-profile"  src={account_icon} alt="user account icon" />
                <audio controls>
                
                <source src={test_audio} type="audio/mpeg"/>
                Your browser does not support the audio element.
                </audio>
                <ul className="ul-post-comment-box">
                    <li>like</li>
                    <li>comment</li>
                    <li>follow</li>   
                </ul>

            </div>
            <div className="post-media-container">     
                <img className="post-img-user-profile"  src={account_icon} alt="user account icon" />
                <audio controls>
                
                <source src={test_audio} type="audio/mpeg"/>
                Your browser does not support the audio element.
                </audio>
                <ul className="ul-post-comment-box">
                    <li>like</li>
                    <li>comment</li>
                    <li>follow</li>   
                </ul>

            </div>
        </div>
        
    );
  }
}