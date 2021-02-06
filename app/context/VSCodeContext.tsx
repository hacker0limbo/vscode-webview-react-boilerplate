import React from 'react';

export type VSCode = {
  postMessage(message: any): void;
  getState(): any;
  setState(state: any): void;
};

export const VSCodeContext = React.createContext<VSCode | undefined>(undefined);
