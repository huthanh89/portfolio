//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

class Picture extends React.Component {
  render() {
    return (
      <div id="profile-picture" class="card mx-auto">
        <div class="card-header bg-white">
          <i class="fa fa-map-marker-alt fa-fw"></i>
          <span>
            &nbsp;San Jose, CA
          </span>
        </div>
        <img class="card-img-top" src="image/work.jpg" alt="Card image cap"/>
        <div class="card-body border">
          <h5>Thanh Huynh</h5>
          <h6 class="card-subtitle mb-2 text-muted">Looking to be hired as a FullStack Javascript Engineering.</h6>
          <a href="#" class="btn btn-primary float-right mt-2">Let's Connect</a>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Picture;

//-----------------------------------------------------------------------------//
