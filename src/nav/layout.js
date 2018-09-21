//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light border-bottom bg-white">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item nav-link active"><i class="fas fa-folder-open fa-fw fa-lg"></i> <span>Portfolio</span>
              </li>
              <li class="nav-item nav-link"><i class="fas fa-file-alt fa-fw fa-lg"></i> <span>Resume</span>
              </li>
              <li class="nav-item nav-link"><i class="fas fa-user fa-fw fa-lg"></i> <span>Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
