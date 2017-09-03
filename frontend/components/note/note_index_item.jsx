import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as NoteAPI from '../../util/note_util';
import NoteShow from './note_show';
import ReactQuill from 'react-quill';


class NoteIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.formatDate = this.formatDate.bind(this);
    this.helper = this.helper.bind(this);
    // this.state = {
    //   body: '',
    // };
  }


  helper(date) {
    if (date > 60) {
      return ( date % 60 );
    } else if (date >= 1440) {
      return (date % 60);
    }
  }

  formatDate(date){
    const current = new Date();
    // let formatDate = Date.parse(`${date}`);
    let diff = Math.floor((current - Date.parse(date)) / 1000);
    let check = Math.floor(diff % 60);

    if(check < 60) {
      return `${check} minutes ago`;
    }
    return 'moments ago';

  }

  render(){

    const date = this.props.note.updated_at;
    return(
      <div>

        <li className="note-index-item">
          <h3 className="index-title">{this.props.note.title}</h3>
          <div className="note-index-date">{this.formatDate(date)}</div>
          {/* <p className="note-index-body">{this.props.note.body}</p> */}
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
