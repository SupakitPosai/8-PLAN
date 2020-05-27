import React, { useEffect, useContext, useState } from "react";
import Cookies from "universal-cookie";
import Context from "../../store/context";
import IssueHome from "../components/IssueHome";
import OutServices from "../components/OutServices";
import ROOT_API from "../../config/Aip_Url";
import URL_img from "../../config/URL_img";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Modal,
  ListGroup,
} from "react-bootstrap";
import NumberFormat from "react-number-format";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import icon10 from "../../img/icon10.png";
import Swal from "sweetalert2";
const qs = require("querystring");
const cookies = new Cookies();
export default function Cart() {
  const { state, actions } = useContext(Context);
  const [productcart, setproductcart] = useState([]);
  const [totalnum, settotalnum] = useState(0);
  const [show, setshow] = useState(false);
  const [paymen, setpaymen] = useState([]);
  const [selectpayid, setselectpayid] = useState("");
  const [payshow, setpayshow] = useState([]);
  const [full_name, setfull_name] = useState("");
  const [address, setaddress] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [province, setprovince] = useState("");
  const [district, setdistrict] = useState("");
  const [postal_code, setpostal_code] = useState("");
  const [country, setcountry] = useState("");
  const [disbut, setdisbut] = useState({ display: "none" });
  const [paynum, setpaynum] = useState(0);
  const [orno, setorno] = useState(
    Math.floor(1000000000 + Math.random() * 9000000000)
  );
  const [cookies_cart, setcookies_cart] = useState(cookies.get("Cart"));
  const qqq = (ii1) => {
    if (cookies.get("Cart") !== undefined) {
      // setcopro([...cookies.get("Cart")]);
      var aa = [];
      if (ii1 === 0) {
        aa = cookies_cart;
      } else {
        aa = [...cookies.get("Cart")];
      }
      var bb = "";
      for (let index1 = 0; index1 < aa.length; index1++) {
        if (bb === "") {
          bb = aa[index1].id + "," + aa[index1].num;
        } else {
          bb = bb + "," + aa[index1].id + "," + aa[index1].num;
        }

        if (index1 === aa.length - 1) {
          axios
            .post(
              ROOT_API + "/api/getcart?cart=",
              qs.stringify({
                cart: bb,
              }),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }
            )
            .then((response) => {
              var result = response.data;
              setproductcart(result);
              let ii = 0;
              for (let index = 0; index < result.length; index++) {
                if (result[index].price_sale !== 0) {
                  ii = ii + aa[index].num * result[index].price_sale;
                } else {
                  ii = ii + aa[index].num * result[index].price_product;
                }
                if (index === result.length - 1) {
                  settotalnum(ii);
                }
              }
            })
            .catch((error) => {});
        }
      }
    }
  };
  const wwww = () => {
    fetch(ROOT_API + "/api/getPaymentForm?id_user=" + cookies.get("ID_Login"))
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.length !== 0) {
            setfull_name(result[0].full_name);
            setaddress(result[0].address);
            setphone_number(result[0].phone_number);
            setprovince(result[0].province);
            setdistrict(result[0].district);
            setpostal_code(result[0].postal_code);
            setcountry(result[0].country);
            setdisbut({ display: "none" });
            setpaynum(1);
          } else {
            setpaynum(0);
            setdisbut({ display: "block" });
          }
        },
        (error) => {}
      );
  };
  useEffect(() => {
    document.title = "Cart";
    if (cookies.get("Cart") !== undefined) {
      qqq(0);
    }
    fetch(ROOT_API + "/api/getpaym")
      .then((res) => res.json())
      .then((result) => {
        setpaymen(result);
      });
    if (cookies.get("ID_Login") === undefined) {
      setdisbut({ display: "block" });
    } else {
      wwww();
    }
  }, []);
  const setnum = (e) => {
    // console.log("e", Number(e.target.value), "id", e.target.id);
    if (e.target.value !== "") {
      var idd = e.target.id;
      let vaa = Number(e.target.value);
      var aa = [...cookies.get("Cart")];
      let dd = 0;
      for (let index = 0; index < aa.length; index++) {
        if (aa[index].id === idd) {
          aa[index].num = vaa;
        }
        dd = dd + Number(aa[index].num);
        if (index === aa.length - 1) {
          // console.log('dd', dd)

          cookies.set("Cart", aa, { path: "/" });
          actions({
            type: "setState",
            payload: {
              ...state,
              cart: dd,
            },
          });
          qqq(1);
        }
      }
    }
  };
  const wewe_we = (e1) => {
    var gc = state.cart;
    var res = [...cookies.get("Cart")];
    var g1 = [];
    var c1 = 0;
    for (let index = 0; index < res.length; index++) {
      if (res[index].id !== e1) {
        g1.push({ id: res[index].id, num: res[index].num });
        c1 = c1 + res[index].num;
      }
      if (index === res.length - 1) {
        if (g1.length === 0) {
          cookies.remove("Cart", { path: "/" });
        } else {
          cookies.set("Cart", g1, { path: "/" });
        }
        // console.log("g1", g1, c1);
        actions({
          type: "setState",
          payload: {
            ...state,
            cart: c1,
          },
        });
        qqq(1);
      }
    }
    // console.log("111q", gc, res);
  };
  const _dfsf_ = () => {
    if (cookies.get("ID_Login") === undefined) {
      window.location.replace("/Signin?v=Cart");
    } else {
      if (disbut.display === "block") {
        Swal.fire("กรุณาบันทึกที่อยู่จัดส่ง");
      } else {
        if (selectpayid === "") {
          Swal.fire("กรุณาเลือกวิธีการชำระเงิน");
        } else {
          Swal.fire({
            title: "ยืนยันการสั่งซื้อ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then((result) => {
            if (result.value) {
              fetch(
                ROOT_API +
                  "/api/getPaymentForm?id_user=" +
                  cookies.get("ID_Login")
              )
                .then((res) => res.json())
                .then(
                  (result) => {
                    if (result.length !== 0) {
                      var idform = result[0].id_payment_form;
                      var aa = [...cookies.get("Cart")];
                      for (let index = 0; index < aa.length; index++) {
                        if (aa[index].id === productcart[index].id_product) {
                          if (productcart[index].price_sale !== 0) {
                            axios
                              .post(
                                ROOT_API + "/api/postorder",
                                qs.stringify({
                                  no_order: orno,
                                  id_product: aa[index].id,
                                  status_order: "รอการชำระเงิน",
                                  id_user: cookies.get("ID_Login"),
                                  id_payment_form: idform,
                                  id_payment_method: selectpayid,
                                  num_product: aa[index].num,
                                  total_product:
                                    aa[index].num *
                                    productcart[index].price_sale,
                                  total_order: totalnum,
                                }),
                                {
                                  headers: {
                                    "Content-Type":
                                      "application/x-www-form-urlencoded",
                                  },
                                }
                              )
                              .then((response) => {
                                window.location.replace(
                                  "/Bill/" + response.data.no_order
                                );
                              })
                              .catch((error) => {});
                          } else {
                            axios
                              .post(
                                ROOT_API + "/api/postorder",
                                qs.stringify({
                                  no_order: orno,
                                  id_product: aa[index].id,
                                  status_order: "รอการชำระเงิน",
                                  id_user: cookies.get("ID_Login"),
                                  id_payment_form: idform,
                                  id_payment_method: selectpayid,
                                  num_product: aa[index].num,
                                  total_product:
                                    aa[index].num *
                                    productcart[index].price_product,
                                  total_order: totalnum,
                                }),
                                {
                                  headers: {
                                    "Content-Type":
                                      "application/x-www-form-urlencoded",
                                  },
                                }
                              )
                              .then((response) => {
                                window.location.replace(
                                  "/Bill/" + response.data.no_order
                                );
                              })
                              .catch((error) => {});
                          }
                        }

                        if (index === aa.length - 1) {
                          Swal.fire("สั่งซื้อเสร็จสิ้น", "success");
                          actions({
                            type: "setState",
                            payload: {
                              ...state,
                              cart: 0,
                            },
                          });
                          cookies.remove("Cart", { path: "/" });
                        }
                      }
                    }
                  },
                  (error) => {}
                );
            }
          });
        }
      }
    }
  };
  const onclickpayment = (ee) => {
    for (let index = 0; index < paymen.length; index++) {
      if (paymen[index].id_payment_method === ee) {
        setpayshow([paymen[index]]);

        setselectpayid(ee);
        setshow(false);
      }
    }
  };
  const submit = () => {
    if (cookies.get("ID_Login") === undefined) {
      window.location.replace("/Signin?v=Cart");
    } else {
      if (paynum === 1) {
        axios
          .post(
            ROOT_API + "/api/putPaymentForm",
            qs.stringify({
              full_name: full_name,
              address: address,
              phone_number: phone_number,
              province: province,
              district: district,
              postal_code: postal_code,
              country: country,
              id_user: cookies.get("ID_Login"),
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
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
              title: "บันทึกสำเร็จ",
            });
            setdisbut({ display: "none" });
          })
          .catch((error) => {
            // console.log(error.response.data);
          });
      } else {
        axios
          .post(
            ROOT_API + "/api/postPaymentForm",
            qs.stringify({
              full_name: full_name,
              address: address,
              phone_number: phone_number,
              province: province,
              district: district,
              postal_code: postal_code,
              country: country,
              id_user: cookies.get("ID_Login"),
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
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
              title: "บันทึกสำเร็จ",
            });
            setpaynum(1);
            setdisbut({ display: "none" });
          })
          .catch((error) => {
            // console.log(error.response.data);
          });
      }
    }
  };
  return (
    <div>
      <div>
        <Container>
          <Row style={{ backgroundColor: "#fff", paddingTop: "1rem" }}>
            {state.cart === 0 && (
              <Col style={{ marginBottom: "3rem" }}>
                <h3 style={{ color: "#ff9500" }}>My Cart</h3>
                <hr style={{ backgroundColor: "#ff9500" }} />
                <h3
                  style={{
                    color: "#ff9500",
                    textAlign: "center",
                    paddingTop: "2rem",
                  }}
                >
                  ตะกร้ายังว่าง
                </h3>
              </Col>
            )}
            {state.cart !== 0 && (
              <>
                <Col sm={8}>
                  <h3 style={{ color: "#ff9500" }}>ตะกร้าสินค้า</h3>
                  <hr style={{ backgroundColor: "#ff9500" }} />
                  {productcart.map((pc) => (
                    <>
                      <Row>
                        <Col sm={7} style={{ display: "flex" }}>
                          <div style={{ width: "30%", marginRight: "1.5rem" }}>
                            <div className="wwwwqe">
                              <div className="wwczcas">
                                <Image
                                  src={URL_img + pc.img_product}
                                  className="imgprodddd"
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4>{pc.name_product_th}</h4>
                            {pc.price_sale !== 0 && (
                              <>
                                <span
                                  style={{
                                    marginBottom: "0",
                                    color: "#A69D94",
                                    textDecoration: "line-through",
                                    marginRight: ".7rem",
                                  }}
                                >
                                  <NumberFormat
                                    value={pc.price_product}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"฿"}
                                  />
                                </span>
                                <span
                                  style={{
                                    marginBottom: "0",
                                    color: "#ff9500",
                                  }}
                                >
                                  <NumberFormat
                                    value={pc.price_sale}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"฿"}
                                  />
                                </span>
                              </>
                            )}
                            {pc.price_sale === 0 && (
                              <span
                                style={{
                                  marginBottom: "0",
                                  color: "#ff9500",
                                }}
                              >
                                <NumberFormat
                                  value={pc.price_product}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"฿"}
                                />
                              </span>
                            )}
                          </div>
                        </Col>
                        <Col sm={5}>
                          <div style={{ display: "flex" }}>
                            <input
                              type="number"
                              className="form-control"
                              style={{ width: "4rem", marginRight: "1rem" }}
                              min="1"
                              value={pc.num}
                              id={pc.id_product}
                              onChange={setnum}
                            />
                            {pc.price_sale !== 0 && (
                              <h4
                                style={{
                                  color: "#ff9500",
                                  marginRight: "2rem",
                                }}
                              >
                                <NumberFormat
                                  value={pc.num * pc.price_sale}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"฿"}
                                />
                              </h4>
                            )}
                            {pc.price_sale === 0 && (
                              <h4
                                style={{
                                  color: "#ff9500",
                                  marginRight: "2rem",
                                }}
                              >
                                <NumberFormat
                                  value={pc.num * pc.price_product}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"฿"}
                                />
                              </h4>
                            )}
                            <a
                              onClick={() => {
                                wewe_we(pc.id_product);
                              }}
                              href="##"
                              style={{ color: "#ff9500" }}
                            >
                              <IoMdClose />
                            </a>
                          </div>
                        </Col>
                      </Row>
                      <hr style={{ backgroundColor: "#ff9500" }} />
                    </>
                  ))}
                </Col>
                <Col sm={4} style={{ marginBottom: "2rem" }}>
                  <h3 style={{ color: "#ff9500" }}>สรุปรายการสั่งซื้อ</h3>
                  <hr style={{ backgroundColor: "#ff9500" }} />
                  <div style={{ display: "flex" }}>
                    <h3 style={{ color: "#ff9500", width: "50%" }}>ยอดรวม</h3>
                    {/* <div style={{width:'80%'}}></div> */}
                    <h3
                      style={{
                        color: "#ff9500",
                        width: "50%",
                        textAlign: "right",
                      }}
                    >
                      <NumberFormat
                        value={totalnum}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"฿"}
                      />
                    </h3>
                  </div>
                  <Button className="Btn1 dsfdfdf" onClick={_dfsf_}>
                    สั่งซื้อสินค้า
                  </Button>
                  <h2 style={{ color: "#ff9500", marginTop: "1rem" }}>
                    ถ้าหากสินค้าและบริการมีปัญหา ติดต่อเรา
                  </h2>
                  <span style={{ color: "#ff9500", fontSize: "1.3rem" }}>
                    โทร{" "}
                  </span>
                  <span style={{ fontSize: "1.3rem" }}>
                    044-822-232, 095-253-8268
                  </span>
                  <br />
                  <span style={{ color: "#ff9500", fontSize: "1.3rem" }}>
                    Line{" "}
                  </span>
                  <span style={{ fontSize: "1.3rem" }}>soraya4848 (คุณโส)</span>
                  <br />
                  <span style={{ color: "#ff9500", fontSize: "1.3rem" }}>
                    หรือ ติดต่อทาง{" "}
                  </span>
                  <span style={{ fontSize: "1.3rem" }}>อินบล็อค</span>
                </Col>
              </>
            )}
          </Row>
          <Row style={{ backgroundColor: "#fff" }}>
            <Col sm={6}>
              <div id="payment">
                <h3 style={{ color: "#ff9500" }}>ข้อมูลการจัดส่ง</h3>
                <hr style={{ backgroundColor: "#ff9500" }} />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                >
                  <Row>
                    <Col>
                      <h5 style={{ color: "#ff9500" }}>ชื่อ-นามสกุล</h5>
                      <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        value={full_name}
                        onChange={(e) => {
                          setfull_name(e.target.value);
                          setdisbut({ display: "block" });
                        }}
                        required
                      />
                    </Col>
                    <Col>
                      <h5 style={{ color: "#ff9500" }}>ที่อยู่</h5>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={address}
                        onChange={(e) => {
                          setaddress(e.target.value);
                          setdisbut({ display: "block" });
                        }}
                        required
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 style={{ color: "#ff9500" ,marginTop:'1rem' }}>เบอร์โทร</h5>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="phone_number"
                        value={phone_number}
                        onChange={(e) => {
                          setphone_number(e.target.value);
                          setdisbut({ display: "block" });
                        }}
                      />
                    </Col>
                    <Col>
                      <h5 style={{ color: "#ff9500" ,marginTop:'1rem' }}>จังหวัด</h5>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="province"
                        value={province}
                        onChange={(e) => {
                          setprovince(e.target.value);
                          setdisbut({ display: "block" });
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 style={{ color: "#ff9500" ,marginTop:'1rem' }}>อำเภอ</h5>
                      <input
                        type="text"
                        className="form-control"
                        name="district"
                        value={district}
                        onChange={(e) => {
                          setdistrict(e.target.value);
                          setdisbut({ display: "block" });
                        }}
                        required
                      />
                    </Col>
                    <Col>
                      <h5 style={{ color: "#ff9500" ,marginTop:'1rem' }}>รหัสไปรษณีย์</h5>
                      <input
                        type="text"
                        className="form-control"
                        required
                        name="postal_code"
                        value={postal_code}
                        onChange={(e) => {
                          setpostal_code(e.target.value);
                          setdisbut({ display: "block" });
                        }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h5 style={{ color: "#ff9500" ,marginTop:'1rem' }}>ประเทศ</h5>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={country}
                        onChange={(e) => {
                          setcountry(e.target.value);
                          setdisbut({ display: "block" });
                        }}
                        required
                      />
                    </Col>
                    <Col className="nnb">
                      <Button
                        className="Btn1 dsfdfdf"
                        type="submit"
                        style={disbut}
                      >
                        บันทึก
                      </Button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col sm={6}>
              <h3 style={{ color: "#ff9500" }}>เลือกวิธีการชำระเงิน</h3>
              <hr style={{ backgroundColor: "#ff9500" }} />
              <div className="Filter">
                <div className="Filter">
                  {/* <label
                          className="cont"
                          style={{ width: "30%", textAlign: "center" }}
                        >
                          <Image
                            src={icon11}
                            width="65%"
                            style={{ margin: "1rem" }}
                          />
                          Credit/Debit Card
                          <input
                            type="radio"
                            defaultChecked="checked"
                            name="radio"
                            value="All"
                          />
                          <span
                            className="checkmark"
                            style={{
                              top: "unset",
                              marginTop: "1.5rem",
                              marginBottom: "1.5rem",
                              left: "50%"
                            }}
                          />
                        </label> */}

                  <label
                    className="cont"
                    style={{
                      width: "40%",
                      textAlign: "center",
                      color: "#ff9500",
                    }}
                  >
                    <Image
                      src={icon10}
                      width="50%"
                      style={{ margin: "1rem 3rem" }}
                    />
                    โอนเงินผ่านบัญชี
                    <input
                      type="radio"
                      name="radio"
                      value="50-100"
                      onClick={() => {
                        setshow(true);
                      }}
                    />
                    <span
                      className="checkmark"
                      style={{
                        top: "unset",
                        marginTop: "1.5rem",
                        marginBottom: "1.5rem",
                        left: "50%",
                      }}
                    />
                  </label>
                </div>
              </div>
              {payshow.length !== 0 && (
                <Row style={{ margin: "1rem 0 0 0" }}>
                  <Col>
                    <center>
                      <Image
                        width="100px"
                        src={URL_img + payshow[0].img_payment_method}
                      />
                    </center>
                  </Col>
                  <Col> {payshow[0].detail_payment_method}</Col>
                </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <OutServices />
      <IssueHome />
      <Modal centered show={show}>
        <Modal.Header>
          <Modal.Title>บัญชีของเรา : </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {paymen.map((pav) => (
              <ListGroup.Item
                action
                onClick={() => {
                  onclickpayment(pav.id_payment_method);
                }}
              >
                <Row>
                  <Col>
                    <Image
                      width="100px"
                      src={URL_img + pav.img_payment_method}
                    />
                  </Col>
                  <Col> {pav.detail_payment_method}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}
