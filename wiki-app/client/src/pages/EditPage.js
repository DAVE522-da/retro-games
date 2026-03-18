import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const API = 'http://localhost:5000/api';

function EditPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API}/articles/${slug}`)
      .then(r => r.json())
      .then(data => {
        setTitle(data.title);
        setContent(data.content);
        setCategory(data.category);
        setLoading(false);
      })
      .catch(() => {
        setError('Article not found');
        setLoading(false);
      });
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/articles/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, category })
    })
      .then(r => {
        if (!r.ok) throw new Error('Failed to update');
        return r.json();
      })
      .then(() => navigate(`/article/${slug}`))
      .catch(err => setError(err.message));
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="edit-page">
      <h1>Editing: {title}</h1>
      {error && <div className="error-msg">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input value={category} onChange={e => setCategory(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Content (Markdown supported)</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} required />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Save Changes</button>
          <Link to={`/article/${slug}`} className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default EditPage;
