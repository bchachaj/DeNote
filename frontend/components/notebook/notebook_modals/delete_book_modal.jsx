import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';
import { requestAllNotebooks, deleteNotebook } from '../../../actions/notebook_actions';
import { connect } from 'react-redux';


class DeleteNotebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  componentDidMount(){
    this.setState({modalIsOpen: true});
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  handleAction(e){
    const notebookId = parseInt(this.props.match.params.notebookId);

    e.preventDefault();
    this.props.deleteNotebook(notebookId).then(() => {
      this.props.history.push(`/notebooks`);
    });
  }


  render(){
    return(
      <div>

        <ReactModal
          className="note-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Delete Notebook"
          >

          <div className="modalFigurehead">
            <i className="fa fa-trash-o"></i>
            <h3 className="modal-header">DELETE NOTEBOOK</h3>
          </div>

          <h1 className="modal-text">Are you sure you want to delete this notebook?</h1>

          <div className="modal-button-group">
          <button
            className="modal-button cancel"
            onClick={this.closeModal}>
            Cancel</button>

            <button
              className="modal-button"
              onClick={this.handleAction}>
              Delete</button>
            </div>
        </ReactModal>
      </div>
    );
  }
}




const mapDispatchToProps = dispatch => {
  return {
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteNotebook);
