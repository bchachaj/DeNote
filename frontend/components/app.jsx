import React, {Component} from 'react';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
import {Switch, Redirect, Link, Route} from 'react-router-dom';
import NavBar from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import Note from './note/note';
import NoteShow from './note/note_show';
import Notebook from './notebook/notebook';
import Tag from './tag/tag';

import {Notification} from 'react-notification';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.responsiveAlert = this.responsiveAlert.bind(this);
    this.viewPort = this.viewPort.bind(this);
  }

  componentDidMount() {
    this.viewPort();
    window.addEventListener("resize", this.viewPort);
  }

  viewPort() {
    if (window.visualViewport.width <= 700) {
      this.setState({isActive: true});
    } else {
      this.setState({isActive: false});
    }
  }

  responsiveAlert() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (<div>
      <NavBar/>

      <Notification isActive={this.state.isActive}
                    message="Denote is best suited for a desktop viewport" action="Dismiss"
                    onDismiss={this.responsiveAlert}
                    onClick={() => this.setState({isActive: false})}/>

      <div className="container">

        <Switch>
          <AuthRoute path="/login" component={SessionFormContainer}/>
          <AuthRoute path="/signup" component={SessionFormContainer}/>
          <ProtectedRoute path="/tags" component={Tag}/>
          <ProtectedRoute path="/notes" component={Note}/>
          <ProtectedRoute path="/notebooks" component={Notebook}/>

          <Redirect from="/" to="/notes" push="push"/>
        </Switch>

      </div>
    </div>);
  }
}

export default App;
