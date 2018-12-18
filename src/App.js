import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<div className="image-section">
      		<img className="profile-avatar" src='download.jpeg' />
      	</div>
      	<div className="tweet-body">
      		<h1>This is the body of the tweet</h1>
      	</div>
      </div>
    );
  }
}

export default App;
