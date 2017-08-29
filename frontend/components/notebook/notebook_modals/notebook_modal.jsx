import React from 'react';
import ReactModal from 'react-modal';
import NotebookIndex from '../notebook_index_container';

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

          animationType={"slide"}
          className="notebook-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebook Index"
         >

         <div className="notebook-modal-header">
           <h1>Notebooks</h1>

           <i className="fa fa-plus" onClick={console.log('create here')}></i>
         </div>


        <NotebookIndex/>

       </ReactModal>
      </div>
    );
  }
}

export default NotebookModal;
