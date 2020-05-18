import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className='footer'>
      <p>
        &copy;2020 <FontAwesomeIcon icon={faCode} size='sm' /> by{' '}
        <a
          href='http://thanneman.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Travis Hanneman
        </a>
      </p>
      <p>
        Icon created by{' '}
        <a
          href='https://thenounproject.com/st.uswatun10/'
          target='_blank'
          rel='noopener noreferrer'>
          Aquene Ardeen
        </a>
      </p>
    </footer>
  );
}
