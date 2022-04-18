import { Routes, Route } from 'react-router-dom';

import Messages from '../Screens/Messages';
import PhoneCall from '../Screens/PhoneCall';
import Settings from '../Screens/Settings';
import Layout from '../Components/Layout';
import SignIn from '../Components/SignIn';
import RegisterPage from '../Components/Register';
import PrivateRoute from '../HOC/PrivateRoute';
import PublicRoute from '../HOC/PublicRoute';

import { ROUTES } from './constants'

function Router() {
  return (
    <Routes>
      <Route path="/sign-in" element={<PublicRoute><SignIn /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route index element={<PrivateRoute><Messages /></PrivateRoute>} />
        <Route path={ROUTES.PHONE_CALL} element={<PrivateRoute><PhoneCall /></PrivateRoute>} />
        <Route path={ROUTES.SETTINGS} element={<PrivateRoute><Settings /></PrivateRoute>} />
        <Route path={ROUTES.PAGE_NOT_FOUND} element={<PrivateRoute><h2>Page not found 404 </h2></PrivateRoute>} />
      </Route>
    </Routes >
  )
}

export default Router