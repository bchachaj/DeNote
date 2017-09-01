import React from 'react';
import ReactModal from 'react-modal';
import { withRouter } from 'react-router-dom';
import { requestAllTags, createTag } from '../../../actions/tag_actions';
import { connect } from 'react-redux';


class CreateTagModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      name: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.update = this.update.bind(this);
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

  handleAction(e){
    e.preventDefault();
    this.props.createTag({
       name: this.state.name
       }).then(() => {
      this.props.history.push(`/tags`);
    });
  }


  render(){
    return(
      <div>
        <ReactModal
          className="note-modal tag-modal"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Create Tag"
          >

          <div className="modalFigurehead">
            <i className="fa fa-book"></i>
            <h3 className="modal-header">CREATE TAG</h3>
          </div>

          <input type="text"
                autoFocus
                 className="modal-text create-notebook"
                 placeholder="Title your tag"
                 autoFocus
                onChange={this.update("name")}
                 ></input>

          <div className="modal-button-group">
            <button
              className="modal-button cancel"
              onClick={this.closeModal}>
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
    createTag: tag => dispatch(createTag(tag))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateTagModal);
