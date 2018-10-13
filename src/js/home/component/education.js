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
      <div>
        <div className="card">
          <div className="card-header">
              <i className="fas fa-graduation-cap fa-fw"/>
              <span>
                <b>
                  &nbsp; Education
                </b>
              </span>
          </div>
          <div className="card-body">

            <div className='row'>
              <div className='col-md-12'>
                <div className="card-title">
                    <img className="card-title-logo" src="asset/sjsu_logo.png"></img>
                      <h4 className="d-inline">
                        San Jose State University
                      </h4>
                  </div>
              </div>
            </div>

            <h5 className="card-subtitle mb-2 text-muted">Fall 2010 - Fall 2014</h5>
            <p className="card-text">Bachelor of Science in Computer Engineering</p>
            <p className="card-text">
              <b>
                Relevant Coursework:&nbsp;
              </b>
              <span>
                Database Design, Advance Algorithm Design, Data Structure Design, Object Oriented Programming     
              </span>
            </p>
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
