import React from 'react';
import AuthPage from './Component/Pages/AuthPage';
import MainDrawer from './Component/drawer/Drawer';
import { useState } from 'react';

function App() {
  const [isAuth, setAuth] = useState(false)
  const fakeAuth = () => {
    setAuth(true)
  }

  return (
    <div>
     {
       isAuth? <MainDrawer/> :  <AuthPage fakeAuth={fakeAuth}></AuthPage>
     }
       
    </div>
  );
}

export default App;
