import { Routes, Route } from 'react-router-dom';

import Messages from '../Screens/Messages';
import PhoneCall from '../Screens/PhoneCall';
import Settings from '../Screens/Settings';
import Layout from '../Components/Layout';

import {ROUTES} from './constants'

function Router({isModalActive, setIsModalActive}){
    return(
        <Routes>
          <Route path={ROUTES.HOME} element={<Layout isModalActive={isModalActive} setIsModalActive={setIsModalActive}/>}>
            <Route index element={<Messages />} />
            <Route path={ROUTES.PHONE_CALL} element={<PhoneCall />} />
            <Route path={ROUTES.SETTINGS} element={<Settings />} />
            <Route path={ROUTES.PAGE_NOT_FOUND} element={<h2>Page not found 404 (</h2>} />
          </Route>
        </Routes>
    )
}

export default Router