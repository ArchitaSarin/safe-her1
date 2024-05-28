import React, { useState, useEffect } from 'react';
import '../Styles/login.css';
import axios from 'axios';
import { useAuth } from '../AuthContext';

export const TestLogin = () => {
  const { user, login, logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (user && user.access_token) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
          login({ ...user, name: res.data.name, email: res.data.email });
        })
        .catch((err) => console.log(err));
    }
  }, [user, login]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setProfile(null);
    window.location.href = 'https://www.google.com/accounts/logout';
    logout();
  };

  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          {/* Display name from user object */}
          <p>Name: {user && user.name}</p>
          <p>Email Address: {user && user.email}</p>
          <br />
          <br />
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <button onClick={login}>Sign in with Google 🚀</button>
      )}
    </div>
  );
};
