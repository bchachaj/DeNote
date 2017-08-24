import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as NoteAPI from '../../util/note_util';

class NoteIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li className="note-index-item">
        <h3 className="index-title">{this.props.note.title}</h3>
        <div className="note-index-date"></div>
      <p className="note-index-body">{this.props.note.body}</p>
      </li>
    );
  }
}

export default NoteIndexItem;
