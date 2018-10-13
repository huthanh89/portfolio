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
            <i className="fas fa-laptop fa-fw"/>
              <b>
                &nbsp;Computer Skills
              </b>
            </div>
          <div className="card-body">
            <ul className="card-text">
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
