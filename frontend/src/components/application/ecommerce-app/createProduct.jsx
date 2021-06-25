import React, { Fragment , useState,  useEffect} from 'react';
import Breadcrumb from '../../../layout/breadcrumb'
import Dropzone from 'react-dropzone-uploader';
import {Container,Row,Col,Card,CardHeader,CardBody,CardFooter,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import { Link} from "react-router-dom";
import { ToastContainer, toast} from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, videErrors } from "../../../redux/productAction/action";


const CreateProduct = ({history}) => { 
  const dispatch = useDispatch()

  const [productCreate, setProductCreate] = useState({});

const getProductCreate = (e) =>
setProductCreate({ ...productCreate, [e.target.name]: e.target.value });


const shop="Shop-2l8co204kp32i9k1"

const createProduct = () => {
  dispatch(addProduct(productCreate, history, shop,));
};


  const handleSubmit = (files, allFiles) => {
    allFiles.forEach(f => f.remove())
    // toast.success("Dropzone successfully submitted !");
} // DropZone related
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } } // Image DropZone reltated
  const handleChangeStatus = ({ meta, file }, status) => {
  }  // Image DropZone reltated


  //toast related states from response of backend via redux
  const notification = useSelector((state) => state.productReducer.msg);
  const arrErrors = useSelector((state) => state.productReducer.errors);
  useEffect(() => {
    if ((notification || "").length > 0) {
      toast.success(notification, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 10000,
      });
      dispatch(videErrors());
    } else if ((arrErrors || []).length > 0) {
      arrErrors.forEach((element) => {
        toast.error(element.msg, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 10000,
        });
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [arrErrors, notification]);
  

  return (
    <Fragment>
      <Breadcrumb parent="E-commerce" title="Create Product" />
      <Container fluid={true}>
        <Row>
          
          
              <Col sm="12">
                <Card>
                  
                  <CardBody>
                    <Form className="theme-form mega-form">
                      <h6>The Product Details:</h6>
                      <FormGroup>
                        <Label className="col-form-label">Product Name</Label>
                        <Input className="form-control" type="text" placeholder="your Name" name='name' onChange={getProductCreate} />
                      </FormGroup>

                      <FormGroup>
                        <Label className='col-form-label'>Product Type</Label>
                        <Input
                        type='select'
                        className='custom-select'
                        required=''
                        name='productType' onChange={getProductCreate}
                        >
                        <option value='Toy'>Toy</option>
                        <option value='Food'>Food</option>
                        <option value='Treat'>Teats</option>
                        <option value='Accessory'>Accessory</option>
                        <option value='Litter'>Litter</option>
                        <option value='Supplies'>Supplies</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                          <Label>Brand</Label>
                            <Input className="form-control"  type="text" placeholder="The product's brand"  name='brand' onChange={getProductCreate} />
                      </FormGroup>

                      <FormGroup>
                          <Label> Product Description</Label>
                            <Input className="form-control" type="text" placeholder="The product's description: for which pet, what is used for..... " name='description' onChange={getProductCreate} />
                      </FormGroup>
                      
                      <FormGroup>
                          <Label>Color (or colors available)</Label> 
                            <Input className="form-control" type="text" placeholder="The product's color" name='color' onChange={getProductCreate} />
                      </FormGroup>
                      <FormGroup>
                        <Label>Product Price</Label>
                            <Input className="form-control" type="Number" placeholder="10.00 DT / 45.00 DT / 35.00 DT / 00.50DT "  name='price' onChange={getProductCreate}/>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label>Product Promo Price</Label>
                            <Input className="form-control" type="Number" placeholder="5.00 DT / 35.00 DT / 22.50 DT / 00.50DT " name='promoPrice' onChange={getProductCreate} />
                      </FormGroup> 

                  

                    </Form>
                    <hr className="mt-4 mb-4" />

                    {/* Drop ZOne Starts Here */}
                    
                    <Card>
                            <CardHeader>
                                <h5>Upload Product's Images</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <ToastContainer />
                                    <div className="dz-message needsclick">
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            onChangeStatus={handleChangeStatus}
                                            onSubmit={handleSubmit}
                                            accept="image/*"
                                        />
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                        
                    {/* Drop ZOne Ends Here */}
                  </CardBody>
                  <CardFooter>

                      <Button color="primary" className="mr-1" onClick={() => createProduct()}>Submit</Button>
                      <Link className='ml-2' to='/dashboard/ecommerce'>
                      <Button color="secondary">Cancel </Button>
                      </Link >
                  </CardFooter>
                </Card>
              </Col>
            
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateProduct;