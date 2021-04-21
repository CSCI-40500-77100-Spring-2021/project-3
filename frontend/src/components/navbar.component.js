import React, { Component } from 'react';
//import logo from '../logo.png';
//import SexyMenu from '../sexy-menu.png';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (      
           <ul className="top-nav-ul">
               <li className="top-nav-li" ><a className="top-nav-anchor-tag active" href="#">Home</a></li>
               <li className="top-nav-li"><a className="top-nav-anchor-tag">Explore</a></li>
               <li className="top-nav-li"><a className="top-nav-anchor-tag">Notifications</a></li>
               <li className="top-nav-li"><a className="top-nav-anchor-tag">Profile</a></li>
               <li className="top-nav-li"><a className="top-nav-anchor-tag">Settings</a></li>
               <li className="top-nav-li"><a className="top-nav-anchor-tag">Record Track</a></li>
           </ul>   
      
    );
  }
}