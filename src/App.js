import React from 'react';
import ReduxCounter from './redux-practice/components/ReduxCounter';
import Header from './redux-practice/components/Header';
import Auth from './redux-practice/components/Auth';
import UserProfile from './redux-practice/components/UserProfile';

const App = () => {

  return (
    <>
      <Header />
      <Auth />
      {/* <UserProfile /> */}
      <ReduxCounter />
    </>
  );
};

export default App;
