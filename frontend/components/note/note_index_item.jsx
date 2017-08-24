import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as NoteAPI from '../../util/note_util';

class NoteIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="note-index-item">
        <h4>Lorem Ipsum</h4>

      </div>
    );
  }
}

export default NoteIndexItem;
