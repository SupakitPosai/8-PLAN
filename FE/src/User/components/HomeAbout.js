import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/HomeAbout.css";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import AB from "../../img/88.jpg";
import Logo from "../../img/8Plan.jpg";
import parse from "html-react-parser";

const cookies = new Cookies();
export default class HomeAbout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  componentDidMount = () => {
    fetch(ROOT_API + "/api/company?name_company=about")
      .then((res) => res.json())
      .then(
        (result) => {
          if (
            cookies.get("language") === undefined ||
            cookies.get("language") === "EN"
          ) {
            this.setState({
              value: result[0].value_company_en,
            });
          } else {
            this.setState({
              value: result[0].value_company_th,
            });
          }
        },
        (error) => {}
      );
  };

  render() {
    return (
      <div style={{ marginTop: "1.5rem" }}>
        <Container>
          {/* <div className="boxtext"> </div>
                    <div className="He1">  <h1 className="htext">ABOUT </h1><h1 className="textlast">8-PLAN</h1></div> */}
          <Row>
            <Col
              sm={6}
              style={{
                backgroundColor: "#fff",
                padding: "5rem 2rem",
                // textAlign: "center",
              }}
            >
              <h3 style={{ letterSpacing: "0.35em", color: "#ff9500" ,textAlign: "center"}}>
                เกี่ยวกับ 8-PLAN
              </h3>
              <hr
                style={{
                  backgroundColor: "#ff9500",
                  width: "70%",
                  height: "1.7px",
                }}
              />
              <h6
                style={{
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  letterSpacing: "0.20em",
                }}
              >
                {parse(this.state.value)}
              </h6>

              <Link
                style={{
                  fontWeight: "bold",
                  color: "#000",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
                to="/About"
              >
                หน้าถัดไป
              </Link>
            </Col>
            <Col
              sm={6}
              style={{
                backgroundImage: `url(${AB})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                paddingTop: "25vw",
              }}
            ></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
