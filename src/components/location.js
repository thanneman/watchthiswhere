import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function Location(props) {
  return (
    <>
      <a
        className='location-btn'
        href={props.url}
        target='_blank'
        rel='noopener noreferrer'>
        {props.display_name}{' '}
        <FontAwesomeIcon icon={faExternalLinkAlt} size='sm' />
      </a>
    </>
  );
}
