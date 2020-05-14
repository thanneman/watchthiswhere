import React from 'react';

export default function Location(props) {
  return (
    <>
      <a
        className='location-btn'
        href={props.url}
        target='_blank'
        rel='noopener noreferrer'>
        {props.display_name} &#8599;
      </a>
    </>
  );
}
