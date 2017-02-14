function GetText(){
	var title = "React App loaded!";
	return(
		<h1>{title}</h1>
	)
}

function App(props){
	// console.log("Hello, World");
	// console.log(Math.random());
	console.log(props);
	return(
		<div className="scoreboard">
		{ /*  Wrapper div called scoreboard */ }
			{ /*  Div for header */ }
			<div className="header">
				<h1>National Championship Scoreboard</h1>
			</div>
			{ /* Teams wrapper */ }
			<div className="teams">
				{ /* className is exclusively for styling in react. I.e., you'd never grab an element by class */ }
				<div className="team">
					<div className="team-name">Alabama</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
				<div className="team">
					<div className="team-name">Clemson</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score"> 0 </div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
			</div>
		</div>
	)
}



// ReactDom is included in the window object, by Reactdom
// ReactDOM takes 2 arguments:
// 1. What to render (component)
// 2. Where you want React to render 
ReactDOM.render(
	<App name="Rob" title="Scoreboard" team1="Clemson" Team2="Alabama" />,
	document.getElementById('container')
)