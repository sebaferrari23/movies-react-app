import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MoviesContainer from './MoviesContainer'
import MovieDetails from './MovieDetails'
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
    return (
		<Router>
			<Navbar />
			<main className="App">
				<Switch>
					<Route path="/" exact component={MoviesContainer} /> 
					<Route path="/movie/:id" component={MovieDetails} />
				</Switch>
			</main>
			<Footer />
		</Router>
    );
}

export default App;