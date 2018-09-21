//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React    from 'react';
import ReactDOM from 'react-dom';
import Nav      from './nav/layout.js';
import Profile  from './profile/layout.js';
import Contact  from './contact/layout.js';

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

function ViewManager(props) {
  if(props.home) {
    return (
      <Profile/>
    );
  }else {
    return (
      <Contact/>
    );
  }
}

function renderContent(){
  ReactDOM.render(<Main/>, document.querySelector('#root'));
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showHome: false};
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  
  render() {
    return (
      <div>
        <button onClick={this.buttonClicked}>    
          my button
        </button>
        <ViewManager home={this.state.showHome}/>
      </div>
    );
  }

  buttonClicked() {
    this.state.showHome = !this.state.showHome;
    renderContent();
  }

}

//-----------------------------------------------------------------------------//
// Render
//-----------------------------------------------------------------------------//

ReactDOM.render(<Nav/>, document.querySelector('#nav'));
ReactDOM.render(<Main/>, document.querySelector('#main'));

//-----------------------------------------------------------------------------//
