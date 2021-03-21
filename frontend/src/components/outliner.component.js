import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

const Outliner = () => {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'cadetblue'
      }}>
        <div class='outline-container'>
          <div class='outline-logo'><h1>JAM SESSION</h1></div>
          <div class='outline-buttons'>
            <button class='outline-button'>Home</button>
            <button class='outline-button'>Explore</button>
            <button class='outline-button'>Notifications</button>
            <button class='outline-button'>Profile</button>
            <button class='outline-button'>Settings</button>
            <button class='outline-button'>Record Track</button>
          </div>
          <div class='outline-footer' />
        </div>
      </View>
    );
  };
  
  export default Outliner;