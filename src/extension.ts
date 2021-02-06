import * as vscode from 'vscode';
import { ViewLoader } from './view/ViewLoader';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('webview.open', () => {
    ViewLoader.showWebview(context);
    vscode.window.showInformationMessage('Open Webview');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
