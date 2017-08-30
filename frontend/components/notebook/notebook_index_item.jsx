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

    return(
      <div className="notebook-item">

        <Link className="main-link" to={linkPath}>
          <li>{this.props.notebook.title}</li>
        </Link>

        <Link className="delete-link" to={`/notebooks/${this.props.notebook.id}/delete`}>
          <div className="delete-notebook">
            <i className="fa fa-trash-o"></i>
          </div>
        </Link>
    </div>
    );
  }
}

export default NotebookIndexItem;
