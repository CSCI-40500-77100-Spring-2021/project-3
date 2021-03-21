import React from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';

const Recommendations = () => {
    return (
      // Try setting `justifyContent` to `center`.
      // Try setting `flexDirection` to `row`.
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'cadetblue'
      }}>
          <div class='recs-container'>

            <div class='recs-trending'>
                <h1>Trending</h1>

            </div>

            <div class='recs-follow'>
                <h1>Who to Follow</h1>

            </div> 

          </div>

      </View>
    );
  };
  
  export default Recommendations;