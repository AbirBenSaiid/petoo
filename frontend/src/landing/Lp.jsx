import React from "react";
import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import "./Lp.css";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./style.css";
import NavBar from "./components/NavBar"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LP = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <NavBar/>
      {/* <nav style={{ display: "flex", alignItems: "center" }}>
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
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
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
      </nav> */}

      <Header />

      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
    </div>
  );
};

export default LP;
