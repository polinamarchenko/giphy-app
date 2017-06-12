import React, { Component } from 'react';
import axios from 'axios';
import './GiphyForm.css';

class GiphyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }

  handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
  }

  handleRemoveAll() {
    this.props.removeGifs();
  }

  handleSearch(e) {
    e.preventDefault()
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.props.addGif(response)
      })
      this.setState({
        search: ''
      })
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className='form-inline col-sm-offset-3 col-sm-4' onSubmit={this.handleSearch}>
            <input className='form-control' type="text" placeholder="Enter a search term" name="search" value={this.state.search} onChange={this.handleChange}/>
            <input className='btn btn-success' type="submit" name="findGif" value="Search"/>
          </form>
          <button className='btn btn-danger col-sm-1' onClick={this.handleRemoveAll}>Delete all</button>
        </div>
      </div>  
    );
  }
}

export default GiphyForm;
