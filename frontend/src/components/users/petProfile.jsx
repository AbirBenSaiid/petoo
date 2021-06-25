import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  Media,
  CardBody,
  ListGroupItem,
  ListGroup,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { Close, SaveChanges } from "../../constant";
import DatePicker from "react-datepicker";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import moment from "moment";

const PetProfile = (props) => {
  let idPet = useParams();
  console.log(idPet);
  const mypets = useSelector((state) => state.currentUser.myPets);
  const { role, idUser } = useSelector((state) => state.currentUser.user);
  const msg = useSelector((state) => state.currentUser.msg);
  const [pets, setPets] = useState(mypets);
  const [petinfos, setPet] = useState(
    // eslint-disable-next-line
    pets.find((pets, index) => {
      // eslint-disable-next-line
      if (pets.idPet === idPet.id) return true;
    })
  );
  const [startDate, setstartDate] = useState(new Date()); //Date picker related
  const handleChange = (date) => {
    //Date Picker related
    setstartDate(date);
  };

  const [modal, setModal] = useState(false); // Modal Related
  const toggle = () => setModal(!modal); // Modal Related
  const [modal1, setModal2] = useState(false);
  const toggle1 = () => setModal2(!modal1);
  // eslint-disable-next-line
  const [url, setUrl] = useState();

  const readUrl = (event) => {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setUrl(reader.result);
    };
  };
  useEffect(() => {
    setPets(mypets);
    setPet(
      // eslint-disable-next-line
      mypets.find((pets, index) => {
        if (pets.idPet === idPet.id) return true;
      })
    ); // eslint-disable-next-line
  }, [msg]);
  return (
    <Fragment>
      <Breadcrumb parent='Users' title='My Pet' />
      <Container fluid={true}>
        <div className='user-profile'>
          <Row className='justify-content-md-center'>
            {/* The Profile Card Starts Here */}
            <Col sm='8'>
              <Card className='card hovercard text-center'>
                <CardHeader className='cardheader'></CardHeader>
                <div className='user-image'>
                  <div className='avatar'>
                    <Media
                      body
                      alt=''
                      src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
                      data-intro='This is Profile image'
                    />
                  </div>
                  <div
                    className='icon-wrapper'
                    data-intro='Change Profile image here'
                  >
                    <i className='icofont icofont-pencil-alt-5'>
                      <input
                        className='upload'
                        type='file'
                        onChange={(e) => readUrl(e)}
                      />
                    </i>
                  </div>
                </div>
                <div className='info'>
                  <Row>
                    <Col sm={8} lg='4' className='order-sm-1 order-xl-0'>
                      <Row>
                        <Col md='5'>
                          <div className='ttl-info text-left'>
                            <h6>
                              <i className='fa fa-envelope mr-2'></i> Gender
                            </h6>
                            <span>{petinfos && petinfos.gender}</span>
                          </div>
                        </Col>
                        <Col md='5'>
                          <div className='ttl-info text-left ttl-sm-mb-0'>
                            <h6>
                              <i className='fa fa-calendar'></i> DOB
                            </h6>
                            <span>
                              {petinfos && moment(petinfos.age).format("LL")}
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col sm={8} lg='4' className='order-sm-0 order-xl-1'>
                      <div className='user-designation'>
                        <div className='title'>
                          <a target='_blank' href='#javascript'>
                            {petinfos && petinfos.name}
                          </a>
                        </div>
                        <div className='desc mt-2'>
                          {petinfos && petinfos.petType}
                        </div>
                      </div>
                    </Col>

                    <Col sm={8} lg='4' className='order-sm-2 order-xl-2'>
                      <Row>
                        <Col md='6'>
                          <div className='ttl-info text-left ttl-xs-mt'>
                            <h6>
                              <i className='fa fa-phone'></i>   Marks
                            </h6>
                            <span>
                              {petinfos && petinfos.distinguishingMark}
                            </span>
                          </div>
                        </Col>
                        <Col md='6'>
                          <div className='ttl-info text-left ttl-sm-mb-0'>
                            <h6>
                              <i className='fa fa-location-arrow'></i>   Color
                            </h6>
                            <span>{petinfos && petinfos.color} </span>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {/* Modal Starts Here */}
                  {petinfos && petinfos.idOwnerOfPet === idUser ? (
                    <>
                      <Button color='primary' onClick={toggle}>
                        Edit Pet
                      </Button>
                      <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Edit My Pet</ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label className='form-label'>Name</Label>
                            <Input
                              className='form-control'
                              type='text'
                              placeholder='Name'
                            />
                          </FormGroup>

                          <FormGroup>
                            <Label className='form-label'>
                              Distinguishing Mark
                            </Label>
                            <Input
                              className='form-control'
                              type='text'
                              placeholder='Name'
                            />
                          </FormGroup>

                          <FormGroup>
                            <Label className='form-label'>Color</Label>
                            <Input
                              className='form-control'
                              type='text'
                              placeholder='Name'
                            />
                          </FormGroup>

                          <Col>
                            <FormGroup className='m-t-15 custom-radio-ml'>
                              <div className='radio radio-secondary'>
                                <Input
                                  id='radio22'
                                  type='radio'
                                  name='radio1'
                                  value='option1'
                                  //onClick={() => setGender("Female")}
                                />
                                <Label for='radio22'>Female</Label>
                              </div>
                              <br />
                              <div className='radio radio-primary'>
                                <Input
                                  id='radio11'
                                  type='radio'
                                  name='radio1'
                                  value='option1'
                                  //onClick={() => setGender("Male")}
                                />
                                <Label for='radio11'>Male</Label>
                              </div>
                            </FormGroup>
                          </Col>
                          <Row>
                            <Col>
                              <FormGroup>
                                <Label className='form-label'>
                                  Date Of Birth
                                </Label>
                                {/* Date Picker */}
                                <FormGroup className='form-row'>
                                  <div className='input-group'>
                                    <DatePicker
                                      className='form-control digits'
                                      selected={startDate}
                                      onChange={(e) => handleChange(e)}
                                    />
                                  </div>
                                </FormGroup>
                              </FormGroup>
                            </Col>
                          </Row>
                        </ModalBody>
                        <ModalFooter>
                          <Button color='primary' onClick={toggle}>
                            {Close}
                          </Button>
                          <Button color='secondary' onClick={toggle}>
                            {SaveChanges}
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </>
                  ) : (
                    ""
                  )}
                  {/* Modal Ends Here */}
                  <hr />

                  <div className='follow'>
                    <Row>
                      <Col col='6' className='text-md-center'>
                        <span>Age</span>{" "}
                        <div className='follow-num counter'>
                          {petinfos && moment(petinfos.age).fromNow(true)}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Col>
            {/* The Profile Card Ends Here */}

            {/* Allergies Starts Here  */}
            <Col sm={8}>
              <Card>
                <CardHeader>
                  <h5 className='float-left'>Known Allergies</h5>
                  {role === "Veterinary" && (
                    <div className='float-right'>
                      <Button color='primary' onClick={toggle}>
                        Edit allergies
                      </Button>
                      <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>
                          Edit My Pet's Known Allergies
                        </ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label className='form-label'>Name</Label>
                            <Input
                              className='form-control'
                              type='text'
                              placeholder='Name'
                            />
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                          <Button color='primary' onClick={toggle}>
                            {Close}
                          </Button>
                          <Button color='secondary' onClick={toggle}>
                            {SaveChanges}
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  )}
                </CardHeader>
                <CardBody>
                  <ListGroup>
                    {petinfos &&
                      petinfos.knownAllergies.map((pet, i) => (
                        <ListGroupItem
                          key={i}
                          className='list-group-item-action'
                          tag='a'
                        >
                          <i className='icon-target'></i>
                          {pet}
                        </ListGroupItem>
                      ))}
                  </ListGroup>
                </CardBody>
              </Card>
            </Col>
            {/* Allergies Endss Here  */}

            {/* Vaccination History Starts Here  */}
            <Col sm={8}>
              <Card>
                <CardHeader>
                  <h5 className='float-left'>Vaccination History</h5>
                  {role === "Veterinary" && (
                    <div className='float-right'>
                      <Button color='primary' onClick={toggle}>
                        Edit Pet's Vaccination History
                      </Button>
                      <Modal isOpen={modal} toggle={toggle}>
                        <ModalHeader toggle={toggle}>Edit My Pet</ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label className='form-label'>Name</Label>
                            <Input
                              className='form-control'
                              type='text'
                              placeholder='Name'
                            />
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                          <Button color='primary' onClick={toggle}>
                            {Close}
                          </Button>
                          <Button color='secondary' onClick={toggle}>
                            {SaveChanges}
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  )}
                </CardHeader>
                <div className='table-responsive'>
                  <table className='table card-table table-vcenter text-nowrap'>
                    <tbody>
                      {petinfos &&
                        petinfos.vaccines.map((pet, i) => (
                          <tr>
                            <td>
                              {/* eslint-disable-next-line */}
                              <a
                                className='text-inherit '
                                role='button'
                                onClick={() => {
                                  window
                                    .open(
                                      `https://en.wikipedia.org/w/index.php?search=${pet.vaccine}`
                                    )
                                    .focus();
                                }}
                              >
                                {pet.vaccine}
                              </a>
                            </td>
                            <td>{moment(pet.date).format("LL")}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </Col>
            {/* Vaccination History Starts Here  */}

            {/* Medication History Starts Here ( Possible to change it like the vaccination Table (UI reason))  */}
            <Col sm={8}>
              <Card>
                <CardHeader>
                  <h5 className='float-left'>Medication History</h5>
                  {role === "Veterinary" ? (
                    <div className='float-right'>
                      <Button color='primary' onClick={toggle1}>
                        Add Medicine
                      </Button>
                      <Modal isOpen={modal1} toggle={toggle1}>
                        <ModalHeader toggle={toggle1}>Add Medicine</ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label className='form-label'>Medicine Name</Label>
                            <Input
                              className='form-control'
                              type='text'
                              placeholder='Medicine'
                            />
                          </FormGroup>

                          <FormGroup>
                            <Label for='reason' className='form-label'>
                              Reason
                            </Label>
                            <textarea
                              class='form-control'
                              id='reason'
                              rows='3'
                            ></textarea>
                          </FormGroup>
                          <FormGroup>
                            <Label className='form-label'>Duration</Label>
                            {/* Date Picker */}
                            <FormGroup className='form-row'>
                              <div className='input-group'>
                                <Input
                                  className='form-control'
                                  type='text'
                                  placeholder='Duration'
                                />
                              </div>
                            </FormGroup>
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                          <Button color='primary' onClick={toggle1}>
                            Close
                          </Button>
                          <Button color='secondary' onClick={toggle1}>
                            SaveChanges
                          </Button>
                        </ModalFooter>
                      </Modal>
                    </div>
                  ) : (
                    ""
                  )}
                </CardHeader>
                <div className='table-responsive'>
                  <Table>
                    <thead>
                      <tr className='border-bottom-primary'>
                        <th scope='col'>{"#Date"}</th>
                        <th scope='col'>{"Medicine"}</th>
                        <th scope='col'>{"Reason"}</th>
                        <th scope='col'>{"Duration"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {petinfos &&
                        petinfos.medecines.map((pet, i) => (
                          <tr>
                            <th scope='row'>{"3"}</th>
                            <td>{"Jacob"}</td>
                            <td>{"Thornton"}</td>
                            <td>{"@fat"}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </Card>
            </Col>
            {/* Medication History Starts Here  */}
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default PetProfile;
