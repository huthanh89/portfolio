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
                    Languages:&nbsp;
                  </b>
                  <span>
                    JavaScript, C, C#, C++, Java, Python
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
