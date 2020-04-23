import React from 'react';

export default function Movie(props) {
  return (
    <div className='movie'>
      <h2>{props.title}</h2>
      <div className='book_author'>By: {props.author}</div>
      <div className='book_publisher'>Published by: {props.publisher}</div>
      <div className='book_description'>{props.description}</div>
      <div className='book_detials'>Rank {props.rank} this week</div>
    </div>
  );
}
