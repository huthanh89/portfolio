//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React     from 'react';
import About     from './component/about'
import Skill     from './component/skill'
import Work      from './component/work'
import Project   from './component/project/layout'
import Education from './component/education'

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

class Layout extends React.Component {
  render() {
    return (
      <div>
        <About/>
        <Skill/>
        <Work/>
        <Project/>
        <Education/>
      </div>
    );
  }
}

//-----------------------------------------------------------------------------//
// Exports
//-----------------------------------------------------------------------------//

export default Layout;

//-----------------------------------------------------------------------------//
