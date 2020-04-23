import React, { Component } from 'react';
//import './App.css';
import Movie from './movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: '',
      error: null,
    };
  }

  setSearch(search) {
    this.setState({
      search,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(
      `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${this.state.search}&country=us`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host':
            'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
          'x-rapidapi-key':
            'f1422cfc79mshe48a33115f2c3f6p1751e8jsn6ed0415dd382',
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.results);
        this.setState({
          movies: data.results,
          error: null, //reset errors
        });
      })
      .catch((err) => {
        this.setState({
          error: 'Sorry, could not get movies at this time.',
        });
      });
  }

  render() {
    // Map over all the movies
    const movies = this.state.movies.map((movie, i) => {
      return <Movie {...movie} key={i} />;
    });

    return (
      <main className='App'>
        <h1>Watch This Where?</h1>
        <div className='search'>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label htmlFor='search'>Search: </label>
            <input
              type='text'
              id='search'
              name='search'
              value={this.state.search}
              onChange={(e) => this.setSearch(e.target.value)}
            />
            <button type='submit'>Search</button>
          </form>
          <div className='App_error'>{this.state.error}</div>
        </div>
        {movies}
      </main>
    );
  }
}

export default App;
