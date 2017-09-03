import React from 'react';
import NoteInfo from './note_modals/note_info_modal';
import DeleteNote from './note_modals/delete_modal';
import ReactQuill from 'react-quill';
import { withRouter, Link } from 'react-router-dom';

class NoteShow extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      note: { body: null, title: null },
      showHideDropdown: 'hidden',
      category: 'Notebook',
      book_id: 1
    };
    this.onChange = editorState => this.setState({ editorState });
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setNotebook = this.setNotebook.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount(){
    this.props.requestSingleNote(this.props.match.params.noteId).then(() => {
      this.props.requestAllNotebooks();

    });
  }

  componentWillReceiveProps(nextProps) {
    const testParam = nextProps.match.params.noteId;
    if(this.props.match.params.noteId !== nextProps.match.params.noteId) {
      this.props.requestSingleNote(nextProps.match.params.noteId).then(() =>
     //arg passed is action

      //return value is action itself
      this.props.requestAllNotebooks()
      // this.setState({ category: nextProps.notebook.title })
    );
    }

    this.setState({note: nextProps.note});
    if(this.props.notebook) {
      this.setState({ category: this.props.notebook.title });
    }
  }

  displayDropdown(e){
    e.stopPropagation();
    const css = (this.state.showHideDropdown === 'hidden') ? 'show' : 'hidden';
    this.setState({showHideDropdown: css});
  }

  update(property) {

    return e => this.setState({ note: { [property]: e.target.value } });
  }

  handleUpdate(value) {
    const e = document.querySelector(".ql-editor").innerHTML;
    this.setState({ note: {
      body: e
    }});


  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.note.id = this.props.note.id;
    this.props.requestUpdateNote({
      title: this.state.note.title,
      body: this.state.note.body,
      id: this.state.note.id,
      notebook_id: this.state.book_id

    });
  }

  setNotebook(e, data){
    this.setState({
      category: data.title,
      book_id: data.id
    });
  }

  setTag(){
    //tbd
  }


    render(){

      let { note, notebooks } = this.props;
      if (!note) {
        return null;
      }
      let nextNote = this.props.notes[0];
      if (nextNote === note) {
        nextNote = this.props.notes[1];
      }


      const notebookOptions = this.props.notebooks.map((el) =>
        <div key={el.id}
             className="notebook-drop-item"
             >
          <span className="notebook-option"
                data-element={el}
                onClick={(e) => this.setNotebook(e, el)}
                 >{el.title}</span>
        </div>
      );



      return (
        <div className="note-show-main">
        <div className="note-show-header">
          <div className="top-controls">
            <DeleteNote delete={this.props.deleteNote}
              id={note.id} nextProp={nextNote}
            />
            <NoteInfo note={note}
                      change={note.updated_at}
                      created={note.created_at}/>
          </div>
        </div>

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
                {notebookOptions}
              </div>
            </ul>

            <i className="fa fa-tag" aria-hidden="true"></i>
          </div>
        </div>

        <div className="note-show note">
          <form onSubmit={this.handleSubmit}>
              <input type="text"
                     className="note-title"
                     onChange={this.update('title')}
                     value={this.state.note.title}/>




              <input className="temp-note-save" type="submit"
                     value="Save"
                     />

          </form>



          <ReactQuill
            theme="snow"
            value={this.state.note.body}
            onChange={this.handleUpdate}
            placeholder="Just start typing..."
           />
        </div>
      </div>
      );
    }
  }


export default withRouter(NoteShow);
