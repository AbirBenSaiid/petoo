import React, { Fragment, useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Button,Form,FormGroup,Label,Input} from 'reactstrap'

import background from '../assets/images/background.png'
import { useDispatch, useSelector } from "react-redux";
import { registerVet, videErrors } from "../redux/authentification/action";
import { toast } from "react-toastify";

const RegisterVet = ({history}) => {
const dispatch = useDispatch()
const [vetRegister, setVetRegister] = useState({});
const [gender, setGender] = useState("");

const getVetRegister = (e) =>
setVetRegister({ ...vetRegister, gender, [e.target.name]: e.target.value });


const registerUser = () => {
  dispatch(registerVet(vetRegister, history));
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
    <Fragment >

      <Container style={{backgroundImage: `url(${background})`, backgroundPosition: 'center',
                          backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} fluid={true}>                         
        <Row  className="justify-content-md-center" > 
          <Col sm={8} style={{margin: "30px"}}>         
            <Card >
              
              <CardHeader>
                <h5>Register a professional veterinary:</h5>
              </CardHeader>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                    <Col>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Fist Name</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text"  placeholder="Enter your first name..." name='prenom' onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Last Name</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" placeholder="Enter your last name..." name='nom' onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Date of birth</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="date" defaultValue="2018-01-01" onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>

                      <FormGroup className='m-t-15 custom-radio-ml'>
                      <div className='radio radio-primary'>
                        <Input
                          id='radio11'
                          type='radio'
                          name='radio1'
                          value='option1'
                          onClick={() => setGender("Male")}
                        />
                        <Label for='radio11'>Male</Label>
                      </div>
                      <div className='radio radio-secondary'>
                        <Input
                          id='radio22'
                          type='radio'
                          name='radio1'
                          value='option1'
                         onClick={() => setGender("Female")}
                        />
                        <Label for='radio22'>Female</Label>
                      </div>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Phone Number</Label>
                        <Col sm="9">
                          <Input className="form-control m-input digits" type="number" placeholder="Enter your professional phone number..." name='phoneNumber' onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Full Adress</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="text" placeholder="Adress" name='adresse' onChange={getVetRegister}/>
                          <Input className="form-control digits" type="text" placeholder="City" name='ville' onChange={getVetRegister}/>
                          <Input className="form-control digits" type="number" placeholder="Postal Code" name='codePostale' onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>
                    
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Professional Code (Code de Déontologie du Médecin Vétérinaire)</Label>
                        <Col sm="9">
                          <Input className="form-control m-input digits" type="number" placeholder="Code de Déontologie du Médecin Vétérinaire" name='proNumber' onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">CIN</Label>
                        <Col sm="9">
                          <Input className="form-control m-input digits" type="number" placeholder="Code de Déontologie du Médecin Vétérinaire" name='CIN' onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>

                      <FormGroup className="row mb-0">
                        <Label className="col-sm-3 col-form-label">Enter a breif summary of your resume</Label>
                        <Col sm="9">
                          <textarea className="form-control" rows="5" cols="5" placeholder="Resume / Work Experience / Certficates " name='about'onChange={getVetRegister}></textarea>
                        </Col>
                      </FormGroup>
                      <hr/>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">E-mail</Label>
                        <Col sm="9">
                          <Input className="form-control digits" type="email" placeholder="Enter your professional email" name='email'onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Password</Label>
                        <Col sm="9">
                          <Input className="form-control" type="password" placeholder="Password " name='password' onChange={getVetRegister}/>
                        </Col>
                      </FormGroup>
                      {/* <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">Retype you Password</Label>
                        <Col sm="9">
                          <Input className="form-control" type="password" placeholder="Password" />
                        </Col>
                      </FormGroup> */}
                      
                      
                      
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Col sm="9 offset-sm-3">

                    <Button  color="primary" className="mr-1"  onClick={() => registerUser()} >Submit</Button>
                    <Link className='ml-2' to='/home'>
                    <Button color="light" type="reset" >Cancel</Button>
                    </Link>
                  </Col>
                </CardFooter>
              </Form>
            </Card>
            
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RegisterVet;