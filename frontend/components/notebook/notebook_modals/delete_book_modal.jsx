import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';

class DeleteNotebook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  afterOpenModal(){
    // console.log(this.state);
  }

  handleAction(e){
    e.preventDefault();
    this.props.delete(this.props.id).then(() => {
      //need logic to check whether being deleted from note 'main' index or from
      //notebook
      this.props.history.push(`/notebooks`);
    });
  }


  render(){
    return(
      <div>
        <i className="fa fa-trash-o notebook-delete" onClick={this.openModal}></i>
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

export default withRouter(DeleteNotebook);
