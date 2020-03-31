import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Card,
  Image,
  Modal,
  ListGroup,
  Spinner
} from "react-bootstrap";
import NumberFormat from "react-number-format";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import "../css/ProductGall.css";
import { FaFilter } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";
// import icon1 from "../../img/icon1.jpg";
// import icon2 from "../../img/icon2.jpg";
// import icon3 from "../../img/icon3.jpg";
import icon4 from "../../img/icon4.jpg";
import icon5 from "../../img/icon5.jpg";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import URL_img from "../../config/URL_img";
import CardChat from "../components/CardChat";
const cookies = new Cookies();
export default class ProductGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      product1: [],
      gallery: [{ name_gallery: "" }],
      name1: "",
      show: false,
      show2: false,
      show3: false,
      name2: "",
      galleryAll: [],
      typeGallery: [],
      Gallery1: [],
      galleryDiv: [],
      galleryDiv2: [],
      getAll: "",
      productCol: "col-sm-4"
    };
  }
  getdata(e) {
    this.setState({ show: false, getAll: e.target.value });
    //console.log("object", e.target.value);
    // const id1 = id
    fetch(ROOT_API + "/api/product/1?id_gallery=" + e.target.value)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            product1: result
          });
        },
        error => {}
      );
    fetch(ROOT_API + "/api/product?id_gallery=" + e.target.value)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            product: result
          });
        },
        error => {}
      );
    fetch(ROOT_API + "/api/gallery/1?id_gallery=" + e.target.value)
      .then(res => res.json())
      .then(
        result => {
          this.setState({ gallery: result });
          this.setState({
            name1: this.state.gallery[0].name_gallery.split(" ")
          });
          document.title = this.state.gallery[0].name_gallery;
          for (let index = 0; index < this.state.name1.length; index++) {
            if (index !== this.state.name1.length - 1) {
              this.setState({
                name2: this.state.name2 + this.state.name1[index] + " "
              });
            }
          }
          //console.log("object");
        },
        error => {}
      );
  }
  gettype() {
    fetch(ROOT_API + "/api/typeGallery")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ typeGallery: result });
          for (let i1 = 0; i1 < this.state.typeGallery.length; i1++) {
            fetch(
              ROOT_API +
                "/api/gallery?id_type_gallery=" +
                this.state.typeGallery[i1].id_type_gallery
            )
              .then(res => res.json())
              .then(
                result => {
                  this.setState({ Gallery1: result });
                  for (
                    let index = 0;
                    index < this.state.Gallery1.length;
                    index++
                  ) {
                    this.setState({
                      galleryDiv: (
                        <>
                          {this.state.galleryDiv}
                          <ListGroup.Item
                            action
                            value={this.state.Gallery1[index].id_gallery}
                            onClick={this.getdata.bind(this)}
                          >
                            {this.state.Gallery1[index].name_gallery}
                          </ListGroup.Item>
                        </>
                      )
                    });
                    if (index === this.state.Gallery1.length - 1) {
                      this.setState({
                        galleryDiv2: (
                          <>
                            {this.state.galleryDiv2}
                            <div className="card">
                              <div
                                className="card-header"
                                data-card-widget="collapse"
                              >
                                <h3 className="card-title">
                                  {this.state.typeGallery[i1].name_type_gallery}
                                </h3>
                                <div className="card-tools">
                                  <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="collapse"
                                  >
                                    <i className="fas fa-minus" />
                                  </button>
                                </div>
                              </div>
                              <div
                                className="card-body"
                                style={{ display: "block" }}
                              >
                                <ListGroup defaultActiveKey="#link1">
                                  {this.state.galleryDiv}
                                </ListGroup>
                              </div>
                            </div>
                          </>
                        ),
                        galleryDiv: <></>
                      });
                    }
                  }
                },
                error => {}
              );
          }
        },
        error => {}
      );
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (window.innerWidth <= 425) {
      this.setState({ productCol: "colproductm" });
    }

    this.gettype();

    if (this.props.match.params.id === "All") {
      this.setState({
        show: true
      });
    } else {
      fetch(ROOT_API + "/api/product?id_gallery=" + this.props.match.params.id)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              product: result
            });
          },
          error => {}
        );
      fetch(
        ROOT_API + "/api/product/1?id_gallery=" + this.props.match.params.id
      )
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              product1: result
            });
          },
          error => {}
        );
      fetch(
        ROOT_API + "/api/gallery/1?id_gallery=" + this.props.match.params.id
      )
        .then(res => res.json())
        .then(
          result => {
            this.setState({ gallery: result });
            document.title = this.state.gallery[0].name_gallery;
            this.setState({
              name1: this.state.gallery[0].name_gallery.split(" ")
            });
            for (let index = 0; index < this.state.name1.length; index++) {
              if (index !== this.state.name1.length - 1) {
                this.setState({
                  name2: this.state.name2 + this.state.name1[index] + " "
                });
              }
            }
            //console.log("object");
          },
          error => {}
        );
    }
  }
  check_type(e) {
    var e1 = e.target.value;
    var idd = "";
    if (this.props.match.params.id === "All") {
      idd = this.state.getAll;
    } else {
      idd = this.props.match.params.id;
    }
    if (e1 === "All") {
      fetch(ROOT_API + "/api/product?id_gallery=" + idd)
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              product: result
            });
          },
          error => {}
        );
    } else {
      var r1 = e1.split("-");

      fetch(
        ROOT_API +
          "/api/filltertype?id_gallery=" +
          idd +
          "&min=" +
          r1[0] +
          "&max=" +
          r1[1]
      )
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              product: result
            });
          },
          error => {}
        );
    }
  }

  render() {
    return (
      <div>
        <div className="mobeil1" >
          <Carousel>
            {this.state.product1.map((product, index) => (
              <Carousel.Item key={index}>
                <h1 className="CaroN">{product.name_product_en}</h1>
                <div className="CaroP">
                  <h1
                    style={{
                      fontWeight: "bold",
                      fontFamily: "monospace",
                      fontSize: "3rem"
                    }}
                    className="pricegall"
                  >
                    <NumberFormat
                      value={product.price_product}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"THB "}
                    />
                  </h1>
                  <Button
                    className="btnCP"
                    href={"/DetailProduct/" + product.id_product}
                  >
                    Buy now
                  </Button>
                </div>
                <div style={{ display: "flex", flexFlow: "row" }}>
                  <img
                    // className="d-block w-60"
                    width="60%"
                    src={URL_img + product.img_product}
                    alt="First slide"
                  />
                  <img
                    // className="d-block w-40"
                    width="40%"
                    height="40%"
                    src={URL_img + product.img_plan}
                    alt="First slide"
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          <br />
          <Container>
            <Row>
              <Col style={{ display: "flex" }}>
                <div style={{ marginRight: "1rem" }}>
                  <center>
                    <h3 className="namegallerm" style={{ fontWeight: "bold", marginBottom: "2px" }}>
                      {this.state.name2}
                    </h3>

                    <h3 className="namegaller2m" style={{ color: "#F25C05", fontWeight: "bold" }}>
                      {this.state.name1[this.state.name1.length - 1]}
                    </h3>
                  </center>
                </div>
                <div style={{ width: "60%", marginRight: "1rem" }}>
                  <input
                    type="text"
                    className="form-control"
                    style={{ marginBottom: "1rem" }}
                  />
                  <div className="Filter Fillm">
                    <p style={{ marginRight: "10px" }}>Filter : </p>
                    <div className="Filter">
                      <label className="cont">
                        All types
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                          value="All"
                          onClick={this.check_type.bind(this)}
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="cont">
                        50-100 m<sup>2</sup>
                        <input
                          type="radio"
                          name="radio"
                          value="50-100"
                          onClick={this.check_type.bind(this)}
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="cont">
                        100-150 m<sup>2</sup>
                        <input
                          type="radio"
                          name="radio"
                          value="100-150"
                          onClick={this.check_type.bind(this)}
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="cont">
                        150-200 m<sup>2</sup>
                        <input
                          type="radio"
                          name="radio"
                          value="150-200"
                          onClick={this.check_type.bind(this)}
                        />
                        <span className="checkmark" />
                      </label>
                      <label className="cont">
                        200-500 m<sup>2</sup>
                        <input
                          type="radio"
                          name="radio"
                          value="200-500"
                          onClick={this.check_type.bind(this)}
                        />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <Button
                    className="Filld Btn1"
                    onClick={() => this.setState({ show2: true })}
                  >
                    <FaFilter />
                  </Button>
                </div>
                <div style={{ marginRight: "1rem" }}>
                  {cookies.get("ID_Login") === undefined && (
                    <>
                      {/* <Button
                        className="Btn1"
                        style={{ marginBottom: ".5rem" }}
                        href="/Signin"
                      >
                        LOG-IN
                      </Button>
                      <Button className="Btn1" href="/Signup">
                        SIGN-UP
                      </Button> */}
                    </>
                  )}
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Row>
                  {this.state.product.map((product, index) => (
                    <div key={index} className={this.state.productCol}>
                      <Link
                        className="Ca"
                        to={"/DetailProduct/" + product.id_product}
                      >
                        <Card className="CC">
                          <div style={{ textAlign: "center" }}>
                            <Image
                              src={URL_img + product.img_product}
                              style={{ marginBottom: "1rem", width: "100%" }}
                            />
                          </div>
                          <h3
                            className="nameCut npm11"
                            style={{ fontFamily: "CaviarDreams_Bold" }}
                          >
                            {product.name_product_en}
                          </h3>
                          <p className="ComCut">"comment pop-up"</p>
                          <p style={{ marginBottom: "5px" }}>Categories : </p>
                          <div style={{ display: "flex", marginBottom: "5px" }}>
                            <p
                              className="CategoriesP"
                              style={{
                                width: "fit-content",
                                fontSize: ".6rem",
                                margin: "2px"
                              }}
                            >
                              {this.state.name2}
                            </p>
                            <p
                              className="CategoriesP"
                              style={{
                                width: "fit-content",
                                fontSize: ".6rem",
                                margin: "2px"
                              }}
                            >
                              {product.size_product}
                            </p>
                            <p
                              className="CategoriesP"
                              style={{
                                width: "fit-content",
                                fontSize: ".6rem",
                                margin: "2px"
                              }}
                            >
                              {product.type_product} m<sup>2</sup>
                            </p>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              height: "70%"
                            }}
                          >
                            <p style={{ marginBottom: "5px" }}>
                              Excellence : " {product.excellence} "
                            </p>
                          </div>
                          <Row>
                            <Col
                              style={{ paddingRight: "0", alignSelf: "center" }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#000",
                                  color: "#d57133",
                                  width: "fit-content",
                                  padding: "2px 20px"
                                }}
                              >
                                <h3 className="priceeeeeeee" style={{ marginBottom: "0" ,fontSize:'2vw'}}>
                                  <NumberFormat
                                    value={product.price_product}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"฿"}
                                  />
                                </h3>
                              </div>
                            </Col>
                            <Col
                              className="lmmm"
                              style={{ paddingLeft: "5px" }}
                            >
                              <p
                                style={{ fontSize: ".8rem", marginBottom: "0" }}
                              >
                                <Image src={icon5} width="25%" />
                                1,300{" "}
                              </p>
                              <p
                                style={{ fontSize: ".8rem", marginBottom: "0" }}
                              >
                                <Image src={icon4} width="25%" />
                                100x{" "}
                              </p>
                            </Col>
                          </Row>
                        </Card>
                      </Link>
                    </div>
                  ))}
                </Row>
              </Col>
              <Col className="chatd" sm={3}>
                <CardChat id="mm1" />
              </Col>
            </Row>
          </Container>
        </div>
        <Advertisement />
        <OutServices />
        <IssueHome />
        <Footer />

        <Modal show={this.state.show} centered>
          <Modal.Header>
            <Modal.Title>Select Gallery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.galleryDiv2}
            {this.state.galleryDiv2.length === 0 && (
              <div style={{ textAlign: "center" }}>
                <Spinner animation="border" />
              </div>
            )}
          </Modal.Body>
        </Modal>
        <Modal
          centered
          show={this.state.show2}
          onHide={() => {
            this.setState({ show2: false });
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Filter : </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label className="cont">
              All types
              <input
                type="radio"
                defaultChecked="checked"
                name="radio"
                value="All"
                onClick={this.check_type.bind(this)}
              />
              <span className="checkmark" />
            </label>
            <label className="cont">
              50-100 m<sup>2</sup>
              <input
                type="radio"
                name="radio"
                value="50-100"
                onClick={this.check_type.bind(this)}
              />
              <span className="checkmark" />
            </label>
            <label className="cont">
              100-150 m<sup>2</sup>
              <input
                type="radio"
                name="radio"
                value="100-150"
                onClick={this.check_type.bind(this)}
              />
              <span className="checkmark" />
            </label>
            <label className="cont">
              150-200 m<sup>2</sup>
              <input
                type="radio"
                name="radio"
                value="150-200"
                onClick={this.check_type.bind(this)}
              />
              <span className="checkmark" />
            </label>
            <label className="cont">
              200-500 m<sup>2</sup>
              <input
                type="radio"
                name="radio"
                value="200-500"
                onClick={this.check_type.bind(this)}
              />
              <span className="checkmark" />
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={() => {
                this.setState({ show2: false });
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal
          centered
          show={this.state.show3}
          onHide={() => {
            this.setState({ show3: false });
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Chat : </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CardChat  id="mm2"/>
          </Modal.Body>
        </Modal>

        <Button
          className="chatm Btn1"
          style={{
            position: "fixed",
            bottom: "5vw",
            right: "5vw",
            borderRadius: "2rem",
            fontSize: "2rem"
          }}
          onClick={() => {
            this.setState({ show3: true });
          }}
        >
          <IoMdChatboxes />
        </Button>
      </div>
    );
  }
}
