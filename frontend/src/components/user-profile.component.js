import React, { Component } from 'react';
import account_icon from '../user_account_icon_black.png';

import { Link } from 'react-router-dom';

export default class UserProfile extends Component {

  render() {
    return ( 
        <div id="user-profile-container">     
            <img className="img-user-profile"  src={account_icon} alt="user account icon" />
            <ul className="ul-side-nav">
                <li><a className="side-nav-anchor" href="#">My Audio Tracks</a></li>
                <li><a className="side-nav-anchor" href="#">My Posts</a></li>
                <li><a className="side-nav-anchor" href="#">My Followers</a></li>
                <li><a className="side-nav-anchor" href="#">People I Follow</a></li>
            </ul>  
        </div>
    );
  }
}