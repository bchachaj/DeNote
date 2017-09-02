import React from 'react';

import { Link, Route, withRouter } from 'react-router-dom';

import TagIndexItem from './tag_index_item';

class TagIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleAction = this.handleAction.bind(this);
  }

  componentDidMount(){
    this.props.requestAllTags();
  }

  createTag(tag){
    //check if exists, create, clear input
    // first create tag, on success create taggings
    debugger;
    const { tags } = this.props.tags;
    const _existingTag = tags.find((tagItem) => {
      return tagItem.name === tag.name;
    });

  }

  handleAction(e){
    e.stopPropagation();
    e.preventDefault();
    const tag = e.target.value;

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
        <form className="create-tag-form" onSubmit={this.handleAction}>
          {/* display none on modal */}
          <input type="text"></input>
        </form>
        <ul className="note-ul tag-ul">
          {allTags}
        </ul>
      </div>
    );
  }
}

export default TagIndex;
