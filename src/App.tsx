import React, { Component } from 'react';
import Search from './components/Search';
import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

// Define a type for the items fetched from the API
interface Pokemon {
  name: string;
  url: string;
  description: string;
}

class App extends Component<
  object,
  {
    items: Pokemon[];
    loading: boolean;
    error: string;
    throwError: boolean;
  }
> {
  constructor(props: object) {
    super(props);
    this.state = { items: [], loading: false, error: '', throwError: false };
  }

  fetchData = async (searchTerm: string) => {
    this.setState({ loading: true, error: '' });

    try {
      const url = searchTerm
        ? `https://pokeapi.co/api/v2/pokemon?search=${searchTerm}`
        : 'https://pokeapi.co/api/v2/pokemon';

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const formattedItems: Pokemon[] = data.results.map(
        (item: { name: string; url: string }) => ({
          name: item.name,
          url: item.url,
          description: 'No description available',
        })
      );

      this.setState({ items: formattedItems, loading: false });
    } catch (error) {
      console.error('Fetch error:', error);
      this.setState({
        error: 'Failed to fetch data. Please try again.',
        loading: false,
      });
    }
  };

  componentDidMount() {
    const savedSearch = localStorage.getItem('searchTerm') || '';
    this.fetchData(savedSearch);
  }

  handleThrowError = () => {
    this.setState({ throwError: true });
  };

  render() {
    if (this.state.throwError) {
      throw new Error('Manually triggered error!');
    }

    return (
      <ErrorBoundary>
        <div className="container">
          <h1 className="title">Search App</h1>
          <Search onSearch={this.fetchData} />
          {this.state.loading && <p className="loading-text">Loading...</p>}
          {this.state.error && <p className="error-text">{this.state.error}</p>}
          <CardList items={this.state.items} />
          <button className="error-button" onClick={this.handleThrowError}>
            Throw Error
          </button>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
