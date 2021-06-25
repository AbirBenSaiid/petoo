import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { login, videErrors } from "../redux/authentification/action";
import { toast } from "react-toastify";
// import man from "../assets/images/dashboard/profile.jpg";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  TabContent,
  TabPane,
} from "reactstrap";
// import {
//   firebase_app,
//   googleProvider,
//   facebookProvider,
//   Jwt_token,
// } from "../data/config";
// import { handleResponse } from "../services/fack.backend";
// import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { Facebook } from "react-feather";
import {
  Password,
  EmailAddress,
  RememberPassword,
  ForgotPassword,
  LoginWithJWT,
} from "../constant";
import { useDispatch, useSelector } from "react-redux";

const Logins = (props) => {
  const dispatch = useDispatch();

  const [toggleEnableSignIn, setToggleEnableSignIn] = useState(true);

  const [togglePassword, setTogglePassword] = useState(false);
  const [user, setUser] = useState({});
  const getUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); //{email, pass}
  };

  const loginBtn = () => {
    dispatch(login(user));
  };

 // On click on Enter button dispatch login action
 const KeyEnter = (e) => {
   // eslint-disable-next-line
  if (e.key=='Enter')
  dispatch(login(user));
} 

  const enableSignIn = () => {
    (user.email || "").split("").includes("@") &&
    (user.password || "").length > 5
      ? setToggleEnableSignIn(false)
      : setToggleEnableSignIn(true);
  };

  //error handling from Store-redux
  const arrErrors = useSelector((state) => state.userReducer.errors);
  const notif = useSelector((state) => state.userReducer.msg);
  useEffect(() => {
    if (arrErrors) {
      if (arrErrors.length > 0) {
        arrErrors.forEach((element) => {
          toast.error(element.msg, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 10000,
          });
        });
        dispatch(videErrors());
      }
    } else if (notif) {
      toast.error(notif, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 7000,
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [arrErrors, notif]);
  const isAuth = localStorage.getItem("token");
  return (
    <>
      {!isAuth ? (
        <Container fluid={true} className='p-0'>
          <Row>
            <Col xs='12'>
              <div className='login-card'>
                <div>
                  <div>
                    <a className='logo' href='index.html'>
                      <img
                        className='img-fluid for-light'
                        src={require("../assets/images/logo/login.png")}
                        alt=''
                      />
                      <img
                        className='img-fluid for-dark'
                        src={require("../assets/images/logo/login.png")}
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='login-main login-tab'>
                    <TabContent activeTab='jwt' className='content-login'>
                      <TabPane className='fade show' tabId='jwt'>
                        <Form className='theme-form'>
                          <h4>Sign In</h4>
                          <p>{"Enter your email & password to login"}</p>
                          <FormGroup>
                            <Label className='col-form-label'>
                              {EmailAddress}
                            </Label>
                            <Input
                              className='form-control'
                              type='email'
                              name='email'
                              required=''
                              placeholder='email'
                              onChange={getUser}
                              onKeyUp={enableSignIn}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label className='col-form-label'>{Password}</Label>
                            <Input
                              className='form-control'
                              type={togglePassword ? "text" : "password"}
                              onChange={getUser}
                              name='password'
                              placeholder='password'
                              required=''
                              onKeyUp={enableSignIn}
                              onKeyPress={(e)=>KeyEnter(e)}
                            />
                            <div
                              className='show-hide'
                              onClick={() => setTogglePassword(!togglePassword)}
                            >
                              <span
                                className={togglePassword ? "" : "show"}
                              ></span>
                            </div>
                          </FormGroup>
                          <div className='form-group mb-0'>
                            <div className='checkbox ml-3'>
                              <Input id='checkbox1' type='checkbox' />
                              <Label className='text-muted' for='checkbox1'>
                                {RememberPassword}
                              </Label>
                            </div>
                            <Link className='link' to='/forgetPwd'>
                              {ForgotPassword}
                            </Link>
                            <Button
                              color='primary'
                              disabled={toggleEnableSignIn}
                              id='signin'
                              className='btn-block'
                              onClick={() => {
                                // loginWithJwt(email, password);
                                loginBtn();
                              }}
                            >
                              {LoginWithJWT}
                            </Button>
                          </div>
                          <h6 className='text-muted mt-4 or'>
                            {"Or Sign in with"}
                          </h6>
                          {/* <div className='social mt-4'>
                            <div className='btn-showcase'>
                              <Button color='light' onClick={() => {}}>
                                <Facebook className='txt-fb' />
                              </Button>
                              <Button color='light' onClick={() => {}}>
                                <i className='icon-social-google txt-googleplus'></i>
                              </Button>
                            </div>
                          </div> */}
                          <p className='mt-4 mb-0'>
                            {"Don't have account?"}
                            <Link className='ml-2' to='/register'>
                              CreateAccount
                            </Link>
                          </p>

                           <Link className='ml-2' to='/home'>
                            <div style={{ margin: "0",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  }}>
                          <button  type="button" className="btn btn-info">Return to home page</button>
                          </div>
                          </Link> 
                        </Form>
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <Redirect to={`${process.env.PUBLIC_URL}/dashboard/`} />
      )}
    </>
  );
};

export default withRouter(Logins);
