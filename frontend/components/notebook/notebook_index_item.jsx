import React from 'react';
import NotebookShow from './notebook_show';

class NotebookIndexItem extends React.Component {
  constructor(props){
    super(props);
  }




  render() {
    return(
      <div className="notebook-item">
        <li>{this.props.notebook.title}</li>
      </div>
    );
  }
}

export default NotebookIndexItem;
