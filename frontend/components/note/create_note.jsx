import React from 'React';


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
    this.state.notebook_id = 1;
    this.state.archived = true;
    this.props.createNote(this.state);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }


  render(){
    return(
      <div>
        <form className="note-show create" onSubmit={this.handleSubmit}>
        <input
           type="text"
           value={this.state.title}
           onChange={this.update('title')}
         />

        <input
           type="text"
           value={this.state.body}
           onChange={this.update('body')}
         />
         <input type="submit" value="Save"/>
       </form>

      </div>

    );
  }
}

export default CreateNote;
