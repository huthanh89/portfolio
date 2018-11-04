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
      <div className='row'>
        <div className='col-lg-12  mb-2'>  
          <div className="card-title">
            <img className="card-title-logo" src="asset/math_logo.png"></img>
            <h4 className="d-inline">
              Math Game
            </h4>
          </div>
          <h5 className="card-subtitle mb-2 text-muted">
            Developer, Oct 2018 - Present
          </h5>
          <a className="btn btn-info mr-2" href="http://bigmonstar.net/" target="_blank"> 
            Website
          </a>              
          <a className="btn btn-secondary mr-2" href="https://github.com/huthanh89/math" target="_blank">
            Code
          </a> 
        </div>     
        <div className='col-lg-6'>
          <div id="carousel-indicators-math" className="carousel carousel-fade profile-work-corousal" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-indicators-math" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-indicators-math" data-slide-to="1"></li>
              <li data-target="#carousel-indicators-math" data-slide-to="2"></li>
              <li data-target="#carousel-indicators-math" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="asset/math1.jpg" alt="First slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="asset/math2.jpg" alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="asset/math3.jpg" alt="Third slide"/>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="asset/math4.jpg" alt="Fourth slide"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-indicators-math" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-indicators-math" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className='col-lg-6'> 
          <ul className="card-text">
            <li>
              Made a game application to help the user learn basic math.
            </li>
            <li>
              Front end technology consisted of React-Redux, React-Routing and ReactJS.
            </li>
            <li>
              Application is mobile and desktop friendly.
            </li>
            <li>
              Can be played on any desktop web browser or on mobile by downloading the app in Google Play Store.
            </li>
          </ul>
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
