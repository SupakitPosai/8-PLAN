import React, { Component } from "react";
import HomeAbout from "../components/HomeAbout";
import BestSeller from "../components/BestSeller";
import NewUpdates from "../components/NewUpdates";
import ProductCategories from "../components/ProductCategories";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import "../css/Heardhome.css";
import Background from "../../img/hh.jpg";
// import h2 from "../../img/h1.png";
import ROOT_API from "../../config/Aip_Url";
import {
  Card,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
  Container
} from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingScreen from "react-loading-screen";
import NumberFormat from "react-number-format";
import URL_img from "../../config/URL_img";

var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      promotion: [],
      newupdate: [],
      eex: [],
      bestseller: [],
      beee: [],
      new1: [],
      exc1: [],
      neww1: [],
      excc1: []
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "8-PLAN";
    fetch(ROOT_API + "/api/getpromotion")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            promotion: result[0]
          });
        },
        error => {}
      );
    this.neww();
    // this.best();
    
  }
  neww() {
    fetch(ROOT_API + "/api/newupdate")
      .then(res => res.json())
      .then(
        data => {
          this.setState({ new1: data });
          for (let index = 0; index < this.state.new1.length; index++) {
            //console.log("newupdate1", this.state.new1);
            fetch(
              ROOT_API +
                "/api/excellenceproduct?id_product=" +
                this.state.new1[index].id_product
            )
              .then(res => res.json())
              .then(
                data => {
                  this.setState({ exc1: data });
                  for (
                    let index1 = 0;
                    index1 < this.state.exc1.length;
                    index1++
                  ) {
                    this.setState({
                      eex: [
                        ...this.state.eex,
                        {
                          img_excellenceN: this.state.exc1[index1]
                            .img_excellence,
                          detail_excellence_productN: this.state.exc1[index1]
                            .detail_excellence_product
                        }
                      ]
                    });

                    if (index1 === this.state.exc1.length - 1) {
                      var m = new Date(this.state.new1[index].created_product);
                      var mm = month[m.getMonth()];
                      var dd = m.getDate();
                      var yy = m.getFullYear();

                      this.setState({
                        newupdate: [
                          ...this.state.newupdate,
                          {
                            id_productN: this.state.new1[index].id_product,
                            img_productN: this.state.new1[index].img_product,
                            name_product_thN: this.state.new1[index]
                              .name_product_th,
                            name_product_enN: this.state.new1[index]
                              .name_product_en,
                            created_productN: dd + " " + mm + " " + yy,
                            name_galleryN: this.state.new1[index].name_gallery,
                            size_productN: this.state.new1[index].size_product,
                            detail_productN: this.state.new1[index]
                              .detail_product,
                            excellenceN: this.state.eex,
                            price_productN: this.state.new1[index]
                              .price_product,
                            price_saleN: this.state.new1[index].price_sale,
                            ready_to_build: this.state.new1[index]
                              .ready_to_build
                          }
                        ],
                        eex: []
                      });
                      //console.log("newupdate", this.state.newupdate);
                      if (index === this.state.new1.length - 1) {
                        this.best();
                      }
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
  best() {
    fetch(ROOT_API + "/api/bestseller")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ neww1: result });
          for (let indexx = 0; indexx < this.state.neww1.length; indexx++) {
            //console.log("bestseller1", this.state.neww1);
            fetch(
              ROOT_API +
                "/api/excellenceproduct?id_product=" +
                this.state.neww1[indexx].id_product
            )
              .then(res => res.json())
              .then(
                result => {
                  this.setState({ excc1: result });
                  for (
                    let indexx1 = 0;
                    indexx1 < this.state.excc1.length;
                    indexx1++
                  ) {
                    this.setState({
                      beee: [
                        ...this.state.beee,
                        {
                          img_excellence: this.state.excc1[indexx1]
                            .img_excellence,
                          detail_excellence_product: this.state.excc1[indexx1]
                            .detail_excellence_product
                        }
                      ]
                    });

                    if (indexx1 === this.state.excc1.length - 1) {
                      this.setState({
                        bestseller: [
                          ...this.state.bestseller,
                          {
                            id_product: this.state.neww1[indexx].id_product,
                            img_product: this.state.neww1[indexx].img_product,
                            name_product_th: this.state.neww1[indexx]
                              .name_product_th,
                            name_product_en: this.state.neww1[indexx]
                              .name_product_en,
                            created_product: this.state.neww1[indexx]
                              .created_product,
                            name_gallery: this.state.neww1[indexx].name_gallery,
                            size_product: this.state.neww1[indexx].size_product,
                            detail_product: this.state.neww1[indexx]
                              .detail_product,
                            excellence: this.state.beee,
                            price_product: this.state.neww1[indexx]
                              .price_product,
                            price_sale: this.state.neww1[indexx].price_sale,
                            ready_to_build: this.state.neww1[indexx]
                              .ready_to_build
                          }
                        ],
                        beee: [],
                        loading: false
                      });
                      //console.log("bestseller", this.state.bestseller);
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
  render() {
    //แอดภาพจาก server url
    // var Background = 'http://localhost/E-MART/storage/banner/banner2.jpg'

    return (
      <div>
        <LoadingScreen
          //this.state.loading
          loading={this.state.loading}
          bgColor="#f1f1f1"
          spinnerColor="#F25C05"
          textColor="#676767"
          // logoSrc='/logo.png'
          // text='Here an introduction sentence (Optional)'
        >
          <div style={{ position: "relative", top: "-7rem" }}>
            <div
              className="pimg1"
              style={{
                backgroundImage: `url(${Background})`,
                minHeight: "100%"
              }}
            >
              <Container>
                <div className="llyyuy">
                  <div
                    className="widthtextline hh1"
                    style={{
                      position: "absolute",
                      top: "40%",
                      width: "40%"
                    }}
                  >
                    <Row>
                      <Col sm={4}>
                        <h1
                          className="h1one"
                          style={{ color: "#F25C05", fontSize: "4.5rem" }}
                        >
                          ONE
                        </h1>
                      </Col>
                      <Col>
                        <h2 className="h2one" style={{ color: "#fff" }}>
                          click for your dream house
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <hr style={{ border: "1px #fff solid" }} />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p style={{ textAlign: "center", color: "#fff" }}>
                          online sustainable house design
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div
                    className="widthtextline"
                    style={{
                      position: "absolute",
                      bottom: "1px",
                      width: "40%"
                    }}
                  >
                    <p style={{ textAlign: "center", color: "#fff" }}>
                      energy saving building | environmental friendly | cost
                      saving | zero-net building
                    </p>
                  </div>
                </div>
                <div className="qqqweem">
                  <Row>
                    <Col style={{ paddingTop: "170px" }}>
                      <Row>
                        <Col>
                          <div className="widthtextline hh1">
                            <Row>
                              <Col sm={4}>
                                <h1
                                  className="h1one"
                                  style={{
                                    color: "#F25C05",
                                    fontSize: "4.5rem"
                                  }}
                                >
                                  ONE
                                </h1>
                              </Col>
                              <Col>
                                <h2 className="h2one" style={{ color: "#fff" }}>
                                  click for your dream house
                                </h2>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <hr style={{ border: "1px #fff solid" }} />
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p
                                  style={{ textAlign: "center", color: "#fff" }}
                                >
                                  online sustainable house design
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <div
                            className="widthtextline"
                            style={{
                              marginTop: "70px"
                            }}
                          >
                            <p style={{ textAlign: "center", color: "#fff" }}>
                              energy saving building | environmental friendly |
                              cost saving | zero-net building
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    <Col style={{ paddingTop: "150px" }}>
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-${"top"}`}>
                            {this.state.promotion.name_product_en}
                            {this.state.promotion.price_sale !== 0 && (
                              <NumberFormat
                                value={this.state.promotion.price_sale}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={" ฿ "}
                              />
                            )}
                            {this.state.promotion.price_sale === 0 && (
                              <NumberFormat
                                value={this.state.promotion.price_product}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={" ฿ "}
                              />
                            )}
                          </Tooltip>
                        }
                      >
                        <Card
                          className="promom"
                          style={{
                            width: "70%",

                            padding: "1px"
                          }}
                        >
                          {this.state.promotion.length !== 0 && (
                            <>
                              <Link
                                to={
                                  "/DetailProduct/" +
                                  this.state.promotion.id_product
                                }
                              >
                                <Card.Img
                                  variant="top"
                                  src={
                                    URL_img + this.state.promotion.img_product
                                  }
                                />
                              </Link>
                              <div
                                style={{
                                  width: "60%",
                                  position: "absolute",
                                  right: "0",
                                  top: "0"
                                }}
                              >
                                <div className="rh">
                                  <div className="ribbontext">Promotion !!</div>
                                </div>
                              </div>
                              <div
                                className="ribcardm"
                                style={{
                                  width: "60%",
                                  position: "absolute",
                                  left: "0",
                                  bottom: "0"
                                }}
                              >
                                <div className="ribbon">
                                  <div className="ribbontext2">
                                    {this.state.promotion.price_sale !== 0 && (
                                      <>
                                        <h5
                                          style={{
                                            textAlign: "left",
                                            color: "#fff",
                                            fontSize: ".8vw"
                                          }}
                                        >
                                          From
                                          <NumberFormat
                                            value={
                                              this.state.promotion.price_product
                                            }
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={" ฿ "}
                                          />
                                        </h5>
                                        <h4
                                          className="salem"
                                          style={{
                                            marginBottom: "0",
                                            fontSize: "1.2vw"
                                          }}
                                        >
                                          Now
                                          <NumberFormat
                                            value={
                                              this.state.promotion.price_sale
                                            }
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={" ฿ "}
                                          />
                                        </h4>
                                      </>
                                    )}
                                    {this.state.promotion.price_sale === 0 && (
                                      <h4
                                        className="salem"
                                        style={{ marginBottom: "0" }}
                                      >
                                        Now
                                        <NumberFormat
                                          value={
                                            this.state.promotion.price_product
                                          }
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix={" ฿ "}
                                        />
                                      </h4>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </Card>
                      </OverlayTrigger>
                    </Col>
                  </Row>
                </div>
                {/* <Row style={{ position: "absolute", top: "60%", width: "40%" }}>
                  <Col>
                    <hr style={{border:'1px #fff solid'}} />
                  </Col>
                </Row> */}
              </Container>

              <OverlayTrigger
                className="llyyuy"
                key="top"
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${"top"}`}>
                    {this.state.promotion.name_product_en}
                    {this.state.promotion.price_sale !== 0 && (
                      <NumberFormat
                        value={this.state.promotion.price_sale}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={" ฿ "}
                      />
                    )}
                    {this.state.promotion.price_sale === 0 && (
                      <NumberFormat
                        value={this.state.promotion.price_product}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={" ฿ "}
                      />
                    )}
                  </Tooltip>
                }
              >
                <div
                  style={{ position: "absolute", top: "30%" }}
                  className="llyyuy"
                >
                  <Card
                    className="promom"
                    style={{
                      width: "25%",
                      top: "40%",
                      left: "60%",
                      padding: "1px"
                    }}
                  >
                    {this.state.promotion.length !== 0 && (
                      <>
                        <Link
                          to={
                            "/DetailProduct/" + this.state.promotion.id_product
                          }
                        >
                          <Card.Img
                            variant="top"
                            src={URL_img + this.state.promotion.img_product}
                          />
                        </Link>
                        <div
                          style={{
                            width: "60%",
                            position: "absolute",
                            right: "0",
                            top: "0"
                          }}
                        >
                          <div className="rh">
                            <div className="ribbontext">Promotion !!</div>
                          </div>
                        </div>
                        <div
                          className="ribcardm"
                          style={{
                            width: "60%",
                            position: "absolute",
                            left: "0",
                            bottom: "0"
                          }}
                        >
                          <div className="ribbon">
                            <div className="ribbontext2">
                              {this.state.promotion.price_sale !== 0 && (
                                <>
                                  <h5
                                    style={{
                                      textAlign: "left",
                                      color: "#fff",
                                      fontSize: ".8vw"
                                    }}
                                  >
                                    From
                                    <NumberFormat
                                      value={this.state.promotion.price_product}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={" ฿ "}
                                    />
                                  </h5>
                                  <h4
                                    className="salem"
                                    style={{ marginBottom: "0" }}
                                  >
                                    Now
                                    <NumberFormat
                                      value={this.state.promotion.price_sale}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={" ฿ "}
                                    />
                                  </h4>
                                </>
                              )}
                              {this.state.promotion.price_sale === 0 && (
                                <h4
                                  className="salem"
                                  style={{ marginBottom: "0" }}
                                >
                                  Now
                                  <NumberFormat
                                    value={this.state.promotion.price_product}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={" ฿ "}
                                  />
                                </h4>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </Card>
                </div>
              </OverlayTrigger>
            </div>
            <HomeAbout />
            <BestSeller bestseller={this.state.bestseller} />
            <NewUpdates newupdate={this.state.newupdate} />
            <ProductCategories />
          </div>

          <Advertisement />
          <OutServices />
          <IssueHome />
          <Footer />          
        </LoadingScreen>
      </div>
    );
  }
}
