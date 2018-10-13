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
        <h1 className="display-4">Hi, I'm Thanh!</h1>
        <p className="lead">A software engineer with years of experience developing web applications. Looking to be hired as a full stack javascript engineer.</p>
        <hr className="my-4 bg-light"/>
        <p>Feel free to give me a call or send me an email.</p>
        <button type="button" className="btn btn-lg bg-primary btn-outline-light" data-toggle="modal" data-target="#contactModal">
          <i className="fas fa-user"></i>
          <span>
            &nbsp; Let's connect
          </span> 
        </button>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
