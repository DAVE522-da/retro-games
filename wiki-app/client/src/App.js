import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import EditPage from './pages/EditPage';
import CreatePage from './pages/CreatePage';
import SearchResults from './pages/SearchResults';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('wiki-dark-mode') === 'true';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('wiki-dark-mode', darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="app">
        <Header darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/edit/:slug" element={<EditPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
