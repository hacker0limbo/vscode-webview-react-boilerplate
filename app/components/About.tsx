import React, { useState, useCallback, useEffect } from 'react';
import { apiUrl } from '../api';

type UserInfo = {
  name: string;
  gender: string;
  email: string;
};

export const About = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    gender: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const fetchUser = useCallback(() => {
    setLoading(true);
    fetch(apiUrl)
      .then(res => res.json())
      .then(({ results }) => {
        const user = results[0];
        setLoading(false);
        setUserInfo({
          name: `${user.name.first} ${user.name.last}`,
          gender: user.gender,
          email: user.email,
        });
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      <h1>About</h1>
      <h3>User Info</h3>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          <li>Name: {userInfo.name}</li>
          <li>Gender: {userInfo.gender}</li>
          <li>Email: {userInfo.email}</li>
        </ul>
      )}
      <button onClick={fetchUser}>Fetch</button>
    </div>
  );
};
