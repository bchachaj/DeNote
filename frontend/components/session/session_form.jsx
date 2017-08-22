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
    debugger;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.form === 'login') {
      return <Link to="/signup">Sign up instead!</Link>;
    } else {
      return <Link to="/login">Login instead!</Link>;
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Denote
          <br/>
          Please {this.props.form} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <label>
              Username:
              <input type="text"
                 value={this.state.username}
                  onChange={this.update('username')}
                   className="login-input"/>
            </label>
            <br/>
            <label>
              Password:
              <input type="password"
                 value={this.state.password}
                  onChange={this.update('password')}
                   className="login-input"/>
            </label>
            <br/>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
