import { useState } from 'react';
import './App.scss';

import Router from './Router/Router';
import Modal from './Components/Modal';

function App() {

  const [ isModalActive, setIsModalActive ] = useState(false)

  return (
    <div className="app">
        <Router isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>
        <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>
    </div>
  );
}

export default App;
