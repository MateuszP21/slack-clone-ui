import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useContext(AuthContext);

  return <Route {...rest} render={(props) => (
    isAuth === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
}

export default PrivateRoute;