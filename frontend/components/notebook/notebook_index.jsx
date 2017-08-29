import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NotebookShow from './notebook_show';
import NoteIndexItem from './notebook_index_item';


class NotebookIndex extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllNotebooks();
  }

  render() {
    const { notebooks } = this.props;
    const allNotebooks = notebooks.map((notebook, idx) =>
      <NoteIndexItem key={notebook.id} notebook={notebook}/>
    );

    return(
      <div>
        <ul>{allNotebooks}</ul>
      </div>
    );
  }
}

export default NotebookIndex;
