import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let appTitleColor = '#fff';
let defaultTextColor = '#333';
let defaultStyles = {
  color: defaultTextColor
};

class Aggregate extends Component {
  render() {
    return (
      <div className="component" style={{...defaultStyles, display: 'inline-block', width: '45%', marginRight: '1%'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyles}>
        <img/>
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div className='component' style={{...defaultStyles, width: '20%', display: 'inline-block'}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{color: appTitleColor}}>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
