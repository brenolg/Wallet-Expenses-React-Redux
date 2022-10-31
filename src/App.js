import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/carrteira" component={ Wallet } />
      </Switch>
    </div>
  );
}

export default App;
