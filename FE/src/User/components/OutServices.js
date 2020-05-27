import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import icon6 from "../../img/icon6.jpg";
import icon7 from "../../img/icon7.jpg";
import icon8 from "../../img/icon8.jpg";
import icon9 from "../../img/icon9.jpg";
import "../css/outs.css";
export default class OutServices extends Component {
  render() {
    return (
      <div>
        <Container
          style={{
            backgroundColor: "#fff",
            textAlign: "center",
            padding: "40px",
          }}
        >
          <Row>
            <Col>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#ff9500",
                }}
              >
                การบริการของเรา
              </h1>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <a className="aa" href="/Send">
                <Card className="oc">
                  <Image src={icon6} width="70%" />
                  <h4 style={{ fontWeight: "bold" }}>นัดประชุมล่วงหน้า</h4>
                </Card>
              </a>
            </Col>
            <Col sm={3}>
              <a className="aa" href="/Payment">
                <Card className="oc">
                  <Image src={icon8} width="70%" />
                  <h4 style={{ fontWeight: "bold" }}>การชำระเงิน</h4>
                </Card>
              </a>
            </Col>
            <Col sm={3}>
              <a
                className="aa"
                href="https://www.youtube.com/channel/UCQuIj_Uxjc3PRKNITyPC-ZQ"
              >
                <Card className="oc">
                  <Image src={icon7} width="70%" />
                  <h4 style={{ fontWeight: "bold" }}>วีดีโอ แกลลอรี่</h4>
                </Card>
              </a>
            </Col>
            <Col sm={3}>
              <a className="aa" href="/Articles">
                <Card className="oc">
                  <Image src={icon9} width="70%" />
                  <h4 style={{ fontWeight: "bold" }}>เกร็ดความรู้</h4>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
