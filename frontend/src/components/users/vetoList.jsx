import React, { Fragment, useEffect } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  // CardHeader,
  CardFooter,
  Media,
} from "reactstrap";
import { getVets } from "../../redux/population/action";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const VetoList = (props) => {
  const dispatch = useDispatch();
  const vetos = useSelector((state) => state.populationReducer.vetos);

  useEffect(() => {
    dispatch(getVets());
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Breadcrumb parent='Users' title='List Of Vets' />
      <Container fluid={true}>
        <Row>
          {vetos.map((info, i) => (
            <Col md='6' lg='6' xl='4' className='box-col-6' key={i}>
              <Link to={`/dashboard/vetCard/${info.idUser}`}>
                <Card className='custom-card'>
                  <div className='card-profile'>
                    <Media
                      body
                      className='rounded-circle'
                      src={info.profilePicture}
                      alt=''
                    />
                  </div>
                  <div className='text-center profile-details'>
                    <h4>
                      {info.prenom} {info.nom}
                    </h4>
                    <h6>{info.role}</h6>
                  </div>
                  <CardFooter className='row'>
                    <Col sm='4 col-4'>
                      <h6>Location</h6>
                      <h5>
                        <span className='counter'>{info.ville}</span>
                      </h5>
                    </Col>

                    <Col sm='4 col-4'>
                      <h6>Phone Number</h6>
                      <h5>
                        <span className='counter'>{info.phoneNumber}</span>
                      </h5>
                    </Col>
                    <Col sm='4 col-4'>
                      <h6>Working Hours </h6>
                      <h5>
                        <span className='counter'>9Am-4Pm</span>
                      </h5>
                    </Col>
                  </CardFooter>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default VetoList;
