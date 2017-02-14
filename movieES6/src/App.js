import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'
import Poster from './Poster'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
        $.getJSON(url, (nowPlayingData) =>{
          this.setState({
            movies: nowPlayingData.results
          })
          console.log(nowPlayingData.results)
        });        
    }

    buildMovies(){
        let tempArray = []
        this.state.movies.map((movie, index)=>{
            tempArray.push(<Poster imagePath={movie.poster_path} movieName={movie.title} />)
        });
        return tempArray;
    }

    render() {
        var moviesArray = this.buildMovies();
        return (
            <div className="App">
                {moviesArray}
            </div>
    );
  }
}

export default App;
