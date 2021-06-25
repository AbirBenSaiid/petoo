import React, { Fragment , useState} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import { EmailAddress,Website,BillingInformation,Submit,Cancel,ContactNumber} from "../../constant";
import DatePicker from "react-datepicker";

const CreateVet = () => { 
  
  const [startDate, setstartDate] = useState(new Date()) //Date picker related
  const handleChange = date => { //Date Picker related
    setstartDate(date);
  };


  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } } // Image DropZone reltated
  const handleChangeStatus = ({ meta, file }, status) => {
  }  // Image DropZone reltated
  return (
    <Fragment>
      <Breadcrumb parent="Forms" title="Create Vet Account" />
      <Container fluid={true}>
        <Row>
          
          
              <Col sm="12">
                <Card>
                  <CardHeader>
                    <h5>Create Vet Account</h5>
                  </CardHeader>
                  <CardBody>
                    <Form className="theme-form mega-form">
                      <h6>The Veterinay Details:</h6>
                      {/* <FormGroup>
                        <Label className="col-form-label">First Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">Last Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" />
                      </FormGroup> */}

                      <FormGroup>
                        <Label className="col-form-label">Date Of Birth</Label>
                        {/* Date Picker */}
                        <FormGroup className="form-row">
                          <div className="col-xl-5 col-sm-9">
                            <div className="input-group">
                              <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} />
                            </div>
                          </div>
                        </FormGroup>
                      </FormGroup>

                      <FormGroup>
                        <Label className="col-form-label">Gender</Label>
                        <Input className="form-control" type="text" placeholder="Gender" />
                      </FormGroup>
                      {/* <FormGroup>
                        <Label className="col-form-label">Professional Email Adress</Label>
                        <Input className="form-control" type="email" placeholder="Enter email" />
                      </FormGroup> */}
                      <FormGroup>
                        <Label className="col-form-label">Professional Phone Number</Label>
                        <Input className="form-control" type="Number" placeholder="Enter contact number" />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">CIN</Label>
                        <Input className="form-control" type="Number" placeholder="Enter CIN" />
                      </FormGroup>
                      
                      {/* <FormGroup>
                        <Label className="col-form-label">Password</Label>
                        <Input className="form-control" type="text" placeholder="Website" />
                      </FormGroup> */}

                    <label className="pb-4">Work Full Adress</label>
                    <div className="form-inline theme-form billing-form">
                      <FormGroup>
                        <Input className="form-control" type="text" placeholder="Adress" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="City/State" />
                      </FormGroup>
                      <FormGroup>
                        <Input className="form-control" type="text" name="inputPassword" placeholder="Postal Code" />
                      </FormGroup>
                    </div>
                    <FormGroup>
                        <Label className="col-form-label">About</Label>
                        <Input className="form-control" type="text" placeholder="About" />
                      </FormGroup>

                    </Form>
                    <hr className="mt-4 mb-4" />

                    {/* Drop ZOne Starts Here */}
                    
                            <CardHeader>
                                <h5>The veterinary Image</h5>
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
                      <Button color="primary" className="mr-1">{Submit}</Button>
                      <Button color="secondary">{Cancel}</Button>
                  </CardFooter>
                </Card>
              </Col>
            
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateVet;