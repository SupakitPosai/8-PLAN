import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import AB from "../../img/77.jpg";
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
export default class Dis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textt: [],
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      dis: "",
      h5: "",
    };
  }
  componentDidMount() {
    this.setState({
      textt: [],
      h1: "",
      h2: "",
      h3: "",
      h4: "",
      dis: "",
      h5: "",
    });
    fetch(ROOT_API + "/api/getDiscount")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            textt: result,
            h1: result[0].text_discount,
            h2: result[1].text_discount,
            h3: result[2].text_discount,
            h4: result[3].text_discount,
            dis: result[4].text_discount,
            h5: result[5].text_discount,
          });
        },
        (error) => {}
      );
  }
  putdis(aa, bb) {
    axios
      .post(
        ROOT_API + "/api/putDiscount",
        qs.stringify({
          id_discount: aa,
          text_discount: bb,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: "Edit Success",
        });
        this.componentDidMount();
      })
      .catch((error) => {});
  }

  render() {
    return (
      <div style={{ paddingTop: "1rem" }}>
        <Container>
          <Row>
            <Col md={6}>
              <input
                type="text"
                className="form-control"
                value={this.state.h1}
                onChange={(e) => {
                  this.setState({ h1: e.target.value });
                }}
              />
              <Button
                onClick={() => {
                  this.putdis(this.state.textt[0].id_discount, this.state.h1);
                }}
              >
                ส่ง
              </Button>
              <input
                type="text"
                className="form-control"
                value={this.state.h2}
                onChange={(e) => {
                  this.setState({ h2: e.target.value });
                }}
              />
              <Button
                onClick={() => {
                  this.putdis(this.state.textt[1].id_discount, this.state.h2);
                }}
              >
                ส่ง
              </Button>
              <input
                type="text"
                className="form-control"
                value={this.state.h3}
                onChange={(e) => {
                  this.setState({ h3: e.target.value });
                }}
              />
              <Button
                onClick={() => {
                  this.putdis(this.state.textt[2].id_discount, this.state.h3);
                }}
              >
                ส่ง
              </Button>
              <input
                type="text"
                className="form-control"
                value={this.state.h4}
                onChange={(e) => {
                  this.setState({ h4: e.target.value });
                }}
              />
              <Button
                onClick={() => {
                  this.putdis(this.state.textt[3].id_discount, this.state.h4);
                }}
              >
                ส่ง
              </Button>
              <input
                type="text"
                className="form-control"
                value={this.state.dis}
                onChange={(e) => {
                  this.setState({ dis: e.target.value });
                }}
              />
              <Button
                onClick={() => {
                  this.putdis(this.state.textt[4].id_discount, this.state.dis);
                }}
              >
                ส่ง
              </Button>
              <input
                type="text"
                className="form-control"
                value={this.state.h5}
                onChange={(e) => {
                  this.setState({ h5: e.target.value });
                }}
              />
              <Button
                onClick={() => {
                  this.putdis(this.state.textt[5].id_discount, this.state.h5);
                }}
              >
                ส่ง
              </Button>
            </Col>
            <Col
              md={6}
              style={{
                backgroundColor: "#2f2f30",
                color: "#fff",
                padding: "5vw",
                textAlign: "center",
              }}
            >
              {this.state.textt.length != 0 && (
                <>
                  <h5
                    className="diss"
                    style={{
                      fontSize: "5.5vw",
                      textShadow:
                        "#C8C8C7 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px",
                    }}
                  >
                    {this.state.textt[0].text_discount}
                  </h5>
                  <h5
                    className="diss"
                    style={{ color: "#ff9500", fontSize: "5.5vw" }}
                  >
                    {this.state.textt[1].text_discount}
                  </h5>
                  <h5
                    className="diss"
                    style={{ color: "#ff9500", fontSize: "5.5vw" }}
                  >
                    {this.state.textt[2].text_discount}
                  </h5>
                  <h5
                    className="diss"
                    style={{ color: "#ff9500", fontSize: "5.5vw" }}
                  >
                    {this.state.textt[3].text_discount}
                  </h5>
                  <span
                    className="diss"
                    style={{
                      fontSize: "5.5vw",
                      textShadow:
                        "#C8C8C7 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px",
                    }}
                  >
                    {this.state.textt[4].text_discount}{" "}
                  </span>
                  <span
                    className="diss"
                    style={{ color: "#ff9500", fontSize: "5.5vw" }}
                  >
                    {this.state.textt[5].text_discount}
                  </span>
                </>
              )}

              <br />
              <Button
                className="Btn1"
                style={{
                  fontSize: "1.5rem",
                  width: "150px",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
                href="/ProductGallery/All"
              >
                สั่งซื้อ
              </Button>
            </Col>
          </Row>
          <div id="Send"></div>
        </Container>
      </div>
    );
  }
}
