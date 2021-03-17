import React from 'react';

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p>
        &copy;2020-{date}{' '}
        <a
          href='http://thanneman.com/'
          target='_blank'
          rel='noopener noreferrer'>
          Travis Hanneman
        </a>
      </p>
      <p>
        Icon by{' '}
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
