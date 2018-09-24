//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

class Description extends React.Component {
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
              <div class='col-md-6'>  
                <h5 class="card-title">
                  <span>
                    MN Rewards
                  </span>
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Developer, June 2018 - July 2018
                </h6>
                <a href="https://github.com/huthanh89/mn.rewards" target="_blank"> 
                  View Repository
                </a> 
              </div>     
              <div class='col-md-6'> 
                <p class="card-text">
                  <ul>
                    <li>
                      Full Stack development using MongoDB, MarionetteJS, NodeJS.
                    </li>
                    <li>
                      Deployed on DigitalOcean web host and served with Nginx.
                    </li>
                    <li>
                      Pull real time cryptocurrency prices and token metrics from an exchange and display them to the user.
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
                    Workout Rank
                  </span>
                </h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  Developer, Apr 2016 - June 2016
                </h6>
                <a href="https://github.com/huthanh89/workoutrank" target="_blank"> 
                  View Repository
                </a>              
              </div>
              <div class='col-md-6'>
                <p class="card-text">
                  <ul>
                    <li>
                      Full Stack development using MongoDB, Express, MarionetteJS, NodeJS.
                    </li>
                    <li>
                      Deployed on AWS and served with Nginx.
                    </li>
                    <li>
                      Github version control.
                    </li>
                    <li>
                      Automatic builds using Webpack and Gulp task runner.
                    </li>
                    <li>
                      Optimized for SEO compliance.
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

export default Description;

//-----------------------------------------------------------------------------//
