import React, { useEffect, useContext, useState } from "react";
import Cookies from "universal-cookie";
import Context from "../../store/context";
import "../css/Cart.css";
import { MdNavigateNext, MdShoppingCart } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import ROOT_API from "../../config/Aip_Url";
import { Badge, Image, Container, Row, Col, Button } from "react-bootstrap";
import URL_img from "../../config/URL_img";
import NumberFormat from "react-number-format";
import Swal from "sweetalert2";
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
export default function CartCom(props) {
  const { state, actions } = useContext(Context);
  const [divcart, setdivcart] = useState({ display: "none" });
  const [carttt, setcarttt] = useState({ width: "0" });
  const [productcart, setproductcart] = useState([]);
  const [totalnum, settotalnum] = useState(0);
  const [copro, setcopro] = useState([]);
  const ddd = (value) => {
    actions({
      type: "setState",
      payload: { ...state, cart: value },
    });
  };
  const qqq = async () => {
    if (cookies.get("Cart") !== undefined) {
      // setcopro([...cookies.get("Cart")]);
      var aa = [...cookies.get("Cart")];
      var bb = "";
      for (let index1 = 0; index1 < aa.length; index1++) {
        if (bb === "") {
          bb = aa[index1].id + "," + aa[index1].num;
        } else {
          bb = bb + "," + aa[index1].id + "," + aa[index1].num;
        }
        if (index1 === aa.length - 1) {
          let res = await axios.post(
            ROOT_API + "/api/getcart?cart=",
            qs.stringify({
              cart: bb,
            }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );
          
         var result = res.data;
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
        }
      }
    }
  };
  useEffect(() => {
    if (cookies.get("Cart") !== undefined) {
      var res = cookies.get("Cart");
      var ee = 0;
      for (let index = 0; index < res.length; index++) {
        // ddd(res[index]);
        ee = ee + res[index].num;
        ddd(ee);
      }
      qqq();
    }
  }, []);
  const sds = (value, v2, v3) => {
    qqq();
    setdivcart({ display: value });
    setcarttt({ width: v2, backgroundColor: v3 });
    actions({
      type: "setState",
      payload: {
        ...state,
        oncart: 0,
      },
    });
    // console.log("state.cart", state.cart);
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
        qqq();
      }
    }
    // console.log("111q", gc, res);
  };

  if (state.oncart === 1) {
    qqq();
  }
  return (
    <div>
      {props.bt === "cartm" && (
        <div>
          <a className="B_cart_D" href="/Cart">
            <MdShoppingCart />
          </a>
          {state.cart !== 0 && (
            <Badge className="Badge_cart" pill variant="danger">
              {state.cart}
            </Badge>
          )}
        </div>
      )}
      {props.bt === "cart" && (
        <>
          <div>
            <button
              className="B_cart_D"
              onClick={() => sds("block", "30%", "rgb(47, 47, 47)")}
            >
              <MdShoppingCart />
            </button>
            {state.cart !== 0 && (
              <Badge className="Badge_cart" pill variant="danger">
                {state.cart}
              </Badge>
            )}
          </div>
          <div
            className="di_cart_D"
            onClick={() => sds("none", "0", "rgb(47, 47, 47)")}
            style={divcart}
          ></div>
          <div id="qqqqq" className="cart_D" style={carttt}>
            <div style={{ display: "flex", paddingLeft: "2px" }}>
              <button
                className="B_cart_1"
                onClick={() => sds("none", "0", "rgb(47, 47, 47)")}
              >
                <MdNavigateNext />
              </button>
              <h1
                style={{
                  color: "#ff9500",
                  width: "100%",
                  textAlign: "center",
                  marginTop: "1rem",
                  paddingRight: "3rem",
                }}
              >
                ตะกร้าสินค้า
              </h1>
            </div>
            {state.cart === 0 && (
              <div>
                <h3
                  style={{
                    marginTop: "50%",
                    color: "#ff9500",
                    textAlign: "center",
                  }}
                >
                  ตะกร้ายังว่าง
                </h3>
              </div>
            )}
            {state.cart !== 0 && (
              <div style={{ marginTop: "2rem" }}>
                <Container>
                  {productcart.map((pc, index) => (
                    <Row style={{ width: "110%", marginBottom: "1rem" }}>
                      <Col md={4}>
                        <div className="_imgcart_">
                          <div className="_imgcart_2">
                            <Image
                              className="_imgcart_3"
                              src={URL_img + pc.img_product}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <h5 style={{ color: "#ff9500" }}>
                          {pc.name_product_th}
                        </h5>

                        <p style={{ color: "#ff9500", marginBottom: "8px" }}>
                          จำนวนสินค้า : {pc.num}
                        </p>
                        <h5 style={{ color: "#ff9500" }}>
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
                        </h5>
                      </Col>
                      <Col md={2}>
                        <a
                          onClick={() => {
                            wewe_we(pc.id_product);
                          }}
                          href="##"
                          style={{ color: "#ff9500" }}
                        >
                          <IoMdCloseCircleOutline />
                        </a>
                      </Col>
                    </Row>
                  ))}
                </Container>
                <div
                  style={{
                    position: "absolute",
                    bottom: "30px",
                    width: "100%",
                  }}
                >
                  <Container>
                    <h3 style={{ color: "#ff9500" }}>ยอดรวม</h3>
                    <h3 style={{ color: "#ff9500" }}>
                      <NumberFormat
                        value={totalnum}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"฿"}
                      />
                    </h3>
                  </Container>
                  <hr style={{ backgroundColor: "#ff9500" }} />
                  <Container>
                    <Button
                      className="Btn1"
                      style={{
                        width: "100%",
                        marginRight: "0",
                        fontSize: "1.5rem",
                      }}
                      href="/Cart"
                    >
                      สั่งซื้อสินค้า
                    </Button>
                  </Container>
                </div>
              </div>
            )}
          </div>
          {state.oncart === 1 && (
            <>
              <div
                className="di_cart_D"
                onClick={() => sds("none", "0", "rgb(47, 47, 47)")}
                style={{ display: "block" }}
              ></div>
              <div
                id="qqqqq"
                className="cart_D"
                style={{ width: "30%", backgroundColor: "rgb(47, 47, 47)" }}
              >
                <div style={{ display: "flex", paddingLeft: "2px" }}>
                  <button
                    className="B_cart_1"
                    onClick={() => sds("none", "0", "rgb(47, 47, 47)")}
                  >
                    <MdNavigateNext />
                  </button>
                  <h1
                    style={{
                      color: "#ff9500",
                      width: "100%",
                      textAlign: "center",
                      marginTop: "1rem",
                      paddingRight: "3rem",
                    }}
                  >
                    ตะกร้าสินค้า{" "}
                  </h1>
                </div>
                {state.cart === 0 && (
                  <div>
                    <h3
                      style={{
                        marginTop: "50%",
                        color: "#ff9500",
                        textAlign: "center",
                      }}
                    >
                      ตะกร้ายังว่าง
                    </h3>
                  </div>
                )}
                {state.cart !== 0 && (
                  <div style={{ marginTop: "2rem" }}>
                    <Container>
                      {productcart.map((pc, index) => (
                        <Row style={{ width: "110%", marginBottom: "1rem" }}>
                          <Col md={4}>
                            <div className="_imgcart_">
                              <div className="_imgcart_2">
                                <Image
                                  className="_imgcart_3"
                                  src={URL_img + pc.img_product}
                                />
                              </div>
                            </div>
                          </Col>
                          <Col md={6}>
                            <h5 style={{ color: "#ff9500" }}>
                              {pc.name_product_th}
                            </h5>
                            <p
                              style={{ color: "#ff9500", marginBottom: "8px" }}
                            >
                              จำนวนสินค้า : {pc.num}
                            </p>
                            <h5 style={{ color: "#ff9500" }}>
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
                            </h5>
                          </Col>
                          <Col md={2}>
                            <a
                              onClick={() => {
                                wewe_we(pc.id_product);
                              }}
                              href="##"
                              style={{ color: "#ff9500" }}
                            >
                              <IoMdCloseCircleOutline />
                            </a>
                          </Col>
                        </Row>
                      ))}
                    </Container>
                    <div
                      style={{
                        position: "absolute",
                        bottom: "30px",
                        width: "100%",
                      }}
                    >
                      <Container>
                        <h3 style={{ color: "#ff9500" }}>ยอดรวม</h3>
                        <h3 style={{ color: "#ff9500" }}>
                          <NumberFormat
                            value={totalnum}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"฿"}
                          />
                        </h3>
                      </Container>
                      <hr style={{ backgroundColor: "#ff9500" }} />
                      <Container>
                        <Button
                          className="Btn1"
                          style={{
                            width: "100%",
                            marginRight: "0",
                            fontSize: "1.5rem",
                          }}
                          href="/Cart"
                        >
                          สั่งซื้อสินค้า
                        </Button>
                      </Container>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
