import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';

class DeleteNote extends React.Component {
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
    console.log(this.state);
  }

  handleAction(e){
    e.preventDefault();
    this.props.delete(this.props.id).then(() => {
      this.props.history.push(`/notes/${this.props.nextProp}`);
    });
  }


  render(){
    return(
      <div>
        <i className="fa fa-trash-o" onClick={this.openModal}></i>
        <ReactModal
          className="note-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Delete Note"
          >
          <div className="modalFigurehead">
            <i className="fa fa-trash-o"></i>
            <h3 className="modal-header">DELETE NOTE</h3>
          </div>
          <h1 className="modal-text">Are you sure you want to delete this note?</h1>
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

export default withRouter(DeleteNote);
