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
          <i class="fas fa-project-diagram fa-fw fa-lg"></i>
              <span>
                <b>
                  &nbsp; Projects
                </b>
              </span>
          </div>
          <div class="card-body">

            <div class='row'>
                <div class='col-md-6  mb-2'>  
                  <h4 class="card-title">
                    <span>
                      Cloud Resume
                    </span>
                  </h4>
                  <h5 class="card-subtitle mb-2 text-muted">
                    Developer, June 2018 - July 2018
                  </h5>
                  <a href="http://cloudresume.net/" target="_blank"> 
                    Website
                  </a>
                  <span>
                    &nbsp;|&nbsp;
                  </span>
                  <a href="https://github.com/huthanh89/mn.rewards" target="_blank"> 
                    Repository
                  </a> 
                </div>     
                <div class='col-md-6'> 
                  <p class="card-text">
                    <ul>
                      <li>
                        A web application to view my portfolio and print my resume.
                      </li>
                      <li>
                        Developed using NodeJS and ReactJS.
                      </li>
                      <li>
                        Deployed on AWS and served with Nginx.
                      </li>
                    </ul>
                  </p>
                </div>        
              </div>

            <div class="hr"></div>

            <div class='row'>
              <div class='col-md-6  mb-2'>  
                <h4 class="card-title">
                  <span>
                    MN Rewards
                  </span>
                </h4>
                <h5 class="card-subtitle mb-2 text-muted">
                  Developer, June 2018 - July 2018
                </h5>
                <a href="https://github.com/huthanh89/mn.rewards" target="_blank"> 
                  Repository
                </a> 
              </div>     
              <div class='col-md-6'> 
                <p class="card-text">
                  <ul>
                    <li>
                      Application pulls real time cryptocurrency prices and token metrics from an exchange to display them to the user.
                    </li>
                    <li>
                      Full stack development using NodeJS and MarionetteJS.
                    </li>
                    <li>
                      Deployed on DigitalOcean web host and served with Nginx.
                    </li>
                  </ul>
                </p>
              </div>        
            </div>

            <div class="hr"></div>

            <div class='row'>
              <div class='col-md-12'>
                <div class="card-title">
                  <img class="card-title-logo" src="image/workoutrank_logo.png"></img>
                    <h4 class="d-inline">
                      Workout Rank
                    </h4>
                </div>
                <h5 class="card-subtitle mb-2 text-muted">
                  Developer, Apr 2016 - June 2016
                </h5>
                <a href="https://github.com/huthanh89/workoutrank" target="_blank"> 
                  Repository
                </a>              
              </div>
              <div class='col-lg-6'>
                <div id="carouselExampleIndicators2" class="carousel slide profile-work-corousal" data-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img class="d-block w-100" src="image/workoutrank1.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="image/workoutrank2.jpg" alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                      <img class="d-block w-100" src="image/workoutrank3.jpg" alt="Third slide"/>
                    </div>
                  </div>
                  <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div class='col-md-6'>
                <p class="card-text">
                  <ul>
                    <li>
                      Developed an application fitness tracker that displays the user's performance and workout schedule.
                    </li>
                    <li>
                      Used technologies such as MongoDB, NodeJS and MarionetteJS.
                    </li>
                    <li>
                      Deployed on AWS and served with Nginx.
                    </li>
                    <li>
                      Made the application responsive for mobile consumption.
                    </li>
                    <li>
                      Optimized the website for SEO compliance.
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
