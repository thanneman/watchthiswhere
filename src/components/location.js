import React from 'react';

export default function Location(props) {
  return (
    <div className='location-card'>
      <div className='location-image'>
        <a href={props.url} target='_blank' rel='noopener noreferrer'>
          <img src={props.icon} alt={props.name} />
        </a>
      </div>
    </div>
  );
}
