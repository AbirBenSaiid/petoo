import React, { Fragment } from 'react';
import Breadcrumb from '../../layout/breadcrumb'
import {Container,Row,Col,Media} from "reactstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import moment from 'moment';

const BlogSingle = () => {
    let idBlog = useParams();
    const blogs = useSelector((state) => state.populationReducer.blogs);
    // eslint-disable-next-line
  const bloginfos = blogs.find((blog, index) => {
    if (blog.idBlog === idBlog.id)
      // eslint-disable-next-line
      return true;
  });

    return (
        <Fragment>

            <Breadcrumb parent="Blogs" title={bloginfos && bloginfos.title}/>
            <Container fluid={true}>
                <Row>
                    <Col sm="12" style={{padding:"20px"}}>
                        <div className="blog-single">
                            <div className="blog-box blog-details">
                                <Media className="img-fluid w-100" src={bloginfos && bloginfos.blogPicture} alt="blog-main" style={{borderRadius: "50px"}} />
                                <div className="blog-details">
                                    <ul className="blog-social">
                                        <li className="digits">{bloginfos && moment(parseInt(bloginfos.creationDate , 10)).fromNow()}</li>
                                        <li><i className="icofont icofont-user"></i>{bloginfos && bloginfos.author}</li>
                                        <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02"}<span>{"Hits"}</span></li>
                                        <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                    </ul>
                                    <h4>
                                    {bloginfos && bloginfos.title}
                                    </h4>
                                    <div className="single-blog-content-top">
                                        <p>{bloginfos && bloginfos.content}</p>
                                        {/* <p>{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like"}</p> */}
                                    </div>
                                </div>
                            </div>
                            {/* <section className="comment-box">
                                <h4>{Comment}</h4>
                                <hr />
                                <ul>
                                    <li>
                                        <Media className="align-self-center">
                                            <Media className="align-self-center" src={comment} alt="" />
                                            <Media body>
                                                <Row>
                                                    <Col md="4">
                                                        <h6 className="mt-0">{JolioMark}<span> {"( Designer ) "}</span></h6>
                                                    </Col>
                                                    <Col md="8">
                                                        <ul className="comment-social float-left float-md-right">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                                            </Media>
                                        </Media>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <Media>
                                                    <Media className="align-self-center" src={nine} alt="" />
                                                    <Media body>
                                                        <Row>
                                                            <Col xl="12">
                                                                <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                                                            </Col>
                                                        </Row>
                                                        <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                                                    </Media>
                                                </Media>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Media>
                                            <Media className="align-self-center" src={four} alt="" />
                                            <Media body>
                                                <Row>
                                                    <Col md="4">
                                                        <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                                                    </Col>
                                                    <Col md="8">
                                                        <ul className="comment-social float-left float-md-right">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                                            </Media>
                                        </Media>
                                    </li>
                                    <li>
                                        <Media>
                                            <Media className="align-self-center" src={twelve} alt="" />
                                            <Media body>
                                                <Row>
                                                    <Col md="4">
                                                        <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                                                    </Col>
                                                    <Col md="8">
                                                        <ul className="comment-social float-left float-md-right">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                                            </Media>
                                        </Media>
                                    </li>
                                    <li>
                                        <Media>
                                            <Media className="align-self-center" src={fourteen} alt="" />
                                            <Media body>
                                                <Row>
                                                    <Col md="4">
                                                        <h6 className="mt-0">{JolioMark}<span> {"( Designer )"}</span></h6>
                                                    </Col>
                                                    <Col md="8">
                                                        <ul className="comment-social float-left float-md-right">
                                                            <li className="digits"><i className="icofont icofont-thumbs-up"></i>{"02 Hits"}</li>
                                                            <li className="digits"><i className="icofont icofont-ui-chat"></i>{"598 Comments"}</li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                                <p>{"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}</p>
                                            </Media>
                                        </Media>
                                    </li>
                                </ul>
                            </section> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default BlogSingle;