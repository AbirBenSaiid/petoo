import React, { Fragment, useState, useEffect } from "react";
import { getALLNotif } from "../../redux/notification/action";

import moment from "moment";
import {
  FileText,
  LogIn,
  User,
  Bell,
  Minimize,
  Search,
  ShoppingCart,
  // Minus,
  // Plus,
  // X,
} from "react-feather";
import { useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setTranslations,
  setDefaultLanguage,
  setLanguageCookie,
  translate,
} from "react-switch-lang";
import { logout } from "../../redux/authentification/action";
import { checkALLNotif } from "../../redux/notification/action";


import en from "../../assets/i18n/en.json";
import es from "../../assets/i18n/es.json";
import pt from "../../assets/i18n/pt.json";
import fr from "../../assets/i18n/fr.json";
import du from "../../assets/i18n/du.json";
import cn from "../../assets/i18n/cn.json";
import ae from "../../assets/i18n/ae.json";
import { 
  // InputGroup, 
  // InputGroupAddon,
   Button } from "reactstrap";
// import { useSelector } from "react-redux";

setTranslations({ en, es, pt, fr, du, cn, ae });
setDefaultLanguage("en");
setLanguageCookie();

const Rightbar = (props) => {
  const [numNotif, setNumNotif] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchresponsive, setSearchresponsive] = useState(false);
  // const [langdropdown, setLangdropdown] = useState(false);
  const [moonlight, setMoonlight] = useState(false);
  // eslint-disable-next-line
  const [cartDropdown, setCartDropDown] = useState(false);

  const { prenom, role, profilePicture } = useSelector(
    (state) => state.currentUser.user
  );
  const idUser = useSelector((state) => state.currentUser.user.idUser);

  const logoutFromJWT = () => {
    dispatch(logout(history));
  };

  // const RedirectToCart = () => {
  //   history.push(`${process.env.PUBLIC_URL}/app/ecommerce/cart`);
  // };

  const UserMenuRedirect = (redirect) => {
    history.push(redirect);
  };

  //full screen function
  function goFull() {
    if (
      (document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const SeacrhResposive = (searchresponsive) => {
    if (searchresponsive) {
      setSearchresponsive(!searchresponsive);
      document.querySelector(".search-full").classList.add("open");
    } else {
      setSearchresponsive(!searchresponsive);
      document.querySelector(".search-full").classList.remove("open");
    }
  };

  /*   const LanguageSelection = (language) => {
    if (language) {
      setLangdropdown(!language);
    } else {
      setLangdropdown(!language);
    }
  }; */

  const MoonlightToggle = (light) => {
    if (light) {
      setMoonlight(!light);
      document.body.className = "light";
      localStorage.setItem("layout_version", "light");
    } else {
      setMoonlight(!light);
      document.body.className = "dark-only";
      localStorage.setItem("layout_version", "dark-only");
    }
  };

  const notifs = useSelector(
    (state) => state.notifReducer.allNotifArray //showing only 5 Notifications
  );

  const [notifications, setNotifications] = useState(notifs);
  const notifMSG = useSelector((state) => state.notifReducer.msg);
  const lengthUnRead = (notifications) => {
    const unReadNotif =
      notifications && notifications.filter((e) => e.isRead === false);
    return unReadNotif.length;
  };

  useEffect(() => {
    // setNotifications(notifs);
    setNumNotif(lengthUnRead(notifs));
    dispatch(getALLNotif(idUser));
    setNotifications(notifs.slice(0, 6));
    // eslint-disable-next-line
  }, [notifMSG]);
  return (
    <Fragment>
      <div className='nav-right col-8 pull-right right-header p-0'>
        <ul className='nav-menus'>
          <li>
            <span className='header-search'>
              <Search onClick={() => SeacrhResposive(searchresponsive)} />
            </span>
          </li>
          <li className='onhover-dropdown'>
            <div className='notification-box'>
              <Bell />
              {numNotif > 0 && ( // Adding condition to show the number of notfs not Readed , else if all readed dont show number of notifs
                <span className='badge badge-pill badge-secondary'>
                  {numNotif}
                </span>
              )}
            </div>
            <ul className={`notification-dropdown onhover-show-div`}>
              <li>
                <Bell />
                <h6 className='f-18 mb-0'>Notification</h6>
              </li>
              {notifications.map((n, i) => (
                <li key={i}>
                  <p style={{ fontWeight: !n.isRead ? "bold" : "normal" }}>
                    <i className='fa fa-circle-o mr-3 font-primary'> </i>
                    {n.msg}
                    <span className='pull-right'>
                      {moment(parseInt(n.creationDate, 10)).fromNow()}
                    </span>
                  </p>
                </li>
              ))}
              <li>
                <button
                  onClick={() => dispatch(checkALLNotif(idUser))}
                  className='btn btn-primary'
                >
                  Check all notification
                </button>
              </li>
            </ul>
          </li>
          {/* <Bookmark /> */}
          <li>
            <div className='mode' onClick={() => MoonlightToggle(moonlight)}>
              <i
                className={`fa ${moonlight ? "fa-lightbulb-o" : "fa-moon-o"}`}
              ></i>
            </div>
          </li>
          <li className='cart-nav onhover-dropdown'>
            <div
              className='cart-box'
              onClick={() => setCartDropDown(!cartDropdown)}
            >
              <ShoppingCart />
              <span className='badge badge-pill badge-primary'></span>
            </div>
            <ul
              className={`cart-dropdown onhover-show-div ${
                cartDropdown ? "active" : ""
              }`}
            >
              <li>
                <h6 className='mb-0 f-20'>Shoping Bag </h6>
                <ShoppingCart />
              </li>
              {/* <li className='mt-0'>
                <div className='media' onClick={RedirectToCart}>
                  <img
                    className='img-fluid rounded-circle mr-3 img-60'
                    src={
                      require("../../assets//images/ecommerce/01.jpg").default
                    }
                    alt=''
                  />
                  <div className='media-body'>
                    <span>{"V-Neck Shawl Collar Woman's Solid T-Shirt"}</span>
                    <p>{"Yellow(#fcb102)"}</p>
                    <div className='qty-box'>
                      <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <button
                            className='btn quantity-left-minus'
                            type='button'
                            data-type='minus'
                            data-field=''
                          >
                            <Minus />
                          </button>
                        </InputGroupAddon>
                        <input
                          className='form-control input-number'
                          type='text'
                          name='quantity'
                          defaultValue='1'
                        />
                        <InputGroupAddon addonType='prepend'>
                          <button
                            className='btn quantity-right-plus'
                            type='button'
                            data-type='plus'
                            data-field=''
                          >
                            <Plus />
                          </button>
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <h6 className='text-right text-muted'>{"$299.00"}</h6>
                  </div>
                  <div className='close-circle'>
                    <a href='#javascript'>
                      <X />
                    </a>
                  </div>
                </div>
              </li>
              <li className='mt-0'>
                <div className='media' onClick={RedirectToCart}>
                  <img
                    className='img-fluid rounded-circle mr-3 img-60'
                    src={
                      require("../../assets/images/ecommerce/03.jpg").default
                    }
                    alt=''
                  />
                  <div className='media-body'>
                    <span>{"V-Neck Shawl Collar Woman's Solid T-Shirt"}</span>
                    <p>{"Yellow(#fcb102)"}</p>
                    <div className='qty-box'>
                      <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                          <button
                            className='btn quantity-left-minus'
                            type='button'
                            data-type='minus'
                            data-field=''
                          >
                            <Minus />
                          </button>
                        </InputGroupAddon>
                        <input
                          className='form-control input-number'
                          type='text'
                          name='quantity'
                          defaultValue='1'
                        />
                        <InputGroupAddon addonType='prepend'>
                          <button
                            className='btn quantity-right-plus'
                            type='button'
                            data-type='plus'
                            data-field=''
                          >
                            <Plus />
                          </button>
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <h6 className='text-right text-muted'>{"$299.00"}</h6>
                  </div>
                  <div className='close-circle'>
                    <a href='#javascript'>
                      <X />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className='total'>
                  <h6 className='mb-2 mt-0 text-muted'>
                    {OrderTotal} :{" "}
                    <span className='f-right f-20'>{"$598.00"}</span>
                  </h6>
                </div>
              </li>
    */}

  

              <li>
                <Link to={`${process.env.PUBLIC_URL}/dashboard/product`}>
                  <Button color='primary' className='btn btn-block view-cart'>
                    Go to shoping bag
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/dashboard/checkout`}>
                  <Button
                    color='secondary'
                    className='btn-block view-cart mt-2'
                  >
                    Check Out
                  </Button>
                </Link>
              </li>
            </ul>
          </li>
          {/* <li
            className='onhover-dropdown'
            onClick={() => setChatDropDown(!chatDropDown)}
          >
            <MessageSquare />
            <ul
              className={`chat-dropdown onhover-show-div ${
                chatDropDown ? "active" : ""
              }`}
            >
              <li>
                <MessageSquare />
                <h6 className='f-18 mb-0'>{MessageBox}</h6>
              </li>
              <li onClick={RedirectToChats}>
                <div className='media'>
                  <img
                    className='img-fluid rounded-circle mr-3'
                    src={require("../../assets/images/user/1.jpg")}
                    alt=''
                  />
                  <div className='status-circle online'></div>
                  <div className='media-body'>
                    <span>{EricaHughes}</span>
                    <p>{"Lorem Ipsum is simply dummy..."}</p>
                  </div>
                  <p className='f-12 font-success'>{"58 mins ago"}</p>
                </div>
              </li>
              <li onClick={RedirectToChats}>
                <div className='media'>
                  <img
                    className='img-fluid rounded-circle mr-3'
                    src={man}
                    alt=''
                  />
                  <div className='status-circle online'></div>
                  <div className='media-body'>
                    <span>{KoriThomas}</span>
                    <p>{"Lorem Ipsum is simply dummy..."}</p>
                  </div>
                  <p className='f-12 font-success'>{"1 hr ago"}</p>
                </div>
              </li>
              <li onClick={RedirectToChats}>
                <div className='media'>
                  <img
                    className='img-fluid rounded-circle mr-3'
                    src={require("../../assets/images/user/4.jpg")}
                    alt=''
                  />
                  <div className='status-circle offline'></div>
                  <div className='media-body'>
                    <span>{AinChavez}</span>
                    <p>{"Lorem Ipsum is simply dummy..."}</p>
                  </div>
                  <p className='f-12 font-danger'>{"32 mins ago"}</p>
                </div>
              </li>
              <li className='text-center'>
                {" "}
                <button className='btn btn-primary'>{ViewAll} </button>
              </li>
            </ul>
          </li> */}
          <li className='maximize'>
            <a className='text-dark' href='#javascript' onClick={goFull}>
              <Minimize />
            </a>
          </li>
          <li className='profile-nav onhover-dropdown p-0'>
            <div className='media profile-media'>
              <img className='b-r-10' src={profilePicture} alt='' />
              <div className='media-body'>
                {/* <span>{authenticated ? user.nom : user.nom}</span> */}
                <span>{prenom}</span>
                <p className='mb-0 font-roboto'>
                  {role} <i className='middle fa fa-angle-down'></i>
                </p>
              </div>
            </div>
            <ul className='profile-dropdown onhover-show-div'>
              <li
                onClick={() =>
                  UserMenuRedirect(
                    `${process.env.PUBLIC_URL}/dashboard/userProfile`
                  )
                }
              >
                <User />
                <span>My Pofile </span>
              </li>

              <li
                onClick={() =>
                  UserMenuRedirect(
                    `${process.env.PUBLIC_URL}/dashboard/userEdit`
                  )
                }
              >
                <FileText />
                <span>Edit Profile</span>
              </li>
              <li
                // onClick={
                //   authenticated ? Logout_From_Auth0 : Logout_From_Firebase
                // }
                onClick={() =>
                  // Logout_From_Firebase();
                  logoutFromJWT()
                }
              >
                <LogIn />
                <span>Log Out</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
export default translate(Rightbar);
