import React from 'react';

// Simple markdown-to-HTML renderer (handles bold, headings, lists, code, links)
function MarkdownRenderer({ content }) {
  const renderMarkdown = (text) => {
    const lines = text.split('\n');
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Heading h3
      if (line.startsWith('### ')) {
        elements.push(<h3 key={i}>{renderInline(line.slice(4))}</h3>);
        i++;
        continue;
      }

      // Heading h2
      if (line.startsWith('## ')) {
        elements.push(<h2 key={i}>{renderInline(line.slice(3))}</h2>);
        i++;
        continue;
      }

      // Unordered list
      if (line.startsWith('- ')) {
        const items = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          items.push(<li key={i}>{renderInline(lines[i].slice(2))}</li>);
          i++;
        }
        elements.push(<ul key={`ul-${i}`}>{items}</ul>);
        continue;
      }

      // Empty line
      if (line.trim() === '') {
        i++;
        continue;
      }

      // Regular paragraph
      elements.push(<p key={i}>{renderInline(line)}</p>);
      i++;
    }

    return elements;
  };

  const renderInline = (text) => {
    // Process bold (**text**) and inline code (`text`)
    const parts = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Bold
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Code
      const codeMatch = remaining.match(/`(.+?)`/);

      let firstMatch = null;
      let firstIndex = remaining.length;

      if (boldMatch && boldMatch.index < firstIndex) {
        firstMatch = { type: 'bold', match: boldMatch };
        firstIndex = boldMatch.index;
      }
      if (codeMatch && codeMatch.index < firstIndex) {
        firstMatch = { type: 'code', match: codeMatch };
        firstIndex = codeMatch.index;
      }

      if (!firstMatch) {
        parts.push(remaining);
        break;
      }

      // Text before match
      if (firstIndex > 0) {
        parts.push(remaining.slice(0, firstIndex));
      }

      if (firstMatch.type === 'bold') {
        parts.push(<strong key={key++}>{firstMatch.match[1]}</strong>);
        remaining = remaining.slice(firstIndex + firstMatch.match[0].length);
      } else if (firstMatch.type === 'code') {
        parts.push(<code key={key++}>{firstMatch.match[1]}</code>);
        remaining = remaining.slice(firstIndex + firstMatch.match[0].length);
      }
    }

    return parts;
  };

  return <div className="article-body">{renderMarkdown(content)}</div>;
}

export default MarkdownRenderer;
