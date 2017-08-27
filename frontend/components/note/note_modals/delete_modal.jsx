import React from 'react';
import Modal from 'react-modal';

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
        <h1>Note Information</h1>
        <ReactModal>
          <div className="modalFigurehead">
            <i className="fa fa-trash"></i>
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
