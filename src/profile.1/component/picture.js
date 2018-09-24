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
        
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="image/profile1.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/profile2.jpg" alt="Second slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="image/profile3.jpg" alt="Third slide"/>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        
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
