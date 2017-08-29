import React from 'react';
import { connect, withRouter } from 'react-redux';
import { requestSingleNotebook } from '../../actions/notebook_actions';
import NoteIndexItem from '../note/note_index_item';

class NotebookShow extends React.Component {


  render() {
    let allNotes;
    return (
      <div>
        <section className="note-index">
          <div className="note-index-header">
            <h1 className="note-header">Notes</h1>
            <span className="note-count">
              <h4 className="note-header"> notes</h4>
            </span>
          </div>
          <ul className="note-ul">
            {allNotes}
          </ul>
        </section>
    </div>
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
