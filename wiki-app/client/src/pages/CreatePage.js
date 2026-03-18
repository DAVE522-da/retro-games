import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const API = 'http://localhost:5000/api';

function CreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/articles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, category })
    })
      .then(r => {
        if (!r.ok) return r.json().then(data => { throw new Error(data.error); });
        return r.json();
      })
      .then(data => navigate(`/article/${data.slug}`))
      .catch(err => setError(err.message));
  };

  return (
    <div className="create-page">
      <h1>Create New Article</h1>
      {error && <div className="error-msg">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Article title"
            required
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            value={category}
            onChange={e => setCategory(e.target.value)}
            placeholder="e.g. Programming Languages, Web Technologies"
          />
        </div>
        <div className="form-group">
          <label>Content (Markdown supported: ## headings, **bold**, `code`, - lists)</label>
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Write your article content here..."
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">Create Article</button>
          <Link to="/" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default CreatePage;
