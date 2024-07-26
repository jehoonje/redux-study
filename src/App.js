import React from 'react';
import ReduxCounter from './redux-practice/components/ReduxCounter';
import Header from './redux-practice/components/Header';
import Auth from './redux-practice/components/Auth';
import UserProfile from './redux-practice/components/UserProfile';
import { useSelector } from 'react-redux';

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
      <ReduxCounter />
    </>
  );
};

export default App;
