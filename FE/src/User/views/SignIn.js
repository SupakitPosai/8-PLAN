import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Spinner } from "react-bootstrap";
import "../css/Signin.css";
import Background from "../../img/nav.jpg";
import ROOT_API from "../../config/Aip_Url";
import Swal from "sweetalert2";
import Context from "../../store/context";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const qs = require("querystring");
const SignIn = (props) => {
  const { state, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [smShow, setSmShow] = useState(false);
  const inputusername = (e) => {
    setUsername(e.target.value);
  };
  const inputpassword = (e) => {
    setPassword(e.target.value);
  };
  const posts = (ee) => {
    axios
      .post(
        ROOT_API + "/api/postStatistics",
        qs.stringify({
          id_user: ee,
          status_statistics: "Login",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {})
      .catch((error) => {});
  };
  const click = () => {
    setSmShow(true);
    fetch(
      ROOT_API + "/api/userlogin?username=" + username + "&password=" + password
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setSmShow(false);
          if (result.length === 0) {
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

            Toast.fire({
              icon: "error",
              title: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
            });
          } else {
            //console.log("object", result[0].type_user);
            if (result[0].type_user === "user") {
              actions({
                type: "setState",
                payload: { ...state, type: "user" },
              });
              cookies.set("Type_Login", "user", { path: "/" });
              cookies.set("ID_Login", result[0].id_user, { path: "/" });
              cookies.set("F_name", result[0].f_name_user, { path: "/" });
              cookies.set("L_name", result[0].l_name_user, { path: "/" });
              cookies.set("Img", result[0].img_user, { path: "/" });
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

              Toast.fire({
                icon: "success",
                title: "เข้าสู่ระบบสำเร็จ",
              });
              const search = props.location.search; // could be '?foo=bar'
              const params = new URLSearchParams(search);
              const foo = params.get("v"); // bar

              if (foo !== null) {
                props.history.push("/" + foo);
              } else {
                props.history.push("/");
              }
            } else {
              posts(result[0].id_user);
              actions({
                type: "setState",
                payload: { ...state, type: "admin" },
              });
              cookies.set("ID_Login", result[0].id_user, { path: "/" });
              cookies.set("Type_Login", result[0].type_user, { path: "/" });

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

              Toast.fire({
                icon: "success",
                title: "เข้าสู่ระบบสำเร็จ",
              });
              props.history.push("/Admin");
            }
          }
        },
        (error) => {}
      );
  };
  useEffect(() => {
    document.title = "Sign In";
  }, []);
  return (
    <div
      style={{
        position: "relative",
        marginTop: "-7rem",
      }}
    >
      <Container
        style={{
          paddingTop: "7rem",
          backgroundImage: `url(${Background})`,
          height: "100vh",
        }}
      >
        <Row>
          <Col style={{ textAlign: "-webkit-center" }}>
            <div className="csignin signinm">
              <h2>เข้าสู่ระบบ</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  click();
                }}
              >
                <div className="inputbox">
                  <input type="text" required onChange={inputusername} />
                  <label htmlFor="username">ชื่อผู้ใช้ : </label>
                </div>
                <div className="inputbox">
                  <input type="password" required onChange={inputpassword} />
                  <label htmlFor="username">รหัสผ่าน : </label>
                </div>
                <div style={{ display: "flex" }}>
                  <Button
                    href="/Signup"
                    style={{
                      width: "50%",
                      backgroundColor: "#fff",
                      color: "#000",
                      // marginTop: "1rem",
                    }}
                    className="Btn1"
                  >
                    สมัครสมาชิก
                  </Button>
                  <Button
                    style={{ width: "50%" }}
                    type="submit"
                    className="Btn1"
                  >
                    เข้าสู่ระบบ
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal
        // smShow

        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Body style={{ textAlign: "center" }}>
          <Spinner
            animation="border"
            role="status"
            style={{
              border: ".8rem solid #F25C05",
              width: "7rem",
              height: "7rem",
              marginBottom: "2rem",
              borderRightColor: "transparent",
            }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
          <h5>Loading...</h5>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default SignIn;
