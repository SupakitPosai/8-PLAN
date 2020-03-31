import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Modal
} from "react-bootstrap";
import DataTable from "../../Admin/components/DataTable";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import p1 from "../../img/photo.png";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
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
  onOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
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
      startTime: new Date()
    };
  }

  componentDidMount() {
    document.title = "My Order";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getorderuser?id_user=" + cookies.get("ID_Login"))
      .then(res => res.json())
      .then(
        result => {
          this.setState({ myorder: result });
          //   setorder(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
  }
  img(e) {
    let files = e.target.files;

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = e => {
      //console.warn("img data ", e.target.result);
      this.state.formData.file = e.target.result;
      //console.warn("formdata", this.state.formData);
    };
    reader.onloadend = e => {
      this.setState({
        imgSrc: [reader.result]
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
          id_order: this.state.idorder,
          date_payment: date_now,
          status_order: "รอการจัดส่ง"
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(response => {
        Toast.fire({
          icon: "success",
          title: "Success"
        });
        this.setState({ show: false });
        // setShow(false);
        window.location.reload(false);
      })
      .catch(error => {});
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
            <Col>
              {this.state.myorder.length !== 0 && (
                <DataTable
                  idtable="example19"
                  data={this.state.myorder}
                  tablehead={[
                    "no order",
                    "name product en",
                    "price product",
                    "price sale",
                    "status order",
                    "f name user",
                    "full name",
                    "address",
                    "phone number",
                    "province",
                    "district",
                    "postal code",
                    "country",
                    "detail payment method",
                    "date order",
                    "date payment",
                    "tack num"
                  ]}
                  bodytable={[
                    "no_order",
                    "name_product_en",
                    "price_product",
                    "price_sale",
                    "status_order",
                    "f_name_user",
                    "full_name",
                    "address",
                    "phone_number",
                    "province",
                    "district",
                    "postal_code",
                    "country",
                    "detail_payment_method",
                    "date_order",
                    "date_payment",
                    "tack_num"
                  ]}
                  imgtable="img_product"
                  imgtable2="img_order"
                  title="My Order"
                  txtup="เพิ่มสลิป"
                  update={(event, index) => {
                    this.setState({
                      idorder: this.state.myorder[index].id_order,
                      show: true
                    });
                  }}
                />
              )}
              <Modal
                centered
                show={this.state.show}
                onHide={() => this.setState({ show: false })}
              >
                <Modal.Header>
                  <Modal.Title>Payment Method : </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                    <img src={this.state.imgSrc} width="200px" />
                  </div>
                  <h4 style={{ color: "#fff", marginBottom: "2rem" }}>
                    Photo Profile :{" "}
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
                        Choose file
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
                        onChange={data => this.setState({ startDate: data })}
                      />
                    </Col>
                    <Col>
                      <h4>เวลาชำระเงิน : </h4>
                      <DatePicker
                        className="form-control"
                        selected={this.state.startTime}
                        onChange={data => this.setState({ startTime: data })}
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
                    onClick={this.post.bind(this)}
                  >
                    Save
                  </Button>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
