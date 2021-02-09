import * as vscode from 'vscode';

export const getAPIUserGender = () => {
  const gender = vscode.workspace.getConfiguration('webview').get('userApiGender', 'male');
  return gender;
};
