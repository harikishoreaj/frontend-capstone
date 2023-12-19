import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

import '../styles/Components.css'

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footercol">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footercol">
          <ul>
            <h3>Navigation</h3>
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Menu</Link></li>
            <li><Link to="#">Reservations</Link></li>
            <li><Link to="#">Order Online</Link></li>
            <li><Link to="#">Login</Link></li>
          </ul>
        </div>
        <div className="footercol">
          <ul>
            <h3>Contact</h3>
            <li><a id="nav" href="#">Phone Number</a></li>
            <li><a id="nav" href="#">Email</a></li>
            <li><a id="nav" href="#">Address</a></li>
          </ul>
        </div>
        <div className="footercol">
          <ul>
            <h3>Social Media</h3>
            <li><a id="nav" href="#">Instagram</a></li>
            <li><a id="nav" href="#">LinkedIn</a></li>
            <li><a id="nav" href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;