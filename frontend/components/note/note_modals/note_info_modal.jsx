import React from 'react';
import ReactModal from 'react-modal';

class NoteInfo extends React.Component {
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
        <button onClick={this.openModal}
        className="modal-test">
          <i className="fa fa-info"></i>
       </button>
        <ReactModal
          className="note-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Note Info"
          >
          <div className="modalFigurehead">
            <i className="fa fa-info"></i>
          </div>
          <h1 className="modal-header">NOTE INFO</h1>
          <h6>Overview</h6>
          <p>Created: date</p>
          <p>Updated: date</p>

          <button
            className="modal-button"
            onClick={this.closeModal}>
            Close</button>
        </ReactModal>
      </div>
    );
  }
}

export default NoteInfo;
