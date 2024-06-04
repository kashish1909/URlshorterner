import React, { useState } from 'react';
import ShortenUrlForm from './components/ShortenUrlForm';
import UrlList from './components/UrlList';
import './App.css';

function App() {
  const [urls, setUrls] = useState([]);

  const addUrl = (shortUrl) => {
    setUrls([...urls, shortUrl]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>URL Shortener</h1>
      </header>
      <main>
        <ShortenUrlForm addUrl={addUrl} />
        <UrlList urls={urls} />
      </main>
    </div>
  );
}

export default App;
