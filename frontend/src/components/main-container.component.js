import React, { Component } from 'react';
import UserProfile from "./user-profile.component";
import PostMediaBox from "./audio_post.component";
import Recommendations from "./recommendations.component";

//import logo from '../logo.png';
//import SexyMenu from '../sexy-menu.png';

export default class MainContainer extends Component {

  render() {
    return (      
        <div id="main-container">
            <div id="search-bar">
              <form action="">
                
                <input id="search-input" type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div id="main-area-container">
                <div>
                    <UserProfile/>
                </div>
                <div>
                    <PostMediaBox/>
                </div>
            </div>            
            <div id="recommendations-section-container">
                <Recommendations/>
            </div>  
        </div>   
      
    );
  };
}