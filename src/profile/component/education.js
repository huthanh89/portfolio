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
        <div class="card">
          <div class="card-header">
              <i class="fas fa-graduation-cap fa-fw fa-lg"/>
              <span>
                <b>
                  &nbsp; Education
                </b>
              </span>
          </div>
          <div class="card-body">

            <div class='row'>
              <div class='col-md-12'>
                <div class="card-title">
                    <img class="card-title-logo" src="image/sjsu_logo.png"></img>
                      <h4 class="d-inline">
                        San Jose State University
                      </h4>
                  </div>
              </div>
            </div>

            <h5 class="card-subtitle mb-2 text-muted">Fall 2010 - Fall 2014</h5>
            <p class="card-text">Bachelor of Science in Computer Engineering</p>
            <p class="card-text">
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
