import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import Dropzone from "react-dropzone-uploader";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { addPet, videErrors } from "../../redux/petActions/action";

const CreatePet = ({ history }) => {
  const dispatch = useDispatch();

  const [pet, setPet] = useState({});
  const [breed, setBreed] = useState("");
  const [vaccineForm, setVaccineForm] = useState(true);
  const [gender, setGender] = useState("");
  const [startDate, setstartDate] = useState(new Date()); //Date picker related
  const [vac1Date, setVac1Date] = useState(new Date()); //Date vac1
  const [vac2Date, setVac2Date] = useState(new Date()); //Date vac2
  const [vaccin, setVaccin] = useState([]);
  const [vac1, setVac1] = useState("");
  const [vac2, setVac2] = useState("");

  const getValueBreed = (e) => setBreed(e.target.value);

  const checkVaccin = (state) => {
    setVaccineForm(state);
  };

  const handleChange = (date) => {
    //Date Picker related
    setstartDate(date);
  };
  const handleChangeVac1Date = (date) => {
    //Date Picker related
    setVac1Date(date);
  };
  const handleChangeVac2Date = (date) => {
    //Date Picker related
    setVac2Date(date);
  };
  const getVac1 = (e) => setVac1(e.target.value);
  const getVac2 = (e) => setVac2(e.target.value);

  //get vaccines if pet is vaccinated

  const FFFFFF = () => {
    if (vaccineForm) {
      setVaccin([
        { vaccine: vac1, date: vac1Date.toString() },
        { vaccine: vac2, date: vac2Date.toString() },
      ]);
    }
  };

  const getPet = (e) => {
    FFFFFF();
    setPet({
      ...pet,
      gender,
      isVaccined: vaccineForm,
      race: breed,
      age: startDate.toString(),
      vaccines: vaccin,
      [e.target.name]: e.target.value,
    });
  };
  const ownerID = useSelector((state) => state.currentUser.user.idUser); // GETTING THE ID OF THE OWNER TO CREATE THE PET
  const sendPet = () => {
    if (ownerID) {
      console.log(ownerID);
      dispatch(addPet(pet, history, ownerID));
    }
  };

  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  }; // DropZone reltated

  //toast related states from response of backend via redux
  const notification = useSelector((state) => state.petReducer.msg);
  const arrErrors = useSelector((state) => state.petReducer.errors);
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

  const handleChangeStatus = ({ meta, file }, status) => {}; // DropZone reltated
  return (
    <Fragment>
      <Breadcrumb parent='Forms' title='Add My Pet' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader>
                <h5>Add My Pet</h5>
              </CardHeader>
              <CardBody>
                <Form className='theme-form mega-form'>
                  <h6>The Pet Details:</h6>
                  <FormGroup>
                    <Label className='col-form-label'>Name</Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='Name'
                      name='name'
                      onChange={(e) => getPet(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>Pet type </Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='ex: cat, bird, dog...'
                      name='petType'
                      onChange={(e) => getPet(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>Date Of Birth</Label>
                    {/* Date Picker */}
                    <FormGroup className='form-row'>
                      <div className='col-xl-5 col-sm-9'>
                        <div className='input-group'>
                          <DatePicker
                            className='form-control digits'
                            selected={startDate}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                    </FormGroup>
                  </FormGroup>

                  <Col sm='12'>
                    <h5>Gender</h5>
                  </Col>
                  <Col>
                    <FormGroup className='m-t-15 custom-radio-ml'>
                      <div className='radio radio-primary'>
                        <Input
                          id='radio11'
                          type='radio'
                          name='radio1'
                          value='option1'
                          onClick={() => setGender("Male")}
                        />
                        <Label for='radio11'>Male</Label>
                      </div>
                      <div className='radio radio-secondary'>
                        <Input
                          id='radio22'
                          type='radio'
                          name='radio1'
                          value='option1'
                          onClick={() => setGender("Female")}
                        />
                        <Label for='radio22'>Female</Label>
                      </div>
                    </FormGroup>
                  </Col>

                  <FormGroup>
                    <Label className='col-form-label'>Breed</Label>
                    <Input
                      type='select'
                      className='custom-select'
                      required=''
                      onChange={(e) => getValueBreed(e)}
                    >
                      <option value='affenpinscher'>affenpinscher</option>
                      <option value='african'>african</option>
                      <option value='airedale'>airedale</option>
                      <option value='akita'>akita</option>
                      <option value='appenzeller'>appenzeller</option>
                      <option value='australian-shepherd'>
                        shepherd australian
                      </option>
                      <option value='basenji'>basenji</option>
                      <option value='beagle'>beagle</option>
                      <option value='bluetick'>bluetick</option>
                      <option value='borzoi'>borzoi</option>
                      <option value='bouvier'>bouvier</option>
                      <option value='boxer'>boxer</option>
                      <option value='brabancon'>brabancon</option>
                      <option value='briard'>briard</option>
                      <option value='buhund-norwegian'>norwegian buhund</option>
                      <option value='bulldog-boston'>boston bulldog</option>
                      <option value='bulldog-english'>english bulldog</option>
                      <option value='bulldog-french'>french bulldog</option>
                      <option value='bullterrier-staffordshire'>
                        staffordshire bullterrier
                      </option>
                      <option value='cairn'>cairn</option>
                      <option value='cattledog-australian'>
                        australian cattledog
                      </option>
                      <option value='chihuahua'>chihuahua</option>
                      <option value='chow'>chow</option>
                      <option value='clumber'>clumber</option>
                      <option value='cockapoo'>cockapoo</option>
                      <option value='collie-border'>border collie</option>
                      <option value='coonhound'>coonhound</option>
                      <option value='corgi-cardigan'>cardigan corgi</option>
                      <option value='cotondetulear'>cotondetulear</option>
                      <option value='dachshund'>dachshund</option>
                      <option value='dalmatian'>dalmatian</option>
                      <option value='dane-great'>great dane</option>
                      <option value='deerhound-scottish'>
                        scottish deerhound
                      </option>
                      <option value='dhole'>dhole</option>
                      <option value='dingo'>dingo</option>
                      <option value='doberman'>doberman</option>
                      <option value='elkhound-norwegian'>
                        norwegian elkhound
                      </option>
                      <option value='entlebucher'>entlebucher</option>
                      <option value='eskimo'>eskimo</option>
                      <option value='finnish-lapphund'>lapphund finnish</option>
                      <option value='frise-bichon'>bichon frise</option>
                      <option value='germanshepherd'>germanshepherd</option>
                      <option value='greyhound-italian'>
                        italian greyhound
                      </option>
                      <option value='groenendael'>groenendael</option>
                      <option value='havanese'>havanese</option>
                      <option value='hound-afghan'>afghan hound</option>
                      <option value='hound-basset'>basset hound</option>
                      <option value='hound-blood'>blood hound</option>
                      <option value='hound-english'>english hound</option>
                      <option value='hound-ibizan'>ibizan hound</option>
                      <option value='hound-plott'>plott hound</option>
                      <option value='hound-walker'>walker hound</option>
                      <option value='husky'>husky</option>
                      <option value='keeshond'>keeshond</option>
                      <option value='kelpie'>kelpie</option>
                      <option value='komondor'>komondor</option>
                      <option value='kuvasz'>kuvasz</option>
                      <option value='labradoodle'>labradoodle</option>
                      <option value='labrador'>labrador</option>
                      <option value='leonberg'>leonberg</option>
                      <option value='lhasa'>lhasa</option>
                      <option value='malamute'>malamute</option>
                      <option value='malinois'>malinois</option>
                      <option value='maltese'>maltese</option>
                      <option value='mastiff-bull'>bull mastiff</option>
                      <option value='mastiff-english'>english mastiff</option>
                      <option value='mastiff-tibetan'>tibetan mastiff</option>
                      <option value='mexicanhairless'>mexicanhairless</option>
                      <option value='mix'>mix</option>
                      <option value='mountain-bernese'>bernese mountain</option>
                      <option value='mountain-swiss'>swiss mountain</option>
                      <option value='newfoundland'>newfoundland</option>
                      <option value='otterhound'>otterhound</option>
                      <option value='ovcharka-caucasian'>
                        caucasian ovcharka
                      </option>
                      <option value='papillon'>papillon</option>
                      <option value='pekinese'>pekinese</option>
                      <option value='pembroke'>pembroke</option>
                      <option value='pinscher-miniature'>
                        miniature pinscher
                      </option>
                      <option value='pitbull'>pitbull</option>
                      <option value='pointer-german'>german pointer</option>
                      <option value='pointer-germanlonghair'>
                        germanlonghair pointer
                      </option>
                      <option value='pomeranian'>pomeranian</option>
                      <option value='poodle-miniature'>miniature poodle</option>
                      <option value='poodle-standard'>standard poodle</option>
                      <option value='poodle-toy'>toy poodle</option>
                      <option value='pug'>pug</option>
                      <option value='puggle'>puggle</option>
                      <option value='pyrenees'>pyrenees</option>
                      <option value='redbone'>redbone</option>
                      <option value='retriever-chesapeake'>
                        chesapeake retriever
                      </option>
                      <option value='retriever-curly'>curly retriever</option>
                      <option value='retriever-flatcoated'>
                        flatcoated retriever
                      </option>
                      <option value='retriever-golden'>golden retriever</option>
                      <option value='ridgeback-rhodesian'>
                        rhodesian ridgeback
                      </option>
                      <option value='rottweiler'>rottweiler</option>
                      <option value='saluki'>saluki</option>
                      <option value='samoyed'>samoyed</option>
                      <option value='schipperke'>schipperke</option>
                      <option value='schnauzer-giant'>giant schnauzer</option>
                      <option value='schnauzer-miniature'>
                        miniature schnauzer
                      </option>
                      <option value='setter-english'>english setter</option>
                      <option value='setter-gordon'>gordon setter</option>
                      <option value='setter-irish'>irish setter</option>
                      <option value='sheepdog-english'>english sheepdog</option>
                      <option value='sheepdog-shetland'>
                        shetland sheepdog
                      </option>
                      <option value='shiba'>shiba</option>
                      <option value='shihtzu'>shihtzu</option>
                      <option value='spaniel-blenheim'>blenheim spaniel</option>
                      <option value='spaniel-brittany'>brittany spaniel</option>
                      <option value='spaniel-cocker'>cocker spaniel</option>
                      <option value='spaniel-irish'>irish spaniel</option>
                      <option value='spaniel-japanese'>japanese spaniel</option>
                      <option value='spaniel-sussex'>sussex spaniel</option>
                      <option value='spaniel-welsh'>welsh spaniel</option>
                      <option value='springer-english'>english springer</option>
                      <option value='stbernard'>stbernard</option>
                      <option value='terrier-american'>american terrier</option>
                      <option value='terrier-australian'>
                        australian terrier
                      </option>
                      <option value='terrier-bedlington'>
                        bedlington terrier
                      </option>
                      <option value='terrier-border'>border terrier</option>
                      <option value='terrier-dandie'>dandie terrier</option>
                      <option value='terrier-fox'>fox terrier</option>
                      <option value='terrier-irish'>irish terrier</option>
                      <option value='terrier-kerryblue'>
                        kerryblue terrier
                      </option>
                      <option value='terrier-lakeland'>lakeland terrier</option>
                      <option value='terrier-norfolk'>norfolk terrier</option>
                      <option value='terrier-norwich'>norwich terrier</option>
                      <option value='terrier-patterdale'>
                        patterdale terrier
                      </option>
                      <option value='terrier-russell'>russell terrier</option>
                      <option value='terrier-scottish'>scottish terrier</option>
                      <option value='terrier-sealyham'>sealyham terrier</option>
                      <option value='terrier-silky'>silky terrier</option>
                      <option value='terrier-tibetan'>tibetan terrier</option>
                      <option value='terrier-toy'>toy terrier</option>
                      <option value='terrier-westhighland'>
                        westhighland terrier
                      </option>
                      <option value='terrier-wheaten'>wheaten terrier</option>
                      <option value='terrier-yorkshire'>
                        yorkshire terrier
                      </option>
                      <option value='vizsla'>vizsla</option>
                      <option value='waterdog-spanish'>spanish waterdog</option>
                      <option value='weimaraner'>weimaraner</option>
                      <option value='whippet'>whippet</option>
                      <option value='wolfhound-irish'>irish wolfhound</option>
                    </Input>
                    <div className='invalid-feedback'>
                      {"Example invalid custom select feedback"}
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <Label className='col-form-label'>Color</Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='Color'
                      name='color'
                      onChange={(e) => getPet(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className='col-form-label'>
                      Distinguishing Mark
                    </Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='ex: black tail/ dark spot on the back....'
                      name='distinguishingMark'
                      onChange={(e) => getPet(e)}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label className='col-form-label'>Known Allergies</Label>
                    <Input
                      className='form-control'
                      type='text'
                      placeholder='Allergies'
                      name='knownAllergies'
                      onChange={(e) => getPet(e)}
                    />
                  </FormGroup>
                </Form>

                <Form>
                  <Col sm='12'>
                    <h5>Vaccinated</h5>
                  </Col>
                  <Col>
                    <FormGroup className='m-t-15 custom-radio-ml'>
                      <div className='radio radio-success'>
                        <Input
                          id='radio55'
                          type='radio'
                          name='radio2'
                          value='option2'
                          defaultChecked
                          onClick={() => checkVaccin(true)}
                        />
                        <Label for='radio55'>Yes </Label>
                      </div>
                      <div className='radio radio-danger'>
                        <Input
                          id='radio66'
                          type='radio'
                          name='radio2'
                          value='option2'
                          onClick={() => checkVaccin(false)}
                        />
                        <Label for='radio66'>No</Label>
                      </div>
                    </FormGroup>
                  </Col>
                  {/* Vaccines Statrs Here */}

                  <div>
                    {/* first Condition to show the form of vaccination details */}
                    {vaccineForm ? (
                      <div>
                        <label className='pb-4'>Vaccines done:</label>
                        <div className='form-inline theme-form billing-form'>
                          <FormGroup>
                            <Input
                              className='form-control'
                              type='text'
                              placeholder='Vaccine name'
                              name='vac1'
                              onChange={(e) => getVac1(e)}
                            />
                          </FormGroup>
                          <FormGroup className='form-row'>
                            <label className='col-sm-3 col-form-label text-right'>
                              Date
                            </label>
                            <div className='col-xl-5 col-sm-9'>
                              <div className='input-group'>
                                <DatePicker
                                  className='form-control digits'
                                  selected={vac1Date}
                                  onChange={(e) => handleChangeVac1Date(e)}
                                />
                              </div>
                            </div>
                          </FormGroup>
                        </div>

                        <div className='form-inline theme-form billing-form'>
                          <FormGroup>
                            <Input
                              className='form-control'
                              type='text'
                              placeholder='Vaccine name'
                              name='vac2'
                              onChange={(e) => getVac2(e)}
                            />
                          </FormGroup>
                          <FormGroup className='form-row'>
                            <label className='col-sm-3 col-form-label text-right'>
                              Date
                            </label>
                            <div className='col-xl-5 col-sm-9'>
                              <div className='input-group'>
                                <DatePicker
                                  className='form-control digits'
                                  selected={vac2Date}
                                  onChange={(e) => handleChangeVac2Date(e)}
                                />
                              </div>
                            </div>
                          </FormGroup>
                        </div>
                      </div>
                    ) : (
                      <> </>
                    )}
                  </div>

                  {/* Vaccines Ends Here */}
                </Form>

                <hr className='mt-4 mb-4' />

                {/* Drop ZOne Starts Here */}

                <CardHeader>
                  <h5>The Pet's Image</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className='dz-message needsclick'>
                      <Dropzone
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        maxFiles={1}
                        multiple={false}
                        canCancel={false}
                        inputContent='Drop A File'
                        styles={{
                          dropzone: { height: 200 },
                          dropzoneActive: { borderColor: "green" },
                        }}
                      />
                    </div>
                  </Form>
                </CardBody>

                {/* Drop ZOne Ends Here */}
              </CardBody>
              <CardFooter>
                <Button
                  color='primary'
                  className='mr-1'
                  onClick={() => sendPet()}
                >
                  Submit
                </Button>
                <Button color='secondary'>Cancel</Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreatePet;
