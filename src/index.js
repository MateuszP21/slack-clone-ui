import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ChatContextProvider } from './components/context/chat-context';
import { AuthContextProvider } from './components/context/auth-context';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './containers/PrivateRoute';
import Login from './containers/Login';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider> 
      <ChatContextProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path='/' component={App}/>
            <Route path='/login' component={Login}/>
            <Route path='/404' component={NotFound}/>
            <Redirect from='*' to='/404'/>
          </Switch>
        </BrowserRouter>
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
