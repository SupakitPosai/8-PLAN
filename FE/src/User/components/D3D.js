import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import H1 from "../../img/h1.png";
import ROOT_API from "../../config/Aip_Url";
import URL_img from "../../config/URL_img";
import parse from "html-react-parser";
export default class D3D extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getd3d: [],
    };
  }
  componentDidMount() {
    fetch(ROOT_API + "/api/getGetThreed")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ getd3d: result });
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
                  color: "#4BD1A0",
                  letterSpacing: "0.12em",
                  marginBottom: "2rem",
                }}
              >
                รับทำ 3D
              </h1>
            </Col>
          </Row>
          {this.state.getd3d.length !== 0 && (
            <>
              {this.state.getd3d.map((dd) => (
                <Row>
                  <Col
                    sm={6}
                    className="_wewe__ghhttinte"
                    style={{
                      backgroundImage: `url(${URL_img + dd.img_get_threeD})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></Col>
                  <Col
                    sm={6}
                    style={{ padding: "2rem 2rem", backgroundColor: "#fff" }}
                  >
                    <center>
                      <h3 style={{ color: "#4BD1A0" }}>
                        {dd.titel_get_threeD}
                      </h3>
                    </center>
                    <p>{parse(dd.detail_get_threeD)}</p>
                  </Col>
                </Row>
              ))}
            </>
          )}
          <Row>
            <div id="h4"></div>
          </Row>
        </Container>
      </div>
    );
  }
}
