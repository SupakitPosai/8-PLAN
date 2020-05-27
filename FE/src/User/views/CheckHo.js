import React, { Component } from "react";
import IssueHome from "../components/IssueHome";
import OutServices from "../components/OutServices";
import H1 from "../../img/h1.png";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
export default class CheckHo extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
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
                  ตรวจบ้าน
                </h1>
                <h2
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    letterSpacing: "0.12em",
                  }}
                >
                  Coming soon...
                </h2>
                <div className="PsdsdFDF_DFd_"></div>
              </div>
            </Col>
          </Row>
        </Container>
        <OutServices />
        <IssueHome />
      </div>
    );
  }
}
