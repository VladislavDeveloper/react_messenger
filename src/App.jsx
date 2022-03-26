import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Messages from './Screens/Messages';
import PhoneCall from './Screens/PhoneCall';
import Settings from './Screens/Settings';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Messages />} />
            <Route path='/phone-call' element={<PhoneCall />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='*' element={<h2>Page not found 404 (</h2>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
