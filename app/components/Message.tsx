import React from 'react';
import { Switch, Link } from 'react-router-dom';
import { RouteWithSubRoutes } from '../routes/RouteWithSubRoutes';
import { RouteConfigComponentProps } from '../routes/config';

export const Message: React.FC<RouteConfigComponentProps> = ({ routes }) => {
  return (
    <div>
      <h1>Message</h1>
      <ul>
        <li>
          <Link to="/message/received">Received Messages</Link>
        </li>
        <li>
          <Link to="/message/send">Send Message</Link>
        </li>
      </ul>

      <Switch>
        {routes!.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
};
