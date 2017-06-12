import React, { Component } from 'react';
import GiphyForm from './GiphyForm';
import './GiphyList.css';

class GiphyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
    this.handleAddGif = this.handleAddGif.bind(this);
    this.clearGifs = this.clearGifs.bind(this);
  }

  handleAddGif(response){
    this.setState({
      gifs: this.state.gifs.concat(response.data.data[Math.floor(Math.random() * 25)].images.fixed_height.url)
    })
  }

  clearGifs(response){
    this.setState({
      gifs: []
    })
  }

  render() {
    var gifs = this.state.gifs.map((gif, ind) => {
      return <li key={ind} className="gif-item">
        <img src={gif} alt="gif-img"/>
      </li>
    })

    return (
      <div className="text-center">
        <GiphyForm addGif={this.handleAddGif} removeGifs={this.clearGifs}/>
        <div className="row">
          <ul className='gif-list'>
            {gifs}
          </ul>
        </div>


      </div>
    );
  }
}

export default GiphyList;
