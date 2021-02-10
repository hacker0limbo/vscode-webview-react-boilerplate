import React, { useState } from 'react';
import { CommonMessage } from '../../src/view/messages/messageTypes';

export const SendMessage = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    vscode.postMessage<CommonMessage>({
      type: 'COMMON',
      payload: message,
    });
  };

  return (
    <div>
      <p>Send Message to Extension:</p>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
