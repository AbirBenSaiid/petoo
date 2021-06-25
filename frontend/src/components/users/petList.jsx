import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardFooter, Media } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { getAssignedPets, getMyPets } from "../../redux/currentUser/action";
import { Link } from "react-router-dom";
import moment from "moment";
const PetList = (props) => {
  const dispatch = useDispatch();

  const waitPets = useSelector((state) => state.currentUser.myPets);
  const assignedPets = useSelector((state) => state.currentUser.myAssignedPets);
  const confirmedPets = useSelector((state) => state.currentUser.msg);
  const { role, idUser } = useSelector((state) => state.currentUser.user);
  const [pets, setMine] = useState([]);
  const [assigned, setAssignedPets] = useState([]);
  useEffect(() => {
    if (role === "Veterinary") {
      dispatch(getAssignedPets(idUser));
      setAssignedPets(assignedPets);
    }
    setMine(waitPets);
    // eslint-disable-next-line
  }, [confirmedPets]);

  return (
    <Fragment>
      {role === "Veterinary" && (
        <>
          <Breadcrumb parent='Users' title='List Of Assigned Pets' />
          <Container fluid={true}>
            <Row>
              {assigned.length ? (
                assigned.map((pet, i) => (
                  <Col md='6' lg='4' xl='4' className='box-col-6' key={i}>
                    <Card className='custom-card'>
                      <Link to={`/dashboard/petProfile/${pet && pet.idPet}`}>
                        <div className='card-profile'>
                          <Media
                            body
                            className='rounded-circle'
                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
                            fluid={true}
                            alt=''
                          />
                        </div>
                        <div className='text-center profile-details'>
                          <h4>{pet && pet.name}</h4>
                          <h6>{pet && pet.race}</h6>
                        </div>
                        <CardFooter className='row'>
                          {/* Ratings Starts Here  */}
                          <Col sm='4 col-4'>
                            <h6>Gender</h6>
                            <h5>{pet && pet.gender}</h5>
                          </Col>
                          {/* Ratings Ends Here  */}

                          <Col sm='4 col-4'>
                            <h6>Age</h6>
                            <h5>
                              <span className='counter'>
                                {moment(pet && pet.age).fromNow(true)}
                              </span>
                            </h5>
                          </Col>
                          <Col sm='4 col-4'>
                            <h6>Vaccines</h6>
                            <h3>
                              <span className='counter'>
                                {pet && pet.vaccines.length}
                              </span>
                            </h3>
                          </Col>
                        </CardFooter>
                      </Link>
                    </Card>
                  </Col>
                ))
              ) : role === "Veterinary" ? (
                <Col sm={12}>
                  <span className='text-center'>
                    <h4>Accept an appointment to assign a pet to you.</h4>
                    <Link to={`${process.env.PUBLIC_URL}/dashboard/appoiments`}>
                      <h5 className='text-center'>See my appointments</h5>
                    </Link>
                  </span>
                </Col>
              ) : (
                <Col sm={12}>
                  <span className='text-center'>
                    <h4>Add your pet to get your full list of Pets.</h4>
                  </span>
                  <Link to={`${process.env.PUBLIC_URL}/dashboard/CreatePet`}>
                    <h5 className='text-center'>Add a pet</h5>
                  </Link>
                </Col>
              )}
            </Row>
          </Container>
        </>
      )}
      {(role === "petOwner" || role === "Admin" || role === "Veterinary") && (
        <>
          <Breadcrumb parent='Users' title='List Of My Pets' />
          <Container fluid={true}>
            <Row>
              {pets.length ? (
                pets.map((petoo, i) => (
                  <Col md='6' lg='4' xl='4' className='box-col-6' key={i}>
                    <Card className='custom-card'>
                      <Link
                        to={`/dashboard/petProfile/${petoo && petoo.idPet}`}
                      >
                        <div className='card-profile'>
                          <Media
                            body
                            className='rounded-circle'
                            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'
                            fluid={true}
                            alt=''
                          />
                        </div>
                        <div className='text-center profile-details'>
                          <h4>{petoo && petoo.name}</h4>
                          <h6>{petoo && petoo.race}</h6>
                        </div>
                        <CardFooter className='row'>
                          {/* Ratings Starts Here  */}
                          <Col sm='4 col-4'>
                            <h6>Gender</h6>
                            <h5>{petoo && petoo.gender}</h5>
                          </Col>
                          {/* Ratings Ends Here  */}

                          <Col sm='4 col-4'>
                            <h6>Age</h6>
                            <h5>
                              <span className='counter'>
                                {moment(petoo && petoo.age).fromNow(true)}
                              </span>
                            </h5>
                          </Col>
                          <Col sm='4 col-4'>
                            <h6>Vaccines</h6>
                            <h3>
                              <span className='counter'>
                                {petoo && petoo.vaccines.length}
                              </span>
                            </h3>
                          </Col>
                        </CardFooter>
                      </Link>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col sm={12}>
                  <span className='text-center'>
                    <h4>Add your pet to get your full list of Pets.</h4>
                  </span>
                  <Link to={`${process.env.PUBLIC_URL}/dashboard/CreatePet`}>
                    <h5 className='text-center'>Add a pet</h5>
                  </Link>
                </Col>
              )}
            </Row>
          </Container>
        </>
      )}
    </Fragment>
  );
};

export default PetList;
