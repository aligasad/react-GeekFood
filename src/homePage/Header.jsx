import { FaBars } from "react-icons/fa";


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
            <li >Home</li>
            <li >Quote</li>
            <li>Resturants</li>
            <li>Foods</li>
            <li>Contact</li>
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
