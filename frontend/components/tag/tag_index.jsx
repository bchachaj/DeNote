import React from 'react';

import { Link, Route, withRouter } from 'react-router-dom';

import TagIndexItem from './tag_index_item';

class TagIndex extends React.Component {
  constructor(props){
    super(props);
    this.handleAction = this.handleAction.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleTaggings = this.handleTaggings.bind(this);
    this.state = {
      name: ''
    };
  }

  componentWillMount(){
    this.props.requestAllTags();
  }

  componentWillReceiveProps(nextProps){
    if(!this.props.tags){
      this.nextProps.requestAllTags();
    }
  }

  updateState(property){
    return e => this.setState({[property]: e.target.value});
  }

  handleAction(e){
    e.preventDefault();
    const tagName = this.state.name;
    const { tags } = this.props;
    const _existingTag = tags.find((tagItem) => {
      return tagItem.name === tagName;
    });
    if(_existingTag) {
      this.setState({name: ''});
    } else {
      this.props.createTag({
        name: tagName
      }).then((newTag) => {
        this.handleTaggings(newTag);

      });
      this.setState({name: ''});
    }

  }

  handleTaggings(tag){
    //checking this.props.match.(path/params) involves note id
    //will only
    const noteId = this.props.match.params.noteId;
    const taggingsObject = {tag_id: tag.id, note_id: parseInt(noteId)};

    this.props.createTaggings(taggingsObject).then((data) => console.log(data));
  }




  render() {
    const { tags } = this.props;

    if(!this.props.tags) {
      return null;
    }

    const allTags = tags.map((tag, idx) =>
      <TagIndexItem className="tag-item" tag={tag} key={tag.id}
        delete={this.props.removeTag}
        createTaggings={this.props.createTaggings}
      />
    );

    return(
      <div className="tag-index-wrapper">
        <form className="create-tag-form" onSubmit={this.handleAction}>
          {/* display none on modal */}
          <input type="text" className="tag-item" placeholder="New Tag..."
          value={this.state.name}
          onChange={this.updateState('name')}
            ></input>
        </form>
        <ul className="note-ul tag-ul">
          {allTags}
        </ul>
      </div>
    );
  }
}

export default withRouter(TagIndex);
