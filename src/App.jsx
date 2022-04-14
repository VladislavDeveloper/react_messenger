import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';

import Router from './Router/Router';
import Modal from './Components/Modal';



function App() {

  const { darkTheme } = useSelector((state) => state.settingReducer)

  console.log(darkTheme);

  return (
    <div className={darkTheme ? "app_white" : "app_dark"} >
      <Router />
    </div >
  );
}

export default App;
