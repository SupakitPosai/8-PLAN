import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import H1 from "../../img/h1.png";
import ROOT_API from "../../config/Aip_Url";
import URL_img from "../../config/URL_img";
import parse from "html-react-parser";
export default class Design extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getdesign: [],
    };
  }
  componentDidMount() {
    fetch(ROOT_API + "/api/getProjectDesign")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ getdesign: result });
      });
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1
                style={{
                  marginTop: "5rem",
                  textAlign: "center",
                  letterSpacing: "0.12em",
                  marginBottom: "2rem",
                }}
              >
                ออกแบบ โครงการ
              </h1>
            </Col>
          </Row>
          <Row>
            {this.state.getdesign.length !== 0 && (
              <>
                {this.state.getdesign.map((gd) => (
                  <>
                    <Col
                      sm={3}
                      className="_wewe__ghhttinte"
                      style={{
                        backgroundImage: `url(${
                          URL_img + gd.img_project_design
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></Col>
                    <Col
                      sm={3}
                      style={{ padding: "2rem 1rem", backgroundColor: "#fff" }}
                    >
                      <center>
                        <h3 style={{ color: "#4BD1A0" }}>
                          {gd.titel_project_design}
                        </h3>
                      </center>
                      <p>{parse(gd.detail_project_design)}</p>
                    </Col>
                  </>
                ))}
              </>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
