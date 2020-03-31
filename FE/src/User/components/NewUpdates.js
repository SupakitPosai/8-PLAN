import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHeartEmpty } from "react-icons/io";
// import h33 from "../../img/h1.png";
// import icon1 from "../../img/icon1.jpg";
// import icon2 from "../../img/icon2.jpg";
// import icon3 from "../../img/icon3.jpg";
import icon4 from "../../img/icon4.jpg";
import icon5 from "../../img/icon5.jpg";
import { Link } from "react-router-dom";
// import ROOT_API from "../../config/Aip_Url";
import URL_img from "../../config/URL_img";
import NumberFormat from "react-number-format";
export default class NewUpdates extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  ccc() {
    //console.log("newupdate", this.props.newupdate);
  }
  render() {
    return (
      <div style={{ marginBottom: "1.5rem" }}>
        <Container>
          <div className="boxtext"></div>
          <div className="He1">
            {" "}
            <h1 className="htext">NEW </h1>
            <h1 className="textlast">UPDATES</h1>
          </div>
          {/* <button onClick={this.ccc.bind(this)}>dfg</button> */}
          {this.props.newupdate.length !== 0 && (
            <>
              {this.props.newupdate.map(newupdate1 => (
                <>
                  <Link
                    key={newupdate1.id_productN + "nbmt5v5verfssnbm"}
                    className="aa ocd"
                    to={"/DetailProduct/" + newupdate1.id_productN}
                  >
                    <Card
                      className="oc"
                      style={{ textAlign: "left", padding: "10px" }}
                    >
                      <Row style={{ fontWeight: "bold" }}>
                        <Col sm={6} style={{ alignSelf: "center" }}>
                          <Image
                            style={{ border: "3px solid" }}
                            width="100%"
                            src={URL_img + newupdate1.img_productN}
                          />
                        </Col>
                        <Col sm={5} className="detailcard">
                          <Row>
                            <Col>
                              <h3
                                className="nameCut"
                                style={{
                                  fontFamily: "CaviarDreams_Bold",
                                  marginBottom: "0"
                                }}
                              >
                                {newupdate1.name_product_thN}
                              </h3>
                              <h3
                                className="nameCut"
                                style={{ fontFamily: "CaviarDreams_Bold" }}
                              >
                                {newupdate1.name_product_enN}
                              </h3>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5
                                style={{
                                  color: "#d57133",
                                  marginBottom: "0"
                                }}
                              >
                                JUST UPDATED :
                                {" " + newupdate1.created_productN}
                              </h5>
                            </Col>
                          </Row>
                          <Row className="detailcardRow">
                            <Col className="Categories">
                              <p style={{ marginBottom: "0" }}>Categories : </p>
                              <p
                                style={{ marginBottom: "0" }}
                                className="CategoriesP"
                              >
                                {newupdate1.name_galleryN}
                              </p>
                              <p
                                style={{ marginBottom: "0" }}
                                className="CategoriesP"
                              >
                                {newupdate1.size_productN}
                              </p>
                            </Col>
                          </Row>
                          <Row className="detailcardRow">
                            <Col>
                              <p style={{ marginBottom: "5px" }}>
                                {newupdate1.detail_productN}
                              </p>
                            </Col>
                          </Row>
                          <Row
                            style={{ marginBottom: "5px" }}
                            className="detailcardRow"
                          >
                            <Col
                              sm={3}
                              style={{
                                paddingRight: "0",
                                paddingLeft: "0",
                                marginLeft: "15px"
                              }}
                            >
                              <p>Excellence :</p>
                            </Col>
                            <Col>
                              {newupdate1.excellenceN.map(exc => (
                                <Row
                                  key={
                                    exc.detail_excellence_productN + "566v5vq34r34we"
                                  }
                                >
                                  <Col style={{ padding: "0" }}>
                                    <Image
                                      src={URL_img + exc.img_excellenceN}
                                      width="9%"
                                      style={{ marginRight: "5px" }}
                                    />
                                    <span>
                                      {exc.detail_excellence_productN}
                                    </span>
                                  </Col>
                                </Row>
                              ))}
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              sm={4}
                              style={{
                                marginRight: "30px",
                                alignSelf: "center"
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#000",
                                  color: "#d57133",
                                  width: "fit-content",
                                  padding: "2px 20px"
                                }}
                              >
                                <h3
                                  className="pricecard"
                                  style={{
                                    marginBottom: "0",
                                    fontSize: "2rem"
                                  }}
                                >
                                  {newupdate1.price_saleN !== 0 && (
                                    <NumberFormat
                                      value={newupdate1.price_saleN}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"฿"}
                                    />
                                  )}
                                  {newupdate1.price_saleN === 0 && (
                                    <NumberFormat
                                      value={newupdate1.price_productN}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"฿"}
                                    />
                                  )}
                                </h3>
                              </div>
                            </Col>
                            <Col
                              style={{ marginLeft: "0" }}
                              className="detailcardRow"
                            >
                              <Row>
                                <Col>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row"
                                    }}
                                  >
                                    <Image src={icon5} width="10%" />
                                    <p style={{ marginBottom: "0" }}>
                                      1,300 like
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row"
                                    }}
                                  >
                                    <Image src={icon4} width="10%" />
                                    <p style={{ marginBottom: "5px" }}>
                                      100x purchased
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>

                          <Row className="detailcardRow">
                            <Col>
                              <span>
                                Ready to build : {newupdate1.ready_to_build}
                              </span>
                            </Col>
                          </Row>
                        </Col>

                        <Col sm={1} style={{ padding: 0 }}>
                          <TiShoppingCart style={{ fontSize: "2.8rem" }} />
                          <IoIosHeartEmpty style={{ fontSize: "2.8rem" }} />
                        </Col>
                      </Row>
                    </Card>
                  </Link>
                  <Link
                    key={newupdate1.id_productN + "y676v554vh65m3r"}
                    className="aa ocm"
                    to={"/DetailProduct/" + newupdate1.id_productN}
                  >
                    <Card
                      className="oc"
                      style={{
                        textAlign: "left",
                        padding: "10px",
                        fontSize: "4vw"
                      }}
                    >
                      <Row
                        style={{ fontWeight: "bold", marginBottom: ".5rem" }}
                      >
                        <Col style={{  paddingRight: "0" }}>
                          <Image
                            style={{ border: "1px solid" }}
                            width="100%"
                            src={URL_img + newupdate1.img_productN}
                          />
                        </Col>
                        <Col
                          className="detailcard"
                          style={{ padding: "0 5px" }}
                        >
                          <Row>
                            <Col>
                              <h3
                                className="nameCut"
                                style={{
                                  fontFamily: "CaviarDreams_Bold",
                                  marginBottom: "0",
                                  fontSize: "5vw"
                                }}
                              >
                                {newupdate1.name_product_thN}
                              </h3>
                              <h3
                                style={{
                                  fontFamily: "CaviarDreams_Bold",
                                  fontSize: "5vw"
                                }}
                                className="nameCut"
                              >
                                {newupdate1.name_product_enN}
                              </h3>
                            </Col>
                          </Row>
                          
                          <Row style={{ marginBottom: "5px" }}>
                            <Col
                              sm={4}
                              style={{
                                marginRight: "25px",
                                alignSelf: "center"
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#000",
                                  color: "#d57133",
                                  width: "fit-content",
                                  padding: "2px 20px"
                                }}
                              >
                                <h3
                                  style={{
                                    marginBottom: "0",
                                    fontSize: "5vw"
                                  }}
                                >
                                  {newupdate1.price_saleN !== 0 && (
                                    <NumberFormat
                                      value={newupdate1.price_saleN}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"฿"}
                                    />
                                  )}
                                  {newupdate1.price_saleN === 0 && (
                                    <NumberFormat
                                      value={newupdate1.price_productN}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"฿"}
                                    />
                                  )}
                                </h3>
                              </div>
                            </Col>
                          </Row>
                          {/* <Row>
                            <Col
                              style={{ marginLeft: "0" }}
                              className="detailcardRow"
                            >
                              <Row>
                                <Col>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row"
                                    }}
                                  >
                                    <Image src={icon5} width="15%" />
                                    <p style={{ marginBottom: "0" }}>
                                      1,300 like
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row"
                                    }}
                                  >
                                    <Image src={icon4} width="15%" />
                                    <p style={{ marginBottom: "5px" }}>
                                      100x purchased
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        */}
                        </Col>

                        {/* <Col style={{ padding: 0 }}>
      <TiShoppingCart style={{ fontSize: "2.8rem" }} />
      <IoIosHeartEmpty style={{ fontSize: "2.8rem" }} />
    </Col>
   */}
                      </Row>
                      <Row className="detailcardRow">
                            <Col>
                              <h5
                                className="nameCut"
                                style={{
                                  color: "#d57133",
                                  marginBottom: ".5rem",
                                  fontSize: "4vw"
                                }}
                              >
                                JUST UPDATED :
                                {" " + newupdate1.created_productN}
                              </h5>
                            </Col>
                          </Row>
                      <Row className="detailcardRow">
                        <Col className="Categories">
                          <p style={{ marginBottom: "0" }}>Categories : </p>
                          <p
                            style={{ marginBottom: "0" }}
                            className="CategoriesP"
                          >
                            {newupdate1.name_galleryN}
                          </p>
                          <p
                            style={{ marginBottom: "0" }}
                            className="CategoriesP"
                          >
                            {newupdate1.size_productN}
                          </p>
                        </Col>
                      </Row>
                      <Row className="detailcardRow">
                        <Col>
                          <p style={{ marginBottom: "5px" }}>
                            {newupdate1.detail_productN}
                          </p>
                        </Col>
                      </Row>

                      <Row
                        style={{ marginBottom: "5px" }}
                        className="detailcardRow"
                      >
                        <div
                          style={{
                            paddingRight: "0",
                            paddingLeft: "0",
                            marginLeft: "15px",
                            width: "fit-content"
                          }}
                        >
                          <p>Excellence :</p>
                        </div>
                        <Col>
                          {newupdate1.excellenceN.map(exc => (
                            <Row
                              key={exc.detail_excellence_productN + "weqw5vt54eqwe"}
                            >
                              <Col style={{ padding: "0" }}>
                                <Image
                                  src={URL_img + exc.img_excellenceN}
                                  width="9%"
                                  style={{ marginRight: "5px" }}
                                />
                                <span>{exc.detail_excellence_productN}</span>
                              </Col>
                            </Row>
                          ))}
                        </Col>
                      </Row>

                      <Row className="detailcardRow">
                        <Col>
                          <span>
                            Ready to build : eew ewqe qeqwewqewqewqe wewqe we wq
                          </span>
                        </Col>
                      </Row>
                    </Card>
                    <hr />
                  </Link>

                  {/* <Link
                    key={newupdate1.id_productN + "dfdsfds"}
                    className="aa"
                    to={"/DetailProduct/" + newupdate1.id_productN}
                  >
                    <Card
                      className="oc"
                      style={{ textAlign: "left", padding: "10px" }}
                    >
                      <Row style={{ fontWeight: "bold" }}>
                        <Col sm={6} style={{ alignSelf: "center" }}>
                          <Image
                            style={{ border: "3px solid" }}
                            width="100%"
                            src={URL_img + newupdate1.img_productN}
                          />
                        </Col>
                        <Col sm={5}>
                          <Row>
                            <Col>
                              <h3
                                style={{
                                  fontFamily: "CaviarDreams_Bold",
                                  marginBottom: "0"
                                }}
                              >
                                {newupdate1.name_product_thN}
                              </h3>
                              <h3 style={{ fontFamily: "CaviarDreams_Bold" }}>
                                {newupdate1.name_product_enN}
                              </h3>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <h5
                                style={{
                                  color: "#d57133",
                                  marginBottom: "0"
                                }}
                              >
                                JUST UPDATED :
                                {" " + newupdate1.created_productN}
                              </h5>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="Categories">
                              <p style={{ marginBottom: "0" }}>Categories : </p>
                              <p
                                style={{ marginBottom: "0" }}
                                className="CategoriesP"
                              >
                                {newupdate1.name_galleryN}
                              </p>
                              <p
                                style={{ marginBottom: "0" }}
                                className="CategoriesP"
                              >
                                {newupdate1.size_productN}
                              </p>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <p style={{ marginBottom: "5px" }}>
                                {newupdate1.detail_productN}
                              </p>
                            </Col>
                          </Row>
                          <Row style={{ marginBottom: "5px" }}>
                            <Col sm={3} style={{ paddingRight: "0" }}>
                              <p>Excellence :</p>
                            </Col>
                            <Col>
                              {newupdate1.excellenceN.map(exc => (
                                <Row
                                  key={
                                    exc.detail_excellence_productN + "sdsfdsfd"
                                  }
                                >
                                  <Col>
                                    <Image
                                      src={URL_img + exc.img_excellenceN}
                                      width="9%"
                                      style={{ marginRight: "5px" }}
                                    />
                                    <span>
                                      {exc.detail_excellence_productN}
                                    </span>
                                  </Col>
                                </Row>
                              ))}
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              sm={4}
                              style={{
                                marginRight: "25px",
                                alignSelf: "center"
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#000",
                                  color: "#d57133",
                                  width: "fit-content",
                                  padding: "2px 20px"
                                }}
                              >
                                <h3
                                  style={{
                                    marginBottom: "0",
                                    fontSize: "2rem"
                                  }}
                                >
                                  {newupdate1.price_saleN !== 0 && (
                                    <NumberFormat
                                      value={newupdate1.price_saleN}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"฿"}
                                    />
                                  )}
                                  {newupdate1.price_saleN === 0 && (
                                    <NumberFormat
                                      value={newupdate1.price_productN}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"฿"}
                                    />
                                  )}
                                </h3>
                              </div>
                            </Col>
                            <Col style={{ marginLeft: "0" }}>
                              <Row>
                                <Col>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row"
                                    }}
                                  >
                                    <Image src={icon5} width="10%" />
                                    <p style={{ marginBottom: "0" }}>
                                      1,300 like
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row"
                                    }}
                                  >
                                    <Image src={icon4} width="10%" />
                                    <p style={{ marginBottom: "5px" }}>
                                      100x purchased
                                    </p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <Col>
                              <span>eew ewqe qeqwewqewqewqe wewqe we wq</span>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm={1} style={{ padding: 0 }}>
                          <TiShoppingCart style={{ fontSize: "2.8rem" }} />
                          <IoIosHeartEmpty style={{ fontSize: "2.8rem" }} />
                        </Col>
                      </Row>
                    </Card>
                  </Link>
                */}
                </>
              ))}
            </>
          )}
        </Container>
      </div>
    );
  }
}
