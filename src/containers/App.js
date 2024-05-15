import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


 function App() {

 	const [knights, setKnights] = useState([])
 	const [searchfield, setSearchfield] = useState('')
 	const [count, setCount] = useState(0)

 	useEffect(()=> {
 		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())	
		.then(users => {setKnights(users)});
		console.log(count)
 	},[count]) // <-- only run if count changes

	const onSearchChange = (event) => {	
		setSearchfield(event.target.value)
	}


	const filteredKnights = knights.filter(knight =>{
		return knight.name.toLowerCase().includes(searchfield.toLowerCase());
	})
	return !knights.length ? 
		<h1>Loading</h1> :
		(
		<div className='tc'>		
			<h1 className='f1'>Knights</h1>
			<button onClick={()=>setCount(count+1)}>Click Me!!</button>
			<SearchBox searchChange={onSearchChange}/>
			<Scroll>
				<ErrorBoundry>
	    			<CardList knights={filteredKnights} />
	    		</ErrorBoundry>
	    	</Scroll>
		</div>
		);
}

export default App;