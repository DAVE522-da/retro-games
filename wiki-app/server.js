const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory article store (seeded with sample articles)
const articles = {
  'javascript': {
    title: 'JavaScript',
    content: `**JavaScript** is a high-level, interpreted programming language that conforms to the ECMAScript specification. It is one of the core technologies of the World Wide Web, alongside HTML and CSS.

## History

JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape. It was originally named Mocha, then LiveScript, before being renamed to JavaScript.

## Features

- **Dynamic typing** — variables are not bound to a data type
- **First-class functions** — functions can be assigned to variables and passed as arguments
- **Prototype-based** — objects can inherit directly from other objects
- **Event-driven** — supports asynchronous programming with callbacks, promises, and async/await

## Usage

JavaScript is used in both client-side and server-side development. On the client side, it runs in web browsers. On the server side, environments like **Node.js** allow JavaScript to be used for backend development.

## See Also

- Node.js
- React
- TypeScript`,
    lastEdited: '2025-12-15T10:30:00Z',
    category: 'Programming Languages'
  },
  'react': {
    title: 'React',
    content: `**React** (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components.

## Overview

React was created by Jordan Walke, a software engineer at Meta (formerly Facebook). It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012. It was open-sourced at JSConf US in May 2013.

## Key Concepts

### Components
React applications are built using **components** — reusable, self-contained pieces of UI. Components can be written as functions or classes.

### JSX
React uses **JSX** (JavaScript XML), a syntax extension that allows writing HTML-like code within JavaScript.

### Virtual DOM
React maintains a lightweight copy of the real DOM called the **Virtual DOM**. When state changes, React calculates the minimal set of changes needed and updates only those parts of the real DOM.

### Hooks
Introduced in React 16.8, **Hooks** allow function components to use state and lifecycle features without writing classes. Common hooks include \`useState\`, \`useEffect\`, and \`useContext\`.

## See Also

- JavaScript
- Node.js
- Vue.js`,
    lastEdited: '2025-11-20T14:00:00Z',
    category: 'Software Libraries'
  },
  'node-js': {
    title: 'Node.js',
    content: `**Node.js** is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.

## History

Node.js was written initially by Ryan Dahl in 2009. The initial release supported only Linux and macOS. Its package manager, **npm**, was introduced in 2010 and became the default package manager bundled with Node.js.

## Architecture

Node.js uses the **V8 JavaScript engine** (the same engine used by Google Chrome) and an **event-driven, non-blocking I/O model** that makes it lightweight and efficient.

### Event Loop
The event loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It offloads operations to the system kernel whenever possible.

## Common Use Cases

- **Web servers** — Express.js, Fastify, Koa
- **API development** — RESTful and GraphQL APIs
- **Real-time applications** — Chat apps, live dashboards
- **Command-line tools** — Build tools, CLI utilities
- **Microservices** — Lightweight, scalable service architecture

## See Also

- JavaScript
- Express.js
- npm`,
    lastEdited: '2025-10-05T09:15:00Z',
    category: 'Runtime Environments'
  },
  'python': {
    title: 'Python',
    content: `**Python** is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.

## History

Python was conceived in the late 1980s by **Guido van Rossum** at Centrum Wiskunde & Informatica (CWI) in the Netherlands. Its implementation began in December 1989. Python 2.0 was released in 2000, and Python 3.0 in 2008.

## Design Philosophy

Python's design follows several key principles, often summarized by "The Zen of Python":

- Beautiful is better than ugly
- Explicit is better than implicit
- Simple is better than complex
- Readability counts

## Features

- **Easy to learn** — clean, readable syntax
- **Interpreted** — no compilation step needed
- **Dynamically typed** — type checking at runtime
- **Extensive standard library** — "batteries included" philosophy
- **Multi-paradigm** — supports procedural, object-oriented, and functional programming

## Popular Frameworks

- **Django** — full-featured web framework
- **Flask** — lightweight web framework
- **FastAPI** — modern API framework
- **NumPy / Pandas** — data science libraries
- **TensorFlow / PyTorch** — machine learning frameworks

## See Also

- JavaScript
- Machine Learning
- Data Science`,
    lastEdited: '2025-09-18T16:45:00Z',
    category: 'Programming Languages'
  },
  'html': {
    title: 'HTML',
    content: `**HTML** (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.

## Overview

HTML describes the structure of a web page semantically. It consists of a series of **elements** which tell the browser how to display the content. Elements are represented by **tags** such as \`<h1>\`, \`<p>\`, \`<img>\`, and \`<a>\`.

## History

HTML was first proposed by **Tim Berners-Lee** in 1991 at CERN. Since then it has gone through many versions:

- **HTML 2.0** (1995) — first standard version
- **HTML 4.01** (1999) — widely adopted standard
- **XHTML** (2000) — stricter XML-based version
- **HTML5** (2014) — current standard with rich multimedia support

## Key Features of HTML5

- **Semantic elements** — \`<header>\`, \`<nav>\`, \`<article>\`, \`<section>\`, \`<footer>\`
- **Canvas** — 2D drawing API via \`<canvas>\` element
- **Audio & Video** — native media playback without plugins
- **Local Storage** — client-side data persistence
- **Geolocation** — access to user's geographic location

## See Also

- CSS
- JavaScript
- Web Development`,
    lastEdited: '2025-08-22T11:00:00Z',
    category: 'Web Technologies'
  },
  'css': {
    title: 'CSS',
    content: `**CSS** (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.

## Overview

CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts. This separation improves content accessibility and provides more flexibility in the specification of presentation characteristics.

## History

CSS was first proposed by **Håkon Wium Lie** on October 10, 1994, while working with Tim Berners-Lee at CERN. The first CSS specification (CSS1) became a W3C Recommendation in December 1996.

## Key Concepts

### Selectors
CSS selectors are used to target HTML elements for styling. Types include element selectors, class selectors, ID selectors, and attribute selectors.

### Box Model
Every HTML element is treated as a box with **content**, **padding**, **border**, and **margin** areas.

### Flexbox & Grid
Modern CSS layout systems:
- **Flexbox** — one-dimensional layout (row or column)
- **CSS Grid** — two-dimensional layout (rows and columns)

### Responsive Design
**Media queries** allow different styles based on device characteristics like screen width, enabling responsive web design.

## See Also

- HTML
- JavaScript
- Web Development`,
    lastEdited: '2025-07-30T13:20:00Z',
    category: 'Web Technologies'
  }
};

