import React from 'react';


const Card = ({name, email, id}) => {
	
	return (

		 <div className = " ma2-ns tc bg-white dib br3 ma2 pa3 grow bw3 shadow-5 " > 
     <a className = "card-link no-underline-ns" href = "https://www.zoosk.com/personals/search/0/about/" rel="noreferrer" target="_blank">
          <img alt='robots'  src={`https://joeschmoe.io/api/v1/${id}?size=200x200`} href = "https://www.zoosk.com/personals/search/0/about/" />
          <div>
            <h2> {name} </h2>
            <p> {email} </p>
         
           

            </div>
          </a>
        </div>     

		);
}

export default Card;
