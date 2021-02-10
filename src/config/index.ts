import * as vscode from 'vscode';

export const getAPIUserGender = () => {
  const gender = vscode.workspace.getConfiguration('webviewReact').get('userApiGender', 'male');
  return gender;
};
