import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
   
    return (

    	<div className = 'pa2'>
    	<input 
        className = 'pa2 ba b--white bg-white'
    	type = "search" 

    	placeholder = "search new friend" 
    	onChange = {searchChange}/>
    	</div>
    	);


}

export default SearchBox;
