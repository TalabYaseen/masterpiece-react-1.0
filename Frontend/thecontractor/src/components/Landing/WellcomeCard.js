import {React} from 'react';
import { NavLink } from 'react-router-dom';
const WellcomeCard = () => {
    return (
        <>
          {/* <!-- wellcome word start --> */}
  <div className="container1">
    <div className="wellcome-word">
      <h5>
      Building && Maintenance  is Hard NOT any more
      </h5>
      <h1>
          The Contractor
      </h1>
      <h5>
          Will  get to you whole community will help you get your goals in the most<br/>
          efficient<br/>
          safe<br/>
          creative<br/>
          way possible .
      </h5>
    </div>
    {/* <!-- call to action start --> */}
    <div className="wellcome-word">
      <NavLink to="/newbid">
        <button>
          Make a bid
        </button>
      </NavLink>
    </div>
    {/* <!-- call to action end --> */}
  </div>
  {/* <!-- wellcome word Ends --> */}
  <br/>
        </>
      );
    };

    export default WellcomeCard;


