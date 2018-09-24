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
            <i class="fas fa-toolbox"></i>
              <b>
                &nbsp;Work Experiences
              </b>
          </div>
          <div class="card-body">
            <div class='row'>
              <div class='col-md-12'>
                <h5 class="card-title">
                  Neptune Systems
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Software Engineer, Feb 2014 - Mar 2018
                </h6>
                <a href="https://www.neptunesystems.com/apex-fusion/" target="_blank"> 
                  View Website
                </a>
              </div>
              <div class='col-lg-6'>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="image/neptune2.jpg" alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w- 100" src="image/neptune1.jpg" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="image/neptune3.jpg" alt="Fourth slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w- 100" src="image/neptune4.jpg" alt="First slide"/>
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
              </div>
              <div class='col-lg-6'>
                <p class="card-text">
                  <ul>
                    <li>
                      Full Stack development using MongoDB, Express, Backbone, NodeJS.
                    </li>
                    <li>
                      Client-side development (CoffeeScript, PUG, LESS, D3, Marionette).
                    </li>
                    <li>
                      Created new widgets for dashboard.
                    </li>
                    <li>
                    Worked with data visualization technologies (Highcharts, D3js).
                    </li>
                    <li>
                      Created responsive pages for desktop and mobile experience.
                    </li>
                    <li>
                      Fixed bugs and improved UI for Apex Fusion web application.
                    </li>
                    <li>
                      Created step by step wizards for setup processes.
                    </li>
                    <li>
                      Server-side development (NodeJS, Express, Mongoose, MongoDB).
                    </li>
                    <li>
                      Implemented REST APIs for the Apex Fusion client.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div class="hr"></div>

            <div class='row'>
              <div class='col-md-6'>
                <h5 class="card-title">
                  <span>
                    Time Service Inc
                  </span>
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Technician, Dec 2007- Dec 2012
                </h6>              
              </div>
              <div class='col-md-6'>
                <p class="card-text">
                  <ul>
                    <li>
                      Repaired and rebuilt damaged analog watches. 
                    </li>
                    <li>
                      Trained employees on work procedures and how to properly use the equipments.
                    </li>
                    <li>
                      Achieved highest company's certificate of level 5 Technician.
                    </li>
                  </ul>
                </p>
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
