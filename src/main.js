//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React    from 'react';
import ReactDOM from 'react-dom';
import Nav      from './nav/layout.js';
import Home     from './home/layout.js';
import Resume   from './resume/layout.js';
import Contact  from './contact/layout.js';

//-----------------------------------------------------------------------------//

var viewIndex = 0;

function updateViewIndex (index){
  ReactDOM.render(<Main viewIndex={index}/>, document.querySelector('#main'));
}

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

function ViewManager(props) {
  if(props.viewIndex==0) {
    return (
      <Home/>
    );
  }else if (props.viewIndex==1) {
    return (
      <Resume/>
    );
  }
  else{
    return (
      <Contact/>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewIndex: props.viewIndex};
  }

  static getDerivedStateFromProps(props, state){
    state.viewIndex = props.viewIndex;
  }

  render() {
    return (
      <div>
        <ViewManager viewIndex={this.state.viewIndex}/>
      </div>
    );
  }

}

//-----------------------------------------------------------------------------//
// Render
//-----------------------------------------------------------------------------//

ReactDOM.render(<Nav updateView = {updateViewIndex}/>, document.querySelector('#nav'));
ReactDOM.render(<Main viewIndex = {viewIndex}/>, document.querySelector('#main'));

//-----------------------------------------------------------------------------//
