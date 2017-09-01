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

    if(this.props.tag) {
      return null;
    }

    const allTags = tags.map((tag, idx) =>
      <TagIndexItem className="tag-item" tag={tag} key={tag.id}
        delete={this.props.deleteTag}/>
    );
    return(
      <div>
        <ul className="note-ul">
          {allTags}
        </ul>
      </div>
    );
  }
}

export default TagIndex;
