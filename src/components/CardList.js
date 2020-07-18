import React from 'react';
import Card from './Card';


const CardList = ({profiles}) => {
	const cardComponent = profiles.map((user, i) => {
		return <Card 
		key={i} id = {profiles[i].id} name = {profiles[i].name} email = {profiles[i].email}/>
	})

	return (
      <div>    
    {cardComponent}
     </div>     
		);
	}


export default CardList;
