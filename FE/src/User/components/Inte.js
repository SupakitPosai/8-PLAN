import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import H1 from "../../img/h1.png";
import ROOT_API from "../../config/Aip_Url";
import URL_img from "../../config/URL_img";
import parse from "html-react-parser";
export default class Inte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getinte: [],
    };
  }
  componentDidMount() {
    fetch(ROOT_API + "/api/getInterior")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ getinte: result });
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
                อินทีเรีย
              </h1>
            </Col>
          </Row>
          <Row>
            {this.state.getinte.length !== 0 && (
              <>
                {this.state.getinte.map((gi) => (
                  <>
                    <Col
                      sm={3}
                      className="_wewe__ghhttinte"
                      style={{
                        backgroundImage: `url(${URL_img + gi.img_interior})`,
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
                          {gi.titel_interior}
                        </h3>
                      </center>
                      <p>{parse(gi.detail_interior)}</p>
                    </Col>
                  </>
                ))}
              </>
            )}
          </Row>
          <Row>
            <div id="h3"></div>
          </Row>
        </Container>
      </div>
    );
  }
}
