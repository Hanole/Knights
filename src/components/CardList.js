import React from 'react';
import Card from './Card';

const CardList = ({ knights }) => {
	const cardComponent = knights.map((user, i) => {
		return <Card 
			key={i} 
			id={knights[i].id} 
			name={knights[i].name} 
			email={knights[i].email} 
			/>
	})
	return (
		<div>
            {cardComponent}
          </div>
	);
}

export default CardList;