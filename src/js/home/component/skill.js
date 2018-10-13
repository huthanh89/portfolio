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
                  C, C#, C++, Java, Python, CSS, HTML, JavaScript
                </span>
              </li>
              <li>
                <b>
                  Back End Technologies:&nbsp;
                </b>
                <span>
                  Aws, Nginx, MongoDB, Express, Node
                </span>
              </li>
              <li>
                <b>
                  Front End Technologies:&nbsp;
                </b>
                <span>
                  Backbone, Marionette, JQuery, JSON, Highcharts, D3, Bootstrap, Gulp, Webpack, Git, Redux, React
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
