import React, { Component } from "react";
import Background from "../../img/nav.jpg";
import { Container, Row, Col, Button, Image, Alert } from "react-bootstrap";
import p1 from "../../img/photo.jpg";
import PasswordInput from "../components/password-input";
import ROOT_API from "../../config/Aip_Url";
import Swal from "sweetalert2";
import axios from "axios";
const qs = require("querystring");
const m = [
  { m: "Month", d: "" },
  { m: "January", d: 1 },
  { m: "February", d: 2 },
  { m: "March", d: 3 },
  { m: "April", d: 4 },
  { m: "May", d: 5 },
  { m: "June", d: 6 },
  { m: "July", d: 7 },
  { m: "August", d: 8 },
  { m: "September", d: 9 },
  { m: "October", d: 10 },
  { m: "November", d: 11 },
  { m: "December", d: 12 }
];
var date = <></>;
var y = <></>;
date = (
  <>
    {date}
    <option key="Date" value="">
      Date
    </option>
  </>
);
y = (
  <>
    {y}
    <option key="Year" value="">
      Year
    </option>
  </>
);
for (let index = 1; index <= 31; index++) {
  date = (
    <>
      {date}
      <option key={index} value={index}>
        {index}
      </option>
    </>
  );
}
let y1 = new Date().getFullYear();
for (let in1 = y1; in1 >= 1900; in1--) {
  y = (
    <>
      {y}
      <option key={in1} value={in1}>
        {in1}
      </option>
    </>
  );
}
const hasSpecial = value => {
  return new RegExp(/[@]/).test(value);
};
const hasSpecial2 = value => {
  return new RegExp(/[.]/).test(value);
};
export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgSrc: [p1],
      password: "",
      username: "",
      email_user: "",
      l_name: "",
      f_name: "",
      id_card: "",
      address: "",
      date: "",
      month: "",
      year: "",
      disableDiv: false,
      disableDiv2: false,
      disableDiv3: false,
      disableDiv4: false,
      disableDiv5: false,
      disableDiv6: false,
      alUser: "",
      txUser: "",
      alPass: "",
      txPass: "",
      alEmail: "",
      txEmail: "",
      formData: { file: "" }
    };
  }
  handlePasswordChanges(event) {
    // this.setState({ disableDiv13: false })
    this.setState({ password: event.target.value });
  }
  inputUsername(e) {
    var ee = e.target.value;
    fetch(ROOT_API + "/api/getusername?username=" + ee)
      .then(res => res.json())
      .then(
        result => {
          if (result.length === 0) {
            this.setState({
              disableDiv: true,
              alUser: "success",
              txUser: "สามารถใช้ชื่อนี้ได้"
            });
          } else {
            this.setState({
              disableDiv: true,
              alUser: "danger",
              txUser: "ชื่อนี้มีอยู่แล้ว"
            });
          }

          if (ee === "") {
            this.setState({
              disableDiv: false,
              alUser: "",
              txUser: ""
            });
          }
        },
        error => {}
      );

    this.setState({
      username: e.target.value
    });
  }
  checkpasword(e) {
    if (e.target.value !== "") {
      if (e.target.value === this.state.password) {
        this.setState({
          disableDiv2: true,
          alPass: "success",
          txPass: "รหัสผ่านตรงกัน"
        });
      } else {
        this.setState({
          disableDiv2: true,
          alPass: "danger",
          txPass: "รหัสผ่านไม่ตรงกัน"
        });
      }
    } else {
      this.setState({
        disableDiv2: false,
        alPass: "",
        txPass: ""
      });
    }
  }
  handleemail_userChange(e) {
    if (e.target.value !== "") {
      if (hasSpecial(e.target.value) && hasSpecial2(e.target.value)) {
        fetch(ROOT_API + "/api/getemail?email_user=" + e.target.value)
          .then(res => res.json())
          .then(
            result => {
              if (result.length === 0) {
                this.setState({
                  disableDiv3: true,
                  alEmail: "success",
                  txEmail: "สามารถใช้อีเมล์นี้ได้"
                });
              } else {
                this.setState({
                  disableDiv3: true,
                  alEmail: "danger",
                  txEmail: "อีเมล์นี้มีอยู่แล้ว"
                });
              }
            },
            error => {}
          );
      } else {
        this.setState({
          disableDiv3: true,
          alEmail: "danger",
          txEmail: "อีเมล์ไม่ถูกต้อง"
        });
      }
    } else {
      this.setState({
        disableDiv3: false,
        alEmail: "",
        txEmail: ""
      });
    }

    this.setState({
      email_user: e.target.value
    });
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
  inputfname(e) {
    this.setState({ f_name: e.target.value });
  }
  inputlname(e) {
    this.setState({ l_name: e.target.value });
  }
  inputidc(e) {
    this.setState({ id_card: e.target.value });
  }
  inputaddress(e) {
    this.setState({ address: e.target.value });
  }
  inputd(e) {
    this.setState({ date: e.target.value });
  }
  inputm(e) {
    this.setState({ month: e.target.value });
  }
  inputy(e) {
    this.setState({ year: e.target.value });
  }
  click() {
    var date1 =
      this.state.year + "-" + this.state.month + "-" + this.state.date;
    // //console.log("object", {
    //   f_name_user: this.state.f_name,
    //   l_name_user: this.state.l_name,
    //   id_card: this.state.id_card,
    //   address_user: this.state.address,
    //   date_year: date1,
    //   email_user: this.state.email_user,
    //   type_user: "user",
    //   username: this.state.username,
    //   password: this.state.password,
    //   file: this.state.formData.file
    // });
    if (
      this.state.txEmail === "สามารถใช้อีเมล์นี้ได้" &&
      this.state.txPass === "รหัสผ่านตรงกัน" &&
      this.state.txUser === "สามารถใช้ชื่อนี้ได้"
    ) {
      axios
      .post(
        ROOT_API + "/api/postuser",
        qs.stringify({
          f_name_user: this.state.f_name,
          l_name_user: this.state.l_name,
          id_card: this.state.id_card,
          address_user: this.state.address,
          date_year: date1,
          email_user: this.state.email_user,
          type_user: "user",
          username: this.state.username,
          password: this.state.password,
          file: this.state.formData.file
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(response => {
     
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

        Toast.fire({
          icon: "success",
          title: "สมัครสมาชิกสำเร็จ"
        });
        this.props.history.push("/Signin");
      })
      .catch(error => { });
      // fetch(ROOT_API + "/api/postuser", {
      //   method: "POST", // or 'PUT'
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     f_name_user: this.state.f_name,
      //     l_name_user: this.state.l_name,
      //     id_card: this.state.id_card,
      //     address_user: this.state.address,
      //     date_year: date1,
      //     email_user: this.state.email_user,
      //     type_user: "user",
      //     username: this.state.username,
      //     password: this.state.password,
      //     file: this.state.formData.file
      //   })
      // })
      //   // .then(response => response.json())
      //   .then(response => {
      //     const Toast = Swal.mixin({
      //       toast: true,
      //       position: "top-end",
      //       showConfirmButton: false,
      //       timer: 3000,
      //       timerProgressBar: true,
      //       onOpen: toast => {
      //         toast.addEventListener("mouseenter", Swal.stopTimer);
      //         toast.addEventListener("mouseleave", Swal.resumeTimer);
      //       }
      //     });

      //     Toast.fire({
      //       icon: "success",
      //       title: "สมัครสมาชิกสำเร็จ"
      //     });
      //     this.props.history.push("/Signin");
      //   })
      //   .catch(error => {
      //     //console.error("Error:", error);
      //   });
    } else {
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

      Toast.fire({
        icon: "error",
        title: "ข้อมูลผิดพลาด"
      });
    }
  }
  render() {
    var divStyle = {
      display: this.state.disableDiv ? "block" : "none",
      marginBottom: "1.5rem"
    };
    var divStyle2 = {
      display: this.state.disableDiv2 ? "block" : "none",
      marginBottom: "1.5rem"
    };
    var divStyle3 = {
      display: this.state.disableDiv3 ? "block" : "none",
      marginBottom: "1.5rem"
    };
    // var divStyle4 = {
    //   display: this.state.disableDiv4 ? "block" : "none"
    // };
    // var divStyle5 = {
    //   display: this.state.disableDiv5 ? "block" : "none"
    // };
    // var divStyle6 = {
    //   display: this.state.disableDiv6 ? "block" : "none"
    // };
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          position: "relative",
          marginTop: "-7rem"
        }}
      >
        <Container style={{ paddingTop: "7rem" }}>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.click();
            }}
          >
            <Row>
              <Col sm={6}>
                <div className="csignin csignup">
                  {/* <h2>Sign Up</h2> */}
                  <Row style={{ marginBottom: "2rem" }}>
                    <Col sm={3}  className='imgsignup' style={{padding:'0'}}>
                      <Image
                        src={this.state.imgSrc}
                        // height="100"
                        
                        style={{width:'100%'}}
                        // height="100%"
                        roundedCircle
                      />
                    </Col>
                    <Col>
                      <h4 style={{ color: "#fff", marginBottom: "2rem" }}>
                        Photo Profile :{" "}
                      </h4>
                      {/* <input
                        className="form-control"
                        type="file"
                        name="file"
                        required
                        onChange={this.img.bind(this)}
                      /> */}
                      <div className="form-group">
                        {/* <label for="customFile">Custom File</label> */}
                        <div className="custom-file">
                          <input
                            type="file"
                            className="custom-file-input"
                            // id="customFile"

                            name="file"
                            required
                            onChange={this.img.bind(this)}
                          />
                          <label
                            className="custom-file-label"
                            htmlFor="customFile"
                          >
                            Choose file
                          </label>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <div className="inputbox">
                        <input
                          type="text"
                          required
                          onChange={this.inputfname.bind(this)}
                        />
                        <label htmlFor="username">Fist Name : </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="inputbox">
                        <input
                          type="text"
                          required
                          onChange={this.inputlname.bind(this)}
                        />
                        <label htmlFor="username">Last Name : </label>
                      </div>
                    </Col>
                  </Row>

                  <div className="inputbox">
                    <input
                      type="text"
                      required
                      style={
                        this.state.disableDiv ? { marginBottom: "10px" } : {}
                      }
                      onChange={this.inputUsername.bind(this)}
                    />
                    <label htmlFor="username">Username : </label>
                  </div>
                  <Alert
                    style={divStyle}
                    key="erewr"
                    variant={this.state.alUser}
                  >
                    {this.state.txUser}
                  </Alert>
                  {/* <div className='inputbox'>
                                    <input type="password" required />
                                    <label htmlFor="username">Password : </label>
                                </div> */}
                  <PasswordInput
                    value={this.state.password}
                    placeholder="รหัสผ่าน"
                    handleChanges={this.handlePasswordChanges.bind(this)}
                  />
                  <div className="inputbox">
                    <input
                      type="password"
                      required
                      style={
                        this.state.disableDiv2 ? { marginBottom: "10px" } : {}
                      }
                      onChange={this.checkpasword.bind(this)}
                    />
                    <label htmlFor="username">Password : </label>
                  </div>
                  <Alert
                    style={divStyle2}
                    key="sdfdsaf"
                    variant={this.state.alPass}
                  >
                    {this.state.txPass}
                  </Alert>
                </div>
              </Col>
              <Col>
                <div className="csignin csignup">
                  <div className="inputbox">
                    <input
                      type="text"
                      required
                      onChange={this.inputidc.bind(this)}
                    />
                    <label htmlFor="username">ID Card : </label>
                  </div>
                  <div className="inputbox">
                    <input
                      type="text"
                      required
                      style={
                        this.state.disableDiv3 ? { marginBottom: "10px" } : {}
                      }
                      onChange={this.handleemail_userChange.bind(this)}
                    />
                    <label htmlFor="username">Email : </label>
                  </div>
                  <Alert
                    style={divStyle3}
                    key="fewfw"
                    variant={this.state.alEmail}
                  >
                    {this.state.txEmail}
                  </Alert>
                  <div className="inputbox">
                    <textarea
                      type="text"
                      required
                      onChange={this.inputaddress.bind(this)}
                    />
                    <label htmlFor="username">Address : </label>
                  </div>
                  <h5 style={{ color: "#fff", marginBottom: "1rem" }}>
                    Date of birth :
                  </h5>
                  <Row>
                    <Col>
                      <select
                        className="form-control"
                        style={
                          this.state.disableDiv4 ? { marginBottom: "10px" } : {}
                        }
                        required
                        onChange={this.inputd.bind(this)}
                      >
                        {date}
                      </select>
                    </Col>
                    <Col>
                      <select
                        className="form-control"
                        style={{ marginBottom: "10px" }}
                        required
                        onChange={this.inputm.bind(this)}
                      >
                        {m.map(m => (
                          <option key={"sda" + m.d} value={m.d}>
                            {m.m}
                          </option>
                        ))}
                      </select>
                    </Col>
                    <Col>
                      <select
                        className="form-control"
                        style={{ marginBottom: "10px" }}
                        required
                        onChange={this.inputy.bind(this)}
                      >
                        {y}
                      </select>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "1rem" }}>
                    <Col>
                      <Button
                        className="Btn1"
                        style={{ width: "100%" }}
                        type="submit"
                      >
                        Sign up
                      </Button>
                    </Col>
                  </Row>
                  {/* <Row style={{ marginTop: "1rem" }}>
                    <Col>
                      <Button className="Btn1" style={{ width: "100%" }}>
                        Sign up
                      </Button>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "1rem" }}>
                    <Col>
                      <Button className="Btn1" style={{ width: "100%" }}>
                        Sign up
                      </Button>
                    </Col>
                  </Row> */}
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    );
  }
}
