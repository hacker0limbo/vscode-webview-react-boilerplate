import React from 'react';
import { RouteConfigComponentProps } from '../routes/config';

export const RevievedMessages: React.FC<RouteConfigComponentProps> = ({ routes }) => {
  return (
    <div>
      <h3>Recieved Messages from Extension</h3>
      <ul></ul>
    </div>
  );
};
