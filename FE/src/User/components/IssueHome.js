import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
export default class IssueHome extends Component {
  render() {
    return (
      <div>
        <Container style={{ backgroundColor: "#ff9500", padding: "2rem" }}>
          <Row>
            <Col md={4} style={{ textAlign: "center", paddingRight: "0" }}>
              <h3 style={{ color: "#fff", marginBottom: "4.7vw" }}>สำนักงาน</h3>

              <p style={{ color: "#fff" }}>
                ศูนย์บริการชัยภูมิ : 170/1 ต.ในเมือง อ.เมือง จ.ชัยภูมิ 36000 โทร.044-822-232
              </p>
              <p style={{ color: "#fff" }}>
                ศูนย์บริการนครราชสีมา :1117/3-4 หมู่ที่ 5 ต.หนองจะบก อ.เมือง
                จ.นครราชสีมา 30000
              </p>
            </Col>
            <Col md={4} style={{ textAlign: "center" }}>
              <h3 style={{ color: "#fff", marginBottom: "4.7vw" }}>
                เวลาทำการ
              </h3>
              <p style={{ color: "#fff" }}>วันจันทร์ - วันเสาร์</p>
              <p style={{ color: "#fff" }}>8.00 - 17.00 น.</p>
            </Col>
            <Col md={4} style={{ textAlign: "center" }}>
              <h3 style={{ color: "#fff", marginBottom: "4.7vw" }}>
                ช่วยเหลือ
              </h3>
              <Link style={{ color: "#fff" }} to="/">
                {"Payment Shipping & Returns"}
              </Link>
              <br />
              <Link style={{ color: "#fff" }} to="/">
                Privacy Policy
              </Link>
              <br />
              <Link style={{ color: "#fff" }} to="/">
                บริการอื่น
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 style={{ textAlign: "center", color: "#fff" }}>
                เยี่ยมชมสื่อสังคมของเรา
              </h3>
              <center>
                <span
                  style={{ color: "#fff", fontSize: "2rem", margin: "0 .5rem" }}
                >
                  <a
                    style={{ color: "#fff" }}
                    href="https://www.facebook.com/8plan"
                  >
                    <FaFacebookSquare />
                  </a>
                </span>
                <span
                  style={{
                    color: "#fff",
                    fontSize: "2.5rem",
                    margin: "0 .5rem",
                  }}
                >
                  <a
                    style={{ color: "#fff" }}
                    href="https://www.youtube.com/channel/UCQuIj_Uxjc3PRKNITyPC-ZQ"
                  >
                    <FaYoutube />
                  </a>
                </span>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
