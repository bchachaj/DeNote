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
    if(this.state.modalIsOpen){
      let e = document.querySelector('.notebook-modal');
      if(e){
        e.classList.remove('collapsed');
      }
    }

  }

  componentWillUnmount(){
    let modal = document.querySelector('.notebook-modal');
    modal.classList.remove('modal-animation');
  }


  componentWillUpdate(nextProps, nextState){
    if (this.state.modalIsOpen && !nextState.modalIsOpen) {
      this.props.history.push('/');
    }
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    let e = document.querySelector('.notebook-modal');
    // console.log(e.classList);
    e.classList.add('collapsed');
    this.setState({modalIsOpen: false});
  }



  render(){
    return(
      <div>

        <ReactModal
          onClick={this.closeModal}
          animationType={"slide"}
          className="notebook-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Notebook Index"
          closeTimeoutMS={400}
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
