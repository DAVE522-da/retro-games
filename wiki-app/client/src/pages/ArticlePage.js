import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';

const API = 'http://localhost:5000/api';

function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/articles/${slug}`)
      .then(r => {
        if (!r.ok) throw new Error('Not found');
        return r.json();
      })
      .then(data => {
        setArticle(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${article.title}"?`)) {
      fetch(`${API}/articles/${slug}`, { method: 'DELETE' })
        .then(() => navigate('/'));
    }
  };

  if (loading) return <div className="loading">Loading article...</div>;

  if (notFound) {
    return (
      <div className="not-found">
        <h1>Article not found</h1>
        <p>The article you're looking for doesn't exist yet.</p>
        <Link to="/create">Create it?</Link> · <Link to="/">Return to main page</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-header">
        <h1>{article.title}</h1>
        <div className="article-actions">
          <Link to={`/edit/${slug}`}>Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <div className="article-info">
        Category: <strong>{article.category}</strong> · Last edited: {new Date(article.lastEdited).toLocaleDateString()}
      </div>
      <MarkdownRenderer content={article.content} />
    </div>
  );
}

export default ArticlePage;
