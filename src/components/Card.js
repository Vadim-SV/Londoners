import React from 'react';


const Card = ({name, email, id}) => {
	
	return (

		 <div className = " ma2-ns tc bg-light-green dib br3 ma2 pa3 grow bw3 shadow-5 "> 

          <img alt='robots'  src={`https://api.adorable.io/avatars/230/${id}?size=200x200`}/>
          <div>
            <h2> {name} </h2>
            <p> {email} </p>
           

            </div>

        </div>     

		);
}

export default Card;
