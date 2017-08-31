import React from 'react';
import { withRouter,Link } from 'react-router-dom';
// import {Editor, EditorState} from 'draft-js';

class CreateNote extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      book_id: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.switchLinks = this.switchLinks.bind(this);
    this.setNotebook = this.setNotebook.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
  }

  displayDropdown(e){
    e.stopPropagation();
    const css = (this.state.showHideDropdown === 'hidden') ? 'show' : 'hidden';
    this.setState({showHideDropdown: css});
  }

  componentDidMount(){
    this.props.requestAllNotebooks();
  }

  componentWillReceiveProps(nextProps){

    if(this.props.notebookId){
      this.setState({book_id: this.props.notebookId});
    } else {
      this.nextProps.requestAllNotebooks();
      this.setState({
        book_id: this.props.notebooks[0].id
      });
    }
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

  setNotebook(e, data){
    this.setState({
      category: data.title,
      book_id: data.id
    });
  }

  displayDropdown(e){
    e.stopPropagation();
    const css = (this.state.showHideDropdown === 'hidden') ? 'show' : 'hidden';
    this.setState({showHideDropdown: css});
  }

  handleSubmit(e){
    e.preventDefault();
    const nId = this.state.book_id;
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

    // const notebookOptions = this.props.notebooks.map((el) =>
    //   <div key={el.id}
    //        className="notebook-drop-item"
    //        >
    //     <span className="notebook-option"
    //           data-element={el}
    //           onClick={(e) => this.setNotebook(e, el)}
    //            >{el.title}</span>
    //   </div>
    // );


    return(
      <div className="new-note-overlay">

        <div className="note-controls">
          <div className="note-menu">
            <i className="fa fa-book"
               onClick={this.displayDropdown}
               aria-hidden="true"></i>
            <i className="category-label"
               onClick={this.displayDropdown}>{this.state.category} &#9660;</i>
            <ul className={this.state.showHideDropdown + " notebook-dropdown"}>
              <div className="drop-container">

                <div className="notebook-drop-item">
                  <Link to="/notebooks/new">
                    <span className="notebook-option">
                      Create new notebook<strong>+</strong>
                    </span>
                  </Link>
                </div>
                {/* {notebookOptions} */}
              </div>
            </ul>

            <i className="fa fa-tag" aria-hidden="true"></i>
          </div>
        </div>

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
