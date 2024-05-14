import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			knights: [],
			searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())	
		.then(users => this.setState({ knights: users }));
	}

	onSearchChange = (event) => {	
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { knights, searchfield } = this.state;
		const filteredKnights = knights.filter(knight =>{
			return knight.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return !knights.length ? 
			<h1>Loading</h1> :
			(
			<div className='tc'>		
				<h1 className='f1'>Knights</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
		    			<CardList knights={filteredKnights} />
		    		</ErrorBoundry>
		    	</Scroll>
			</div>
			);
		}
	}

export default App;