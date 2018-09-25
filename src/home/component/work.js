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
            <i class="fas fa-toolbox fa-fw fa-lg"></i>
              <b>
                &nbsp;Work Experiences
              </b>
          </div>
          <div class="card-body">
            <div class='row'>
              <div class='col-md-12'>
                <div class="card-title">
                  <img class="card-title-logo" src="image/neptune_logo.png"></img>
                  <h4 class="d-inline">
                    Neptune Systems
                  </h4>
                </div>
                <h5 class="card-subtitle mb-2 text-muted">
                  Software Engineer, Feb 2014 - Mar 2018
                </h5>
                <a href="https://www.neptunesystems.com/apex-fusion/" target="_blank"> 
                  View Website
                </a>
              </div>
              <div class='col-lg-6'>
                <div id="carouselExampleIndicators" class="carousel slide profile-work-corousal" data-ride="carousel">
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
                      <img class="d-block w- 100" src="image/neptune4.png" alt="First slide"/>
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
                      Added new features to the application (ApexFusion) and maintained its source code.
                    </li>
                    <li>
                      Used CoffeeScript, PUG, LESS, and MarionetteJS for client-side development.
                    </li>
                    <li>
                      Built new dashboard widgets using data visualization technologies such as Highcharts and D3.
                    </li>
                    <li>
                      Created step by step wizards to simplify the setup process.
                    </li>
                    <li>
                      Incorporated a responsive web design approach, to better the mobile experience.
                    </li>
                    <li>
                      Fixed bugs and improved UI based on user's feedback.
                    </li>
                    <li>
                      Worked on server-side development with NodeJS, Express, and MongoDB.
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
                <div class="card-title">
                  <img class="card-title-logo" src="image/time_service_logo.png"></img>
                  <h4 class="d-inline">
                    <span>
                      Time Service Inc
                    </span>
                  </h4>                
                </div>
                <h5 class="card-subtitle mb-2 text-muted">
                  Technician, Dec 2007- Dec 2012
                </h5>              
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
                      Achieved the company's highest certification for level 5 Technician.
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
