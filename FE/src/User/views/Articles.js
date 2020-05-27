import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Modal,
} from "react-bootstrap";
import URL_img from "../../config/URL_img";
import ROOT_API from "../../config/Aip_Url";
import OutServices from "../components/OutServices";
import DD3 from "../../img/DD3.jpg";
import IssueHome from "../components/IssueHome";
export default class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getarticle: [],
      setstyle: [],
      setstyle2: [],
    };
  }
  componentDidMount() {
    fetch(ROOT_API + "/api/getNews")
      .then((res) => res.json())
      .then(
        (result) => {
          var dd = [];
          for (let index = 0; index < result.length; index++) {
            dd.push({ display: "block" });
            if (index === result.length - 1) {
              this.setState({
                setstyle2: dd,
              });
            }
          }
          var aa = [];
          for (let index1 = 0; index1 < result.length; index1++) {
            aa.push({ display: "-webkit-box" });
            if (index1 === result.length - 1) {
              this.setState({
                setstyle: aa,
              });
            }
          }
          this.setState({
            getarticle: result,
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
              style={{
                padding: "0",
                backgroundImage: `url(${DD3})`,
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
                  เกร็ดความรู้
                </h1>
                <div className="PsdsdFDF_DFd_"></div>
              </div>
            </Col>
          </Row>
          <Row style={{marginTop:'1rem'}}>
            {this.state.getarticle.map((gac, index) => (
              <Col sm={6}>
                <Card style={{ padding: "1rem", border: "unset" }}>
                  <div className="articleeeee_ee">
                    <div className="articleeeee_ee2">
                      <Image
                        className="articleeeee_ee3"
                        src={URL_img + gac.img_news}
                      />
                    </div>
                  </div>
                  <h4 style={{ color: "#ff9500", marginTop: "1rem" }}>
                    {gac.title_news}
                  </h4>
                  <p
                    style={this.state.setstyle[index]}
                    className="xwewqxe_Wexwqvcvfh"
                  >
                    {gac.detail_news}
                  </p>
                  <a
                    href="##"
                    style={this.state.setstyle2[index]}
                    onClick={() => {
                      var dd = [...this.state.setstyle2];
                      dd[index] = { display: "none" };
                      var aa = [...this.state.setstyle];
                      aa[index] = { display: "block" };
                      this.setState({
                        setstyle2: dd,
                        setstyle: aa,
                      });
                    }}
                  >
                    Read more
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <OutServices />
        <IssueHome />
      </div>
    );
  }
}
