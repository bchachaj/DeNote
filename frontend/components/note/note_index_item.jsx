import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import * as NoteAPI from '../../util/note_util';
import NoteShow from './note_show';
import ReactQuill from 'react-quill';


class NoteIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.handleActive = this.handleActive.bind(this);
  }


  handleActive() {
    const a = this.props.path;
    const b = this.props.link;
    const base = 'note-index-item';
    return a === b ? `${base} activeItem` : base;
  }


  render(){

    const date = this.props.note.updated_at;
    const test = new Date(date);
    // console.info(test);
    return(
      <div>
        <li className={this.handleActive()}>
          <h3 className="index-title">{this.props.note.title}</h3>
          <div className="note-index-date">{date}</div>

          <ReactQuill
            className="note-index-body"
            theme="snow"
            value={this.props.note.body}
           />
        </li>
   </div>

    );
  }
}

export default NoteIndexItem;
