import React, { Fragment ,useState, useEffect} from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import axios from 'axios'
// import Ckeditor from 'react-ckeditor-component'
import Dropzone from 'react-dropzone-uploader'
import {addBlog, videErrors} from '../../redux/blogActions/action'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap"
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
//import {Link} from "react-router-dom";

const BlogPost = ({history}) => {  
  const dispatch = useDispatch()
  const userID= useSelector((state)=> state.currentUser.user.idUser)
  const[blog, setBlog ] = useState({})

  const getBlogContent =(e)=> {
    setBlog({...blog, [e.target.name]: e.target.value})
  }
  
  const sendBlog =()=> {
    dispatch(addBlog(blog,history, userID))
  }

  const getUploadParams =  async file => {
    // Push all the axios request promise into a single array
      // Initial FormData

try {
 let res= await axios.post("https://api.cloudinary.com/v1_1/petoo/image/upload",file) 
    const data = res.data;
    const fileURL = data.secure_url // You should store this URL for future references in your app
    console.log(res);
  
} catch (error) {
  console.log(error)
}
      }
  
  const handleChangeStatus = ({ meta, file }, status) => { }

  //managing errors if exist
const arrErrors = useSelector((state) => state.blogReducer.errors);
//sucess register
const successRegister = useSelector((state) => state.blogReducer.msg);

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
      <Breadcrumb parent="Blog" title="Add A Blog" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>Blog details:</h5>
              </CardHeader>
              <CardBody className="add-post">
                <Form className="row needs-validation">
                  <Col sm="12">
                    <FormGroup>
                      <Label for="validationCustom01">Tiltle:</Label>
                      <Input className="form-control" id="validationCustom01" type="text" placeholder="Blog Title" required="" name="title" onChange={getBlogContent}/>
                      <div className="valid-feedback">{"Looks good!"}</div>
                    </FormGroup>
                  
                        <FormGroup>
                          <Label>Content:</Label>
                          <textarea className="form-control" rows="5" cols="5" placeholder="Blog Content " name='content' onChange={getBlogContent}></textarea>
                        </FormGroup>
                  </Col>
                </Form>
                <Form className="m-b-20">
                  <div className="m-0 dz-message needsclick">
                    <Dropzone
                      getUploadParams={getUploadParams}
                      onChangeStatus={handleChangeStatus}
                      maxFiles={1}
                      multiple={false}
                      canCancel={false}
                      inputContent="Drop files here or click to upload."
                      styles={{
                        dropzone: { width: '100%', height: 50 },
                        dropzoneActive: { borderColor: 'green' },
                      }}
                    />
                  </div>
                </Form>
                <div className="btn-showcase">
                  
                  <Button color="primary" type="submit" onClick={()=>sendBlog()}>Post</Button>
                  
                  <Button color="light" type="reset" >Discard</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default BlogPost;