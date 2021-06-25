import React from "react";
//import { appLinks } from "./navData";
//import menuBar from "../../assets/images/menu.svg";
//import petooLogo from "../../assets/images/logo/logo.png";

//import { FiSearch } from "react-icons/fi";
//import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/login.png";
// import "./CSS/NavBar.css";
function NavBar() {
  //const [showNav, setShowNav] = useState(false);
  return (
    <nav style={{ display: "flex", alignItems: "center" }}>
        <a href='/' style={{ paddingRight: "50px" }}>
            <img src={logo} alt='LOGO' className='logoClassSmall' />
        </a>
        <div
            style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            }}
        >
            <ul
            style={{
                display: "flex",
                fontSize: "24px",
                width: "100%",
                justifyContent: "space-around",
            }}
            >
            <li style={{ paddingLeft: "35px" }}>
                <a href= '/home#about' className='page-scroll'>
                About
                </a>
            </li>
            <li>
                <a href='/home#services' className='page-scroll'>
                Services
                </a>
            </li>
            <li>
                <a href='/home#testimonials' className='page-scroll'>
                Testimonials
                </a>
            </li>
            <li>
                <a href='/home/blogDetail' className='page-scroll'>
                Blog
                </a>
            </li>
            <li>
                <a href='/login' className='page-scroll'>
                Log In
                </a>
            </li>
            <li>
                <a href='/register' className='page-scroll'>
                Sing Up
                </a>
            </li>
            <li>
                <a href='/registerVet' className='page-scroll'>
                Sign Up as a vet
                </a>
            </li>
            </ul>
        </div>
        </nav>
  );
}

export default NavBar;
