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
            <h5 class="card-title">
              <span>
                San Jose State University
              </span>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">Fall 2010 - Fall 2014</h6>
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
