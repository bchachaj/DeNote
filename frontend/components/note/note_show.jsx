import React from 'react';
import NoteInfo from './note_modals/note_info_modal';
import DeleteNote from './note_modals/delete_modal';
import ReactQuill from 'react-quill';
import { withRouter, Link } from 'react-router-dom';
import TagIndex from '../tag/tag_index_container';

class NoteShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      note: {
        body: null,
        title: null,
        notebook_id: null
      },
      showHideDropdown: 'hidden',
      category: 'Change Notebook',
      book_id: null
    };
    this.onChange = editorState => this.setState({editorState});
    this.update = this.update.bind(this);
    this.setNotebook = this.setNotebook.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.autoSave = this.autoSave.bind(this);
  }

  componentDidMount() {
    if (this.props.match.url === '/notes/new') return null;
    if (this.props.notebook) {
      this.setState({category: this.props.notebook.title});
    }
    this.props.requestSingleNote(this.props.match.params.noteId).then(() => {
      if(this.props.notebooks.length === 0) {
        this.props.requestAllNotebooks();
      }
    });

    setInterval(() => {
      this.autoSave();
    }, 5000);


  }

  componentWillUnmount() {
    if (this.props.match.url !== '/notes/new') {
      this.autoSave();
    }
  }

  autoSave() {
    const currentNote = this.props.note;
    if(!currentNote) return null;
    this.state.note.id = this.props.note.id;
    this.state.note.notebook_id = this.state.book_id;
    if (this.state.note && this.state.note.title === '') {
      this.state.title = currentNote.title;
    }
    //Listen for changes before requesting update
    if (this.state.note.title !== this.state.title || this.state.note.body !== currentNote.body) {
      this.state.note.title = this.state.title;
      this.state.note.notebook_id = this.state.book_id;
      this.props.requestUpdateNote(this.state.note);
    }

  }

  componentWillReceiveProps(nextProps) {
    const testParam = nextProps.match.params.noteId;
    if (nextProps.match.url === "/notes/new") {
      return null;
    }
    if (this.props.match.params.noteId !== nextProps.match.params.noteId && nextProps.match.params.noteId !== 'new') {
      this.props.requestSingleNote(nextProps.match.params.noteId);
    }

    if (nextProps.note) {
      this.setState({note: nextProps.note});
      this.setState({book_id: nextProps.note.notebook_id});
      this.setState({title: nextProps.note.title});
    }
    if (nextProps.notebook) {
      this.setState({category: nextProps.notebook.title});
    }
  }

  displayDropdown(e) {
    e.stopPropagation();
    const css = (this.state.showHideDropdown === 'hidden')
      ? 'show'
      : 'hidden';
    this.setState({showHideDropdown: css});
  }

  update() {
    return e => this.setState({title: e.target.value});
  }

  handleUpdate(value) {

    let noteshow = document.querySelector('.note-show-main');
    const titleText = noteshow.querySelector('.note-title');
    const editor = noteshow.querySelector(".ql-editor");
    let bodyText = editor.innerHTML;
    this.setState({
      note: {
        body: bodyText,
        title: titleText.value
      }
    });

  }


  setNotebook(e, data) {
    e.preventDefault();
    this.setState({category: data.title, book_id: data.id});
  }

  render() {

    let {note, notebooks} = this.props;
    if (!note || this.props.match.url === "/notes/new") {
      return null;
    }
    let nextNote = this.props.notes[0];
    if (nextNote === note) {
      nextNote = this.props.notes[1];
    }

    const notebookOptions = this.props.notebooks.map((el) => <div key={el.id} className="notebook-drop-item">
      <span className="notebook-option"
            data-element={el}
            onClick={(e) => this.setNotebook(e, el)}>{el.title}</span>
    </div>);

    return (
      <div className="note-show-main">
        <div className="note-show-header">
          <div className="top-controls">
            <DeleteNote delete={this.props.deleteNote}
                        id={note.id}
                        nextProp={nextNote}/>
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
               onClick={this.displayDropdown}>{this.state.category}
              &#9660;</i>
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
              <TagIndex noteTags={note.tags}/>
            </div>
          </div>
        </div>

        <div className="note-show note">
          <form>
            <input type="text"
                  className="note-title"
                  onChange={this.update('title')}
                  value={this.state.title}/>

          </form>

          <ReactQuill theme="snow"
                      value={this.state.note.body}
                      onChange={this.handleUpdate}
                      placeholder="Just start typing..."/>
        </div>

        <p id="credit">Built by&nbsp;<a href="http://bchachaj.com">Ben Chachaj</a>
        </p>
      </div>
    );
  }
}

export default withRouter(NoteShow);
