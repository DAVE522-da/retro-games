import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API = 'http://localhost:5000/api';

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API}/articles`).then(r => r.json()),
      fetch(`${API}/categories`).then(r => r.json())
    ]).then(([arts, cats]) => {
      setArticles(arts);
      setCategories(cats);
      setLoading(false);
    });
  }, []);

  const filterByCategory = (cat) => {
    setActiveCategory(cat);
    setLoading(true);
    const url = cat ? `${API}/articles?category=${encodeURIComponent(cat)}` : `${API}/articles`;
    fetch(url)
      .then(r => r.json())
      .then(arts => {
        setArticles(arts);
        setLoading(false);
      });
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="home-page">
      <div className="welcome-box">
        <h2>Welcome to WikiApp</h2>
        <p>A simple, collaborative encyclopedia that anyone can edit. Browse articles below or create a new one.</p>
        <div className="stats">
          <div><span>{articles.length}</span> articles</div>
          <div><span>{categories.length}</span> categories</div>
        </div>
      </div>

      <h2>Categories</h2>
      <div className="categories">
        <span
          className={`category-tag ${!activeCategory ? 'active' : ''}`}
          onClick={() => filterByCategory(null)}
        >
          All
        </span>
        {categories.map(cat => (
          <span
            key={cat}
            className={`category-tag ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => filterByCategory(cat)}
          >
            {cat}
          </span>
        ))}
      </div>

      <h2>All Articles</h2>
      <ul className="article-list">
        {articles.map(article => (
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
    </div>
  );
}

export default HomePage;
