import React from 'react';
import { Link, Route } from 'react-router-dom';
import * as NoteAPI from '../../util/note_util';
import NoteShow from './note_show';

class NoteIndexItem extends React.Component {
  constructor(props){
    super(props);
    this.formatDate = this.formatDate.bind(this);
    this.helper = this.helper.bind(this);
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
    // if(check > 1) {
    //   return `${check} months ago`;
    // }
    // check = Math.floor(diff / 604800);
    // if(check > 1) {
    //   return `${check} weeks ago`;
    // }
    // check = Math.floor(diff / 86400);
    // if(check > 1) {
    //   return `${check} days ago`;
    // }
    // check = Math.floor(diff / 3600);

    if(check < 60) {
      return `${check} minutes ago`;
    }
    return 'moments ago';

    // 2419200
    // 604800
    // 86400
    // 3600
    //  if (diff <= 3600){
    //   return 'moments ago';
    // }else if (diff <= 86400 && diff >= 1440) {
    //   let shift = Math.floor(diff % 1440);
    //   return `${this.helper(Math.floor(shift))} minutes ago`;
    // }else if (diff >= 86400 && diff <= 604800) {
    //   let shift = diff % 86400;
    //   return `${Math.floor(shift)} days ago`;
    // }

  }

  render(){
    const date = this.props.note.updated_at;
    return(
      <div>

        <li className="note-index-item">
          <h3 className="index-title">{this.props.note.title}</h3>
          <div className="note-index-date">{/*this.formatDate(date)*/}</div>
          <p className="note-index-body">{this.props.note.body}</p>
        </li>

   </div>

    );
  }
}

export default NoteIndexItem;
