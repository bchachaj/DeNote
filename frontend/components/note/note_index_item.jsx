import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as NoteAPI from '../../util/note_util';
import NoteShow from './note_show';

class NoteIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>

        <li className="note-index-item">
          <h3 className="index-title">{this.props.note.title}</h3>
          <div className="note-index-date"></div>
          <p className="note-index-body">{this.props.note.body}</p>
        </li>



   </div>

    );
  }
}

export default NoteIndexItem;
