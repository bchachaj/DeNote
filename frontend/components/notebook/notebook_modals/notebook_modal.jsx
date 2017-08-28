import React from 'react';
import ReactModal from 'react-modal';


class NotebookModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
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
        <i className="fa fa-book" onClick={this.openModal}></i>

        <ReactModal
          className="notebook-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebook Index"
         >

         <div className="notebook-modal-header">
           <h1>Notebook Index Header</h1>
         </div>

         <ul><h1>Notebooks will go here</h1></ul>

       </ReactModal>
      </div>
    );
  }
}

export default NotebookModal;
