import React, { Component } from 'react';
import GiphyList from './GiphyList';
import DailyGif from './DailyGif';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <div className="text-center header">
          <h1>GIPHY PARTY</h1>
        <div>
          <DailyGif/>
        </div>
        </div>
        <GiphyList />
      </div>
    );
  }
}

export default App;
