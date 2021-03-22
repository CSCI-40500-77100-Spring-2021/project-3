import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import './App.css';
import Outliner from './components/outliner.component';
import Feed from './components/feed.component';
import Recommendations from './components/recommendations.component';
import TreeView from './components/treeview.component';
import AddTrackView from './components/addtrackview.component';

class App extends Component {

  constructor(props)  {
    super(props);
    this.state = { 
      showTreeView: false,
      showAddTrackView: false
    };
  }
    
  toggleTreeView() {
      this.setState({
          showTreeView: !this.state.showTreeView,
          showAddTrackView: false
      });
  }

  toggleAddTrackView() {
      this.setState({
          showTreeView: false,
          showAddTrackView: !this.showAddTrackView
      });
  }

  render () {
    return (
      <div className="App">
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }} className="page">
            <Outliner></Outliner>

            <Feed 
            toggleTreeView={this.toggleTreeView.bind(this)}
            toggleAddTrackView={this.toggleAddTrackView.bind(this)}
            ></Feed>

            <Recommendations></Recommendations>
            
          </View>
          <View style={{position:'absolute', top:0}}>
            {this.state.showTreeView ?
                <TreeView 
                style={{zIndex:2}}
                toggleTreeView={this.toggleTreeView.bind(this)}
                />
                : null
            }
          </View>
          <View style={{position:'absolute', top:0}}>
            {this.state.showAddTrackView ?
                <AddTrackView 
                style={{zIndex:2}}
                toggleAddTrackView={this.toggleAddTrackView.bind(this)}
                />
                : null
            }
          </View>
      </div>
    );
  }
}

export default App;
