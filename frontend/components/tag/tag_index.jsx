import React from 'react';

import { Link, Route, withRouter } from 'react-router-dom';

import TagIndexItem from './tag_index_item';

class TagIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllTags();
  }

  render() {
    const { tags } = this.props;
    if(!tags) {
      return null;
    }
    return(
      <h1>THis is a tag index</h1>
    );
  }
}

export default TagIndex;
