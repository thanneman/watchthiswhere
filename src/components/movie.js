import React, { Component } from 'react';
import Location from './location';

class Movie extends Component {
  render() {
    // Map over all the data locations (netflix, amazon, etc)
    const locations = this.props.locations.map((location, i) => {
      return <Location {...location} key={i} />;
    });

    return (
      <div className='data'>
        <div className='data-image'>
          <img src={this.props.picture} alt={this.props.name}></img>
        </div>
        <h2>
          {this.props.name}{' '}
          {this.props.external_ids.imdb !== null && (
            <a
              href={this.props.external_ids.imdb.url}
              target='_blank'
              rel='noopener noreferrer'>
              - IMDb
            </a>
          )}
        </h2>
        <h3>Available on:</h3>
        <div className='data-locations'>{locations}</div>
      </div>
    );
  }
}

export default Movie;