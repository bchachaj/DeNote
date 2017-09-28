import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import TagModal from './tag_modals/tags_modal';
import CreateTagModal from './tag_modals/create_tag_modal';
import NoteIndex from './../note/note_index_container';

class Tag extends React.Component {
  render(){
    return(
      <div>
        <Switch>
          <Route path={"/tags/:tag_name/notes"} component={NoteIndex}/>
          <Route exact path={"/tags"} component={TagModal}/>

        </Switch>
        <Route exact path={"/tags/new"} component={CreateTagModal}/>
      </div>


    );
  }
}

export default withRouter(Tag);
