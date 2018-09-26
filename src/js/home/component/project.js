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
          <i className="fas fa-project-diagram fa-fw fa-lg"></i>
              <span>
                <b>
                  &nbsp; Projects
                </b>
              </span>
          </div>
          <div className="card-body">

            <div className='row'>
                <div className='col-md-6  mb-2'>  
                  <div className="card-title">
                    <img className="card-title-logo" src="asset/cloudresume_logo.jpg"></img>
                      <h4 className="d-inline">
                        Online Resume
                      </h4>
                  </div>
                  <h5 className="card-subtitle mb-2 text-muted">
                    Developer, July 2018 - Aug 2018
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
                <div className='col-md-6'> 
                  <ul className="card-text">
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
                </div>        
              </div>

            <div className="hr"></div>

            <div className='row'>
              <div className='col-md-6  mb-2'>  
                <div className="card-title">
                  <img className="card-title-logo" src="asset/mnrewards_logo.png"></img>
                    <h4 className="d-inline">
                      MN Rewards
                    </h4>
                </div>
                <h5 className="card-subtitle mb-2 text-muted">
                  Developer, June 2018 - July 2018
                </h5>
                <a href="https://github.com/huthanh89/mn.rewards" target="_blank"> 
                  Repository
                </a> 
              </div>     
              <div className='col-md-6'> 
                <ul className="card-text">
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
              </div>        
            </div>

            <div className="hr"></div>

            <div className='row'>
              <div className='col-md-12'>
                <div className="card-title">
                  <img className="card-title-logo" src="asset/workoutrank_logo.png"></img>
                    <h4 className="d-inline">
                      Workout Rank
                    </h4>
                </div>
                <h5 className="card-subtitle mb-2 text-muted">
                  Developer, Apr 2016 - June 2016
                </h5>
                <a href="https://github.com/huthanh89/workoutrank" target="_blank"> 
                  Repository
                </a>              
              </div>
              <div className='col-lg-6'>
                <div id="carouselExampleIndicators2" className="carousel carousel-fade profile-work-corousal" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="asset/workoutrank1.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="asset/workoutrank2.jpg" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="asset/workoutrank3.jpg" alt="Third slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className='col-md-6'>
                <ul className="card-text">
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
