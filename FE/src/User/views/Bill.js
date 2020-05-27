import React, { Component } from "react";
import html2canvas from "html2canvas";
import {
  Card,
  Row,
  Col,
  Container,
  Image,
  Button,
  Modal,
} from "react-bootstrap";
import Logo from "../../img/8Plan.jpg";
import ROOT_API from "../../config/Aip_Url";
import "../css/Bill.css";
import URL_img from "../../config/URL_img";
import NumberFormat from "react-number-format";
import Swal from "sweetalert2";
import axios from "axios";
import DatePicker from "react-datepicker";
import p1 from "../../img/photo.png";
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
export default class Bill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canv: <></>,
      ndata: "",
      bills: [],
      disableDiv1: false,
      myorder: [],
      imgSrc: [p1],
      show: false,
      formData: { file: "" },
      idorder: "",
      startDate: new Date(),
      startTime: new Date(),
    };
  }

  componentDidMount() {
    document.title = this.props.match.params.id;
    fetch(ROOT_API + "/api/getorderBill?no_order=" + this.props.match.params.id)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            bills: result,
          });
          if (result.length !== 0) {
          }
          setTimeout(() => {
            html2canvas(document.querySelector("#capture1")).then((canvas) => {
              //  document.querySelector("#previewImage1").appendChild(canvas);

              this.setState({ canv: canvas });
              this.setState({ disableDiv1: true });
              // setcanv(canvas)
            });
          }, 500);
          console.log("object", this.state.bills);
        },
        (error) => {}
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
      ),
    });
  }
  img(e) {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      //console.warn("img data ", e.target.result);
      this.state.formData.file = e.target.result;
      //console.warn("formdata", this.state.formData);
    };
    reader.onloadend = (e) => {
      this.setState({
        imgSrc: [reader.result],
      });
    };
  }
  post() {
    const date = this.state.startDate.getDate(); //Current Date
    const month = this.state.startDate.getMonth() + 1; //Current Month
    const year = this.state.startDate.getFullYear(); //Current Year
    const hours = this.state.startTime.getHours("00"); //Current Hours
    const min = this.state.startTime.getMinutes("00"); //Current Minutes
    const sec = this.state.startTime.getSeconds("00"); //Current Seconds
    const date_now =
      year + "-" + month + "-" + date + " " + hours + ":" + min + ":" + sec;
    axios
      .post(
        ROOT_API + "/api/putorder",
        qs.stringify({
          file: this.state.formData.file,
          no_order: this.state.idorder,
          date_payment: date_now,
          status_order: "รอการจัดส่ง",
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
          title: "Success",
        });
        window.location.replace("/MyOrder");
        this.setState({ show: false });
        // setShow(false);
      })
      .catch((error) => {});
    // fetch(ROOT_API + "/api/putorder", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     file: this.state.formData.file,
    //     id_order: this.state.idorder,
    //     date_payment: date_now,
    //     status_order: "รอการจัดส่ง"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Success"
    //     });
    //     this.setState({ show: false });
    //     // setShow(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => { });
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
                    <h1>สั่งซื้อสินค้าเสร็จสิ้น</h1>
                    {/* <p style={divStyle3}>ID Customer : 42054</p> */}
                    <div>
                      <Row>
                        <Col md={3}></Col>
                        <Col md={6} id="capture1">
                          {this.state.bills.length !== 0 && (
                            <div className="cBi">
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
                                  marginRight: ".7rem",
                                }}
                              >
                                <p style={{ textAlign: "left" }}>
                                  รายการสินค้า :{" "}
                                </p>
                                {this.state.bills.map((bl) => (
                                  <>
                                    <div style={{ display: "flex" }}>
                                      <div style={{ marginRight: "1rem" }}>
                                        <Image
                                          src={bl.img_product}
                                          width="100px"
                                        />
                                      </div>
                                      <div style={{ marginRight: "1rem" }}>
                                        <p
                                          style={{
                                            textAlign: "left",
                                            marginBottom: "5px",
                                          }}
                                        >
                                          {bl.name_product_th}
                                        </p>

                                        {bl.price_sale !== 0 && (
                                          <p
                                            style={{
                                              textAlign: "left",
                                              marginBottom: "5px",
                                            }}
                                          >
                                            ราคา :
                                            <NumberFormat
                                              value={bl.price_sale}
                                              displayType={"text"}
                                              thousandSeparator={true}
                                              prefix={" THB "}
                                            />
                                          </p>
                                        )}
                                        {bl.price_sale === 0 && (
                                          <p
                                            style={{
                                              textAlign: "left",
                                              marginBottom: "5px",
                                            }}
                                          >
                                            ราคา :
                                            <NumberFormat
                                              value={bl.price_product}
                                              displayType={"text"}
                                              thousandSeparator={true}
                                              prefix={" THB "}
                                            />
                                          </p>
                                        )}
                                      </div>
                                      <div>
                                        <p
                                          style={{
                                            textAlign: "left",
                                            marginBottom: "5px",
                                          }}
                                        >
                                          จำนวน : {bl.num_product}
                                        </p>
                                        <p
                                          style={{
                                            textAlign: "left",
                                            marginBottom: "5px",
                                          }}
                                        >
                                          ราคารวม :
                                          <NumberFormat
                                            value={bl.total_product}
                                            displayType={"text"}
                                            thousandSeparator={true}
                                            prefix={" THB "}
                                          />
                                        </p>
                                      </div>
                                    </div>

                                    <hr style={{ width: "95%" }} />
                                  </>
                                ))}
                                <p>
                                  ยอดรวม :
                                  <NumberFormat
                                    value={this.state.bills[0].total_order}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={" THB "}
                                  />
                                </p>
                              </div>
                              <hr style={{ width: "95%" }} />
                              <div
                                style={{
                                  marginLeft: ".7rem",
                                  marginRight: ".7rem",
                                }}
                              >
                                <p style={{ textAlign: "left" }}>
                                  บัญชีที่ชำระเงิน :{" "}
                                </p>
                                <div style={{ display: "flex" }}>
                                  <div style={{ marginRight: "1rem" }}>
                                    <Image
                                      src={
                                        this.state.bills[0].img_payment_method
                                      }
                                      width="100px"
                                    />
                                  </div>
                                  <div>
                                    <p style={{ textAlign: "left" }}>
                                      {
                                        this.state.bills[0]
                                          .detail_payment_method
                                      }
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <hr style={{ width: "95%" }} />
                              <div
                                style={{
                                  marginLeft: ".7rem",
                                  marginRight: ".7rem",
                                }}
                              >
                                <p style={{ textAlign: "left" }}>
                                  ข้อมูลการจัดส่ง :{" "}
                                </p>
                                <Row>
                                  <Col>
                                    <p className="pBi">ชื่อ-นามสกุล : </p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].full_name}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">ที่อยู่ : </p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].address}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">เบอร์โทร : </p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].phone_number}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">จังหวัด :</p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].province}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">อำเภอ :</p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].district}
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <p className="pBi">รหัสไปรษณีย์ : </p>
                                  </Col>
                                  <Col>
                                    <p className="pBi">
                                      {this.state.bills[0].postal_code}
                                    </p>
                                  </Col>
                                </Row>
                                <Row style={{ marginBottom: ".7rem" }}>
                                  <Col>
                                    <p className="pBi">ประเทศ :</p>
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
                        <Col md={3}></Col>
                      </Row>
                    </div>
                  </div>
                </center>
                <div style={divStyle1} className="dBi">
                  <Row>
                    <Col style={{ textAlign: "center" }}>
                      <Button
                        id={this.props.match.params.id}
                        className="Btn1 dsfdfdf"
                        style={{ marginRight: ".5rem", width: "40%" }}
                        onClick={(e) => {
                          this.setState({ idorder: e.target.id });
                          this.setState({ show: true });
                        }}
                      >
                        เพิ่มสลิบ
                      </Button>
                      <a
                        className="btn Btn1"
                        id="btn-Convert-Html2Image"
                        onClick={this.testr.bind(this)}
                        href={this.state.ndata}
                        download={this.props.match.params.id + ".png"}
                        style={{
                          marginLeft: ".5rem",
                          marginRight: "0",
                          width: "40%",
                        }}
                      >
                        ดาวน์โหลดบิล
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
        <Modal
          centered
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header>
            <Modal.Title>เพิ่มสลิบ : </Modal.Title>
          </Modal.Header>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.post();
            }}
          >
            <Modal.Body>
              <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                <img src={this.state.imgSrc} width="200px" />
              </div>
              <h4 style={{ color: "#fff", marginBottom: "2rem" }}>
                รูปสลิบ :{" "}
              </h4>
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    name="file"
                    required
                    onChange={this.img.bind(this)}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    เลือกรูปภาพ ( .jpg )
                  </label>
                </div>
              </div>

              <Row style={{ marginBottom: "1rem" }}>
                <Col>
                  <h4>วันที่ชำระเงิน : </h4>
                  <DatePicker
                    className="form-control"
                    dateFormat="yyyy-MM-dd"
                    selected={this.state.startDate}
                    onChange={(data) => this.setState({ startDate: data })}
                  />
                </Col>
                <Col>
                  <h4>เวลาชำระเงิน : </h4>
                  <DatePicker
                    className="form-control"
                    selected={this.state.startTime}
                    onChange={(data) => this.setState({ startTime: data })}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm:ss"
                  />
                </Col>
              </Row>
              <Button className="Btn1" style={{ width: "100%" }} type="submit">
                อัพโหลด
              </Button>
            </Modal.Body>
          </form>
        </Modal>
      </div>
    );
  }
}
