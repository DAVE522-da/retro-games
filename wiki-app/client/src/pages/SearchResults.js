import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const API = 'http://localhost:5000/api';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      fetch(`${API}/articles?search=${encodeURIComponent(query)}`)
        .then(r => r.json())
        .then(data => {
          setResults(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [query]);

  if (loading) return <div className="loading">Searching...</div>;

  return (
    <div className="search-page">
      <h1>Search results for "{query}"</h1>
      {results.length === 0 ? (
        <div className="no-results">
          <p>No articles matched your search.</p>
          <p>You can <Link to="/create">create a new article</Link> about this topic.</p>
        </div>
      ) : (
        <ul className="article-list">
          {results.map(article => (
            <li key={article.slug}>
              <Link to={`/article/${article.slug}`} className="article-link">
                {article.title}
              </Link>
              <div className="article-meta">
                {article.category} · Last edited: {new Date(article.lastEdited).toLocaleDateString()}
              </div>
              <div className="article-excerpt">{article.excerpt}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
