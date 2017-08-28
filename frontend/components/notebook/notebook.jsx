import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NotebookIndex from './notebook_index_container';
import {connect} from 'react-redux';

class Notebook extends React.Component {
  render() {
    return(
        <div>
          <div className="notebook-container">
            <NotebookIndex/>
          </div>
        </div>
      );
 }
}

export default Notebook;
