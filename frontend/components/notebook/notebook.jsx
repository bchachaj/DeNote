import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NotebookIndex from './notebook_index_container';
import {connect} from 'react-redux';
import NotebookShow from './notebook_show';
import CreateNotebook from './create_notebook';

class Notebook extends React.Component {
  render() {
    return(
        <div>
          <div className="notebook-container">
            <NotebookIndex className="noteIndex"/>
            <NotebookShow className="noteShow"/>
          </div>

          <Route path="/notebooks/:noteId" component={NotebookShow}/>
          <Route path="/notebooks" component={NotebookIndex}/>
          <Route exact path={'/notebook/new'} component={CreateNotebook}/>
        </div>
      );
 }
}

export default withRouter(Notebook);
