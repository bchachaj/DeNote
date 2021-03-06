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
    this.handleAction = this.handleAction.bind(this);
    this.lastNote = this.lastNote.bind(this);
    this.removeAndShowNext = this.removeAndShowNext.bind(this);
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  handleAction(e){
    e.preventDefault();
    if(this.props.nextProp) {
      this.removeAndShowNext();
    } else {
    this.lastNote();
   }
  }

  removeAndShowNext(){
    const keep = this.props.nextProp.id || '';
    const path = this.props.location.pathname.split('/');
    this.props.delete(this.props.id).then(() => {
      if(path[1] === 'notebooks') {
        //stay in this notebook
        this.props.history.push(`/notebooks/${parseInt(path[2])}/notes/${keep}`);
      } else {
        this.props.history.push(`/notes/${keep}`);
      }
   });
  }

  lastNote(){
    this.props.delete(this.props.id).then(this.props.history.push('/notes'));
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
