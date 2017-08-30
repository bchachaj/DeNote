import React from 'react';
import ReactModal from 'react-modal';
import NotebookIndex from '../notebook_index_container';
import { Link, withRouter } from 'react-router-dom';

class NotebookModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);


  }

  componentDidMount(){
    if(this.props.location.pathname === '/notebooks'){
      this.setState({modalIsOpen: true});
    }
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
    this.props.history.push('/');
  }




  render(){
    return(
      <div>
        {/* <i className="fa fa-book" onClick={this.openModal}></i> */}

        <ReactModal
          onClick={this.closeModal}
          animationType={"slide"}
          className="notebook-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebook Index"
         >

         <div className="notebook-modal-header">
           <h1>Notebooks</h1>

           <Link to="/notebooks/new">
              <i className="fa fa-plus"></i>
           </Link>
         </div>

        <div className="wrapper-function" onClick={this.closeModal}>
          <NotebookIndex/>
        </div>

       </ReactModal>
      </div>
    );
  }
}

export default withRouter(NotebookModal);
