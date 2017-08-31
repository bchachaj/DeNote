import React from 'react';
import { withRouter,Link } from 'react-router-dom';
// import {Editor, EditorState} from 'draft-js';

class CreateNote extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.switchLinks = this.switchLinks.bind(this);
  }

  switchLinks(){
    if(this.state.title === '' || this.state.body === ''){
      return (
        <Link to="/notes">
          <input className="note-save cancel" type="submit" value="Cancel"/>
        </Link>
      );
    } else {
      return(
        <input className="note-save" type="submit" value="Done"/>
      );
    }
  }


  handleSubmit(e){
    e.preventDefault();
    const nId = this.props.notebookId;
    this.state.notebook_id = nId;
    this.state.archived = true;
    //if history has notebook id -> add to state and push to that url
    if(this.props.notebookId) {
      this.props.createNote(this.state)
       .then(data => this.props.history.push(`/notebooks/${nId}/notes/${data.id}`));
    } else {
      this.props.createNote(this.state)
        .then(data => this.props.history.push(`/notes/${data.id}`));
    }
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }


  render(){
    return(
      <div className="new-note-overlay">
        <form className="create-note note" onSubmit={this.handleSubmit}>
        <input
           type="text"
           autoFocus
           className="note-title"
           value={this.state.title}
           placeholder="Title your note"
           onChange={this.update('title')}
         />

        <input
           type="textarea"
           rows="80"
           cols="100"
           className="note-body"
           value={this.state.body}
           placeholder="Just start typing..."
           onChange={this.update('body')}
         />


         {this.switchLinks()}
       </form>

      </div>

    );
  }
}

export default withRouter(CreateNote);
