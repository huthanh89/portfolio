//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React from 'react';

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.itemClickedPortfolio = this.itemClickedPortfolio.bind(this);
    this.itemClickedResume = this.itemClickedResume.bind(this);
    this.itemClickedContact = this.itemClickedContact.bind(this);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-light border-bottom bg-white">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item nav-link active" onClick={this.itemClickedPortfolio}><i class="fas fa-folder-open fa-fw fa-lg"></i> <span>Portfolio</span>
              </li>
              <li class="nav-item nav-link" onClick={this.itemClickedResume}><i class="fas fa-file-alt fa-fw fa-lg"></i> <span>Resume</span>
              </li>
              <li class="nav-item nav-link" onClick={this.itemClickedContact}><i class="fas fa-user fa-fw fa-lg"></i> <span>Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  itemClickedPortfolio() {
    this.props.updateView(0);
  }

  itemClickedResume() {
    this.props.updateView(1);
  }

  itemClickedContact() {
    this.props.updateView(2);
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
