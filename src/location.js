import React from 'react';

export default function Location(props) {
  return (
    <>
      <div className='location-image'>
        <a href={props.url} target='_blank' rel='noopener noreferrer'>
          <img src={props.icon} alt={props.name}></img>
        </a>
      </div>
      <div className='location-title'>
        <p>{props.display_name}</p>
      </div>
    </>
  );
}
