//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React    from 'react';
import ReactDOM from 'react-dom';
import Nav      from './nav/layout.js';
import Profile  from './profile/layout.js';
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
      <Profile/>
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
    console.log('main constructor', props);
    this.state = {viewIndex: props.viewIndex};
  }

  componentWillMount() {
    //console.log('will mounting', this.props)
  }

  componentDidMount() {
   // console.log('mounting', this.props)
  }
  
  componentWillReceiveProps(){
  //  console.log('will recieve props', this.props);
  //  this.state.viewIndex = this.props.viewIndex;
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

  buttonClicked() {
    this.state.showHome = !this.state.showHome;
    ReactDOM.render(<Main/>, document.querySelector('#main'));
  }

}

//-----------------------------------------------------------------------------//
// Render
//-----------------------------------------------------------------------------//

ReactDOM.render(<Nav updateView = {updateViewIndex}/>, document.querySelector('#nav'));
ReactDOM.render(<Main viewIndex = {viewIndex}/>, document.querySelector('#main'));

//-----------------------------------------------------------------------------//
