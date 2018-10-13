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
        <div className='col-lg-6  mb-2'>  
          <div className="card-title">
            <img className="card-title-logo" src="asset/mnrewards_logo.png"></img>
              <h4 className="d-inline">
                MN Rewards
              </h4>
          </div>
          <h5 className="card-subtitle mb-2 text-muted">
            Developer, June 2018 - July 2018
          </h5>
          <a className="btn btn-secondary" href="https://github.com/huthanh89/mn.rewards" target="_blank"> 
            Code
          </a> 
        </div>     
        <div className='col-lg-6'> 
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
    );
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Component;

//-----------------------------------------------------------------------------//
