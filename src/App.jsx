import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';

import Router from './Router/Router';

function App() {

  const { darkTheme } = useSelector((state) => state.settingReducer)

  return (
    <div className={darkTheme ? "app_dark" : "app_white"} >
      <Router />
    </div >
  );
}

export default App;
