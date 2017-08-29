import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import NotebookShow from './notebook_show';

class NotebookIndex extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.requestAllNotebooks();
  }

  render() {
    debugger;
    //get notebooks for ul
    const { notebooks } = this.props;
    const allNotebooks = notebooks.map((notebook, idx) =>
      <li key={idx}>{notebook.title}</li>
    );

    return(
      <div>
        <ul>{allNotebooks}</ul>
      </div>
    );
  }
}

export default NotebookIndex;
