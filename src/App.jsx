import React from 'react';

import { useSelector } from 'react-redux';

import SignIn from './components/SignIn';
import Profile from './components/Profile';

import './App.styles.scss';

const App = () => {
  const isSignedIn = useSelector((state) => state.fetchUser.access?.accessToken);

  return isSignedIn ? <Profile /> : <SignIn />;
};

export default App;
