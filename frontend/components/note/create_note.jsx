import React from 'React';


class CreateNote extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.createNote(this.state);
  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }


  render(){
    return(
      <div>
        <form>
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
         <input type="submit" value="Save" onSubmit={this.handleSubmit}/>
       </form>

      </div>

    );
  }



}

export default CreateNote;
