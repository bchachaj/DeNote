import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';
import { requestAllNotebooks, createNotebook } from '../../../actions/notebook_actions';
import { connect } from 'react-redux';


class CreateNotebookModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      title: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.update = this.update.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount(){
    this.setState({modalIsOpen: true});
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }
  update(property){
    return e => this.setState({[property]: e.target.value });
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  handleClose(){
    this.setState({modalIsOpen: false});
    this.props.history.push('/notebooks');
  }

  handleAction(e){
    const notebookId = parseInt(this.props.match.params.notebookId);
    let correctPath;
    e.preventDefault();
    this.props.createNotebook({
       title: this.state.title}).then(() => {
      this.props.history.push(`/notebooks`);
    });
  }


  render(){
    return(
      <div>
        <ReactModal
          className="note-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Create Notebook"
          >

          <div className="modalFigurehead">
            <i className="fa fa-book"></i>
            <h3 className="modal-header">CREATE NOTEBOOK</h3>
          </div>

          <input type="text"
                 className="modal-text create-notebook"
                 placeholder="Title your notebook"
                 autoFocus
                onChange={this.update("title")}
                 ></input>

          <div className="modal-button-group">
            <button
              className="modal-button cancel"
              onClick={this.handleClose}>
              Cancel</button>

            <button
              className="modal-button"
              onClick={this.handleAction}>
              Create</button>
            </div>

        </ReactModal>

      </div>
    );
  }
}




const mapDispatchToProps = dispatch => {
  return {
    createNotebook: notebook => dispatch(createNotebook(notebook))
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(CreateNotebookModal));
