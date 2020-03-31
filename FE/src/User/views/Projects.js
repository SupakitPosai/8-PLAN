import React, { Component } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import h2 from "../../img/h2.jpg";
import h3 from "../../img/h3.jpg";
// import h4 from '../../img/h4.jpg'
// import h5 from '../../img/h5.jpg'
// import h6 from '../../img/h6.jpg'
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import URL_img from "../../config/URL_img";
import LoadingScreen from "react-loading-screen";
const cookies = new Cookies();
export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      div: <></>,
      banner: [],
      loading: true
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Projects";
    fetch(ROOT_API + "/api/bannerpage?page=Projects")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ banner: result, loading: false });
        },
        error => {}
      );
    fetch(ROOT_API + "/api/projects")
      .then(res => res.json())
      .then(
        result => {
          const data = result;
          let length = data.length;
          this.setState({ div: <></> });
          for (let index = 0; index < length; index++) {
            if (index % 2 === 0) {
              if (
                cookies.get("language") === undefined ||
                cookies.get("language") === "EN"
              ) {
                this.setState({
                  div: (
                    <>
                      {this.state.div}
                      <Row>
                        <Col sm={6} style={{ padding: "0" }}>
                          <Image
                            src={URL_img + data[index].img_projects}
                            width="100%"
                            style={{ height: "100%" }}
                          />
                        </Col>
                        <Col sm={6} style={{ padding: "0" }}>
                          <div
                            style={{
                              backgroundColor: "#000",
                              color: "#fff",
                              height: "100%",
                              padding: "10px"
                            }}
                          >
                            <h1>{data[index].name_projects_en}</h1>
                            <h6>Owner : {data[index].name_owner_en}</h6>
                            <h6>Location : {data[index].location_en}</h6>
                            <h6>
                              ConstructionCost : THB{" "}
                              {data[index].construction_cost}
                            </h6>
                            <Link
                              style={{ color: "#fff", fontWeight: "bold" }}
                              to="##"
                            >
                              See more >>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </>
                  )
                });
              } else {
                this.setState({
                  div: (
                    <>
                      {this.state.div}
                      <Row>
                        <Col sm={6} style={{ padding: "0" }}>
                          <Image
                            src={URL_img + data[index].img_projects}
                            width="100%"
                            style={{ height: "100%" }}
                          />
                        </Col>
                        <Col sm={6} style={{ padding: "0" }}>
                          <div
                            style={{
                              backgroundColor: "#000",
                              color: "#fff",
                              height: "100%",
                              padding: "10px"
                            }}
                          >
                            <h1>{data[index].name_projects_th}</h1>
                            <h6>เจ้าของ : {data[index].name_owner_th}</h6>
                            <h6>สถานที่ : {data[index].location_th}</h6>
                            <h6>
                              ต้นทุนการก่อสร้าง : THB{" "}
                              {data[index].construction_cost}
                            </h6>
                            <Link
                              style={{ color: "#fff", fontWeight: "bold" }}
                              to="##"
                            >
                              เพิ่มเติม >>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </>
                  )
                });
              }
            }
            let i = index + 1;
            if (i < length) {
              if (i % 2 === 1) {
                if (
                  cookies.get("language") === undefined ||
                  cookies.get("language") === "EN"
                ) {
                  this.setState({
                    div: (
                      <>
                        {this.state.div}
                        <Row>
                          <Col sm={6} style={{ padding: "0" }}>
                            <div
                              style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                height: "100%",
                                padding: "10px",
                                textAlign: "right"
                              }}
                            >
                              <h1>{data[i].name_projects_en}</h1>
                              <h6>Owner : {data[i].name_owner_en}</h6>
                              <h6>Location : {data[i].location_en}</h6>
                              <h6>
                                ConstructionCost : THB{" "}
                                {data[i].construction_cost}
                              </h6>
                              <Link
                                style={{ color: "#fff", fontWeight: "bold" }}
                                to="##"
                              >
                                See more >>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={6} style={{ padding: "0" }}>
                            <Image
                              src={URL_img + data[i].img_projects}
                              width="100%"
                              style={{ height: "100%" }}
                            />
                          </Col>
                        </Row>
                      </>
                    )
                  });
                } else {
                  this.setState({
                    div: (
                      <>
                        {this.state.div}
                        <Row>
                          <Col sm={6} style={{ padding: "0" }}>
                            <div
                              style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                height: "100%",
                                padding: "10px",
                                textAlign: "right"
                              }}
                            >
                              <h1>{data[i].name_projects_th}</h1>
                              <h6>เจ้าของ : {data[i].name_owner_th}</h6>
                              <h6>สถานที่ : {data[i].location_th}</h6>
                              <h6>
                                ต้นทุนการก่อสร้าง : THB{" "}
                                {data[i].construction_cost}
                              </h6>
                              <Link
                                style={{ color: "#fff", fontWeight: "bold" }}
                                to="##"
                              >
                                เพิ่มเติม >>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={6} style={{ padding: "0" }}>
                            <Image
                              src={URL_img + data[i].img_projects}
                              width="100%"
                              style={{ height: "100%" }}
                            />
                          </Col>
                        </Row>
                      </>
                    )
                  });
                }
              }
            }
          }
        },
        error => {}
      );
  }
  filter(status) {
    fetch(ROOT_API + "/api/projects/1?status_projects=" + status)
      .then(res => res.json())
      .then(
        result => {
          const data = result;
          let length = data.length;
          this.setState({ div: <></> });
          for (let index = 0; index < length; index++) {
            if (index % 2 === 0) {
              if (
                cookies.get("language") === undefined ||
                cookies.get("language") === "EN"
              ) {
                this.setState({
                  div: (
                    <>
                      {this.state.div}
                      <Row>
                        <Col sm={6} style={{ padding: "0" }}>
                          <Image
                            src={URL_img + data[index].img_projects}
                            width="100%"
                            style={{ height: "100%" }}
                          />
                        </Col>
                        <Col sm={6} style={{ padding: "0" }}>
                          <div
                            style={{
                              backgroundColor: "#000",
                              color: "#fff",
                              height: "100%",
                              padding: "10px"
                            }}
                          >
                            <h1>{data[index].name_projects_en}</h1>
                            <h6>Owner : {data[index].name_owner_en}</h6>
                            <h6>Location : {data[index].location_en}</h6>
                            <h6>
                              ConstructionCost : THB{" "}
                              {data[index].construction_cost}
                            </h6>
                            <Link
                              style={{ color: "#fff", fontWeight: "bold" }}
                              to="##"
                            >
                              See more >>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </>
                  )
                });
              } else {
                this.setState({
                  div: (
                    <>
                      {this.state.div}
                      <Row>
                        <Col sm={6} style={{ padding: "0" }}>
                          <Image
                            src={URL_img + data[index].img_projects}
                            width="100%"
                            style={{ height: "100%" }}
                          />
                        </Col>
                        <Col sm={6} style={{ padding: "0" }}>
                          <div
                            style={{
                              backgroundColor: "#000",
                              color: "#fff",
                              height: "100%",
                              padding: "10px"
                            }}
                          >
                            <h1>{data[index].name_projects_th}</h1>
                            <h6>เจ้าของ : {data[index].name_owner_th}</h6>
                            <h6>สถานที่ : {data[index].location_th}</h6>
                            <h6>
                              ต้นทุนการก่อสร้าง : THB{" "}
                              {data[index].construction_cost}
                            </h6>
                            <Link
                              style={{ color: "#fff", fontWeight: "bold" }}
                              to="##"
                            >
                              เพิ่มเติม >>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </>
                  )
                });
              }
            }
            let i = index + 1;
            if (i < length) {
              if (i % 2 === 1) {
                if (
                  cookies.get("language") === undefined ||
                  cookies.get("language") === "EN"
                ) {
                  this.setState({
                    div: (
                      <>
                        {this.state.div}
                        <Row>
                          <Col sm={6} style={{ padding: "0" }}>
                            <div
                              style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                height: "100%",
                                padding: "10px",
                                textAlign: "right"
                              }}
                            >
                              <h1>{data[i].name_projects_en}</h1>
                              <h6>Owner : {data[i].name_owner_en}</h6>
                              <h6>Location : {data[i].location_en}</h6>
                              <h6>
                                ConstructionCost : THB{" "}
                                {data[i].construction_cost}
                              </h6>
                              <Link
                                style={{ color: "#fff", fontWeight: "bold" }}
                                to="##"
                              >
                                See more >>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={6} style={{ padding: "0" }}>
                            <Image
                              src={URL_img + data[i].img_projects}
                              width="100%"
                              style={{ height: "100%" }}
                            />
                          </Col>
                        </Row>
                      </>
                    )
                  });
                } else {
                  this.setState({
                    div: (
                      <>
                        {this.state.div}
                        <Row>
                          <Col sm={6} style={{ padding: "0" }}>
                            <div
                              style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                height: "100%",
                                padding: "10px",
                                textAlign: "right"
                              }}
                            >
                              <h1>{data[i].name_projects_th}</h1>
                              <h6>เจ้าของ : {data[i].name_owner_th}</h6>
                              <h6>สถานที่ : {data[i].location_th}</h6>
                              <h6>
                                ต้นทุนการก่อสร้าง : THB{" "}
                                {data[i].construction_cost}
                              </h6>
                              <Link
                                style={{ color: "#fff", fontWeight: "bold" }}
                                to="##"
                              >
                                เพิ่มเติม >>
                              </Link>
                            </div>
                          </Col>
                          <Col sm={6} style={{ padding: "0" }}>
                            <Image
                              src={URL_img + data[i].img_projects}
                              width="100%"
                              style={{ height: "100%" }}
                            />
                          </Col>
                        </Row>
                      </>
                    )
                  });
                }
              }
            }
          }
        },
        error => {}
      );
  }
  render() {
    return (
      <LoadingScreen
        //this.state.loading
        loading={this.state.loading}
        bgColor="#f1f1f1"
        spinnerColor="#F25C05"
        textColor="#676767"
        // logoSrc='/logo.png'
        // text='Here an introduction sentence (Optional)'
      >
        <div>
          <div >
            <Carousel style={{ marginBottom: "3rem" }}>
              {this.state.banner.map(ban => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={URL_img + ban.img_banner}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>

            <Container>
              <div className="boxtext"></div>
              <div className="He1">
                {" "}
                <h1 className="htext">PROJECT </h1>
                <h1 className="textlast">GALLERY</h1>
              </div>
              <Row>
                <Col className="Filter">
                  <p style={{ marginRight: "10px" }}>Filter : </p>
                  <div className="Filter">
                    <label className="cont">
                      All
                      <input
                        type="radio"
                        defaultChecked="checked"
                        name="radio"
                        onClick={() => this.componentDidMount()}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="cont">
                      On-Going
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => this.filter("on_going")}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="cont">
                      Completed
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => this.filter("completed")}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </Col>
              </Row>

              {this.state.div}

              <br />

              <Row>
                <Col
                  style={{ backgroundColor: "#000", color: "#fff" }}
                  className="text-center"
                >
                  <div style={{ padding: "1.5rem" }}>
                    <h1>OUR DESIGNS ARE</h1>
                    <h1>READY TO BUILD</h1>
                    <h5>More than 50 house built in a year</h5>
                    <br />
                    <br />
                    <h3> learn more how to buy >></h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Advertisement />
          <OutServices />
          <IssueHome />
          <Footer />
        </div>
      </LoadingScreen>
    );
  }
}
