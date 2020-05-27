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
import { FaCircle } from "react-icons/fa";
import URL_img from "../../config/URL_img";
import ROOT_API from "../../config/Aip_Url";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import DD2 from "../../img/DD2.png";
export default class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getpay: [],
    };
  }
  componentDidMount() {
    fetch(ROOT_API + "/api/getpaym")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            getpay: result,
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
                backgroundImage: `url(${DD2})`,
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
                  การชำระเงิน
                </h1>
                <div className="PsdsdFDF_DFd_"></div>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col>
              <h4 style={{ color: "#ff9500" }}>บัญชีของเรา</h4>
              <hr style={{ backgroundColor: "#ff9500" }} />
            </Col>
          </Row>
          <Row>
            {this.state.getpay.map((gp) => (
              <Col sm={4}>
                <Card style={{ padding: "1rem", border: "unset" }}>
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "50%" }}>
                      <div className="Pay_rewr_1">
                        <div className="Pay_rewr_2">
                          <Image
                            className="Pay_rewr_3"
                            width="100px"
                            src={URL_img + gp.img_payment_method}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ width: "50%", textAlign: "right" }}>
                      <FaCircle style={{ color: "#ff9500" }} />
                    </div>
                  </div>
                  <hr style={{ backgroundColor: "#ff9500" }} />
                  <p>{gp.detail_payment_method}</p>
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
