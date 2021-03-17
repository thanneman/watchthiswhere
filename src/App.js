import React, { Component } from 'react';
import './App.css';
import Movie from './components/movie';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/footer';
import logo from './images/logo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      search: {
        value: '',
        touched: false,
      },
      error: null,
    };
  }

  // Update search state if input updated
  updateSearch(search) {
    this.setState({ search: { value: search, touched: true } });
  }

  // Handle submit to fetch user search query
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const usersearch = this.state.search.value.trim();
    if (usersearch.length === 0) {
      this.setState({
        error: 'Please enter a movie or show',
        loading: false,
      });
    } else {
      fetch(
        `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${this.state.search.value}&country=us`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-host':
              'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
            'x-rapidapi-key': `${process.env.REACT_APP_API_KEY}`,
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
          if (data.results.length === 0) {
            this.setState({
              error: 'Movie/Show not found. Please try a different search.',
              loading: false,
            });
          } else {
            this.setState({
              movies: data.results,
              error: null, //reset errors
              loading: false,
            });
          }
        })
        .catch((err) => {
          this.setState({
            error: 'Something went wrong. Please try a different search.',
          });
        });
    }
  }

  render() {
    // Map over all the data
    const movies = this.state.movies.map((movie, i) => {
      return <Movie {...movie} key={i} />;
    });
    // Display loader if the request is taking too long
    const { loading } = this.state;
    let errorLoad;
    let loader;
    if (this.state.error) {
      errorLoad = <div className='error'>{this.state.error}</div>;
    } else if (loading === true) {
      loader = <LoadingSpinner />;
    }

    return (
      <main className='App'>
        <header>
          <a href="/">
            <img className='logo' src={logo} alt='WatchThisWhere Logo' />
          </a>
          <h1>WatchThisWhere</h1>
          <p>Find where to stream your favorite movies and shows.</p>
        </header>
        <div className='search'>
          <form className='search-form' onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type='search'
              results='3'
              id='search'
              name='search'
              placeholder='Search Movie/Show'
              onChange={(e) => this.updateSearch(e.target.value)}
            />
            <button type='submit'>Search</button>
          </form>
          {loader}
          {errorLoad}
        </div>
        <section>{movies}</section>
        <Footer />
      </main>
    );
  }
}

export default App;
