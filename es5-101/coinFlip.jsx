
var Coin = React.createClass({
	sides: [
		'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
		'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
	],

	getInitialState: function() {
		var coin = {image: this.sides[0]}
		return coin;
	},

	flipCoin: function(){
		// console.log("Flip Coin!!");
		var randomSide = Math.round(Math.random());
		// console.log(randomSide);
		this.setState({
			image: this.sides[randomSide]
		})		

	},

	render: function(){
		console.log(this.sides);
		return(
			<div>
				<button className="btn" onClick={this.flipCoin}>Flip Coin!</button>
				<img src={this.state.image} />
			</div>
		)
	}
})


var App = React.createClass({
	render: function(){
		return(
			<div>
				<Coin />
				<Coin />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('container')
)