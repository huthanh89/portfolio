//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4">Hi there!</h1>
        <p class="lead">I'm a software engineer with 4 years experience with the latest technogies. Looking to be hired as a full stack javascript engineer.</p>
        <hr class="my-4 bg-light"/>
        <p>Feel free to give me a call or send me an email.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button" data-toggle="modal" data-target="#contactModal">
            <i class="fas fa-users fa-fw"></i>
            <span>
              &nbsp; Contact Info
            </span> 
          </a>
        </p>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
