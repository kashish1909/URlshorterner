import React from 'react';

function UrlList({ urls }) {
  return (
    <ul>
      {urls.map((url, index) => (
        <li key={index}>
          <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        </li>
      ))}
    </ul>
  );
}

export default UrlList;