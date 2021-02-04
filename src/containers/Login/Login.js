import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DispatchAuthContext } from '../context/auth-context';

const Login = () => {
  const setAuth = useContext(DispatchAuthContext);
  const history = useHistory()
  return (
    <button onClick={() => {
      setAuth(true);
      history.push('/');
    }}>Login</button>
  )
}

export default Login;