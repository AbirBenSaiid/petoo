import React, { Fragment } from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { getCartTotal } from "../../../services/ecommerce.service";
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Product,Total,Subtotal,Shipping,PlaceOrder,CheckMeOut,ContinueShopping } from '../../../constant';

const Checkout = (props) => {
  
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
      history.push(`${process.env.PUBLIC_URL}/app/ecommerce/invoice`)
    }else {
      errors.showMessages();
    }
  }

  const cart = useSelector(content => content.Cartdata.cart);
  const symbol = useSelector(content => content.data.symbol);

  return (
    <Fragment>
      <Breadcrumb parent="Ecommerce" title="Checkout" />
      <Container fluid={true}>
        <Row>
          <Col>
            <Card className="checkout">
              <CardHeader>
                <h5>Billing Details</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xl="6" sm="12">
                    <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                      <div className="form-row">
                        <FormGroup className="col-sm-6">
                          <Label>First Number</Label>
                          <Input type="text" name="firstName" innerRef={register({ required: true })} />
                          <span style={{ color: '#ff5370' }}>{errors.firstName && 'First name is required'}</span>
                        </FormGroup>
                        <FormGroup className="col-sm-6">
                          <Label>Last Name</Label>
                          <Input type="text" name="lastName" innerRef={register({ required: true })} />
                          <span style={{ color: '#ff5370' }}>{errors.lastName && 'Last name is required'}</span>
                        </FormGroup>
                      </div>
                      <div className="form-row">
                        <FormGroup className="col-sm-6">
                          <Label>Phone Number</Label>
                          <Input type="text" name="phone" innerRef={register({ pattern: /\d+/ })} />
                          <span style={{ color: '#ff5370' }}>{errors.phone && 'Please enter number for phone.'}</span>
                        </FormGroup>
                        <FormGroup className="col-sm-6">
                          <Label>E-mail</Label>
                          <Input type="text" name="email" innerRef={register({ required: true, pattern: /^\S+@\S+$/i })} />
                          <span style={{ color: '#ff5370' }}>{errors.email && 'Please enter proper email address .'}</span>
                        </FormGroup>
                      </div>
      
                      <FormGroup>
                          <Label for="inputAddress5">Adresse</Label>
                        <Input type="text" name="address" innerRef={register({ required: true, min: 20, max: 120 })} />
                        <span style={{ color: '#ff5370' }}>{errors.address && 'Please right your address .'}</span>
                      </FormGroup>
                      <FormGroup>
                        <Label for="inputAddress2">City</Label>
                        <Input type="text" name="state" innerRef={register({ required: true })} />
                        <span style={{ color: '#ff5370' }}>{errors.state && 'select one state'}</span>
                      </FormGroup>
                      <FormGroup>
                        <Label for="inputAddress6">Postal Code</Label>
                        <Input type="text" name="pincode" innerRef={register({ pattern: /\d+/ })} />
                        <span style={{ color: '#ff5370' }}>{errors.pincode && 'Required integer'}</span>
                      </FormGroup>
                      <FormGroup>
                        <Input type="checkbox" className="checkbox_animated" />
                        <Label>{CheckMeOut}</Label>
                      </FormGroup>

                      <Button color="primary" type="submit" className="mt-2 pull-right">{PlaceOrder}</Button>

                    </Form>
                  </Col>
                  <Col xl="6" sm="12">
                    <div className="checkout-details">
                      <div className="order-box">
                        <div className="title-box">
                          <div className="checkbox-title">
                            <h4>{Product} </h4><span>{Total}</span>
                          </div>
                        </div>
                        <ul className="qty">
                          {cart.map((item, index) => {
                            return <li key={index}>{item.name} × {item.qty} <span>{symbol} {item.sum}</span></li>
                          })
                          }
                        </ul>
                        <ul className="sub-total">
                          <li>{Subtotal} <span className="count">{symbol}{getCartTotal(cart)}</span></li>
                          <li className="shipping-class">{Shipping}
                            <div className="shopping-checkout-option">
                              <Label className="d-block">
                                <Input className="checkbox_animated" type="checkbox" />Home Delivery
                              </Label>
                            
                            </div>
                          </li>
                        </ul>
                        <ul className="sub-total total">
                          <li>{Total} <span className="count">{symbol} {getCartTotal(cart)}</span></li>
                        </ul>
                        <div className="text-right mt-2">
                          <Link
                            to={`${process.env.PUBLIC_URL}/app/ecommerce/product`}
                          >
                            <Button
                              color="primary"
                              className="cart-btn-transform"
                            >
                              {ContinueShopping}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row >
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Checkout;