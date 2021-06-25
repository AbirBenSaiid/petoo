import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import cat from "../../assets/images/appointment/app-ent.jpg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  // Media,
} from "reactstrap";
import { Clock } from "react-feather";
import {
  CouponCode,
  NewsUpdate,
  Appointment,
  Tomorrow,
  Yesterday,
  Pending,
  Today,
  VenterLoren,
  Done,
  JohnLoren,
} from "../../constant";
import Slider from "react-slick";
// import { current } from "../../redux/currentUser/action";

const Default = (props) => {
  const dispatch = useDispatch();
  const [daytimes, setDayTimes] = useState();
  const today = new Date();
  const curHr = today.getHours();
  const curMi = today.getMinutes();
  const [meridiem, setMeridiem] = useState("AM");

  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    centerPadding: "5px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { profilePicture } = useSelector((state) => state.currentUser.user);

  useEffect(() => {
    if (curHr < 12) {
      setDayTimes("Good Morning");
    } else if (curHr < 18) {
      setDayTimes("Good Afternoon");
    } else {
      setDayTimes("Good Evening");
    }

    if (curHr >= 12) {
      setMeridiem("PM");
    } else {
      setMeridiem("AM");
    }
    console.log(msg);
    // eslint-disable-next-line
  }, [msg]);

  return (
    <Fragment>
      <Breadcrumb parent='Dashboard' title='Home' />
      <Container fluid={true}>
        <Row className='second-chart-list third-news-update justify-content-md-center '>
          {/* Good Morning Components */}
          <Col xl='8 xl-10' lg='12' className='morning-sec box-col-12'>
            <Card className='o-hidden profile-greeting'>
              <CardBody>
                <div className='media'>
                  <div className='badge-groups w-100'>
                    <div className='badge f-12'>
                      <Clock
                        style={{ width: "16px", height: "16px" }}
                        className='mr-1'
                      />
                      <span id='txt'>
                        {curHr}:{curMi < 10 ? "0" + curMi : curMi} {meridiem}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='greeting-user text-center'>
                  <div className='profile-vector'>
                    <img
                      className='img-fluid'
                      src={profilePicture}
                      style={{
                        border: "3px solid white",
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                      alt='Profile Pic :)'
                    />
                  </div>
                  <h4 className='f-w-600'>
                    <span id='greeting'>{daytimes}</span>{" "}
                    <span className='right-circle'>
                      <i className='fa fa-check-circle f-14 middle'></i>
                    </span>
                  </h4>
                  <p>
                    <span>
                      {" "}
                      {
                        "You can click on your pet picture to access his profile"
                      }
                    </span>
                  </p>
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      paddingBottom: "2.5%",
                      // alignItems: "center",
                    }}
                  >
                    <div style={{ padding: "3%" }}>
                      <img
                        src='https://static.wamiz.com/images/animaux/chiens/large/husky-siberien.jpg'
                        style={{
                          border: "3px solid white",
                          overflow: "hidden",
                          position: "relative",
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                        }}
                        alt='Pet Pic :)'
                      />
                    </div>
                    <div style={{ padding: "3%" }}>
                      <img
                        src='https://jardinage.lemonde.fr/images/dossiers/2019-10/cacatoes-1-094044.jpg'
                        style={{
                          border: "3px solid white",
                          overflow: "hidden",
                          position: "relative",
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                        }}
                        alt='Pet Pic :)'
                      />
                    </div>
                    <div style={{ padding: "3%" }}>
                      <img
                        src='https://timesofindia.indiatimes.com/photo/67586673.cms'
                        style={{
                          border: "3px solid white",
                          overflow: "hidden",
                          position: "relative",
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                        }}
                        alt='Pet Pic :)'
                      />
                    </div>
                  </Row>
                  <Link to='/app/blog/blogDetail'>
                    <div className='whatsnew-btn'>
                      <button className='btn btn-primary'>
                        {"Whats New !"}
                      </button>
                    </div>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* Appointments Box Starts Here */}
          <Col xl='12' className='appointment'>
            <Card>
              <CardHeader className='card-no-border'>
                <div className='header-top'>
                  <h5 className='m-0'>{Appointment}</h5>
                  <div className='card-header-right-icon'></div>
                </div>
              </CardHeader>
              <CardBody className='pt-0'>
                <div className='appointment-table table-responsive'>
                  <table className='table table-bordernone'>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className='img-fluid img-40 rounded-circle mb-3'
                            src={cat}
                            alt=''
                          />
                          <div className='status-circle bg-primary'></div>
                        </td>
                        <td className='img-content-box'>
                          <span className='d-block'>{VenterLoren}</span>
                          <span className='font-roboto'>Now</span>
                        </td>
                        <td>
                          <p className='m-0 font-primary'>{"28 Sept"}</p>
                        </td>
                        <td className='text-right'>
                          <div className='button btn btn-primary'>
                            {Done}
                            <i className='fa fa-check-circle ml-2'></i>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className='img-fluid img-40 rounded-circle'
                            src={
                              require("../../assets/images/appointment/app-ent.jpg")
                                .default
                            }
                            alt=''
                          />
                          <div className='status-circle bg-primary'></div>
                        </td>
                        <td className='img-content-box'>
                          <span className='d-block'>{JohnLoren}</span>
                          <span className='font-roboto'>{"11:00"}</span>
                        </td>
                        <td>
                          <p className='m-0 font-primary'>{"22 Sept"}</p>
                        </td>
                        <td className='text-right'>
                          <div className='button btn btn-danger'>
                            {Pending}
                            <i className='fa fa-check-circle ml-2'></i>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </Col>
          {/* Appointments Box Ends Here */}
          <Col xl='6'>
            <Card>
              <CardHeader>
                <div className='header-top'>
                  <h5 className='m-0'>{NewsUpdate}</h5>
                  <div className='card-header-right-icon'>
                    <select className='button btn btn-primary'>
                      <option>{Today}</option>
                      <option>{Tomorrow}</option>
                      <option>{Yesterday}</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardBody className='p-0'>
                <div className='news-update'>
                  <h6>{"36% off For pixel lights Couslations Types."}</h6>
                  <span>{"Lorem Ipsum is simply dummy..."}</span>
                </div>
                <div className='news-update'>
                  <h6>{"We are produce new product this"}</h6>
                  <span>
                    {" "}
                    {"Lorem Ipsum is simply text of the printing... "}
                  </span>
                </div>
                <div className='news-update'>
                  <h6>{"50% off For COVID Couslations Types."}</h6>
                  <span>{"Lorem Ipsum is simply dummy..."}</span>
                </div>
              </CardBody>
              <div className='card-footer'>
                <div className='bottom-btn'>
                  <a href='#javascript'>{"More..."}</a>
                </div>
              </div>
            </Card>
          </Col>
          {/* New Box Ends Here */}

          {/* The Row containing BOTH Appointments and Best Seller Starts Here */}
          <Col xl='6 xl-50' className='appointment-sec box-col-6'>
            <Row>
              {/* best Seller Box Starts Here */}
              <Col xl='12' className='news box-col-6'>
                <Card className='offer-box'>
                  <CardBody className='p-0'>
                    <div className='offer-slider'>
                      <div
                        className='carousel slide'
                        id='carouselExampleCaptions'
                        data-ride='carousel'
                      >
                        <div className='carousel-inner'>
                          <Slider {...settings}>
                            <div className='carousel-item active'>
                              <div className='selling-slide row'>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='left-content'>
                                      <p>{"Much More Selling product"}</p>
                                      <h4 className='f-w-600'>
                                        {"Best Selling Product"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"78% offer"}
                                      </span>
                                      <span className='badge badge-dotted badge-pill ml-2'>
                                        {CouponCode} : {"12345"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-12'>
                                  <div className='center-img'>
                                    <img
                                      className='img-fluid'
                                      src={
                                        require("../../assets/images/dashboard-2/offer-shoes-3.png")
                                          .default
                                      }
                                      alt='...'
                                    />
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='right-content'>
                                      <p>{"Money back Guarrantee"}</p>
                                      <h4 className='f-w-600'>
                                        {"Women Straight Kurta"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"$100.00"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='carousel-item'>
                              <div className='selling-slide row'>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='left-content'>
                                      <p>{"Money back Guarrantee"}</p>
                                      <h4 className='f-w-600'>
                                        {"Women Straight Kurta"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"$100.00"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-12'>
                                  <div className='center-img'>
                                    <img
                                      className='img-fluid'
                                      src={
                                        require("../../assets/images/dashboard-2/offer-shoes-3.png")
                                          .default
                                      }
                                      alt='...'
                                    />
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='right-content'>
                                      <p>{"Money back Guarrantee"}</p>
                                      <h4 className='f-w-600'>
                                        {"Nike Air Shoes"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"$120.55"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='carousel-item'>
                              <div className='selling-slide row'>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='left-content'>
                                      <p>{"Maximum Selling product"}</p>
                                      <h4 className='f-w-600'>
                                        {"Best Selling Product"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"50% offer"}
                                      </span>
                                      <span className='badge badge-dotted badge-pill ml-2'>
                                        {CouponCode} : {"21546"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-12'>
                                  <div className='center-img'>
                                    <img
                                      className='img-fluid'
                                      src={
                                        require("../../assets/images/dashboard-2/offer-shoes-3.png")
                                          .default
                                      }
                                      alt='...'
                                    />
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='right-content'>
                                      <p>{"Money back Guarrantee"}</p>
                                      <h4 className='f-w-600'>
                                        {"Nike Air Shoes"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"$120.55"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl='12 ' className='news box-col-6'>
                <Card className='offer-box'>
                  <CardBody className='p-0'>
                    <div className='offer-slider'>
                      <div
                        className='carousel slide'
                        id='carouselExampleCaptions'
                        data-ride='carousel'
                      >
                        <div className='carousel-inner'>
                          <Slider {...settings}>
                            <div className='carousel-item active'>
                              <div className='selling-slide row'>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='left-content'>
                                      <p>{"Much More Selling product"}</p>
                                      <h4 className='f-w-600'>
                                        {"Best Selling Product"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"78% offer"}
                                      </span>
                                      <span className='badge badge-dotted badge-pill ml-2'>
                                        {CouponCode} : {"12345"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-12'>
                                  <div className='center-img'>
                                    <img
                                      className='img-fluid'
                                      src={
                                        require("../../assets/images/dashboard-2/offer-shoes-3.png")
                                          .default
                                      }
                                      alt='...'
                                    />
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='right-content'>
                                      <p>{"Money back Guarrantee"}</p>
                                      <h4 className='f-w-600'>
                                        {"Women Straight Kurta"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"$100.00"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='carousel-item'>
                              <div className='selling-slide row'>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='left-content'>
                                      <p>{"Money back Guarrantee"}</p>
                                      <h4 className='f-w-600'>
                                        {"Women Straight Kurta"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"$100.00"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-12'>
                                  <div className='center-img'>
                                    <img
                                      className='img-fluid'
                                      src={
                                        require("../../assets/images/dashboard-2/offer-shoes-3.png")
                                          .default
                                      }
                                      alt='...'
                                    />
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='right-content'>
                                      <p>{"Money back Guarrantee"}</p>
                                      <h4 className='f-w-600'>
                                        {"Nike Air Shoes"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"$120.55"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='carousel-item'>
                              <div className='selling-slide row'>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='left-content'>
                                      <p>{"Maximum Selling product"}</p>
                                      <h4 className='f-w-600'>
                                        {"Best Selling Product"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"50% offer"}
                                      </span>
                                      <span className='badge badge-dotted badge-pill ml-2'>
                                        {CouponCode} : {"21546"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-12'>
                                  <div className='center-img'>
                                    <img
                                      className='img-fluid rounded'
                                      src='https://www.mercado24.com/wp-content/uploads/2020/07/61L4nrFQ0mL._SL1000_.jpg'
                                      alt='...'
                                    />
                                  </div>
                                </div>
                                <div className='col-xl-4 col-md-6'>
                                  <div className='d-flex'>
                                    <div className='right-content'>
                                      <p>{"Money back Guarrantee"}</p>
                                      <h4 className='f-w-600'>
                                        {"Nike Air Shoes"}
                                      </h4>
                                      <span className='badge badge-white badge-pill'>
                                        {"$120.55"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              {/* best Seller Box Ends Here */}
            </Row>
          </Col>

          {/* The Row containing BOTH Appointments and Best Seller Ends Here */}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Default;
