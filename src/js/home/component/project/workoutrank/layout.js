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
            <div className='col-lg-12'>
            <div className="card-title">
                <img className="card-title-logo" src="asset/workoutrank_logo.png"></img>
                <h4 className="d-inline">
                    Workout Rank
                </h4>
            </div>
            <h5 className="card-subtitle mb-2 text-muted">
                Developer, Apr 2016 - June 2016
            </h5>
            <a className="btn btn-outline-secondary" href="https://github.com/huthanh89/workoutrank" target="_blank"> 
                <i className="fas faw fa-eye mr-1"></i>
                <span>
                    Source Code
                </span>
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
            <div className='col-lg-6'>
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
        );
    }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
