import React, { useState } from 'react';

function ShortenUrlForm({ addUrl }) {
  const [longUrl, setLongUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5500/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      addUrl(result.shortUrl);
      setLongUrl('');
    } catch (error) {
      setError('Failed to shorten URL. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter your URL"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Shortening...' : 'Shorten'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default ShortenUrlForm;
