import React from 'react';
import { useState } from 'react';
import './App.scss';

import Router from './Router/Router';
import Modal from './Components/Modal';


export const MyContext = React.createContext({name: "Vladislav"});
export const MyThemeContext = React.createContext({theme: "dark"});

function App() {

  const [ isModalActive, setIsModalActive ] = useState(false)

  return (
    <div className="app">
        <MyContext.Provider value={{name: "Vladislav"}}>
        <MyThemeContext.Provider value={{theme: "dark"}}>
         <Router isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>
          <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}/> 
          </MyThemeContext.Provider>
        </MyContext.Provider>
        
    </div>
  );
}

export default App;
