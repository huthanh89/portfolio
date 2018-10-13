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
            <img className="card-title-logo" src="asset/cloudresume_logo.jpg"></img>
              <h4 className="d-inline">
                Online Resume
              </h4>
          </div>
          <h5 className="card-subtitle mb-2 text-muted">
            Developer, July 2018 - Present
          </h5>
          <a className="btn btn-info mr-2" href="http://cloudresume.net/" target="_blank"> 
            Website
          </a>
          <a className="btn btn-secondary" href="https://github.com/huthanh89/portfolio" target="_blank"> 
            Code
          </a> 
        </div>     
        <div className='col-lg-6'> 
          <ul className="card-text">
            <li>
              Web application to view my portfolio and print my resume.
            </li>
            <li>
              Developed using NodeJS and ReactJS.
            </li>
            <li>
              Deployed on AWS and served with Nginx.
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
