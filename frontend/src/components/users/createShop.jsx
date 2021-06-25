import React, { Fragment,useState, useEffect } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import { Submit,Cancel,} from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { registerShop, videErrors, resetUserReducer } from "../../redux/authentification/action";
import { toast } from "react-toastify";


const CreateShop = ({history}) => { 
  const dispatch = useDispatch()
  const [shopRegister, setShopRegister] = useState({});
  const [legalContact, setLegalContact] = useState({});
  const getLegalContact = (e) =>
  setLegalContact({ ...legalContact,  [e.target.name]: e.target.value });

  const getShopRegister = (e) =>
setShopRegister({ ...shopRegister, legalContact, [e.target.name]: e.target.value });

const registerUser = () => {
  dispatch(registerShop(shopRegister, history));
  dispatch(resetUserReducer)
};

  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } } // DropZone reltated
  const handleChangeStatus = ({ meta, file }, status) => {
  }  // DropZone reltated

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
    <Fragment>
      <Breadcrumb parent="Forms" title="Create Shop" />
      <Container fluid={true}>
        <Row>
          
          
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Create Shop Account</h5>
                  </CardHeader>
                  <CardBody>
                    <Form className="theme-form mega-form">
                      <h6>Legal Contact</h6>
                      <FormGroup>
                        <Label className="col-form-label">First Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" name='prenom' onChange={getLegalContact}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Last Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" name='nom' onChange={getLegalContact}/>
                        </FormGroup>

                        <label className="pb-4">Full Adress</label>
                    <div className="form-inline theme-form billing-form">
                      <FormGroup>
                        <Input className="form-control" type="text" placeholder="Adress"  name='adresse' onChange={getLegalContact}/>
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text"  placeholder="City/State" name='ville' onChange={getLegalContact}/>
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" placeholder="Postal Code" name='codePostale' onChange={getLegalContact}/>
                      </FormGroup>
                    </div>

                      
                      <FormGroup>
                        <Label className="col-form-label">E-mail</Label>
                        <Input className="form-control" type="email" placeholder="Enter email" name='email'  onChange={getLegalContact}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Contact Number</Label>
                        <Input className="form-control" type="Number" placeholder="Enter contact number" name='phoneNumber' onChange={getLegalContact}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">CIN</Label>
                        <Input className="form-control" type="Number" placeholder="Enter CIN" name='CIN' onChange={getLegalContact}/>
                      </FormGroup>
                      <hr className="mt-4 mb-4" />


                      <h6>Shop Information</h6>
                      <FormGroup>
                        <Label className="col-form-label">Shop Name</Label>
                        <Input className="form-control" type="text" placeholder="Shop Name"   name='shopName' onChange={getShopRegister}/>
                      </FormGroup>
                      {/* <FormGroup>
                        <Label className="col-form-label">{Website}</Label>
                        <Input className="form-control" type="text" placeholder="Website" />
                      </FormGroup> */}
                      
                      <FormGroup>
                        <Label className="col-form-label">Phone Number</Label>
                        <Input className="form-control" type="text" placeholder="Phone " name='phoneNumber' onChange={getShopRegister}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Email</Label>
                        <Input className="form-control" type="text" placeholder="Email" name='email' onChange={getShopRegister}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Password</Label>
                        <Input className="form-control" type="password" placeholder="******" name='password' onChange={getShopRegister}/>
                      </FormGroup>

                      
                    <label className="pb-4">Full Adress</label>
                    <div className="form-inline theme-form billing-form">
                      <FormGroup>
                        <Input className="form-control" type="text" placeholder="Adress" name='adresse' onChange={getShopRegister}/>
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text"  placeholder="City/State"  name='ville' onChange={getShopRegister}/>
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text"  placeholder="Postal Code" name='codePostale' onChange={getShopRegister}/>
                      </FormGroup>
                    </div>


                    
                      <FormGroup>
                        <Label className="col-form-label">Tax Number</Label>
                        <Input className="form-control" type="text" placeholder="Tax Number" name='taxNumber' onChange={getShopRegister}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">About</Label>
                        <Input className="form-control" type="text" placeholder="About" name='about' onChange={getShopRegister}/>
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Shipping Fees</Label>
                        <Input className="form-control" type="text" placeholder="ShippingFees"  name='shippingFees' onChange={getShopRegister}/>
                      </FormGroup>
                      {/* <FormGroup>
                        <Label className="col-form-label">Etc etc</Label>
                        <Input className="form-control" type="text" placeholder="etc..etc" />
                      </FormGroup> */}
                    </Form>
                    <hr className="mt-4 mb-4" />

                    

                    {/* Drop ZOne Starts Here */}
                    
                            <CardHeader>
                                <h5>Shop Logo Or Image</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            maxFiles={1}
                                            multiple={false}
                                            canCancel={false}
                                            inputContent="Drop A File"
                                            styles={{
                                                dropzone: { height: 200 },
                                                dropzoneActive: { borderColor: 'green' },
                                            }}
                                        />
                                    </div>
                                </Form>
                            </CardBody>
                        
                        {/* Drop ZOne Ends Here */}
                  </CardBody>
                  <CardFooter>
                      <Button color="primary" className="mr-1" onClick={() => registerUser()}>{Submit}</Button>
                      <Button color="secondary">{Cancel}</Button>
                  </CardFooter>
                </Card>
              </Col>
            
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateShop;