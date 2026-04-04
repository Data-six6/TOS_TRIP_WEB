import { useState } from "react";
import "../styles/components_style/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import tos_logo from "../assets/LOGO.svg";
function Footer(){
    return(
        <footer className='footer'>
            <Link to="/" >
                 <img src={tos_logo} className='footer-logo'/>
            </Link>
            
            <div className="logo">
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="footer-icon" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="footer-icon" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="footer-icon" />
                </a>
            </div>
            <p className='footer-text'>© 2025 TOSTrip. Made with ❤️ in Cambodia.</p>
        </footer>
    )

}
export default Footer;