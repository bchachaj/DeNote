import React from 'react';
import NotebookShow from './notebook_show';
import { Link, Route } from 'react-router-dom';
import DeleteNotebook from './notebook_modals/delete_book_modal';

class NotebookIndexItem extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="notebook-item">

        <Link to={`/notebooks/${this.props.notebook.id}/notes`}>
          <li>{this.props.notebook.title}</li>
        </Link>

        <i className="fa fa-trash-o book-delete"></i>
    </div>
    );
  }
}

export default NotebookIndexItem;
