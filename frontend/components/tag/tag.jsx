import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import TagModal from './tag_modals/tags_modal';
import CreateTagModal from './tag_modals/create_tag_modal';

class Tag extends React.Component {
  render(){
    return(
      <div>
        <Route exact path={"/tags"} component={TagModal}/>
        <Route exact path={"/tags/new"} component={CreateTagModal}/>
      </div>


    );
  }
}

export default withRouter(Tag);
