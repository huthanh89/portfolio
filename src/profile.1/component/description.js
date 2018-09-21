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
            <i class="fas fa-user fa-fw"></i>
              <b>
                &nbsp;Contact
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
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Description;

//-----------------------------------------------------------------------------//
