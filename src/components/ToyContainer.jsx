import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map((toy) => <ToyCard toy={toy} key={toy.id} delete={props.delete} handleLikeClick={props.handleLikeClick}/>)}
    </div>
  );
}

export default ToyContainer;
