import React, { Component } from 'react';
import axios from 'axios';
import './DailyGif.css';

class DailyGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: ""
    }
  }

  componentDidMount() {
    var keywords = ['kitty', 'food', 'funny'];
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${keywords[Math.floor(Math.random()*keywords.length)]}&api_key=dc6zaTOxFJmzC`)
    .then(response => {
      this.setState({
        gif: response.data.data[Math.floor(Math.random() * 25)].images.fixed_height.url
      })
    });
  }

  render() {
    return (
      <div>
        <img src={this.state.gif} alt="gif-img" className="gif-one"/>
      </div>
    );
  }
}

export default DailyGif;
