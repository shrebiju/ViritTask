// LinkShortener.js
import React, { useState } from 'react';
import axios from 'axios';

const LinkShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const shortenUrl = async () => {
    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        { long_url: longUrl },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_BITLY_API_KEY`
          }
        }
      );
      setShortUrl(response.data.link);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div>
      <h1>Link Shortener</h1>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter long URL"
      />
      <button onClick={shortenUrl}>Shorten</button>
      {shortUrl && <p>Shortened URL: {shortUrl}</p>}
    </div>
  );
};

export default LinkShortener;
