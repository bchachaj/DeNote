import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateNotebook extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.state.author_id = this.props.currentUser.id;

    this.props.createNotebook(this.state)
    .then(data => this.props.history.push(`notebooks/${data.id}/notes`));
  }

  update(property){
    return e => this.setState({[property]: e.target.value });
  }

  render(){
    return(
      <div className="new-note-overlay">
        <form className="create-note note" onSubmit={this.handleSubmit}>

        <input
           type="textarea"
           autoFocus
           rows="80"
           cols="100"
           className="note-title"
           value={this.state.title}
           placeholder="Title your notebook"
           onChange={this.update('title')}
         />

         <input className="note-save" type="submit" value="Create Notebook"/>
       </form>

      </div>

    );
  }

}


export default withRouter(CreateNotebook);
