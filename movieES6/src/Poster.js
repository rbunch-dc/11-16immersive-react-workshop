import React, { Component } from 'react';
import Constants from './constants';

class Poster extends Component{ 
	render(){
	    var image = Constants.imageBase + this.props.movie.poster_path;
	    var imageLink = "/movie/"+this.props.imagePath;
	    console.log(imageLink)
	    var movieName = this.props.movieName;
		return(
			<div className="col-sm-6 col-md-3 movie-poster">
				<div>
					<a href={imageLink}><img src={image} /></a>
				</div>
				<h3>{movieName}</h3>
			</div>
		)
	}
}

export default Poster;
