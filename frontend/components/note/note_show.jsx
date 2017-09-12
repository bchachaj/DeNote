import React from 'react';
import NoteInfo from './note_modals/note_info_modal';
import DeleteNote from './note_modals/delete_modal';
import ReactQuill from 'react-quill';
import { withRouter, Link } from 'react-router-dom';
import TagIndex from '../tag/tag_index_container';



class NoteShow extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      note: { body: null, title: null },
      showHideDropdown: 'hidden',
      category: 'Notebook',
      book_id: null
    };
    this.onChange = editorState => this.setState({ editorState });
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setNotebook = this.setNotebook.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.autoSave = this.autoSave.bind(this);
  }

  componentDidMount(){
    if(!this.props.requestSingleNote) {
      return null;
    }
    this.props.requestSingleNote(this.props.match.params.noteId).then(() => {
      this.props.requestAllNotebooks();

    });
    setInterval(() => {
      this.autoSave();
    }, 5000);

  }


  componentWillUnmount(){
    this.autoSave();
  }

  autoSave(){
    const currentNote = this.props.note;
    this.state.note.id = this.props.note.id;

    const e = document.querySelector(".ql-editor").innerHTML;
    if(this.state.title === '') {
      this.state.title = currentNote.title;
    }
    //Listen for changes before requesting update
    if(this.state.note.title !== currentNote.title || this.state.note.title !== this.state.title){
      this.state.note.title = this.state.title;
        this.props.requestUpdateNote(this.state.note);
      }

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
     this.setState({title: nextProps.note.title});

    if(this.props.notebook) {
      this.setState({ category: 'test' });
    }
  }

  displayDropdown(e){
    e.stopPropagation();
    const css = (this.state.showHideDropdown === 'hidden') ? 'show' : 'hidden';
    this.setState({showHideDropdown: css});
  }

  update() {
    return e => this.setState({ title: e.target.value } );
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


            <div className="note-show-tags">
              <i className="fa fa-tag" aria-hidden="true"></i>
              <TagIndex/>
            </div>
          </div>
        </div>

        <div className="note-show note">
          <form onSubmit={this.handleSubmit}>
              <input type="text"
                     className="note-title"
                     onChange={this.update('title')}
                     value={this.state.title}/>

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
