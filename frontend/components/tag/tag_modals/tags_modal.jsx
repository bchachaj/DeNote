import React from 'react';
import ReactModal from 'react-modal';
import TagIndex from '../tag_index_container';
import { Link, withRouter } from 'react-router-dom';


class TagModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }

  componentDidMount(){
    if(this.props.location.pathname === '/tags'){
      this.setState({modalIsOpen: true});
    }
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
          contentLabel="Tag Index"
         >

         <div className="notebook-modal-header">
           <h1>Tags</h1>

           <Link to="/tags/new">
              <i className="fa fa-plus"></i>
           </Link>
         </div>

        <div className="wrapper-function" onClick={this.closeModal}>
          <TagIndex/>
        </div>

       </ReactModal>
      </div>
    );
  }
}

export default withRouter(TagModal);
