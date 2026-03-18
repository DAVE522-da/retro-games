import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">W</span>
          <div className="logo-text">
            <h1>WikiApp</h1>
            <span>The Free Encyclopedia</span>
          </div>
        </Link>
        <nav className="header-nav">
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search WikiApp..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <Link to="/" className="nav-link">Main Page</Link>
          <Link to="/create" className="nav-link">Create Article</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
