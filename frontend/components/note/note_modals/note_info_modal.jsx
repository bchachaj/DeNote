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
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <div>
       <i className="fa fa-info" onClick={this.openModal}></i>

        <ReactModal
          className="note-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Note Info"
          >
          <div className="modalFigurehead">
            <i className="fa fa-info"></i>
            <h3 className="modal-header">NOTE INFO</h3>
          </div>
          <h1 className="modal-text">{this.props.note.title}</h1>
          <h6>Overview</h6>
          <br/>
          <p>Created: {this.props.created}</p>
          <p>Updated: {this.props.change}</p>

          <div className="modal-button-group">
          <button
            className="modal-button"
            onClick={this.closeModal}>
            Close</button>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default NoteInfo;
