//-----------------------------------------------------------------------------//
// Imports
//-----------------------------------------------------------------------------//

import React       from 'react';
import BudgetID    from './budget/layout'
import Math        from './math/layout'
import MNReward    from './mnreward/layout'
import Resume      from './resume/layout'
import WorkoutRank from './workoutrank/layout'

//-----------------------------------------------------------------------------//
// Components
//-----------------------------------------------------------------------------//

class Component extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-header">
          <i className="fas fa-project-diagram fa-fw"></i>
              <span>
                <b>
                  &nbsp; Projects
                </b>
              </span>
          </div>
          <div className="card-body">
            <Math/>
            <div className="hr"></div>
            <BudgetID/>
            <div className="hr"></div>
            <Resume/>
            <div className="hr"></div>
            <MNReward/>
            <div className="hr"></div>
            <WorkoutRank/>
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
