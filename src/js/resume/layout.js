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
      <object data="asset/resume.pdf" type="application/pdf" width="100%" height="100%">
        <iframe src="asset/resume.pdf" width="100%" height="100%">
          This browser does not support PDFs. Please download the PDF to view it: <a href="asset/resume.pdf">Download PDF</a>
        </iframe>
      </object>

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
