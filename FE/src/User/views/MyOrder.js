import React, { Component } from "react";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
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
import DataTable from "../../Admin/components/DataTable";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import p1 from "../../img/photo.png";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import NumberFormat from "react-number-format";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
const qs = require("querystring");
const cookies = new Cookies();
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
export default class MyOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
    document.title = "My Order";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getord?id_user=" + cookies.get("ID_Login"))
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ myorder: result });
          //   setorder(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
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
        this.setState({ show: false });
        // setShow(false);
        window.location.reload(false);
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
    return (
      <div style={{ marginTop: "1rem" }}>
        <Container>
          <Row>
            {this.state.myorder.map((mo) => (
              <Col sm={6}>
                <Card style={{ padding: "1rem" }}>
                  <Row>
                    <Col sm={8}>
                      <h3>No: {mo.no_order}</h3>
                      <hr />
                      {mo.item.map((it) => (
                        <div style={{ display: "flex" }}>
                          <div style={{ marginRight: "1rem" }}>
                            <Image
                              src={URL_img + it.img_product}
                              width="100px"
                            />
                          </div>
                          <div style={{ marginRight: "1rem" }}>
                            <h5>{it.name_product_th}</h5>
                            <h5>จำนวน:{" " + it.num_product}</h5>
                          </div>
                          <div>
                            {it.price_sale !== 0 && (
                              <h5>
                                ราคา:
                                <NumberFormat
                                  value={it.price_sale}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={" ฿"}
                                />
                              </h5>
                            )}
                            {it.price_sale === 0 && (
                              <h5>
                                ราคา:
                                <NumberFormat
                                  value={it.price_product}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={" ฿"}
                                />
                              </h5>
                            )}
                            <h5>
                              ราคารวม:
                              <NumberFormat
                                value={it.total_product}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={" ฿"}
                              />
                            </h5>
                          </div>
                        </div>
                      ))}
                      <hr />
                      <div style={{ display: "flex" }}>
                        <h5 style={{ marginRight: "1rem" }}>
                          ยอดรวม:
                          <NumberFormat
                            value={mo.item[0].total_order}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={" ฿"}
                          />
                        </h5>
                        <h5>สถานะ:{" " + mo.item[0].status_order}</h5>
                      </div>
                      <hr />
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "1rem" }}>
                          <Image
                            width="100px"
                            src={URL_img + mo.item[0].img_payment_method}
                          />
                        </div>
                        <div>
                          <h5>{mo.item[0].detail_payment_method}</h5>
                        </div>
                      </div>
                    </Col>
                    <Col sm={4}>
                      {mo.item[0].img_order === null && (
                        <Button
                          id={mo.no_order}
                          className="Btn1 dsfdfdf"
                          style={{ marginBottom: "1rem" }}
                          onClick={(e) => {
                            this.setState({ idorder: e.target.id });
                            this.setState({ show: true });
                          }}
                        >
                          เพิ่มสลิบ
                        </Button>
                      )}

                      {mo.item[0].img_order !== null && (
                        <>
                          <h5 style={{ marginBottom: "1rem" }}>
                            เวลาชำระเงิน:{" " + mo.item[0].date_payment}
                          </h5>
                          <Image
                            width="100%"
                            style={{ marginBottom: "1rem" }}
                            src={URL_img + mo.item[0].img_order}
                          />
                        </>
                      )}
                      {mo.item[0].tack_num !== null && (
                        <h5>เลขไปรษณีย์:{" " + mo.item[0].tack_num}</h5>
                      )}
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}

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
                        เลือกรูปภาพ
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
                  <Button
                    className="Btn1"
                    style={{ width: "100%" }}
                    type="submit"
                  >
                    อัพโหลด
                  </Button>
                </Modal.Body>
              </form>
            </Modal>
          </Row>
        </Container>
        <OutServices />
        <IssueHome />
      </div>
    );
  }
}
