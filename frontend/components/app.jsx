import React from 'react';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { Switch, Redirect, Link, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';

const App = () => {
  return (
    <div>
      <header>
        <GreetingContainer/>
      </header>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  );

};


export default App;
