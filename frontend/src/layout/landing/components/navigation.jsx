import React from "react";
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header' Style={{ display: "flex" }}>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {" "}
            <span className='sr-only'>Toggle navigation</span>{" "}
            <span className='icon-bar'></span>{" "}
            <span className='icon-bar'></span>{" "}
            <span className='icon-bar'></span>{" "}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            React Landing Page
          </a>{" "}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
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
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
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
      </div>
    </nav>
  );
};
