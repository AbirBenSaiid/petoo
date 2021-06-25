import React, { Fragment, useEffect } from 'react';
import { Container, Row, Col, Card, Media } from "reactstrap"
import { getBlogs} from "../../redux/population/action";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import NavBar from "../../landing/components/NavBar"


const BlogDetailHome = () => {

    const dispatch = useDispatch();
  const blogs = useSelector((state) => state.populationReducer.blogs);
 console.log(blogs)
  useEffect(() => {
    dispatch(getBlogs());
    // eslint-disable-next-line
  }, []);
    return (
        <Fragment>
            <NavBar/>
            <Container fluid={true}>
                <Row className="justify-content-md-center">
                    {/* Big Pic Blog */}
                    {/* <Col xl="6 box-col-12 xl-100" >
                        <Card>
                            <div className="blog-box blog-shadow">
                                <Media className="img-fluid" src={blog} alt="" />
                                <div className="blog-details">
                                    <p className="digits">{"25 July 2019"}</p>
                                    <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
                                    <ul className="blog-social">
                                        <li><i className="icofont icofont-user"></i>{MarkJecno}</li>
                                        <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                        <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </Col> */}
                    
                    {/* Small horizontal Blog */}
                    {blogs.map((info, i) => (
                    <Col  key={i} sm={8} style={{margin: "30px"}} >
                        <Link to={`/home/blogSingle/${info.idBlog}`}>
                        <Card style={{borderStyle: "outset"}}>
                            <div className="blog-box blog-list row">
                                <Col sm="5">
                                    <Media className="img-fluid sm-100-w" src={info.blogPicture} alt=""  style={{borderRadius: "30px"}} />
                                </Col>
                                <Col sm="7">
                                    <div className="blog-details">
                                        <div className="blog-date digits"> {moment(
                                                    parseInt(
                                                      info.creationDate,
                                                      10
                                                    )
                                                  ).fromNow()}</div>
                                        <h5>{info.title} </h5>
                                        <div className="blog-bottom-content">
                                            <ul className="blog-social">
                                                <li> by: {info.author}</li>
                                            </ul>
                                            
                                            <p className="mt-0">{info.preview}</p>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card>
                        </Link>
                    </Col>
                    ))}
                </Row>
            </Container>
        </Fragment>
    );
};

export default BlogDetailHome;