import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineDribbble } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div id="footer">
        <h2><FaHamburger className="ficon" /> logipsum</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Dolores illo quas odit dolore atque consectetur iure in </p>

        <ul >
          <li>About</li>
          <li>Careers</li>
          <li>History </li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blogs</li>
        </ul>
        <div className="icons">
          <a href=""><FaFacebook /></a>
          <a href=""><FaInstagram /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaGithub /></a>
          <a href=""><AiOutlineDribbble /></a>
        </div>
      </div>
    </>
  )
}

export default Footer
