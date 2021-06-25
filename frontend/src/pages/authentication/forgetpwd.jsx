import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/login.png";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import {
  NewPassword,
  RetypePassword,
  Done,
  EnterOTP,
  Resend,
  ResetPassword,
  SignIn,
  Send,
  EmailAddress,
  PasswordMismatch,
  PasswordMatch,
} from "../../constant";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  resetPassword,
  validOTP,
  videErrors,
} from "../../redux/authentification/action";

const Forgetpwd = (props) => {
  const dispatch = useDispatch();
  const [togglePassword, setTogglePassword] = useState(false);
  const [password, setPassword] = useState("");
  const [openDone, setOpenDone] = useState(true);
  const [openDoneReset, setOpenDoneReset] = useState(false);

  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");

  const [pass2, setPass2] = useState("");

  const getOtp1 = (e) => {
    setOtp1(e.target.value);
  };
  const getOtp2 = (e) => {
    setOtp2(e.target.value);
  };
  const getOtp3 = (e) => {
    setOtp3(e.target.value);
  };
  const getPass2 = (e) => {
    setPass2(e.target.value);
  };
  const [email, setEmail] = useState("");
  const getEmail = (e) => setEmail(e.target.value);

  const sendMail = () => {
    dispatch(resetPassword(email));
    if (validEmail) {
      setOpenDone(false);
      setOpenDoneReset(!openDoneReset);
    }
    console.log(openDoneReset + " reset");
  };
  const validEmail = useSelector((state) => state.userReducer.user);
  // console.log(validEmail);
  const confirmOTP = () => {
    if (password === pass2)
      //check matchi matchi password
      dispatch(
        validOTP(validEmail, otp1 + otp2 + otp3, password, props.history)
      );
  };
  const Onpaste = (e) => {
    let clipboardData = e.clipboardData || window.clipboardData;
    let pastedData = clipboardData.getData("Text");
    if (pastedData) {
      setOtp2(pastedData[2] + pastedData[3]);
      setOtp3(pastedData[4] + pastedData[5]);
    }
  };
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword);
  };
  const [sendResetEmail, setSendResetEmail] = useState(false);

  const successSendMail = useSelector((state) => state.userReducer.msg);
  // console.log(successSendMail)
  const arrErrors = useSelector((state) => state.userReducer.errors);
  // console.log(arrErrors);
  useEffect(() => {
    if (successSendMail) {
      toast.success(successSendMail, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000, //stay 10 secondes
      });
      // console.log("successSendMail");
      setSendResetEmail(true);
      // setTimeout(function () {
      //   setSendResetEmail(false);
      // }, 15000); // 3 minutes
      dispatch(videErrors());
    } else if ((arrErrors || []).length > 0) {
      arrErrors.forEach((el) => {
        toast.error(el.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [successSendMail, arrErrors]);
  return (
    <Container fluid={true}>
      <Row>
        <Col xs='12'>
          <div className='login-card'>
            <div>
              <div>
                <a className='logo' href='#javascript'>
                  <img
                    className='img-fluid for-light'
                    src={logo}
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
                  <h4>{ResetPassword}</h4>
                  <FormGroup>
                    <FormGroup>
                      <Label className='col-form-label'>{EmailAddress}</Label>
                      <Input
                        className='form-control'
                        placeholder='test@gmail.com'
                        onChange={(e) => getEmail(e)}
                      />
                    </FormGroup>
                    <Row>
                      <Col xs='12'>
                        <Button
                          color='primary'
                          className='btn-block m-t-10'
                          // type='submit'
                          disabled={sendResetEmail}
                          onClick={() => sendMail()}
                        >
                          {Send}
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                  <div className='text-center mt-4 mb-4'>
                    <span
                      className='reset-password-link'
                      style={
                        openDoneReset
                          ? { fontSize: "14px", cursor: "default" }
                          : { fontSize: "0px" }
                      }
                    >
                      {"If don't receive OTP?"}  
                      <span
                        className='btn-link text-danger'
                        onClick={() => sendMail()}
                        style={
                          openDoneReset
                            ? { fontSize: "14px", cursor: "pointer" }
                            : { fontSize: "0px" }
                        }
                      >
                        {Resend}
                      </span>
                    </span>
                  </div>
                  <FormGroup>
                    <Label className='col-form-label pt-0'>{EnterOTP}</Label>
                    <Row>
                      <Col>
                        <Input
                          className='form-control text-center opt-text'
                          type='text'
                          placeholder='00'
                          maxLength='2'
                          value={otp1}
                          onChange={(e) => {
                            getOtp1(e);
                          }}
                          onPaste={(e) => Onpaste(e)}
                        />
                      </Col>
                      <Col>
                        <Input
                          className='form-control text-center opt-text'
                          type='text'
                          placeholder='00'
                          value={otp2}
                          maxLength='2'
                          onChange={(e) => {
                            getOtp2(e);
                          }}
                        />
                      </Col>
                      <Col>
                        <Input
                          className='form-control text-center opt-text'
                          type='text'
                          placeholder='00'
                          value={otp3}
                          maxLength='2'
                          onChange={(e) => {
                            getOtp3(e);
                          }}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <h6 className='mt-4'>{"Create Your Password"}</h6>
                  <FormGroup>
                    <Label className='col-form-label'>{NewPassword}</Label>
                    <Input
                      className='form-control'
                      type={togglePassword ? "text" : "password"}
                      name='login[password]'
                      value={password}
                      onChange={(e) => handleChange(e)}
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
                  <FormGroup>
                    <Label className='col-form-label'>
                      {password.length === 0 ? (
                        RetypePassword
                      ) : password === pass2 ? (
                        <span style={{ color: "green" }}>{PasswordMatch}</span>
                      ) : (
                        <span style={{ color: "red" }}>{PasswordMismatch}</span>
                      )}
                    </Label>
                    <Input
                      className='form-control'
                      type='password'
                      name='login[password]'
                      required=''
                      placeholder='*********'
                      onChange={(e) => getPass2(e)}
                    />
                  </FormGroup>
                  <FormGroup className='mb-0'>
                    <br />
                    <Button
                      color='primary'
                      className='btn-block'
                      disabled={openDone}
                      onClick={() => confirmOTP()}
                    >
                      {Done}
                    </Button>
                  </FormGroup>
                  <p className='mt-4 mb-0'>
                    {"Already have an password?"}
                    <Link className='ml-2' to='/login'>
                      {SignIn}
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Forgetpwd;
