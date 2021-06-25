import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Table,
  Badge,
  Button,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getALLNotif } from "../../redux/notification/action";
import moment from "moment";
import {
  videErrors,
  acceptAppointmentByVet,
} from "../../redux/appointmentAction/action";
import { getMyAppointments } from "../../redux/currentUser/action";
const Notifndapp = (props) => {
  const dispatch = useDispatch();
  const notifs = useSelector((state) => state.notifReducer.allNotifArray);
  const pendingAppointments = useSelector(
    (content) => content.currentUser.myAppointments
  );
  const [activeTab, setActiveTab] = useState("1");
  const { prenom, nom, email, profilePicture, idUser } = useSelector(
    (state) => state.currentUser.user
  );

  const confirmAppo = (vetID, petID, ownerID, appointmentID) =>
    dispatch(acceptAppointmentByVet(vetID, petID, ownerID, appointmentID));

  const [notifications, setNotifications] = useState(notifs);

  const role = useSelector((state) => state.currentUser.user.role);
  const vets = useSelector((state) => state.populationReducer.vetos);
  const appo = useSelector((state) => state.currentUser.myAppointments);
  const pets = useSelector((state) => state.currentUser.myPets);
  const notif = useSelector((state) => state.appReducer.msg);
  const gotNotifs = useSelector((state) => state.notifReducer.msg);

  useEffect(() => {
    dispatch(getALLNotif(idUser));
    setNotifications(notifs);
    if (notif) {
      dispatch(getMyAppointments(idUser));
      toast.success(notif, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 7000,
      });
      dispatch(videErrors());
    }
    // eslint-disable-next-line
  }, [notif, gotNotifs]);
  return (
    <Fragment>
      <Breadcrumb parent='Apps' title='Tasks' />
      <Container fluid={true}>
        <span className='email-wrap bookmark-wrap'>
          <Row>
            <Col xl='3' className='box-col-6'>
              <span className='email-left-aside'>
                <Card>
                  <CardBody>
                    <span className='email-app-sidebar left-bookmark'>
                      <span className='media'>
                        <span className='media-size-email'>
                          <img
                            className='mr-3 rounded-circle'
                            src={profilePicture}
                            widh='100px'
                            height='100px'
                            alt=''
                          />
                        </span>
                        <span className='media-body'>
                          <h6 className='f-w-600'>
                            {prenom} {nom}
                          </h6>
                          <p>{email}</p>
                        </span>
                      </span>

                      <hr />

                      <Nav className='main-menu' role='tablist'>
                        <NavItem>
                          <a
                            href='#javaScript'
                            className={activeTab === "1" ? "active" : ""}
                            onClick={() => setActiveTab("1")}
                          >
                            <span className='title'> All Appointments</span>
                          </a>
                        </NavItem>

                        <NavItem>
                          <a
                            href='#javaScript'
                            className={activeTab === "2" ? "active" : ""}
                            onClick={() => setActiveTab("2")}
                          >
                            <span className='title'>
                              {" "}
                              Confirmed appointments
                            </span>
                          </a>
                        </NavItem>

                        <NavItem>
                          <a
                            href='#javaScript'
                            className={activeTab === "3" ? "active" : ""}
                            onClick={() => setActiveTab("3")}
                          >
                            {(role === "Veterinary" || role === "Admin") && (
                              <span className='title'>
                                {" "}
                                UpComing appointments
                              </span>
                            )}
                          </a>
                        </NavItem>

                        <NavItem>
                          <a
                            href='#javaScript'
                            className={activeTab === "4" ? "active" : ""}
                            onClick={() => setActiveTab("4")}
                          >
                            <span className='title'> Pending appointments</span>
                          </a>
                        </NavItem>

                        <NavItem>
                          <a
                            href='#javaScript'
                            className={activeTab === "5" ? "active" : ""}
                            onClick={() => setActiveTab("5")}
                          >
                            <span className='title'>
                              {" "}
                              Canceled appointments
                            </span>
                          </a>
                        </NavItem>
                        <li>
                          <hr />
                        </li>
                        <NavItem>
                         {/* eslint-disable-next-line */}
                          <a
                            href='#'
                            className={activeTab === "6" ? "active" : ""}
                            onClick={
                              () => setActiveTab("6")
                              // setNotifications(notifs);
                            }
                          >
                            <span className='title'> All Notifications</span>
                          </a>
                        </NavItem>

                        <li>
                          <hr />
                        </li>
                      </Nav>
                    </span>
                  </CardBody>
                </Card>
              </span>
            </Col>
            <Col xl='9' md='12' className='box-col-12'>
              <span className='email-right-aside bookmark-tabcontent'>
                <Card className='email-body radius-left'>
                  <span className='pl-0'>
                    <TabContent activeTab={activeTab}>
                      <TabPane tabId='1' activeTab={activeTab}>
                        <Card className='mb-0'>
                          <CardHeader className='d-flex'>
                            <h6 className='mb-0 f-w-600'>All Appointments</h6>
                          </CardHeader>
                        </Card>
                        <tr>
                          <td>
                            <span className='no-favourite'>
                              <span></span>
                            </span>
                          </td>
                        </tr>
                      </TabPane>
                      <TabPane tabId='2'>
                        <Card className='mb-0'>
                          <CardHeader className='d-flex'>
                            <h6 className='mb-0 f-w-600'>
                              Confirmed Appoitments
                            </h6>
                          </CardHeader>
                        </Card>
                      </TabPane>
                      <TabPane tabId='3'>
                        <Card className='mb-0'>
                          <CardHeader className='d-flex'>
                            <h6 className='mb-0 f-w-600'>
                              Upcoming Appointments
                            </h6>
                          </CardHeader>
                        </Card>
                      </TabPane>
                      <TabPane tabId='4'>
                        <Card className='mb-0'>
                          <CardHeader className='d-flex'>
                            <h6 className='mb-0 f-w-600'>
                              Pending Appointments
                            </h6>
                          </CardHeader>
                        </Card>
                      </TabPane>
                      <TabPane tabId='5'>
                        <Card className='mb-0'>
                          <CardHeader className='d-flex'>
                            <h6 className='mb-0 f-w-600'>
                              Canceled Appointments
                            </h6>
                          </CardHeader>
                        </Card>
                      </TabPane>
                      <TabPane tabId='6'>
                        <Card className='mb-0'>
                          <CardHeader className='d-flex'>
                            <h6 className='mb-0 f-w-600'>All Notifications</h6>
                          </CardHeader>
                        </Card>
                      </TabPane>
                      <TabPane tabId='6'>
                        <Card className='mb-0'>
                          <CardBody className='p-0'>
                            <span className='taskadd'>
                              <span className='table-responsive'>
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {notifications &&
                                    notifications.length > 0 ? (
                                      notifications.map((notif, index) => {
                                        return (
                                          <tr key={index}>
                                            <td>
                                              <h6 className='task_title_0'>
                                                {prenom}
                                              </h6>
                                              <p className='project_name_0'>
                                                {moment(
                                                  parseInt(
                                                    notif.creationDate,
                                                    10
                                                  )
                                                ).fromNow()}
                                              </p>
                                            </td>
                                            <td>
                                              <p className='task_desc_0'>
                                                {notif.msg}
                                              </p>
                                            </td>
                                          </tr>
                                        );
                                      })
                                    ) : (
                                      <tr>
                                        <td>
                                          <span className='no-fasvourite'>
                                            <span>No notification found</span>
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </Table>
                              </span>
                            </span>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId='1'>
                        <Card className='mb-0'>
                          <CardBody className='p-0'>
                            <span className='taskadd'>
                              <span className='table-responsive'>
                                <Table>
                                  <tbody>
                                    {appo.length ? (
                                      appo.map((appo, index) => {
                                        const vetinfos = vets.find(
                                          // eslint-disable-next-line
                                          (vet, index) => {
                                            if (vet.idUser === appo.idVet)
                                              // eslint-disable-next-line
                                              return true;
                                          }// eslint-disable-next-line
                                        );
                                        const petinfo = pets.find( // eslint-disable-next-line
                                          (pet, index) => {
                                            if (pet.idPet === appo.idPet)
                                              // eslint-disable-next-line
                                              return true;
                                          }
                                        );
                                        return (
                                          <CardBody className='pt-0'>
                                            <span className='appointment-table table-responsive'>
                                              <table className='table table-bordernone'>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <img
                                                        className='img-fluid img-40 rounded-circle mb-3'
                                                        src={
                                                          vetinfos &&
                                                          vetinfos.profilePicture
                                                        }
                                                        alt=''
                                                      />
                                                    </td>
                                                    <td className='img-content-box'>
                                                      <Link
                                                        to={`/dashboard/vetCard/${
                                                          vetinfos &&
                                                          vetinfos.idUser
                                                        }`}
                                                      >
                                                        <span className='d-block txt-dark'>
                                                          {vetinfos &&
                                                            vetinfos.prenom}
                                                        </span>
                                                      </Link>
                                                    </td>
                                                    <td className='text-center'>
                                                      <p className='m-0 font-primary'>
                                                        {appo && appo.date}
                                                      </p>
                                                    </td>
                                                    <td className='text-center txt-dark'>
                                                      <Link
                                                        to={`/dashboard/petProfile/${
                                                          petinfo &&
                                                          petinfo.idPet
                                                        }`}
                                                      >
                                                        <span className='d-block'>
                                                          {petinfo &&
                                                            petinfo.name}
                                                        </span>
                                                      </Link>
                                                    </td>
                                                    <td className='text-center'>
                                                      {appo.isDone ? (
                                                        <Badge color='primary'>
                                                          Done
                                                        </Badge>
                                                      ) : appo.confirmedByVet &&
                                                        appo.confirmedByOwner ? (
                                                        <Badge color='primary'>
                                                          Confirmed
                                                        </Badge>
                                                      ) : (
                                                        <Badge color='secondary'>
                                                          Pending
                                                        </Badge>
                                                      )}
                                                    </td>
                                                    <td>
                                                      {appo.confirmedByVet &&
                                                        !appo.confirmedByOwner &&
                                                        !appo.isDone && (
                                                          <Button>
                                                            Confirm
                                                          </Button>
                                                        )}
                                                    </td>
                                                    {/* <td className='text-center'>
                                                      {(!appo.confirmedByVet &&
                                                        !appo.confirmedByOwner &&
                                                        !appo.isDone) ||
                                                        (appo.confirmedByVet &&
                                                          !appo.confirmedByOwner &&
                                                          !appo.isDone) ||
                                                        (!appo.confirmedByVet &&
                                                          appo.confirmedByOwner &&
                                                          !appo.isDone && (
                                                            <Button>
                                                              Edit
                                                            </Button>
                                                          ))}
                                                    </td> */}
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </span>
                                          </CardBody>
                                        );
                                      })
                                    ) : (
                                      <tr>
                                        <td>
                                          <span className='no-favourite'>
                                            <span>
                                              You can trust our Vet list and
                                              take an appointment
                                            </span>
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </Table>
                              </span>
                            </span>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId='2'>
                        <Card className='mb-0'>
                          <CardBody className='p-0'>
                            <span className='taskadd'>
                              <span className='table-responsive'>
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {pendingAppointments &&
                                    pendingAppointments.length > 0 &&
                                    (role === "petOwner" ||
                                    // eslint-disable-next-line
                                      role === "Admin") ? (
                                      pendingAppointments.map( // eslint-disable-next-line
                                        (pendApp, index) => {
                                          if (
                                            pendApp &&
                                            pendApp.confirmedByOwner &&
                                            pendApp.confirmedByVet
                                          )
                                            return (
                                              <tr key={index}>
                                                <td>
                                                  <h6 className='task_title_0'>
                                                    Your appointment is
                                                    confirmed
                                                  </h6>
                                                  <p className='project_name_0'>
                                                    {pendApp.date}
                                                  </p>
                                                </td>
                                                <td>
                                                  <p className='task_desc_0'>
                                                    {pendApp.description}
                                                  </p>
                                                </td>
                                              </tr>
                                            );
                                        }
                                      )
                                    ) : pendingAppointments &&
                                      pendingAppointments.length > 0 &&
                                      role === "Veterinary" ? (
                                      pendingAppointments.map(
                                        (pendApp, index) => {
                                          if (
                                            pendApp &&
                                            pendApp.confirmedByOwner &&
                                            pendApp.confirmedByVet
                                          )
                                            return (
                                              <tr key={index}>
                                                <td>
                                                  <h6 className='task_title_0'>
                                                    Your appointment is
                                                    confirmed
                                                  </h6>
                                                  <p className='project_name_0'>
                                                    {pendApp &&
                                                      pendApp.description}
                                                  </p>
                                                </td>
                                                <td>
                                                  <p className='task_desc_0'>
                                                    {pendApp && pendApp.date}
                                                  </p>
                                                </td>
                                              </tr>
                                            );
                                          else return "";
                                        }
                                      )
                                    ) : (
                                      <tr>
                                        <td>
                                          <span className='no-favourite'>
                                            <span>
                                              No Confirmed Appointments yet !!{" "}
                                            </span>
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </Table>
                              </span>
                            </span>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId='3'>
                        <Card className='mb-0'>
                          <CardBody className='p-0'>
                            <span className='taskadd'>
                              <span className='table-responsive'>
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {pendingAppointments &&// eslint-disable-next-line
                                    pendingAppointments.length > 0 &&
                                    role === "Veterinary" ? (
                                      pendingAppointments.map( // eslint-disable-next-line
                                        (pendApp, index) => {
                                          if (
                                            pendApp.confirmedByOwner &&
                                            !pendApp.confirmedByVet
                                          )
                                            return (
                                              <tr key={index}>
                                                <td>
                                                  <h6 className='task_title_0'>
                                                    New appointment:{" "}
                                                    {pendApp && pendApp.date}
                                                  </h6>
                                                  <p className='project_name_0'>
                                                    {pendApp &&
                                                      pendApp.description}
                                                  </p>
                                                </td>
                                                <td>
                                                  <p className='task_desc_0'>
                                                    Confirm or change the Date
                                                    with your Patient
                                                  </p>
                                                </td>
                                                <td className='text-center'>
                                                  <Button
                                                    onClick={() =>
                                                      confirmAppo(
                                                        pendApp.idVet,
                                                        pendApp.idPet,
                                                        pendApp.idOwner,
                                                        pendApp.idAppointment
                                                      )
                                                    }
                                                  >
                                                    Confirm
                                                  </Button>
                                                </td>
                                                <td className='text-center'>
                                                  {!pendApp.confirmedByVet &&
                                                    pendApp.confirmedByOwner &&
                                                    !pendApp.isDone && (
                                                      <Button>Edit</Button>
                                                    )}
                                                </td>
                                              </tr>
                                            );
                                        }
                                      )
                                    ) : pendingAppointments &&
                                      pendingAppointments.length > 0 &&
                                      (role === "petOwner" ||
                                        role === "Admin") &&
                                      pendingAppointments[0].confirmedByVet ? (
                                      pendingAppointments.map(
                                        (pendApp, index) => {
                                          if (
                                            pendApp &&
                                            !pendApp.confirmedByOwner &&
                                            pendApp.confirmedByVet
                                          )
                                            return (
                                              <tr key={index}>
                                                <td>
                                                  <h6 className='task_title_0'>
                                                    New appointment:{" "}
                                                    {pendApp && pendApp.date}
                                                  </h6>
                                                  <p className='project_name_0'>
                                                    {pendApp &&
                                                      pendApp.description}
                                                  </p>
                                                </td>
                                                <td>
                                                  <p className='task_desc_0'>
                                                    Confirm or change the Date
                                                    with your Veterinary
                                                  </p>
                                                </td>
                                              </tr>
                                            );
                                          else return "";
                                        }
                                      )
                                    ) : (
                                      <tr>
                                        <td>
                                          <span className='no-favourite'>
                                            <span>
                                              No Upcoming Appointments{" "}
                                            </span>
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </Table>
                              </span>
                            </span>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId='4'>
                        <Card className='mb-0'>
                          <CardBody className='p-0'>
                            <span className='taskadd'>
                              <span className='table-responsive'>
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {pendingAppointments &&
                                    pendingAppointments.length > 0 &&
                                    // eslint-disable-next-line
                                    (role === "petOwner" ||
                                      role === "Admin") ? (
                                      pendingAppointments.map( // eslint-disable-next-line
                                        (pendApp, index) => {
                                          const theVet =
                                            vets &&
                                            vets.find(
                                              (vet) =>
                                                vet.idUser === pendApp.idVet
                                            );
                                          if (
                                            pendApp.confirmedByOwner &&
                                            !pendApp.confirmedByVet
                                          )
                                            return (
                                              <tr key={index}>
                                                <td>
                                                  <h6 className='task_title_0'>
                                                    {pendApp.description}
                                                  </h6>
                                                  <p className='project_name_0'>
                                                    {pendApp.date}
                                                  </p>
                                                </td>
                                                <td>
                                                  <p className='task_desc_0'>
                                                    Waiting for confirmation
                                                    from {theVet && theVet.nom}
                                                  </p>
                                                </td>
                                                {/* <td>
                                                  <a
                                                    className='mr-2'
                                                    href='#javascript'
                                                  >
                                                    <Link />
                                                  </a>
                                                  <a href='#javascript'>
                                                    <MoreHorizontal />
                                                  </a>
                                                </td> */}
                                              </tr>
                                            );
                                        }
                                      )
                                    ) : (
                                      <tr>
                                        <td>
                                          <span className='no-favourite'>
                                            <span>No Pending Appointments</span>
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </Table>
                              </span>
                            </span>
                          </CardBody>
                        </Card>
                      </TabPane>
                      <TabPane tabId='5'>
                        <Card className='mb-0'>
                          <CardBody className='p-0'>
                            <span className='taskadd'>
                              <span className='table-responsive'>
                                <Table>
                                  <thead></thead>
                                  <tbody>
                                    {notifications.length && false ? (
                                      notifications &&
                                      notifications.map((pendApp, index) => {
                                        return (
                                          <CardBody className='pt-0'>
                                            <span className='appointment-table table-responsive'>
                                              <table className='table table-bordernone'>
                                                <tbody>
                                                  <tr>
                                                    <td>
                                                      <img
                                                        className='img-fluid img-40 rounded-circle'
                                                        src={
                                                          require("../../assets/images/appointment/app-ent.jpg")
                                                            .default
                                                        }
                                                        alt=''
                                                      />
                                                    </td>
                                                    <td className='img-content-box'>
                                                      <span className='d-block'>
                                                        Vet Foulen
                                                      </span>
                                                      <span className='font-roboto'>
                                                        {"11:00"}
                                                      </span>
                                                    </td>
                                                    <td>
                                                      <p className='m-0 font-primary'>
                                                        {"22 Sept"}
                                                      </p>
                                                    </td>
                                                    <td className='text-center'>
                                                      Pet Name
                                                    </td>
                                                    <td className='text-right'>
                                                      <Badge color='danger'>
                                                        Canceled
                                                      </Badge>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </span>
                                          </CardBody>
                                        );
                                      })
                                    ) : (
                                      <tr>
                                        <td>
                                          <span className='no-favourite'>
                                            <span>
                                              No Canceled Appointments{" "}
                                            </span>
                                          </span>
                                        </td>
                                      </tr>
                                    )}
                                  </tbody>
                                </Table>
                              </span>
                            </span>
                          </CardBody>
                        </Card>
                      </TabPane>
                    </TabContent>
                  </span>
                </Card>
              </span>
            </Col>
          </Row>
        </span>
      </Container>
    </Fragment>
  );
};

export default Notifndapp;
