//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------

import React from 'react';

//-----------------------------------------------------------------------------
// Components
//-----------------------------------------------------------------------------

class Description extends React.Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-header">
            <i class="fas fa-laptop"/>
              <b>
                &nbsp;Computer Skills
              </b>
            </div>
          <div class="card-body">
            <p class="card-text">
              <ul>
                <li>
                  <b>
                    Technicals:&nbsp;
                  </b>
                  <span>
                    JavaScript, C, C++, Java, Linux, Python
                  </span>
                </li>
                <li>
                  <b>
                    Technologies:&nbsp;
                  </b>
                  <span>
                    JQuery,  CSS, HTML, JSON, Backbone, Marionette, Highcharts, D3, Bootstrap, AWS, React, Gulp, Webpack, GIT, Node, Express, Nginx, MongoDB
                  </span>
                </li>
                <li>
                  <b>
                    Operating Systems:&nbsp;
                  </b>
                  <span>
                    MacOS, Linux
                  </span>
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <i class="fas fa-building"></i>
              <b>
                &nbsp;Work Experiences
              </b>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <span>
                Neptune Systems
              </span>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Software Engineer, Feb 2014 - Mar 2018
            </h6>
            <p class="card-text">
              <ul>
                <li>
                  Full Stack development using MongoDB, Express, Backbone, NodeJS.
                </li>
                <li>
                  Client-side development (CoffeeScript, PUG, LESS, D3, Marionette).
                </li>
                <li>
                  Created new widgets for dashboard.
                </li>
                <li>
                Worked with data visualization technologies (Highcharts, D3js).
                </li>
                <li>
                  Created responsive pages for desktop and mobile experience.
                </li>
                <li>
                  Fixed bugs and improved UI for Apex Fusion web application.
                </li>
                <li>
                  Created step by step wizards for setup processes.
                </li>
                <li>
                  Server-side development (NodeJS, Express, Mongoose, MongoDB).
                </li>
                <li>
                  Implemented REST APIs for the Apex Fusion client.
                </li>
              </ul>
            </p>
            <h5 class="card-title">
              <span>
                Time Service Inc
              </span>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Technician, Dec 2007- Dec 2012
            </h6>
            <p class="card-text">
              <ul>
                <li>
                  Repaired and rebuilt damaged analog watches. 
                </li>
                <li>
                  Trained employees on work procedures and how to properly use the equipments.
                </li>
                <li>
                  Achieved highest company's certificate of level 5 Technician.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
              <i class="fas fa-graduation-cap fa-fw"/>
              <span>
                <b>
                  &nbsp; Education
                </b>
              </span>
          </div>
          <div class="card-body">
            <h5 class="card-title">
              <span>
                San Jose State University
              </span>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">Fall 2010- Fall 2014</h6>
            <p class="card-text">Bachelor of Science in Computer Engineering</p>
            <p class="card-text">
              <b>
                Relevant Coursework:&nbsp;
              </b>
              <span>
                Database Design, Advance Algorithm Design, Data Structure Design, Object Oriented Programming     
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------

export default Description;

//-----------------------------------------------------------------------------
