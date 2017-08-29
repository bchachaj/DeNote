import React from 'react';
import { connect, withRouter } from 'react-redux';
import { requestSingleNotebook } from '../actions/notebook_actions';

class NotebookShow extends React.Component {
  render() {
    return (
      <h1>I'm a notebook</h1>

    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestSingleNotebook: id => dispatch(requestSingleNotebook(id))
  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookShow);
