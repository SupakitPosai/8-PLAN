import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import "../css/Consultant.css";
import HH3 from "../../img/77.jpg";
import CC from "../../img/cc.jpg";
import DD from "../../img/DD.jpg";
import ROOT_API from "../../config/Aip_Url";
import IssueHome from "../components/IssueHome";
import URL_img from "../../config/URL_img";
import OutServices from "../components/OutServices";
import parse from "html-react-parser";
export default class Consultant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getCon: "",
    };
  }
  componentDidMount() {
    fetch(ROOT_API + "/api/getConsultant")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ getCon: result });
      });
  }

  render() {
    return (
      <div >
        <Container style={{ marginBottom: "1rem" }}>
          <Row>
            <Col
              style={{
                padding: "0",
                backgroundImage: `url(${DD})`,
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
                  ที่ปรึกษา
                </h1>
                <div className="PsdsdFDF_DFd_"></div>
              </div>
            </Col>
          </Row>
          {this.state.getCon.length !== 0 && (
            <>
              {this.state.getCon.map((gc) => (
                <Row >
                  <Col
                    sm={6}
                    className="consult_qq"
                    style={{
                      backgroundImage: `url(${URL_img + gc.img_consultant})`,
                      backgroundSize: "cover",
                    }}
                  ></Col>
                  <Col
                    sm={6}
                    style={{
                      padding: "0",
                      backgroundImage: `url(${URL_img + gc.img_bg_consultant})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#ff0000bd",
                        height: "100%",
                        padding: "2rem",
                      }}
                    >
                      <h3 style={{ color: "#fff", textAlign: "center" }}>
                        {gc.titel_consultant}
                      </h3>
                      <h5 style={{ color: "#fff" }}>
                        {parse(gc.detail_consultant)}
                      </h5>
                    </div>
                  </Col>
                </Row>
              ))}
            </>
          )}
        </Container>
        <OutServices />
        <IssueHome />
      </div>
    );
  }
}
