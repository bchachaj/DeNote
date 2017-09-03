import React from 'react';
import { Link, Route } from 'react-router-dom';
//import deletetagmodal..


class TagIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    e.stopPropagation();
    this.props.delete(this.props.tag.id);
  }

  render() {
    const { tag } = this.props;


    return(

      <div className="tag-item">
          <li className="tag-list-item">
              <div className="tag-contain">
              <Link to={`tags/${tag.id}/notes`}>
                <p className="tag">{tag.name}</p>
              </Link>
                <span
                  className="remove-tag-button"
                  onClick={this.handleDelete}
                  >x</span>
              </div>
          </li>
      </div>
    );
  }
}

export default TagIndexItem;
