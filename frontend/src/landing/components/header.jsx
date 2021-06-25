import React from "react";
import "../Lp.css";
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row' style={{justifyContent:"center"}}>
              <div className='col-md-8 col-md-offset-2 intro-text' >
                <h1>
                  PETOO
                  <span></span>
                </h1>
                <p>
                  Humans have rights ,Pets Too. Petoo is platform for
                  responsible pet owners, like yourself ;) We started with
                  solutions that help pet owners manage their pets medical
                  history as well as their photos. not to mention the possibly
                  to shop online all pet necessities
                </p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
