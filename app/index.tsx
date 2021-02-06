import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { VSCodeContext, VSCode } from './context/VSCodeContext';
import { ExtensionContext } from './context/ExtensionContext';

declare const vscode: VSCode;
declare const apiUserGender: string;

ReactDOM.render(
  <ExtensionContext.Provider value={apiUserGender}>
    <VSCodeContext.Provider value={vscode}>
      <App />
    </VSCodeContext.Provider>
  </ExtensionContext.Provider>,
  document.getElementById('root')
);
