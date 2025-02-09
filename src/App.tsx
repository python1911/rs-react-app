import React, { useState, useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Search from './components/Search';
import CardList from './components/CardList';
import ErrorBoundary from './components/ErrorBoundary';
import DetailView from './components/DetailView';
import Pagination from './components/Pagination';
import './App.css';

const App: React.FC = () => {
  const [items, setItems] = useState<{ name: string; description: string }[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get('query') || '';

  useEffect(() => {
    fetchData(searchTerm);
  }, [searchTerm]);

  const fetchData = async (term: string) => {
    setLoading(true);
    setError('');

    try {
      const url = term
        ? `https://pokeapi.co/api/v2/pokemon?search=${term}`
        : 'https://pokeapi.co/api/v2/pokemon';
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setItems(
        data.results.map((item: { name: string }) => ({
          name: item.name,
          description: 'No description available',
        }))
      );
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <div className="container">
        <h1>Search App</h1>
        <Search onSearch={(term) => setSearchParams({ query: term })} />

        {loading && <p className="loading-text">Loading...</p>}
        {error && <p className="error-text">{error}</p>}

        <Routes>
          <Route path="/" element={<CardList items={items} />} />
          <Route path="/details/:id" element={<DetailView />} />
        </Routes>

        <Pagination />
      </div>
    </ErrorBoundary>
  );
};

export default App;
