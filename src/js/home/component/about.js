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
        <div className="row">
          <div className="col-lg-12">

            <h1 className="display-5">Hi, I'm Thanh!</h1>
            <p className="lead">A software engineer with years of experience developing web applications. Looking to be hired as a full stack javascript engineer.</p>
            <hr className="my-4 bg-light"/>

            <div className="row">
              <div className="col-lg-6">
                <p>Feel free to give me a call or send me an email.</p>
              </div>
              
              <div className="col-lg-6">
                <button type="button" className="float-right btn btn-lg btn-primary border-light" data-toggle="modal" data-target="#contactModal">
                  <i className="fas fa-user mr-2"></i>
                  <span>
                    Let's connect
                  </span> 
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
