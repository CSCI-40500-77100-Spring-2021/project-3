import React, { Component } from 'react';
//import { AppRegistry, View, Image, StyleSheet } from 'react-native';

export default class Recommendations extends Component {
  render() {
    return (           
      <div id='recommendations-container'>
        <div id='trend-cont'>
            <h1>Trending</h1>
            <p>Justin Bieber</p>
            <p>Beatles</p>
        </div>
        <div id='to-follow-cont'>
            <h1>Who to Follow</h1>
            <p>Lady Gaga</p>
            <p>Tony Bennett</p>
        </div> 
      </div>  
    );  
  }   

}
