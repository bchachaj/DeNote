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
    this.props.requestAllTags().then( this.props.requestAllNotes());
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

      this.handleTaggings({tag_name: tagName});
      this.setState({name: ''});
  }

  handleTaggings(tag){
    const noteId = this.props.match.params.noteId;
    const taggingsObject = {tag_name: tag.tag_name, note_id: parseInt(noteId)};
    this.props.createTaggings(taggingsObject)
      .then(() => this.props.requestAllTags()
    )
    .then(() => this.props.requestSingleNote(noteId));
  }

  render() {
    let { tags } = this.props;
    let tagIndexItems;
    if(!this.props.tags) {
      return null;
    }
    let allTags;
    if(this.props.noteTags){
      tags = tags.filter(tag => this.props.noteTags.includes(tag.name));
    }

    allTags = tags.map((tag, idx) =>
      <TagIndexItem className="tag-item" tag={tag} key={tag.id}
        delete={this.props.removeTag}
        createTaggings={this.props.createTaggings}
        notes={this.props.notes}
      />
    );

    return(
      <div className="tag-index-wrapper">
        <form className="create-tag-form" onSubmit={this.handleAction}>
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
