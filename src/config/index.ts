import * as vscode from 'vscode'

export const getAPIUserGender = () => {
  const gender = vscode.workspace.getConfiguration('userAPI').get('gender', 'male');
  return gender
}