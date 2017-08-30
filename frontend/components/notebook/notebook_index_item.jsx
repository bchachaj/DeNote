import React from 'react';
import NotebookShow from './notebook_show';
import { Link, Route } from 'react-router-dom';
import DeleteNotebook from './notebook_modals/delete_book_modal';

class NotebookIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { notes } = this.props;
    const booknotes = notes.filter((el) =>
      el.notebook_id === this.props.notebook.id
    );
    let e = booknotes[0];
    let linkPath;
    if(e){
      linkPath = `/notebooks/${this.props.notebook.id}/notes/${e.id}`;
    } else {
      linkPath = `/notebooks/${this.props.notebook.id}/notes`;
    }
    debugger;
    return(
      <div className="notebook-item">

        <Link to={linkPath}>
          <li>{this.props.notebook.title}</li>
        </Link>

        {/* <DeleteNotebook delete={this.props.delete} id={this.props.notebook.id}/> */}
    </div>
    );
  }
}

export default NotebookIndexItem;
