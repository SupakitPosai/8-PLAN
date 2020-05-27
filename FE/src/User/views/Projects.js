import React, { Component } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import h2 from "../../img/h2.jpg";
import h3 from "../../img/h3.jpg";
import H1 from "../../img/h1.png";
// import h5 from '../../img/h5.jpg'
// import h6 from '../../img/h6.jpg'
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import URL_img from "../../config/URL_img";
import LoadingScreen from "react-loading-screen";
import NumberFormat from "react-number-format";
const cookies = new Cookies();
export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      div: <></>,
      banner: [],
      loading: true,
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Projects";
    fetch(ROOT_API + "/api/bannerpage?page=Projects")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ banner: result, loading: false });
        },
        (error) => {}
      );
    fetch(ROOT_API + "/api/projects")
      .then((res) => res.json())
      .then(
        (result) => {
          const data = result;
          let length = data.length;
          this.setState({ div: <></> });
          for (let index = 0; index < length; index++) {
            if (index % 2 === 0) {
              if (cookies.get("language") === "EN") {
                this.setState({
                  div: (
                    <>
                      {this.state.div}
                      <Row>
                        <Col
                          sm={7}
                          className="Projjjj"
                          style={{
                            backgroundImage: `url(${
                              URL_img + data[index].img_projects
                            })`,
                            backgroundSize: "cover",
                          }}
                        ></Col>
                        <Col sm={5} style={{ padding: "0" }}>
                          <div
                            style={{
                              backgroundColor: "#ff9500",
                              color: "#fff",
                              height: "100%",
                              padding: "2rem",
                              textAlign: "center",
                            }}
                          >
                            <h3 style={{ marginBottom: "1rem" }}>
                              {data[index].name_projects_en}
                            </h3>
                            <div style={{ marginBottom: "1rem" }}>
                              <span>Owner : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].name_owner_en}
                              </span>
                              <br />
                              <span>Location : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].location_en}
                              </span>
                              <br />
                              <span>Area : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].area_projects}
                              </span>
                              <br />
                            </div>

                            <p style={{ color: "#000", marginBottom: "1rem" }}>
                              {data[index].detail_projects}
                            </p>
                            <h4>
                              <NumberFormat
                                value={data[index].construction_cost}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"฿ "}
                              />
                            </h4>
                          </div>
                        </Col>
                      </Row>
                    </>
                  ),
                });
              } else if (
                cookies.get("language") === undefined ||
                cookies.get("language") === "TH"
              ) {
                this.setState({
                  div: (
                    <>
                      {this.state.div}
                      <Row>
                        <Col
                          sm={7}
                          className="Projjjj"
                          style={{
                            backgroundImage: `url(${
                              URL_img + data[index].img_projects
                            })`,
                            backgroundSize: "cover",
                          }}
                        ></Col>
                        <Col sm={5} style={{ padding: "0" }}>
                          <div
                            style={{
                              backgroundColor: "#ff9500",
                              color: "#fff",
                              height: "100%",
                              padding: "2rem",
                              textAlign: "center",
                            }}
                          >
                            <h3 style={{ marginBottom: "1rem" }}>
                              {data[index].name_projects_th}
                            </h3>
                            <div style={{ marginBottom: "1rem" }}>
                              <span>เจ้าของ : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].name_owner_th}
                              </span>
                              <br />
                              <span>สถานที่ : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].location_th}
                              </span>
                              <br />
                              <span>พื้นที่ : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].area_projects}
                              </span>
                              <br />
                            </div>

                            <p style={{ color: "#000", marginBottom: "1rem" }}>
                              {data[index].detail_projects}
                            </p>
                            <h4>
                              <NumberFormat
                                value={data[index].construction_cost}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"฿ "}
                              />
                            </h4>
                          </div>
                        </Col>
                      </Row>
                    </>
                  ),
                });
              }
            }
            let i = index + 1;
            if (i < length) {
              if (i % 2 === 1) {
                if (cookies.get("language") === "EN") {
                  this.setState({
                    div: (
                      <>
                        {this.state.div}
                        <Row>
                          <Col sm={5} style={{ padding: "0" }}>
                            <div
                              style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                height: "100%",
                                padding: "2rem",
                                textAlign: "center",
                              }}
                            >
                              <h3
                                style={{
                                  marginBottom: "1rem",
                                  color: "#ff9500",
                                }}
                              >
                                {data[i].name_projects_en}
                              </h3>
                              <div style={{ marginBottom: "1rem" }}>
                                <span style={{ color: "#ff9500" }}>
                                  Owner :{" "}
                                </span>
                                <span>{data[i].name_owner_en}</span>
                                <br />
                                <span style={{ color: "#ff9500" }}>
                                  Location :{" "}
                                </span>
                                <span>{data[i].location_en}</span>
                                <br />
                                <span style={{ color: "#ff9500" }}>
                                  Area :{" "}
                                </span>
                                <span>{data[i].area_projects}</span>
                                <br />
                              </div>

                              <p style={{ marginBottom: "1rem" }}>
                                {data[i].detail_projects}
                              </p>
                              <h4 style={{ color: "#ff9500" }}>
                                <NumberFormat
                                  value={data[i].construction_cost}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"฿ "}
                                />
                              </h4>
                            </div>
                          </Col>

                          <Col
                            sm={7}
                            className="Projjjj"
                            style={{
                              backgroundImage: `url(${
                                URL_img + data[i].img_projects
                              })`,
                              backgroundSize: "cover",
                            }}
                          ></Col>
                        </Row>
                      </>
                    ),
                  });
                } else if (
                  cookies.get("language") === undefined ||
                  cookies.get("language") === "TH"
                ) {
                  this.setState({
                    div: (
                      <>
                        {this.state.div}
                        <Row>
                          <Col sm={5} style={{ padding: "0" }}>
                            <div
                              style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                height: "100%",
                                padding: "2rem",
                                textAlign: "center",
                              }}
                            >
                              <h3
                                style={{
                                  marginBottom: "1rem",
                                  color: "#ff9500",
                                }}
                              >
                                {data[i].name_projects_th}
                              </h3>
                              <div style={{ marginBottom: "1rem" }}>
                                <span style={{ color: "#ff9500" }}>
                                  เจ้าของ :{" "}
                                </span>
                                <span>{data[i].name_owner_th}</span>
                                <br />
                                <span style={{ color: "#ff9500" }}>
                                  สถานที่ :{" "}
                                </span>
                                <span>{data[i].location_th}</span>
                                <br />
                                <span style={{ color: "#ff9500" }}>
                                  พื้นที่ :{" "}
                                </span>
                                <span>{data[i].area_projects}</span>
                                <br />
                              </div>

                              <p style={{ marginBottom: "1rem" }}>
                                {data[i].detail_projects}
                              </p>
                              <h4 style={{ color: "#ff9500" }}>
                                <NumberFormat
                                  value={data[i].construction_cost}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"฿ "}
                                />
                              </h4>
                            </div>
                          </Col>
                          <Col
                            sm={7}
                            className="Projjjj"
                            style={{
                              backgroundImage: `url(${
                                URL_img + data[i].img_projects
                              })`,
                              backgroundSize: "cover",
                            }}
                          ></Col>
                        </Row>
                      </>
                    ),
                  });
                }
              }
            }
          }
        },
        (error) => {}
      );
  }
  filter(status) {
    fetch(ROOT_API + "/api/projects/1?status_projects=" + status)
      .then((res) => res.json())
      .then(
        (result) => {
          const data = result;
          let length = data.length;
          this.setState({ div: <></> });
          for (let index = 0; index < length; index++) {
            if (index % 2 === 0) {
              if (cookies.get("language") === "EN") {
                this.setState({
                  div: (
                    <>
                      {this.state.div}
                      <Row>
                        <Col
                          sm={7}
                          className="Projjjj"
                          style={{
                            backgroundImage: `url(${
                              URL_img + data[index].img_projects
                            })`,
                            backgroundSize: "cover",
                          }}
                        ></Col>
                        <Col sm={5} style={{ padding: "0" }}>
                          <div
                            style={{
                              backgroundColor: "#ff9500",
                              color: "#fff",
                              height: "100%",
                              padding: "2rem",
                              textAlign: "center",
                            }}
                          >
                            <h3 style={{ marginBottom: "1rem" }}>
                              {data[index].name_projects_en}
                            </h3>
                            <div style={{ marginBottom: "1rem" }}>
                              <span>Owner : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].name_owner_en}
                              </span>
                              <br />
                              <span>Location : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].location_en}
                              </span>
                              <br />
                              <span>Area : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].area_projects}
                              </span>
                              <br />
                            </div>

                            <p style={{ color: "#000", marginBottom: "1rem" }}>
                              {data[index].detail_projects}
                            </p>
                            <h4>
                              <NumberFormat
                                value={data[index].construction_cost}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"฿ "}
                              />
                            </h4>
                          </div>
                        </Col>
                      </Row>
                    </>
                  ),
                });
              } else if (
                cookies.get("language") === undefined ||
                cookies.get("language") === "TH"
              ) {
                this.setState({
                  div: (
                    <>
                      {this.state.div}
                      <Row>
                        <Col
                          sm={7}
                          className="Projjjj"
                          style={{
                            backgroundImage: `url(${
                              URL_img + data[index].img_projects
                            })`,
                            backgroundSize: "cover",
                          }}
                        ></Col>
                        <Col sm={5} style={{ padding: "0" }}>
                          <div
                            style={{
                              backgroundColor: "#ff9500",
                              color: "#fff",
                              height: "100%",
                              padding: "2rem",
                              textAlign: "center",
                            }}
                          >
                            <h3 style={{ marginBottom: "1rem" }}>
                              {data[index].name_projects_th}
                            </h3>
                            <div style={{ marginBottom: "1rem" }}>
                              <span>เจ้าของ : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].name_owner_th}
                              </span>
                              <br />
                              <span>สถานที่ : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].location_th}
                              </span>
                              <br />
                              <span>พื้นที่ : </span>
                              <span style={{ color: "#000" }}>
                                {data[index].area_projects}
                              </span>
                              <br />
                            </div>

                            <p style={{ color: "#000", marginBottom: "1rem" }}>
                              {data[index].detail_projects}
                            </p>
                            <h4>
                              <NumberFormat
                                value={data[index].construction_cost}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"฿ "}
                              />
                            </h4>
                          </div>
                        </Col>
                      </Row>
                    </>
                  ),
                });
              }
            }
            let i = index + 1;
            if (i < length) {
              if (i % 2 === 1) {
                if (cookies.get("language") === "EN") {
                  this.setState({
                    div: (
                      <>
                        {this.state.div}
                        <Row>
                          <Col sm={5} style={{ padding: "0" }}>
                            <div
                              style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                height: "100%",
                                padding: "2rem",
                                textAlign: "center",
                              }}
                            >
                              <h3
                                style={{
                                  marginBottom: "1rem",
                                  color: "#ff9500",
                                }}
                              >
                                {data[i].name_projects_en}
                              </h3>
                              <div style={{ marginBottom: "1rem" }}>
                                <span style={{ color: "#ff9500" }}>
                                  Owner :{" "}
                                </span>
                                <span>{data[i].name_owner_en}</span>
                                <br />
                                <span style={{ color: "#ff9500" }}>
                                  Location :{" "}
                                </span>
                                <span>{data[i].location_en}</span>
                                <br />
                                <span style={{ color: "#ff9500" }}>
                                  Area :{" "}
                                </span>
                                <span>{data[i].area_projects}</span>
                                <br />
                              </div>

                              <p style={{ marginBottom: "1rem" }}>
                                {data[i].detail_projects}
                              </p>
                              <h4 style={{ color: "#ff9500" }}>
                                <NumberFormat
                                  value={data[i].construction_cost}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"฿ "}
                                />
                              </h4>
                            </div>
                          </Col>

                          <Col
                            sm={7}
                            className="Projjjj"
                            style={{
                              backgroundImage: `url(${
                                URL_img + data[i].img_projects
                              })`,
                              backgroundSize: "cover",
                            }}
                          ></Col>
                        </Row>
                      </>
                    ),
                  });
                } else if (
                  cookies.get("language") === undefined ||
                  cookies.get("language") === "TH"
                ) {
                  this.setState({
                    div: (
                      <>
                        {this.state.div}
                        <Row>
                          <Col sm={5} style={{ padding: "0" }}>
                            <div
                              style={{
                                backgroundColor: "#000",
                                color: "#fff",
                                height: "100%",
                                padding: "2rem",
                                textAlign: "center",
                              }}
                            >
                              <h3
                                style={{
                                  marginBottom: "1rem",
                                  color: "#ff9500",
                                }}
                              >
                                {data[i].name_projects_th}
                              </h3>
                              <div style={{ marginBottom: "1rem" }}>
                                <span style={{ color: "#ff9500" }}>
                                  เจ้าของ :{" "}
                                </span>
                                <span>{data[i].name_owner_th}</span>
                                <br />
                                <span style={{ color: "#ff9500" }}>
                                  สถานที่ :{" "}
                                </span>
                                <span>{data[i].location_th}</span>
                                <br />
                                <span style={{ color: "#ff9500" }}>
                                  พื้นที่ :{" "}
                                </span>
                                <span>{data[i].area_projects}</span>
                                <br />
                              </div>

                              <p style={{ marginBottom: "1rem" }}>
                                {data[i].detail_projects}
                              </p>
                              <h4 style={{ color: "#ff9500" }}>
                                <NumberFormat
                                  value={data[i].construction_cost}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"฿ "}
                                />
                              </h4>
                            </div>
                          </Col>
                          <Col
                            sm={7}
                            className="Projjjj"
                            style={{
                              backgroundImage: `url(${
                                URL_img + data[i].img_projects
                              })`,
                              backgroundSize: "cover",
                            }}
                          ></Col>
                        </Row>
                      </>
                    ),
                  });
                }
              }
            }
          }
        },
        (error) => {}
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
          <div>
            {/* <Carousel style={{ marginBottom: "3rem" }}>
              {this.state.banner.map(ban => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={URL_img + ban.img_banner}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel> */}

            <Container>
              <h1
                style={{
                  marginTop: "5rem",
                  textAlign: "center",
                  color: "#ff9500",
                  letterSpacing: "0.12em",
                }}
              >
                แบบบ้าน
              </h1>
              {/* <Row>
                <Col
                  style={{
                    padding: "0",
                    backgroundImage: `url(${H1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  
                  <div style={{ backgroundColor: "#312f2fcf" }}>
                    <div className="PsdsdFDF_DFd_"></div>
                    <h1
                      style={{
                        textAlign: "center",
                        color: "#ff9500",
                        letterSpacing: "0.12em",
                      }}
                    >
                      แบบบ้าน
                    </h1>
                    <div className="PsdsdFDF_DFd_"></div>
                  </div> 
                </Col>
              </Row>*/}
              <Row style={{ marginTop: "1rem" }}>
                <Col className="Filter">
                  <p style={{ marginRight: "10px" }}>ตัวกรอง : </p>
                  <div className="Filter">
                    <label className="cont">
                      ทั้งหมด
                      <input
                        type="radio"
                        defaultChecked="checked"
                        name="radio"
                        onClick={() => this.componentDidMount()}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="cont">
                      กำลังสร้าง
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => this.filter("on_going")}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="cont">
                      สร้างเส็จแล้ว
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
                <div id="h2"></div>
              </Row>
              {/* <Row>
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
              </Row> */}
            </Container>
          </div>
          {/* <Advertisement /> */}
          {/* <OutServices />
          <IssueHome /> */}
          {/* <Footer /> */}
        </div>
      </LoadingScreen>
    );
  }
}
