import React from 'react';


const Card = ({name, email, id}) => {
	
	return (

		 <div className = " ma2-ns tc bg-white dib br3 ma2 pa3 grow bw3 shadow-5 "> 

          <img alt='robots'  src={`https://joeschmoe.io/api/v1/${id}?size=200x200`}/>
          <div>
            <h2> {name} </h2>
            <p> {email} </p>
           

            </div>

        </div>     

		);
}

export default Card;
