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
      <div className="jumbotron">
        <h1 className="display-4">Hi there!</h1>
        <p className="lead">I'm a software engineer with years of experience developing web applications. Looking to be hired as a full stack javascript engineer.</p>
        <hr className="my-4 bg-light"/>
        <p>Feel free to give me a call or send me an email.</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button" data-toggle="modal" data-target="#contactModal">
            <i className="fas fa-user"></i>
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
