import React, { Component } from "react";
import html2canvas from "html2canvas";
import { Card, Row, Col, Container, Image } from "react-bootstrap";
import Logo from "../../img/8Plan.jpg";
import ROOT_API from "../../config/Aip_Url";
import "../css/Bill.css";
import URL_img from "../../config/URL_img";
import NumberFormat from "react-number-format";
export default class Bill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canv: <></>,
      ndata: "",
      bills: [],
      disableDiv1: false
    };
  }

  componentDidMount() {
    fetch(ROOT_API + "/api/getorderBill?no_order=" + this.props.match.params.id)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            bills: result
          });
          if (result.length !== 0) {
          }
          setTimeout(() => {
            html2canvas(document.querySelector("#capture1")).then(canvas => {
             //  document.querySelector("#previewImage1").appendChild(canvas);

              this.setState({ canv: canvas });
              this.setState({ disableDiv1: true });
              // setcanv(canvas)
            });
          }, 500);
          console.log("object", this.state.bills);
        },
        error => {}
      );
  }
  testr() {
    // html2canvas(document.querySelector("#capture1")).then(canvas => {
    // document.querySelector("#previewImage1").appendChild(this.state.canv);
    // setcanv(canvas)
    // });
    var imgageData = this.state.canv.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    this.setState({
      ndata: imgageData.replace(
        /^data:image\/png/,
        "data:application/octet-stream"
      )
    });
  }
  render() {
    var divStyle1 = { display: this.state.disableDiv1 ? "block" : "none" };
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div id="done">
                <center>
                  <div style={{ marginTop: "1rem" }}>
                    <h1>You transaction is done !!</h1>
                    <h1>THANK YOU</h1>
                    {/* <p style={divStyle3}>ID Customer : 42054</p> */}
                    <div>
                      <Row>
                        <Col   md={3}></Col>
                        <Col  md={6} id="capture1">
                          {this.state.bills.length !== 0 && (
                            <div className="cBi" >
                              <div className="Bi">
                                <Image src={Logo} width="100px" />
                                <p className="nBi">
                                  NO : {this.props.match.params.id}
                                </p>
                              </div>
                              <hr style={{ width: "95%" }} />
                              <div
                                style={{
                                  marginLeft: ".7rem",
                                  marginRight: ".7rem"
                                }}
                              >
                                <p style={{ textAlign: "left" }}>Order : </p>
                                <Row>
                                  <Col>
                                    <Image
                                      src={this.state.bills[0].img_product}
                                      width="100px"
                                    />
                                  </Col>
                                  <Col>
                                    <p>{this.state.bills[0].name_product_en}</p>
                                
                                    {this.state.bills[0].price_sale !== 0 && (
                                      <p>
                                        <NumberFormat
                                          value={this.state.bills[0].price_sale}
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix={"THB "}
                                        />
                                      </p>
                                    )}
                                    {this.state.bills[0].price_sale === 0 && (
                                      <p>
                                        <NumberFormat
                                          value={
                                            this.state.bills[0].price_product
                                          }
                                          displayType={"text"}
                                          thousandSeparator={true}
                                          prefix={"THB "}
                                        />
                                      </p>
                                    )}
                                  </Col>
                                </Row>
                              </div>
                              <hr style={{ width: "95%" }} />
                              <div
                                style={{
                                  marginLeft: ".7rem",
                                  marginRight: ".7rem"
                                }}
                              >
                                <p style={{ textAlign: "left" }}>
                                  Payment method :{" "}
                                </p>
                                <Row>
                                  <Col >
                                    {" "}
                                    <Image
                                      src={
                                        this.state.bills[0].img_payment_method
                                      }
                                      width="100px"
                                    />
                                  </Col>
                                  <Col>
                                    {" "}
                                    <p>
                                      {
                                        this.state.bills[0]
                                          .detail_payment_method
                                      }
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                              <hr style={{ width: "95%" }} />
                              <div
                                style={{
                                  marginLeft: ".7rem",
                                  marginRight: ".7rem"
                                }}
                              >
                                <Row>
                                  <Col>
                                    <p className="pBi">full name : </p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].full_name}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">address : </p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].address}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">phone number : </p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].phone_number}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">province :</p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].province}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">district :</p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].district}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">postal code : </p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].postal_code}
                                    </p>
                                  </Col>
                                </Row>
                                <Row style={{ marginBottom: ".7rem" }}>
                                  <Col>
                                    <p className="pBi">country :</p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].country}
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          )}
                        </Col>
                        <Col  md={3}></Col>
                      </Row>
                    </div>
                  </div>
                </center>
                <div style={divStyle1} className="dBi">
                  <Row>
                    <Col style={{ textAlign: "center" }}>
                      <a
                        className="btn Btn1"
                        id="btn-Convert-Html2Image"
                        onClick={this.testr.bind(this)}
                        href={this.state.ndata}
                        download={this.props.match.params.id + ".png"}
                        style={{ marginRight: "0" , width:'50%'}}
                      >
                        Download
                      </a>
                    </Col>{" "}
                    {/* <Col>
                      <button className="btn Btn1" style={{ width:'50%'}} href="/">
                        Close
                      </button>
                    </Col> */}
                  </Row>
                </div>

                <br />
                {/* <h3>Preview :</h3>*/}
                <div id="previewImage1"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
