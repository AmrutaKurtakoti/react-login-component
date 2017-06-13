import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login';
import LoginSuccess from './components/loginSuccess';

import reducers from './reducers';

let localStorage = global.window.localStorage;

if (localStorage.users === undefined) {
  let users = {
    "amrutha":"amrutha"
  };
  localStorage.users = JSON.stringify(users);
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/success" component={LoginSuccess} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
