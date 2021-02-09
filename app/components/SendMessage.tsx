import React, { useState } from 'react';

export const SendMessage = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    vscode.postMessage(message);
  };

  return (
    <div>
      <h3>Send Message to Extension</h3>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
