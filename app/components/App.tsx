import React, { useEffect, useState, useCallback } from 'react';
import { MemoryRouter as Router, Link, Switch } from 'react-router-dom';
import { routes } from '../routes/config';
import { RouteWithSubRoutes } from '../routes/RouteWithSubRoutes';
import { MessagesContext } from '../context/MessageContext';

export const App = () => {
  const [messagesFromExtension, setMessagesFromExtension] = useState<string[]>([]);

  const handleMessagesFromExtension = useCallback(
    (event: MessageEvent<any>) => {
      const messages: string = event.data;
      setMessagesFromExtension([...messagesFromExtension, messages]);
    },
    [messagesFromExtension]
  );

  useEffect(() => {
    window.addEventListener('message', event => {
      handleMessagesFromExtension(event);
    });

    return () => {
      window.removeEventListener('message', handleMessagesFromExtension);
    };
  }, [handleMessagesFromExtension]);

  return (
    <Router
      initialEntries={['/', '/about', '/message', '/message/recieved', 'message/send']}
      initialIndex={0}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/message">Message</Link>
        </li>
      </ul>

      <MessagesContext.Provider value={messagesFromExtension}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </MessagesContext.Provider>
    </Router>
  );
};
