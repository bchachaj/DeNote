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
    const current = Date.now();
    let formatDate = Date.parse(`${date}`);
    let diff = (current - formatDate) / 1000;
    console.log(diff);
    // if(diff >= 40320) {
    //   return `${date.toDateString()}`;
    // } else if (diff >= 10080) {
    //   let shift = diff % 10080;
    //     if (shift === 2) {
    //       return 'Last week';
    //     } else {
    //       return `${shift} weeks ago`;
    //     }
    // } else if (diff >= 86400) {
    //   let shift = diff % 86400;
    //   return `${shift} days ago`;
    // } else if (diff <= 86400 && diff >= 1440) {
    //   let shift = diff % 1440;
    //   return `${shift} hours ago`;
    // }
     if (diff <= 3600){
      return 'moments ago';
    }else if (diff <= 86400 && diff >= 1440) {
      let shift = Math.floor(diff % 1440);
      return `${this.helper(shift)} minutes ago`;
    }else if (diff >= 86400 && diff <= 604800) {
      let shift = diff % 86400;
      return `${shift} days ago`;
    }

  }

  render(){
    const date = this.props.note.updated_at;
    return(
      <div>

        <li className="note-index-item">
          <h3 className="index-title">{this.props.note.title}</h3>
          <div className="note-index-date">{this.formatDate(date)}</div>
          <p className="note-index-body">{this.props.note.body}</p>
        </li>



   </div>

    );
  }
}

export default NoteIndexItem;
