import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header() {


  return (
    <>
      <div id="header">
        <div className="leftH">
          <img src="	https://flowbite.com/docs/images/logo.svg" alt="" /> 
          <p>GeekFoods</p>
        </div>
        <div className="midH">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/quotes"> Quote</Link>
            </li>
            <li>
              <Link to={"/resturents"}>Resturants</Link>
            </li>
            <li>
              <Link>Foods</Link>
            </li>
            <li><Link>Contact</Link></li>
          </ul>
        </div>
        <div className="rightH">
          <button>Get Started</button>
          <FaBars className="bars" />
        </div>
      </div>
    </>
  )
}

export default Header
