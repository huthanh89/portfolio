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
                <img className="card-title-logo" src="asset/budget_logo.png"></img>
                <h4 className="d-inline">
                    Budget ID
                </h4>
                </div>
                <h5 className="card-subtitle mb-2 text-muted">
                Developer, Sep 2018 - Present
                </h5>
                <a className="btn btn-outline-secondary" href="https://github.com/huthanh89/budget" target="_blank"> 
                    <i className="fas faw fa-eye mr-1"></i>
                    <span>
                        Source Code
                    </span>
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
            <div className='col-lg-6'> 
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
                    Made application responsive to fit on mobile or desktop screen, by using the Bootstrap framework. 
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
