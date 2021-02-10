import React, { useContext } from 'react';
import { MessagesContext } from '../context/MessageContext';

export const RevievedMessages = () => {
  const recievedMessages = useContext(MessagesContext);

  return (
    <div>
      <p>Recieved Messages from Extension:</p>
      <ul>
        {recievedMessages.map((recievedMessage, i) => (
          <li key={i}>{recievedMessage}</li>
        ))}
      </ul>
    </div>
  );
};
