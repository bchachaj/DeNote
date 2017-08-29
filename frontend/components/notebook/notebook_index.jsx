import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NotebookShow from './notebook_show';
import NotebookIndexItem from './notebook_index_item';


class NotebookIndex extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllNotebooks();
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if(nextProps.notes && nextProps.notes.length === 0) {
      nextProps.requestAllNotes();
    }
  }

  render() {
    const { notebooks } = this.props;
    const allNotebooks = notebooks.map((notebook, idx) =>
      <NotebookIndexItem key={notebook.id} notebook={notebook}/>
    );

    return(
      <div>
        <ul className="note-ul">{allNotebooks}</ul>
      </div>
    );
  }
}

export default NotebookIndex;
