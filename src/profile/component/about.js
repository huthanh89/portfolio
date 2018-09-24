//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

class Description extends React.Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-header">
            <i class="far fa-user fa-fw fa-lg"/>
              <b>
                &nbsp;About Me
              </b>
            </div>
          <div class="card-body">
            <p class="card-text">
              <b>
                Objective:&nbsp;
              </b>
              <span>
                Looking to be hired as a Full Stack Javascript Engineer.
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

export default Description;

//-----------------------------------------------------------------------------//
