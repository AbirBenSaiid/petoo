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
  Media,
} from "reactstrap";
import { Clock } from "react-feather";
import { current, videErrors } from "../../redux/currentUser/action";

import {
  // CouponCode,
  NewsUpdate,
  // Appointment,
  Tomorrow,
  Yesterday,
  // Pending,
  Today,
  // VenterLoren,
  // Done,
  // JohnLoren,
} from "../../constant";
// import Slider from "react-slick";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
// import app from "../app";

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
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  const { profilePicture } = useSelector((state) => state.currentUser.user);
  const pets = useSelector((state) => state.currentUser.myPets);
  const msg = useSelector((s) => s.currentUser.msg);
  const appointments = useSelector((s) => s.currentUser.myAppointments);
  const vets = useSelector((s) => s.populationReducer.vetos);

  const [vetos, setVetos] = useState([]);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    dispatch(videErrors());
    dispatch(current());
    if (msg === "Profile edited successfully!")
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000,
      });
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
    setVetos(vets);
    console.log(vets);
    console.log(appointments);
    setApps(
      appointments &&
        appointments.filter((app, index) => {
          return index === 0 || index === 1 || index === 2 || index === 3;
        })
    );
    dispatch(videErrors());
    // eslint-disable-next-line
  }, [appointments]);

  return (
    <Fragment>
      <Breadcrumb parent='Dashboard' title='Home' />
      <Container fluid='true'>
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
                  <div className='profile-vector d-flex justify-content-center'>
                    <Media
                      className='rounded-circle border border-5 border-white'
                      src={profilePicture}
                      fluid='true'
                      height='130px'
                      width='130px'
                      alt=''
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
                      {pets.length
                        ? "You can click on your pet picture to access his profile"
                        : "Starting exploring our website ♥"}
                    </span>
                  </p>
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      paddingBottom: "2.5%",
                      alignItems: "center",
                    }}
                  >
                    {pets.map((pet, i) => (
                      <Link to={`/dashboard/petProfile/${pet.idPet}`} key={i}>
                        <div>
                          <h6 className='text-white'>{pet.name}</h6>
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
                      </Link>
                    ))}
                  </Row>
                  <Link to='/dashboard/blogDetail'>
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
          <Col xl='6' className='xl-100 box-col-12'>
            <Card>
              <CardBody className='cal-date-widget'>
                <Row>
                  <Col xl='6' xs='12' md='6' sm='6'>
                    <div className='cal-info text-center'>
                      <h2>3</h2>
                      <div className='d-inline-block mt-2'>
                        <span className='b-r-dark pr-3'>{"June"}</span>
                        <span className='pl-3'>{"2021"}</span>
                      </div>
                      <p className='mt-4 f-16 text-muted'>
                        {
                          "A dog is the only thing on earth that loves you more than you love yourself."
                        }
                      </p>
                    </div>
                  </Col>
                  <Col xl='6' xs='12' md='6' sm='6'>
                    <div className='cal-datepicker'>
                      <div
                        className='datepicker-here float-sm-right'
                        data-language='en'
                      >
                        <DatePicker
                          selected={startDate}
                          onChange={handleChange}
                          inline
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl='6' className='appointment'>
            <Card>
              <CardHeader className='card-no-border'>
                <div className='header-top'>
                  <h5 className='m-0'>Appointments</h5>
                  <div className='card-header-right-icon'></div>
                </div>
              </CardHeader>
              <CardBody className='pt-0'>
                {apps.length > 0 ? (
                  apps.map((app, i) => (
                    <div className='appointment-table table-responsive' key={i}>
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
                              <span className='d-block'>Date</span>
                              <span className='font-roboto'>
                                {app && app.date}
                              </span>
                            </td>
                            <td>
                              <p className='m-0 font-primary'></p>
                            </td>
                            <td className='text-right'>
                              {app &&
                              app.confirmedByOwner &&
                              app.confirmedByVet ? (
                                <div className='button btn btn-success'>
                                  Confirmed
                                  <i className='fa fa-check-circle ml-2'></i>
                                </div>
                              ) : app &&
                                app.confirmedByOwner &&
                                !app.confirmedByVet ? (
                                <div className='button btn btn-warning'>
                                  Pending
                                  <i className='fa fa-check-circle ml-2'></i>
                                </div>
                              ) : (
                                ""
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))
                ) : (
                  <div className='text-center'>
                    <h3>
                      <span className='d-block'>
                        Book an appointment first!
                      </span>
                    </h3>
                  </div>
                )}
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

          {/* The Row containing BOTH Appointments and Best Seller Ends Here */}
        </Row>
      </Container>
    </Fragment>
  );
};

export default Default;
