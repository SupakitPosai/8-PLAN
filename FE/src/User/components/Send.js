import React, { Component } from "react";
import Background from "../../img/2397.jpg";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import ROOT_API from "../../config/Aip_Url";
import axios from "axios";
import Swal from "sweetalert2";
const qs = require("querystring");
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export default class Send extends Component {
  constructor(props) {
    super(props);

    this.state = {
      namere: "",
      emailre: "",
      telre: "",
      mesre: "",
    };
  }
  postre() {
    axios
      .post(
        ROOT_API + "/api/postRequest",
        qs.stringify({
          name_request: this.state.namere,
          emali_request: this.state.emailre,
          tel_request: this.state.telre,
          message_request: this.state.mesre,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        this.setState({ namere: "", emailre: "", telre: "", mesre: "" });
        Toast.fire({
          icon: "success",
          title: "คำขอพิเศษสำเร็จ",
        });
      })
      .catch((error) => {});
  }
  render() {
    return (
      <Container>
        <Row>
          <Col
            className="pimg2"
            style={{
              backgroundImage: `url(${Background})`,
              minHeight: "100%",
              padding: "0 10vw",
            }}
          >
            <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
              สำหรับคำขอพิเศษและคำสั่งซื้อ
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                this.postre();
              }}
            >
              <Row>
                <Col md={6}>
                  <h3>ลงชื่อ *</h3>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="ชื่อ"
                    value={this.state.namere}
                    onChange={(e) => {
                      this.setState({ namere: e.target.value });
                    }}
                  />
                </Col>
                <Col md={6}>
                  <h3>อีเมล์ *</h3>
                  <input
                    type="text"
                    className="form-control"
                    required
                    placeholder="กรอกอีเมล์ของคุณ"
                    value={this.state.emailre}
                    onChange={(e) => {
                      this.setState({ emailre: e.target.value });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>โทรศัพท์</h3>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="หมายเลขโทรศัพท์"
                    value={this.state.telre}
                    onChange={(e) => {
                      this.setState({ telre: e.target.value });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>ข้อความ *</h3>
                  <textarea
                    className="form-control"
                    style={{ height: "8vw" }}
                    required
                    placeholder="ป้อนข้อมูลของคุณที่นี่"
                    value={this.state.mesre}
                    onChange={(e) => {
                      this.setState({ mesre: e.target.value });
                    }}
                  />
                </Col>
              </Row>

              <Button
                className="Btn1"
                type="submit"
                style={{
                  width: "100%",
                  marginBottom: "5vw",
                  marginTop: "1rem",
                }}
              >
                ส่ง
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
