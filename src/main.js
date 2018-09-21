//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React    from 'react';
import ReactDOM from 'react-dom';
import Profile  from './profile/layout.js';
import Contact  from './profile.1/layout.js';

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

function ViewManager(props) {
  if (props.home) {
    return (
      <Profile/>
    );
  }else{
    return (
      <Contact/>
    );
  }
}

class MainComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showHome: true}
  }

  render() {
    return (
      <ViewManager home={this.state.showHome}/>
    );
  }
}

//-----------------------------------------------------------------------------//
// Render
//-----------------------------------------------------------------------------//

ReactDOM.render(<MainComponent/>, document.querySelector('#root'));

//-----------------------------------------------------------------------------//
