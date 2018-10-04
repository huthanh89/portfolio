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
              <div className='col-md-12  mb-2'>  
                <div className="card-title">
                  <img className="card-title-logo" src="asset/budget_logo.png"></img>
                  <h4 className="d-inline">
                    Budget ID
                  </h4>
                </div>
                <h5 className="card-subtitle mb-2 text-muted">
                  Developer, Sep 2018 - Present
                </h5>
                <a href="https://github.com/huthanh89/budget" target="_blank"> 
                  Repository
                </a> 
              </div>     
              <div className='col-lg-6'>
                <div id="carousel-indicators-budget" className="carousel carousel-fade profile-work-corousal" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel-indicators-budget" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-indicators-budget" data-slide-to="1"></li>
                    <li data-target="#carousel-indicators-budget" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100" src="asset/budget1.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="asset/budget2.jpg" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src="asset/budget3.jpg" alt="Third slide"/>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carousel-indicators-budget" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carousel-indicators-budget" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className='col-md-6'> 
                <ul className="card-text">
                  <li>
                    Built an application to visualize recurring expenses and income.
                  </li>
                  <li>
                    Technology stack included Node, Redux, and React.
                  </li>
                  <li>
                    Used HighChart's library for data visualization.
                  </li>
                  <li>
                    Made application responsive to fit on mobile or desktop screen, by using Bootstrap framework. 
                  </li>
                </ul>
              </div>        
            </div>

            <div className="hr"></div>

            <div className='row'>
                <div className='col-md-6  mb-2'>  
                  <div className="card-title">
                    <img className="card-title-logo" src="asset/cloudresume_logo.jpg"></img>
                      <h4 className="d-inline">
                        Online Resume
                      </h4>
                  </div>
                  <h5 className="card-subtitle mb-2 text-muted">
                    Developer, July 2018 - Present
                  </h5>
                  <a href="http://cloudresume.net/" target="_blank"> 
                    Website
                  </a>
                  <span>
                    &nbsp;|&nbsp;
                  </span>
                  <a href="https://github.com/huthanh89/portfolio" target="_blank"> 
                    Repository
                  </a> 
                </div>     
                <div className='col-md-6'> 
                  <ul className="card-text">
                    <li>
                      Web application to view my portfolio and print my resume.
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
                <div id="carousal-indicators-workoutrank" className="carousel carousel-fade profile-work-corousal" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carousal-indicators-workoutrank" data-slide-to="0" className="active"></li>
                    <li data-target="#carousal-indicators-workoutrank" data-slide-to="1"></li>
                    <li data-target="#carousal-indicators-workoutrank" data-slide-to="2"></li>
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
                  <a className="carousel-control-prev" href="#carousal-indicators-workoutrank" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carousal-indicators-workoutrank" role="button" data-slide="next">
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
