import React, { PropTypes } from 'react';

const PlayerDetail = ({ props }) => {
  console.log(props);
  if(props){
    return (
      <div>
        <h3>{props.name}</h3>
        <ul>
          <li>
            <span>Score: </span> 
            {props.score }
          </li>
          <li>
            <span>Created: </span> 
            { props.created}
          </li>
          <li>
            <span>Updated: </span> 
            { props.updated }
          </li>        
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};


export default PlayerDetail;
