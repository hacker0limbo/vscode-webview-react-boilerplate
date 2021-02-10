import React from 'react';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Message } from '../components/Message';
import { ReceivedMessages } from '../components/ReceivedMessages';
import { SendMessage } from '../components/SendMessage';

export type RouteConfigComponentProps = Pick<RouteConfig, 'routes'>;

export type RouteConfig = {
  path: string;
  component: React.ComponentType<RouteConfigComponentProps>;
  exact?: boolean;
  routes?: RouteConfig[];
};

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/message',
    component: Message,
    routes: [
      {
        path: '/message/received',
        component: ReceivedMessages,
      },
      {
        path: '/message/send',
        component: SendMessage,
      },
    ],
  },
];
