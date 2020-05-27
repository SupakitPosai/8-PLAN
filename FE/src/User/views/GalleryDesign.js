import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import HH2 from "../../img/h2.jpg";
import HH3 from "../../img/h3.jpg";
import HH77 from "../../img/77.jpg";
import HH8 from "../../img/88.jpg";
import C1 from "../../img/c1.png";
import C2 from "../../img/c2.png";
import C3 from "../../img/c3.png";
import C4 from "../../img/c4.png";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Projects from "./Projects";
import Inte from "../components/Inte";
import D3D from "../components/D3D";
import Design from "../components/Design";
export default class GalleryDesign extends Component {
  componentDidMount() {
    document.title = "Gallery Design";
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              style={{
                padding: "0",
                backgroundImage: `url(${HH77})`,
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
                  แกลลอรี่ ดีไซน์
                </h1>
                <div className="PsdsdFDF_DFd_"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={3} style={{ padding: "0" }}>
              <div
                className="GallerDe_qqq"
                style={{
                  backgroundImage: `url(${HH2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#000",
                  textAlign: "-webkit-center",
                  padding: "2.5vw",
                  height: "350px",
                }}
              >
                <Image width="30%" style={{ marginBottom: "2rem" }} src={C2} />
                <h3 style={{ color: "#fff", marginBottom: "2rem" }}>แบบบ้าน</h3>
                <p style={{ color: "#ff9500", marginBottom: "2rem" }}>
                  การออกแบบบ้านตามความต้องการของลูกค้า
                </p>
                <a style={{ color: "#fff" }} href="#h1">
                  Read More >
                </a>
              </div>
            </Col>
            <Col sm={3} style={{ padding: "0" }}>
              <div
                className="GallerDe_qqq"
                style={{
                  backgroundImage: `url(${HH3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#5F5F5F",
                  textAlign: "-webkit-center",
                  padding: "2.5vw",
                  height: "350px",
                }}
              >
                <Image width="30%" style={{ marginBottom: "2rem" }} src={C4} />
                <h3 style={{ color: "#4BD1A0", marginBottom: "2rem" }}>
                  อินทีเรีย
                </h3>
                <p style={{ color: "#fff", marginBottom: ".35rem" }}>
                  การออกแบบภายใน
                  หรือการตกแต่งภายในตัวบ้านเพื่อให้สอดคล้องกับไลฟ์สไตส์ของบ้าน
                </p>
                <a style={{ color: "#fff" }} href="#h2">
                  Read More >
                </a>
              </div>
            </Col>
            <Col sm={3} style={{ padding: "0" }}>
              <div
                className="GallerDe_qqq"
                style={{
                  backgroundImage: `url(${HH77})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#EDEDED",
                  textAlign: "-webkit-center",
                  padding: "2.5vw",
                  height: "350px",
                }}
              >
                <Image width="30%" style={{ marginBottom: "2rem" }} src={C3} />
                <h3 style={{ color: "#4BD1A0", marginBottom: "2rem" }}>
                  รับทำ 3D
                </h3>
                <p style={{ color: "#000", marginBottom: "4rem" }}>
                  รับทำ 3D ทั้งภายนอกและภายใน
                </p>
                <a style={{ color: "#000" }} href="#h3">
                  Read More >
                </a>
              </div>
            </Col>
            <Col sm={3} style={{ padding: "0" }}>
              <div
                className="GallerDe_qqq"
                style={{
                  backgroundImage: `url(${HH8})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#4BD1A0",
                  textAlign: "-webkit-center",
                  padding: "2.5vw",
                  height: "350px",
                }}
              >
                <Image width="30%" style={{ marginBottom: "2rem" }} src={C1} />
                <h3 style={{ color: "#fff", marginBottom: "2rem" }}>
                  ออกแบบ โครงการ
                </h3>
                <p style={{ color: "#000", marginBottom: "4rem" }}>
                  รับออกแบบโครงการและผังจัดสรร
                </p>
                <a style={{ color: "#fff" }} href="#h4">
                  Read More >
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <div id="h1"></div>
          </Row>
        </Container>
        <Projects />
        <Inte />
        <D3D />
        <Design />
        <OutServices />
        <IssueHome />
      </div>
    );
  }
}
