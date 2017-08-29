import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NotebookIndex from './notebook_index_container';
import {connect} from 'react-redux';
import NotebookShow from './notebook_show';
import CreateNotebook from './create_notebook';
import NotebookModal from './notebook_modals/notebook_modal';

class Notebook extends React.Component {
  render() {
    return(
        <div>
          <div className="notebook-container">
            <NotebookModal className="noteIndex"/>
            <NotebookShow className="noteShow"/>
          </div>

          <Route path="/notebooks/:noteId" component={NotebookShow}/>
          <Route path="/notebooks" component={NotebookModal}/>
          <Route exact path={'/notebook/new'} component={CreateNotebook}/>
        </div>
      );
 }
}

export default withRouter(Notebook);
