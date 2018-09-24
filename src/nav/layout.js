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

    this.state = {
      viewIndex: 0
    };

    this.itemClickedPortfolio = this.itemClickedPortfolio.bind(this);
    this.itemClickedResume    = this.itemClickedResume.bind(this);
    this.itemClickedContact   = this.itemClickedContact.bind(this);
  }

  render() {

    var viewIndex = this.state.viewIndex;

    function isActive(itemIndex){
      return itemIndex == viewIndex? true:false
    }

    function classAttribute (active){
      if(active){
        return "nav-item nav-link active"
      }else{
        return "nav-item nav-link"
      }
    }

    function styleAttribute (active){
      if(active){
        return {
          ':hover': {
            'background': 'yellow'
          },
          'font-weight': '500',
          'cursor':      'pointer'
        }
      }else{
        return {
          'font-weight': 'normal',
          'cursor':      'pointer'
        }
      }
    }

    // TODO: remove class d-none to show contact list item.

    return (
      <nav class="navbar navbar-expand-md border-bottom bg-white">
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <a class="navbar-brand" href="#" data-toggle="modal" data-target="#contactModal">
                <img src="image/logo.jpg" alt=""/>
          </a>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="nav navbar-nav ml-auto">
              <li class={classAttribute(isActive(0))} style={styleAttribute(isActive(0))} onClick={this.itemClickedPortfolio}>
                <i class="fas fa-folder-open fa-fw fa-lg"></i> <span>View Portfolio</span>
              </li>
              <li class={classAttribute(isActive(1))} style={styleAttribute(isActive(1))} onClick={this.itemClickedResume}>
                <i class="fas fa-print fa-fw fa-lg"></i> <span>Resume PDF</span>
              </li>
              <div class="d-none">
                <li class={classAttribute(isActive(2)) + " hide"} style={styleAttribute(isActive(2))} onClick={this.itemClickedContact}>
                  <i class="fas fa-user fa-fw fa-lg"></i> <span>Contact Me</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  itemClickedPortfolio() {
    this.setState({
      viewIndex: 0
    });
    this.props.updateView(0);
  }

  itemClickedResume() {
    this.setState({
      viewIndex: 1
    });
    this.props.updateView(1);
  }

  itemClickedContact() {
    this.setState({
      viewIndex: 2
    });
    this.props.updateView(2);
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
