import React from 'react';
import ReactModal from 'react-modal';

class DeleteNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
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


  render(){
    return(
      <div>
        <button onClick={this.openModal} className="modal-test">
          <i className="fa fa-trash"></i>
        </button>

        <ReactModal
          className="note-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Delete Note"
          >
          <div className="modalFigurehead">
            <i className="fa fa-trash-o"></i>
          </div>
          <h1 className="modal-header">Are you sure you want to delete this note?</h1>

          <div className="button-group">
          <button
            className="modal-button"
            onClick={this.closeModal}>
            Cancel</button>

            <button
              className="modal-button"
              onClick={console.log('delete')}>
              Delete</button>
            </div>
        </ReactModal>
      </div>
    );
  }
}

export default DeleteNote;
