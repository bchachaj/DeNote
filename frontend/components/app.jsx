import React from 'react';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { Switch, Redirect, Link, Route } from 'react-router-dom';
import Greeting from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import Note from './note/note';
import NoteShow from './note/note_show';
import Notebook from './notebook/notebook';
import Tag from './tag/tag';

const App = () => {
  return (
    <div>
    <Greeting/>

    <div className="container">


      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <ProtectedRoute path="/notes" component={Note}/>
        <ProtectedRoute path="/notebooks" component={Notebook}/>
        <ProtectedRoute path="/tags" component={Tag}/>

        <Redirect from="/" to="/notes" push />
      </Switch>

    </div>
    </div>
  );

};


export default App;