// GET all articles (list view)
app.get('/api/articles', (req, res) => {
  const { search, category } = req.query;
  let list = Object.entries(articles).map(([slug, article]) => ({
    slug,
    title: article.title,
    category: article.category,
    lastEdited: article.lastEdited,
    excerpt: article.content.substring(0, 150) + '...'
  }));

  if (search) {
    const q = search.toLowerCase();
    list = list.filter(a =>
      a.title.toLowerCase().includes(q) ||
      articles[a.slug].content.toLowerCase().includes(q)
    );
  }

  if (category) {
    list = list.filter(a => a.category === category);
  }

  res.json(list);
});

// GET all categories
app.get('/api/categories', (req, res) => {
  const categories = [...new Set(Object.values(articles).map(a => a.category))];
  res.json(categories);
});

// GET single article
app.get('/api/articles/:slug', (req, res) => {
  const article = articles[req.params.slug];
  if (!article) {
    return res.status(404).json({ error: 'Article not found' });
  }
  res.json({ slug: req.params.slug, ...article });
});

// POST create article
app.post('/api/articles', (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (articles[slug]) {
    return res.status(409).json({ error: 'An article with this title already exists' });
  }
  articles[slug] = {
    title,
    content,
    category: category || 'Uncategorized',
    lastEdited: new Date().toISOString()
  };
  res.status(201).json({ slug, ...articles[slug] });
});

// PUT update article
app.put('/api/articles/:slug', (req, res) => {
  const { slug } = req.params;
  if (!articles[slug]) {
    return res.status(404).json({ error: 'Article not found' });
  }
  const { title, content, category } = req.body;
  if (title) articles[slug].title = title;
  if (content) articles[slug].content = content;
  if (category) articles[slug].category = category;
  articles[slug].lastEdited = new Date().toISOString();
  res.json({ slug, ...articles[slug] });
});

// DELETE article
app.delete('/api/articles/:slug', (req, res) => {
  const { slug } = req.params;
  if (!articles[slug]) {
    return res.status(404).json({ error: 'Article not found' });
  }
  delete articles[slug];
  res.json({ message: 'Article deleted' });
});

// Serve React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Wiki API server running on http://localhost:${PORT}`);
});
