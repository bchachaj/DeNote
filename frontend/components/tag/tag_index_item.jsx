import React from 'react';
import { Link, Route } from 'react-router-dom';
//import deletetagmodal..


class TagIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.handleAction = this.handleAction.bind(this);
  }
//?÷?

  handleAction(e){

    e.preventDefault();
    this.props.deleteTag(this.props.tag.id).then(() => {
      this.props.history.push(`/tags`);
    });
  }

  render() {
    // const { tags }

    return(
      <div className="tag-item">
        <li className="tag-list-item">
          <p className="tag">{this.props.tag.name}</p>

          <i className="fa fa-trash-o" onClick={this.handleAction}></i>
        </li>
      </div>
    );
  }
}

export default TagIndexItem;
