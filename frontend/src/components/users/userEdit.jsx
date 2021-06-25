import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Media,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import DatePicker from "react-datepicker";
import { userEdit } from "../../redux/currentUser/action";
import { useHistory } from "react-router";

const UserEdit = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser.user);
  const {
    idUser,
    phoneNumber,
    dateNaissance,
    about,
    email,
    nom,
    prenom,
    adresse,
    profilePicture,
    codePostale,
    ville,
    role,
  } = useSelector((state) => state.currentUser.user);

  const [togglePassword, setTogglePassword] = useState(false);
  const HideShowPassword = (tPassword) => {
    setTogglePassword(!tPassword);
  };

  const [enable, setEnable] = useState(false);
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [pass, setPass] = useState("");

  const getPass1 = (e) => {
    setPass1(e.target.value);
    checkPass();
  };
  const getPass2 = (e) => {
    setPass2(e.target.value);
    checkPass();
  };
  // console.log(pass2);
  // console.log(pass1);
  const checkPass = () => {
    console.log(pass);
    if (pass1 === pass2 && pass1.length > 5) {
      setPass(pass2);
      setEnable(false);
    } else setEnable(true);
  };

  const [editedUser, setEditedUser] = useState(user);
  const [startDate, setstartDate] = useState(Number(dateNaissance)); //Date picker related
  const handleChange = (date) => {
    //Date Picker related
    setstartDate(date);
  };
  const getEditedUser = (e) => {
    // e.preventDefault();
    checkPass();
    if (pass !== "")
      setEditedUser({
        ...editedUser,
        idUser,
        password: pass,
        dateNaissance: Number(startDate).toString(),
        [e.target.name]: e.target.value,
      });
    else
      setEditedUser({
        ...editedUser,
        idUser,
        dateNaissance: Number(startDate).toString(),
        [e.target.name]: e.target.value,
      });
  };
  // console.log(editedUser);

  const sendModifs = () => {
    if (pass1 === pass2) dispatch(userEdit(editedUser, history));
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <Breadcrumb parent='Users' title='Edit Profile' />
      <Container fluid={true}>
        <div className='edit-profile'>
          <Row>
            {/* Main Details Starts */}
            <Col xl='5'>
              <Card>
                <CardHeader>
                  <h4 className='card-title mb-0'>My Profile </h4>
                  <div className='card-options'>
                    <a className='card-options-collapse' href='#javascript'>
                      <i className='fe fe-chevron-up'></i>
                    </a>
                    <a className='card-options-remove' href='#javascript'>
                      <i className='fe fe-x'></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row className='mb-2'>
                      <div className='col-auto'>
                        <Media
                          className='img-70 rounded-circle'
                          alt=''
                          src={profilePicture}
                        />
                      </div>
                      <Col>
                        <h3 className='mb-1'>
                          {prenom} {nom}{" "}
                        </h3>
                        <p className='mb-4'>{role}</p>
                      </Col>
                    </Row>
                    <FormGroup>
                      <h6 className='form-label'>Bio</h6>
                      <Input
                        name='about'
                        type='textarea'
                        className='form-control'
                        rows='5'
                        defaultValue={about}
                        onChange={getEditedUser}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className='form-label'>E-mail Adress</Label>
                      <div
                        className='show-hide'
                        onClick={() => HideShowPassword(togglePassword)}
                      >
                        <span className={togglePassword ? "" : "show"}></span>
                      </div>
                      <Input
                        name='email'
                        className='form-control'
                        placeholder='your-email@domain.com'
                        defaultValue={email}
                        onChange={getEditedUser}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label className='form-label'>Password</Label>
                      <Input
                        onChange={getPass1}
                        className='form-control'
                        required=''
                        type={togglePassword ? "text" : "password"}
                        placeholder='*******'
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label className='form-label'>Retype Password</Label>
                      <Input
                        className='form-control'
                        required=''
                        type={togglePassword ? "text" : "password"}
                        placeholder='*******'
                        onChange={getPass2}
                      />
                    </FormGroup>

                    <div className='form-footer'>
                      {/* <button className='btn btn-primary btn-block'>
                        {Save}
                      </button> */}
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            {/* Main Details Ends */}

            {/* General Details Starts */}
            <Col xl='7'>
              <Form className='card'>
                <CardHeader>
                  <h4 className='card-title mb-0'>Edit Profile</h4>
                  <div className='card-options'>
                    <a className='card-options-collapse' href='#javascript'>
                      <i className='fe fe-chevron-up'></i>
                    </a>
                    <a className='card-options-remove' href='#javascript'>
                      <i className='fe fe-x'></i>
                    </a>
                  </div>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>First Name</Label>
                        <Input
                          name='prenom'
                          className='form-control'
                          type='text'
                          placeholder='First Nae'
                          defaultValue={prenom}
                          onChange={getEditedUser}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>Last Name</Label>
                        <Input
                          name='nom'
                          className='form-control'
                          type='text'
                          placeholder='Last Name'
                          defaultValue={nom}
                          onChange={getEditedUser}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='12'>
                      <FormGroup>
                        <Label className='form-label'>Phone Number</Label>
                        <Input
                          name='phoneNumber'
                          className='form-control'
                          type='number'
                          placeholder=' 12 345 678'
                          defaultValue={phoneNumber}
                          onChange={getEditedUser}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='12'>
                      <FormGroup>
                        <Label className='form-label'>Adress</Label>
                        <Input
                          name='adresse'
                          className='form-control'
                          type='text'
                          placeholder='Home Address'
                          defaultValue={adresse}
                          onChange={getEditedUser}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>City</Label>
                        <Input
                          name='ville'
                          className='form-control'
                          type='text'
                          placeholder='City'
                          defaultValue={ville}
                          onChange={getEditedUser}
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='6' md='6'>
                      <FormGroup>
                        <Label className='form-label'>Postal Code</Label>
                        <Input
                          name='codePostale'
                          className='form-control'
                          type='number'
                          placeholder='ZIP Code'
                          defaultValue={codePostale}
                          onChange={getEditedUser}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='12'>
                      <FormGroup className='form-row'>
                        <Label className='form-label'>Date of Birth</Label>

                        <div className='input-group'>
                          <DatePicker
                            className='form-control digits'
                            selected={startDate}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Form>
              <div className='text-center'>
                {" "}
                <button
                  disabled={enable}
                  className='btn btn-primary'
                  onClick={() => sendModifs()}
                >
                  UpdateProfile
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default UserEdit;
