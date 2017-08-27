import React from 'react';
import Modal from 'react-modal';

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
        <h1>Note Information</h1>
        <ReactModal>
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
