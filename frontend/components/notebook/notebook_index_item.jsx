import React from 'react';
import NotebookShow from './notebook_show';
import { Link, Route } from 'react-router-dom';


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
    </div>
    );
  }
}

export default NotebookIndexItem;
