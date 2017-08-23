import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {

    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.form === 'login') {
      return <Link className="switchLink" to="/signup">Create Account</Link>;
    } else {
      return <Link className="switchLink" to="/login">Sign in</Link>;
    }
  }

  renderErrors() {
    if (this.props.errors){
    return (
      <div>
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    </div>
    );
   }
  }

  handleButton(){
    if (this.props.form === 'login') {
      return 'Sign in';
    } else {
      return 'Create Account';
    }
  }

  handleLink(){
    if (this.props.form === 'login') {
      return (
        <div className="sublogin">
          <h4>Don't have an account?</h4>
          {this.navLink()}
        </div>
      );

    } else {
      return (
        <div className="sublogin">
          <h4>Already have an account?</h4>
          {this.navLink()}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="main-container">
      <div className="login-form-container">
        <div className="header branding">
          <span className="logo"></span>
          <h1>{this.handleButton()}</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <label>
              <input type="text"
                placeholder="Username"
                 value={this.state.username}
                  onChange={this.update('username')}
                   className="login-input"/>
            </label>
            <br/>
            <label>
              <input type="password"
                 placeholder="Password"
                 value={this.state.password}
                  onChange={this.update('password')}
                   className="login-input"/>
            </label>
            <br/>
            <input className="auth-button" type="submit" value={this.handleButton()}/>
          </div>
        </form>

      </div>
      {this.handleLink()}
    </div>
    );
  }
}

export default withRouter(SessionForm);
