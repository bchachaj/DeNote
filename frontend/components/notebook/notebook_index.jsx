import React from 'react';

class NotebookIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  render() {
    //get notebooks for ul
    return(
      <div>
        <h1>Notebooks</h1>
        <ul></ul>
      </div>
    );
  }
}

export default NotebookIndex;
