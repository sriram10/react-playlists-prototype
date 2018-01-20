import React, { Component } from 'react';
import './App.css';

let appTitleColor = '#fff';
let defaultTextColor = '#f5f5f5';
let defaultStyles = {
  color: defaultTextColor
};

let fakeServerData = {
  user: {
    name: 'Crazy',
    filterString: '',
    playlists: [
      {
        name: 'Tamil',
        songs: [{name: 'Aalaporan Thamizhan', duration: 350}, 
          {name: 'Vilayadu Mangatha', duration: 320}]
      },
      {
        name: 'English',
        songs: [{name: 'Shape of you', duration: 285}, 
          {name: 'Faded', duration: 270}, 
          {name: 'Let it go', duration: 245}]
      },
      {
        name: 'Popular This Week',
        songs: [{name: 'Aalaporan Thamizhan', duration: 350}, 
          {name: 'Shape of you', duration: 285}]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyles, display: 'inline-block', width: '45%', marginRight: '1%'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    
    //total duration in minutes
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0) / 60;
    
    let durationText = 'minutes'; 
    if (totalDuration >= 60) { //check if exceeds/equals 60 minutes
      durationText = 'hours';
      totalDuration = totalDuration / 60;
    }

    return (
      <div style={{...defaultStyles, display: 'inline-block', width: '45%', marginRight: '1%'}}>
        <h2>{totalDuration.toFixed(1)} {durationText}</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyles}>
        <img/>
        <input type="text" onKeyUp={event => this.props.onTextChange(event.target.value)} />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    let playlist = this.props.playlist;
    return (
      <div style={{...defaultStyles, width: '20%', display: 'inline-block'}}>
        <img />
        <h3>{playlist.name}</h3>
        <ul>
          {playlist.songs.map((song, i) => 
            <li key={i}>{song.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      serverData: {},
      filterString: ''
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{color: appTitleColor}}>
              {this.state.serverData.user.name}'s Playlist
            </h1>
            
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HoursCounter playlists={this.state.serverData.user.playlists}/>
            
            <Filter onTextChange={text => this.setState({filterString: text})}/>
            
            {this.state.serverData.user.playlists.filter(playlist =>
              playlist.name.toLowerCase()
                .includes(this.state.filterString.toLowerCase())
            ).map((playlist, i) =>
              <Playlist key={i} playlist={playlist}/>
            )}

          </div> : <h1 style={{color: appTitleColor}}>Getting ready...</h1>
        }
      </div>
    );
  }
}

export default App;
