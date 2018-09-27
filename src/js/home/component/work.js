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
            <i className="fas fa-toolbox fa-fw fa-lg"></i>
              <b>
                &nbsp;Work Experiences
              </b>
          </div>
          <div className="card-body">
            <div className='row'>
              <div className='col-md-12'>
                <div className="card-title">
                  <img className="card-title-logo" src="asset/neptune_logo.png"></img>
                  <h4 className="d-inline">
                    Neptune Systems
                  </h4>
                </div>
                <h5 className="card-subtitle mb-2 text-muted">
                  Software Engineer, Feb 2014 - Mar 2018
                </h5>
                <a href="https://www.neptunesystems.com/apex-fusion/" target="_blank"> 
                  Website
                </a>
              </div>
              <div className='col-lg-6'>
                <div id="carouselExampleIndicators" className="carousel carousel-fade profile-work-corousal" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="asset/neptune2.jpg" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w- 100" src="asset/neptune1.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="asset/neptune3.jpg" alt="Fourth slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w- 100" src="asset/neptune4.png" alt="First slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className='col-lg-6'>
                <ul className="card-text">
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
              </div>
            </div>

            <div className="hr"></div>

            <div className='row'>
              <div className='col-md-6'>
                <div className="card-title">
                  <img className="card-title-logo" src="asset/time_service_logo.png"></img>
                  <h4 className="d-inline">
                    <span>
                      Time Service Inc
                    </span>
                  </h4>                
                </div>
                <h5 className="card-subtitle mb-2 text-muted">
                  Technician, Dec 2007- Dec 2012
                </h5>              
              </div>
              <div className='col-md-6'>
                <ul className="card-text">
                  <li>
                    Repaired and rebuilt damaged analog watches. 
                  </li>
                  <li>
                    Trained employees on work procedures and how to properly use the equipment.
                  </li>
                  <li>
                    Achieved the company's highest certification for level 5 Technician.
                  </li>
                </ul>
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
