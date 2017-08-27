import React from 'React';
import { withRouter } from 'react-router-dom';
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
  }


  handleSubmit(e){
    e.preventDefault();
    this.state.author_id = this.props.currentUser.id;

    //temporary
    this.state.notebook_id = 1;
    this.state.archived = true;
    //end temporary


    this.props.createNote(this.state)
      .then(data => this.props.history.push(`/notes/${data.id}`));

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


         <input className="note-save" type="submit" value="Done"/>
       </form>

      </div>

    );
  }
}

export default withRouter(CreateNote);
