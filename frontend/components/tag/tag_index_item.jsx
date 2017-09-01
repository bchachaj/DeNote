import React from 'react';

class TagIndexItem extends React.Component {

  constructor(props){
    super(props);
  }



  render() {
    // const { tags }
    return(
      <div className="notebook-item tag-item">
        <li>I'ma index item</li>
      </div>
    );
  }
}

export default TagIndexItem;
