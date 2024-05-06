import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MovieDetails from './components/MovieDetails';
import SearchResults from './components/SearchResults';
import './styles.css'; // Import the styles.css file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
