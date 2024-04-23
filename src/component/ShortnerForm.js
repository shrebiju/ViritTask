import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'react-qr-code';

const ShortenerForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [qrCodeVisible, setQrCodeVisible] = useState(false);

//   const handleShortenUrl = async () => {
//     try {
//       const response = await axios.post('YOUR_SHORTENER_API_ENDPOINT', {
//         long_url: longUrl,
//         // Add any additional parameters required by your chosen API
//       });
//       setShortUrl(response.data.short_url);
//     } catch (error) {
//       console.error('Error shortening URL:', error);
//     }
//   };

  const handleShortenUrl = async () => {
    try {
      const response = await axios.post('https://ad3bb3c1e31fda657d88194760a0bab9d1bd2b46', {
        long_url: longUrl,
        // Add any additional parameters required by your chosen API
      });
      setShortUrl(response.data.short_url);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };
  
  const handleToggleQrCode = () => {
    setQrCodeVisible(!qrCodeVisible);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <input 
        type="text" 
        placeholder="Enter long URL" 
        value={longUrl} 
        onChange={(e) => setLongUrl(e.target.value)} 
      />
      <button onClick={handleShortenUrl}>Shorten</button>
      
      {shortUrl && (
        <div>
          <p>Shortened URL: <a href={shortUrl}>{shortUrl}</a></p>
          <button onClick={handleToggleQrCode}>Toggle QR Code</button>
          {qrCodeVisible && <QRCode value={shortUrl} />}
        </div>
      )}
    </div>
  );
};

export default ShortenerForm;