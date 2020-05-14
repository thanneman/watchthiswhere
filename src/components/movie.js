import React, { Component } from 'react';
import Location from './location';
import notfound from '../images/notfound.png';

class Movie extends Component {
  addDefaultSrc(ev) {
    ev.target.src = notfound;
  }

  render() {
    // Map over all the data locations (netflix, amazon, etc)
    const locations = this.props.locations.map((location, i) => {
      return <Location {...location} key={i} />;
    });

    // Dynamic background Image
    var imgUrl = this.props.picture;
    var divStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    };

    return (
      <div className='data' onError={this.addDefaultSrc} style={divStyle}>
        <div className='data-header'>
          <h2>{this.props.name}</h2>
          <h3>
            {this.props.external_ids.imdb !== null && (
              <a
                href={this.props.external_ids.imdb.url}
                target='_blank'
                rel='noopener noreferrer'>
                IMDb &#8599;
              </a>
            )}
          </h3>
        </div>
        <div className='data-lower'>
          <h3>Available on:</h3>
          <div className='data-locations'>{locations}</div>
        </div>
      </div>
    );
  }
}

export default Movie;
