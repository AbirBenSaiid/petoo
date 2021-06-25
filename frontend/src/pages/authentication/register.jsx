import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {Container,Row,Col,Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap'

import { toast } from "react-toastify";
import { Facebook } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { register, videErrors } from "../../redux/authentification/action";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [togglePassword, setTogglePassword] = useState(false);
  // const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   setPassword(e.target.value);
  // };

  
  
  const Scrollmodaltoggle = () => setscrollingModal(!scrollingmodal);

  const [scrollingmodal, setscrollingModal] = useState(false);
  const [userRegister, setUserRegister] = useState({});
  const getUserRegister = (e) =>
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword);
  };

  const registerUser = () => {
    dispatch(register(userRegister, history));
  };
  //managing errors if exist
  const arrErrors = useSelector((state) => state.userReducer.errors);
  //sucess register
  const successRegister = useSelector((state) => state.userReducer.msg);

  useEffect(() => {
    if (arrErrors.length > 0) {
      arrErrors.forEach((el) => {
        toast.error(el.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      });
    } else if (successRegister) {
      toast.success(successRegister, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [arrErrors, successRegister]);

  return (
    <Container fluid={true} className='p-0'>
      <Row>
        <Col xs='12'>
          <div className='login-card'>
            <div>
              <div>
                <a className='logo' href='#javascript'>
                  <img
                    className='img-fluid for-light'
                    src={require("../../assets/images/logo/login.png")}
                    alt='looginpage'
                  />
                  <img
                    className='img-fluid for-dark'
                    src={require("../../assets/images/logo/logo_dark.png")}
                    alt='looginpage'
                  />
                </a>
              </div>
              <div className='login-main'>
                <Form className='theme-form'>
                  <h4>{"Create your account"}</h4>
                  <p>{"Enter your personal details to create account"}</p>
                  <FormGroup>
                    <Label className='col-form-label pt-0'>Your Name</Label>
                    <div className='form-row'>
                      <Col xs='6'>
                        <Input
                          className='form-control'
                          type='text'
                          required=''
                          placeholder='First name'
                          name='prenom'
                          onChange={getUserRegister}
                        />
                      </Col>
                      <Col xs='6'>
                        <Input
                          className='form-control'
                          type='text'
                          required=''
                          placeholder='Last name'
                          name='nom'
                          onChange={getUserRegister}
                        />
                      </Col>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>Email Address</Label>
                    <Input
                      className='form-control'
                      type='email'
                      required=''
                      placeholder='Test@gmail.com'
                      name='email'
                      onChange={getUserRegister}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>Password</Label>
                    <Input
                      className='form-control'
                      type={togglePassword ? "text" : "password"}
                      name='password'
                      onChange={getUserRegister}
                      required=''
                      placeholder='*********'
                    />
                    <div
                      className='show-hide'
                      onClick={() => HideShowPassword(togglePassword)}
                    >
                      <span className={togglePassword ? "" : "show"}></span>
                    </div>
                  </FormGroup>
                  <div className='form-group mb-0'>
                    <div className='checkbox ml-3'>
                <Modal isOpen={scrollingmodal} toggle={Scrollmodaltoggle}>
                      <ModalHeader toggle={Scrollmodaltoggle}>
                      Privacy Policy
                      </ModalHeader>
                      <ModalBody>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
                        <p>{"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}</p>
                        <p>{"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}</p>
                      </ModalBody>
                      <div class="col-md-12 text-center">
                      <ModalFooter>
                        
                        <Button type="button" class="btn btn-primary" color="primary"   onClick={Scrollmodaltoggle}>Accept</Button>
                      </ModalFooter>
                      </div>
                </Modal>
                      <Input id='checkbox1' type='checkbox' required='' />
                      <Label className='text-muted' for='checkbox1'>
                        {"Agree with"}
                        <a className='ml-2' href="/" onClick={Scrollmodaltoggle}>
                          PrivacyPolicy
                        </a>
                      </Label>
                    </div>
                    <Button
                      color='primary'
                      className='btn-block'
                      // type='submit'
                      onClick={() => registerUser()}
                    >
                      CreateAccount
                    </Button>
                  </div>
                  <h6 className='text-muted mt-4 or'>{"Or signup with"}</h6>
                  {/* <div className='social mt-4'>
                    <div className='btn-showcase'>
                      <Button color='light'>
                        <Facebook className='txt-fb' />
                      </Button>
                      <Button color='light'>
                        <i className='icon-social-google txt-googleplus'></i>
                      </Button>
                    </div>
                  </div> */}
                  <p className='mt-4 mb-0'>
                    {"Already have an account?"}
                    <Link className='ml-2' to='/login'>
                      Sign In
                    </Link>
                  </p> 
                  <div style={{display: "flex"}}>
                    <Link className='ml-2' to='/registerVet'>
                            <div style={{ margin: "0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            }}>
                          <button  type="button" className="btn btn-info">Create a Vet Account</button>
                          </div>
                    </Link>
                    <Link className='ml-2' to='/home'>
                            <div style={{ margin: "0",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  }}>
                          <button  type="button" className="btn btn-primary">Return to home page</button>
                          </div>
                          </Link> 
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
