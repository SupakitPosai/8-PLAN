import React, { Component } from "react";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import "../css/About.css";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import c1 from "../../img/c1.jpg";
import c2 from "../../img/c2.jpg";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import URL_img from "../../config/URL_img";
import LoadingScreen from "react-loading-screen";
import parse from "html-react-parser";
const cookies = new Cookies();
export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: "",
      mission: "",
      founder: [],
      team: [],
      banner: [],
      loading: true,
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "About";
    fetch(ROOT_API + "/api/bannerpage?page=About")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ banner: result });
        },
        (error) => {}
      );
    fetch(ROOT_API + "/api/company?name_company=profile")
      .then((res) => res.json())
      .then(
        (result) => {
          if (cookies.get("language") === "EN") {
            this.setState({
              profile: result[0].value_company_en,
            });
          } else if (
            cookies.get("language") === undefined ||
            cookies.get("language") === "TH"
          ) {
            this.setState({
              profile: result[0].value_company_th,
            });
          }
        },
        (error) => {}
      );
    fetch(ROOT_API + "/api/company?name_company=mission")
      .then((res) => res.json())
      .then(
        (result) => {
          if (cookies.get("language") === "EN") {
            this.setState({
              mission: result[0].value_company_en,
            });
          } else if (
            cookies.get("language") === undefined ||
            cookies.get("language") === "TH"
          ) {
            this.setState({
              mission: result[0].value_company_th,
            });
          }
        },
        (error) => {}
      );
    fetch(ROOT_API + "/api/staff?status_staff=founder")
      .then((res) => res.json())
      .then(
        (result) => {
          //console.log("object", result);
          const data = result;
          let length = data.length;
          for (let index = 0; index < length; index++) {
            if (cookies.get("language") === "EN") {
              this.setState({
                founder: [
                  ...this.state.founder,
                  {
                    img: data[index].img_staff,
                    first_name: data[index].first_name_staff_en,
                    last_name: data[index].last_name_staff_en,
                    position: data[index].position_staff,
                    resume: data[index].resume_staff_en,
                  },
                ],
              });
            } else if (
              cookies.get("language") === undefined ||
              cookies.get("language") === "TH"
            ) {
              this.setState({
                founder: [
                  ...this.state.founder,
                  {
                    img: data[index].img_staff,
                    first_name: data[index].first_name_staff_th,
                    last_name: data[index].last_name_staff_th,
                    position: data[index].position_staff,
                    resume: data[index].resume_staff_th,
                  },
                ],
              });
            }
            if (index === length - 1) {
              this.st();
            }
          }
        },
        (error) => {}
      );
    this.setState({ loading: false });
  }
  st() {
    fetch(ROOT_API + "/api/staff?status_staff=normal")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("object", result);
          const data1 = result;
          let length1 = data1.length;
          for (let index = 0; index < length1; index++) {
            if (cookies.get("language") === "EN") {
              this.setState({
                team: [
                  ...this.state.team,
                  {
                    img: data1[index].img_staff,
                    first_name: data1[index].first_name_staff_en,
                    last_name: data1[index].last_name_staff_en,
                    position: data1[index].position_staff,
                    resume: data1[index].resume_staff_en,
                  },
                ],
              });
            } else if (
              cookies.get("language") === undefined ||
              cookies.get("language") === "TH"
            ) {
              this.setState({
                team: [
                  ...this.state.team,
                  {
                    img: data1[index].img_staff,
                    first_name: data1[index].first_name_staff_th,
                    last_name: data1[index].last_name_staff_th,
                    position: data1[index].position_staff,
                    resume: data1[index].resume_staff_th,
                  },
                ],
              });
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
            <Carousel>
              {this.state.banner.map((ban) => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={URL_img + ban.img_banner}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}

              {/* <Carousel.Item>
              <img className="d-block w-100" src={c2} alt="Third slide" />
            </Carousel.Item> */}
            </Carousel>
            <Container style={{ backgroundColor: "#fff", paddingTop: "2rem" }}>
              <Row>
                <Col>
                  <center>
                    <div className="He2">
                      <h1 style={{ color: "#ff9500" }}>8-PLAN</h1>{" "}
                      <h1 style={{ color: "#2f2f2f" }}>นวัตกรรม</h1>
                    </div>
                  </center>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{parse(this.state.profile)}</p>
                </Col>
              </Row>
              {/* <Row>
                <Col>
                  <strong>
                    <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
                      หน้าที่
                    </h4>
                  </strong>
                  <p>{parse(this.state.mission)}</p>
                </Col>
              </Row> */}
              {this.state.founder.length !== 0 && (
                <Row>
                  <Col>
                    <div className="He1" style={{ marginBottom: "1.5rem" }}>
                      <h1 style={{ color: "#ff9500" }}>ผู้ก่อตั้ง </h1>{" "}
                      <h1 style={{ color: "#2f2f2f" }}>8-PLAN</h1>
                    </div>
                    {this.state.founder.map((founder, index) => (
                      <Row
                        className="ad"
                        key={index + "dsfsdf"}
                        style={{ marginBottom: "2.5rem" }}
                      >
                        <Col sm={3}>
                          <div className="Abo_sadasd_">
                            <div className="Abo_sadasd_2">
                              <Image
                                className="Abo_sadasd_3"
                                src={URL_img + founder.img}
                              />
                            </div>
                          </div>
                        </Col>

                        <Col>
                          <h3 style={{ fontWeight: "bold" }}>
                            {founder.first_name}
                          </h3>
                          <h3 style={{ fontWeight: "bold" }}>
                            {founder.last_name}
                          </h3>
                          <p style={{ fontWeight: "bold", color: "#F25C05" }}>
                            {founder.position}
                          </p>
                        </Col>
                        <Col>
                          <p style={{ fontWeight: "bold" }}>{founder.resume}</p>
                        </Col>
                      </Row>
                    ))}
                    {this.state.founder.map((founder, index) => (
                      <div className="am">
                        <Row
                          key={index + "dsfsdf"}
                          style={{ marginBottom: "2.5rem" }}
                        >
                          <Col>
                            <div className="Abo_sadasd_">
                              <div className="Abo_sadasd_2">
                                <Image
                                  className="Abo_sadasd_3"
                                  src={URL_img + founder.img}
                                />
                              </div>
                            </div>
                          </Col>
                          <Col>
                            <Row>
                              <Col>
                                <h3
                                  style={{ fontWeight: "bold" }}
                                  className="nameau"
                                >
                                  {founder.first_name}
                                </h3>
                                <h3
                                  style={{ fontWeight: "bold" }}
                                  className="nameau"
                                >
                                  {founder.last_name}
                                </h3>
                                <p
                                  style={{
                                    fontWeight: "bold",
                                    color: "#F25C05",
                                  }}
                                  className="pau"
                                >
                                  {founder.position}
                                </p>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <p
                                  style={{ fontWeight: "bold" }}
                                  className="pau"
                                >
                                  {founder.resume}
                                </p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
                    ))}
                  </Col>
                </Row>
              )}
              {this.state.founder.length === 0 && <></>}
              {this.state.team.length !== 0 && (
                <Row>
                  <Col>
                    <div className="He1" style={{ marginBottom: "1.5rem" }}>
                      <h1 style={{ color: "#ff9500" }}>ทีมงาน </h1>{" "}
                      <h1 style={{ color: "#2f2f2f" }}>8-PLAN</h1>
                    </div>

                    <Row>
                      {this.state.team.map((team, index) => (
                        <Col
                          className="ad"
                          sm={3}
                          key={team.first_name + index}
                        >
                          <div className="Abo_sadasd_">
                            <div className="Abo_sadasd_2">
                              <Image
                                className="Abo_sadasd_3"
                                src={URL_img + team.img}
                              />
                            </div>
                          </div>
                          <h3 style={{ fontWeight: "bold" }}>
                            {team.first_name}
                          </h3>
                          <h3 style={{ fontWeight: "bold" }}>
                            {team.last_name}
                          </h3>
                          <p style={{ fontWeight: "bold", color: "#F25C05" }}>
                            {team.position}
                          </p>
                        </Col>
                      ))}
                      {this.state.team.map((team, index) => (
                        <Col
                          className="am"
                          key={team.first_name + index + "sadsa"}
                        >
                          <Image
                            src={URL_img + team.img}
                            width="100%"
                            style={{ marginBottom: "1rem" }}
                          />
                          <h3 className="nameau" style={{ fontWeight: "bold" }}>
                            {team.first_name}
                          </h3>
                          <h3 className="nameau" style={{ fontWeight: "bold" }}>
                            {team.last_name}
                          </h3>
                          <p
                            className="pau"
                            style={{ fontWeight: "bold", color: "#F25C05" }}
                          >
                            {team.position}
                          </p>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>
              )}
              {this.state.team.length === 0 && <></>}
            </Container>
          </div>
          {/* <Advertisement /> */}
          <OutServices />
          <IssueHome />
          {/* <Footer /> */}
        </div>
      </LoadingScreen>
    );
  }
}
