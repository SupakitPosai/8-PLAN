import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import AB from "../../img/77.jpg";
import ROOT_API from "../../config/Aip_Url";
export default class Dis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textt: [],
    };
  }
  componentDidMount() {
    fetch(ROOT_API + "/api/getDiscount")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            textt: result,
          });
        },
        (error) => {}
      );
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              md={6}
              style={{
                backgroundImage: `url(${AB})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                paddingTop: "25vw",
              }}
            ></Col>

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
