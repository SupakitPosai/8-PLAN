import React, { Component } from "react";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import { MdDelete } from "react-icons/md";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import URL_img from "../../config/URL_img";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Modal,
  ListGroup,
} from "react-bootstrap";
import CardChat from "../components/CardChat";
import "../css/Productdeteail.css";
import LoadingScreen from "react-loading-screen";
import icon10 from "../../img/icon10.png";
// import Carousel from "react-multi-carousel";
import NumberFormat from "react-number-format";
import "react-multi-carousel/lib/styles.css";
// import icon11 from "../../img/icon11.png";
import Swal from "sweetalert2";
import axios from "axios";
import { IoMdChatboxes } from "react-icons/io";
import InnerImageZoom from "react-inner-image-zoom";
import "../css/InZoom.css";
import "../css/InZoom2.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import Buttonbuy from "../components/Buttonbuy";
import CartCom from "../components/CartCom";
import parse from "html-react-parser";

const cookies = new Cookies();
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1
//   }
// };
function Deletecom(props) {
  const deletecom = () => {
    fetch(ROOT_API + "/api/detelecomment?id=" + props.id)
      .then((res) => res.json())
      .then(
        (result) => {},
        (error) => {}
      );
  };
  return (
    <>
      <Button onClick={deletecom}>
        <MdDelete />
      </Button>
    </>
  );
}
const qs = require("querystring");
export default class DetailProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typepack: [],
      pack: [],
      item: [],
      typepackDiv: [],
      packDiv: [],
      itemDiv: [],
      disableDiv1: true,
      disableDiv2: false,
      disableDiv3: false,
      Free: [],
      product: [{ img_gallery1: [] }],
      comment: [],
      commentDiv: [],
      textcom: "",
      funcom: [],
      loading: true,
      full_name: "",
      address: "",
      phone_number: "",
      province: "",
      district: "",
      postal_code: "",
      country: "",
      paynum: 0,
      show: false,
      paymen: [],
      idpaymen: "",
      orno: Math.floor(1000000000 + Math.random() * 9000000000),
      show3: false,
      canv: <></>,
      imgshow: "",
      beee: [],
      excc1: [],
      bestseller: [],
      productCol: "col-sm-10",
    };
  }

  componentDidMount = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    if (window.innerWidth <= 768) {
      this.setState({ productCol: "col-sm-10" });
    }
    const ddd = {
      id_product: this.props.match.params.id,
    };
    fetch(ROOT_API + "/api/getpaym")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ paymen: result });
      });
    // axios({
    //   method: "post",
    //   url: ROOT_API + "/api/product/1",
    //   data: {
    //     id_product: this.props.match.params.id
    //   }
    // })
    axios
      .post(ROOT_API + "/api/product/1", qs.stringify(ddd), {
        headers: {
          //"Content-Type": "application/json"
          //            'Content-Type': 'multipart/form-data'
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log("ffsd", response.data);
        document.title = response.data[0].name_product_en;

        this.setState({ product: response.data });
        this.setState({ imgshow: this.state.product[0].img_product });
        this.setState({
          bestseller: [
            ...this.state.bestseller,
            {
              id_product: this.state.product[0].id_product,
              img_product: this.state.product[0].img_product,
              name_product_th: this.state.product[0].name_product_th,
              name_product_en: this.state.product[0].name_product_en,
              created_product: this.state.product[0].created_product,
              name_gallery: this.state.product[0].name_gallery,
              size_product: this.state.product[0].size_product,
              detail_product: this.state.product[0].detail_product,
              price_product: this.state.product[0].price_product,
              price_sale: this.state.product[0].price_sale,
              ready_to_build: this.state.product[0].ready_to_build,
            },
          ],
          beee: [],
          loading: false,
        });
        // html2canvas(document.body).then(function(canvas) {
        //   document.body.appendChild(canvas);
        // });
      })
      .catch((error) => {
        // console.log(error.response.data);
      });

    // this.setState({
    //   funcom: setInterval(() => {
    //     //console.log("object");
    //     fetch(
    //       ROOT_API + "/api/getcomment?id_product=" + this.props.match.params.id
    //     )
    //       .then((res) => res.json())
    //       .then(
    //         (result) => {
    //           if (result.length !== this.state.comment.length) {
    //             this.setState({
    //               comment: result,
    //               commentDiv: [],
    //             });
    //             for (
    //               let comin = 0;
    //               comin < this.state.comment.length;
    //               comin++
    //             ) {
    //               this.setState({
    //                 commentDiv: [
    //                   {
    //                     id_user: this.state.comment[comin].id_user,
    //                     id: this.state.comment[comin].id_comment,
    //                     img_user: this.state.comment[comin].img_user,
    //                     fullname:
    //                       this.state.comment[comin].f_name_user +
    //                       " " +
    //                       this.state.comment[comin].l_name_user,
    //                     date_comment: this.state.comment[comin].date_comment,
    //                     text_comment: this.state.comment[comin].text_comment,
    //                   },
    //                   ...this.state.commentDiv,
    //                 ],
    //               });
    //             }
    //           }
    //         },
    //         (error) => {}
    //       );
    //   }, 1000),
    // });
    fetch(ROOT_API + "/api/getPaymentForm?id_user=" + cookies.get("ID_Login"))
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.length !== 0) {
            this.setState({
              full_name: result[0].full_name,
              address: result[0].address,
              phone_number: result[0].phone_number,
              province: result[0].province,
              district: result[0].district,
              postal_code: result[0].postal_code,
              country: result[0].country,
              paynum: 1,
            });
          }
        },
        (error) => {}
      );
  };
  buy() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    clearInterval(this.state.funcom);
    this.setState({
      disableDiv1: false,
      disableDiv2: true,
      disableDiv3: false,
    });
  }
  pay() {
    fetch(ROOT_API + "/api/getPaymentForm?id_user=" + cookies.get("ID_Login"))
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.length !== 0) {
            var idform = result[0].id_payment_form;
            axios
              .post(
                ROOT_API + "/api/postorder",
                qs.stringify({
                  no_order: this.state.orno,
                  id_product: this.props.match.params.id,
                  status_order: "รอการชำระเงิน",
                  id_user: cookies.get("ID_Login"),
                  id_payment_form: idform,
                  id_payment_method: this.state.idpaymen,
                }),
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                }
              )
              .then((response) => {
                this.props.history.push("/Bill/" + response.data.no_order);
              })
              .catch((error) => {});
          }
        },
        (error) => {}
      );
  }
  chcom(e) {
    this.setState({ textcom: e.target.value });
  }
  chs() {
    axios
      .post(
        ROOT_API + "/api/postcomment",
        qs.stringify({
          id_product: this.props.match.params.id,
          id_user: cookies.get("ID_Login"),
          text_comment: this.state.textcom,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        this.setState({ textcom: "" });
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
    // fetch(ROOT_API + "/api/postcomment", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_product: this.props.match.params.id,
    //     id_user: cookies.get("ID_Login"),
    //     text_comment: this.state.textcom
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ textcom: "" });
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  }
  componentWillUnmount() {
    clearInterval(this.state.funcom);
  }
  submit() {
    if (this.state.paynum === 1) {
      axios
        .post(
          ROOT_API + "/api/putPaymentForm",
          qs.stringify({
            full_name: this.state.full_name,
            address: this.state.address,
            phone_number: this.state.phone_number,
            province: this.state.province,
            district: this.state.district,
            postal_code: this.state.postal_code,
            country: this.state.country,
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
        })
        .catch((error) => {
          // console.log(error.response.data);
        });
    } else {
      axios
        .post(
          ROOT_API + "/api/postPaymentForm",
          qs.stringify({
            full_name: this.state.full_name,
            address: this.state.address,
            phone_number: this.state.phone_number,
            province: this.state.province,
            district: this.state.district,
            postal_code: this.state.postal_code,
            country: this.state.country,
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
          this.setState({ paynum: 1 });
        })
        .catch((error) => {
          // console.log(error.response.data);
        });
    }
  }
  onclickpayment(va) {
    this.setState({ idpaymen: va, show: false });
  }
  download() {
    // fetch(ROOT_API + "/api/a1d" )
    // // .then(res => res.json())
    // .then(
    //   result => {
    //     console.log('object', result)
    //   },
    //   error => {}
    // );
    axios
      .get(ROOT_API + "/api/a1d")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  render() {
    var divStyle1 = { display: this.state.disableDiv1 ? "block" : "none" };
    var divStyle2 = { display: this.state.disableDiv2 ? "block" : "none" };
    var divStyle3 = { display: this.state.disableDiv3 ? "block" : "none" };

    return (
      <LoadingScreen
        //this.state.loading
        loading={this.state.loading}
        bgColor="#f1f1f1"
        spinnerColor="#F25C05"
        textColor="#676767"
        // logoSrc='/logo.png'
        // text='Here an introduction sentence (Optional)'
      >
        <div>
          <div className="mobeil1">
            <Container
              style={{ backgroundColor: "#fff", paddingTop: "1.5rem" }}
            >
              <Row>
                <Col sm={1}></Col>
                <div className={this.state.productCol}>
                  <div style={divStyle1}>
                    {this.state.product.length !== 0 && (
                      <>
                        <Row>
                          <Col sm={6} style={{ marginBottom: "2rem" }}>
                            <div className="gimgdtp">
                              <div className="gimgdtp2">
                                <InnerImageZoom
                                  className="gimgdtp3"
                                  src={URL_img + this.state.imgshow}
                                  zoomSrc={URL_img + this.state.imgshow}
                                />

                                {/* <Image
                                  className="gimgdtp3"
                                  src={
                                    URL_img + this.state.product[0].img_product
                                  }
                                /> */}
                              </div>
                            </div>
                            <Row style={{ marginTop: "1rem" }}>
                              <Col
                                style={{ display: "flex", overflow: "auto" }}
                              >
                                <div
                                  className="hoverlistimg_q"
                                  style={{ width: "50px", margin: "0 .4rem" }}
                                  onClick={() => {
                                    this.setState({
                                      imgshow: this.state.product[0]
                                        .img_product,
                                    });
                                  }}
                                >
                                  <div className="listimg11">
                                    <div className="listimg12">
                                      <Image
                                        className="listimg13"
                                        src={
                                          URL_img +
                                          this.state.product[0].img_product
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="hoverlistimg_q"
                                  style={{ width: "50px", margin: "0 .4rem" }}
                                  onClick={() => {
                                    this.setState({
                                      imgshow: this.state.product[0].img_plan,
                                    });
                                  }}
                                >
                                  <div className="listimg11">
                                    <div className="listimg12">
                                      <Image
                                        className="listimg13"
                                        src={
                                          URL_img +
                                          this.state.product[0].img_plan
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                {this.state.product[0].img_gallery1.length !==
                                  0 && (
                                  <>
                                    {this.state.product[0].img_gallery1.map(
                                      (img1) => (
                                        <div
                                          className="hoverlistimg_q"
                                          style={{
                                            width: "50px",
                                            margin: "0 .4rem",
                                          }}
                                          onClick={() => {
                                            this.setState({
                                              imgshow: img1.url_img_gallery,
                                            });
                                          }}
                                        >
                                          <div className="listimg11">
                                            <div className="listimg12">
                                              <Image
                                                className="listimg13"
                                                src={
                                                  URL_img + img1.url_img_gallery
                                                }
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      )
                                    )}
                                  </>
                                )}
                              </Col>
                            </Row>
                          </Col>
                          <Col sm={6}>
                            <h2 style={{ color: "#ff9500" }}>
                              {this.state.product[0].name_product_th}
                            </h2>
                            <div
                              style={{
                                // backgroundColor: "#000",
                                color: "#000",
                                width: "fit-content",
                                // padding: "2px 20px",
                                marginBottom: "1rem",
                              }}
                            >
                              {this.state.product[0].price_sale !== 0 && (
                                <>
                                  <span
                                    style={{
                                      marginBottom: "0",
                                      color: "#A69D94",
                                      textDecoration: "line-through",
                                      marginRight: ".7rem",
                                      fontSize: "1.7rem",
                                    }}
                                  >
                                    <NumberFormat
                                      value={
                                        this.state.product[0].price_product
                                      }
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"฿"}
                                    />
                                  </span>
                                  <span
                                    style={{
                                      marginBottom: "0",
                                      fontSize: "1.7rem",
                                    }}
                                  >
                                    <NumberFormat
                                      value={this.state.product[0].price_sale}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      prefix={"฿"}
                                    />
                                  </span>
                                </>
                              )}
                              {this.state.product[0].price_sale === 0 && (
                                <h3
                                  style={{
                                    marginBottom: "0",
                                    fontSize: "1.7rem",
                                  }}
                                >
                                  <NumberFormat
                                    value={this.state.product[0].price_product}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"฿"}
                                  />
                                </h3>
                              )}
                            </div>

                            <Buttonbuy id={this.props.match.params.id} />

                            {/* {cookies.get("ID_Login") !== undefined && (
                              <Button
                                className="Btn1"
                                style={{
                                  width: "100%",
                                  marginBottom: "2rem",
                                }}
                                onClick={() => this.buy()}
                                href="#payment"
                              >
                                {this.state.product[0].price_sale !== 0 && (
                                  <NumberFormat
                                    value={this.state.product[0].price_sale}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Buy Now : "}
                                  />
                                )}
                                {this.state.product[0].price_sale === 0 && (
                                  <NumberFormat
                                    value={this.state.product[0].price_product}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"Buy Now : "}
                                  />
                                )}
                              </Button>
                            )} */}

                            <Accordion>
                              <AccordionItem>
                                <AccordionItemHeading>
                                  <AccordionItemButton>
                                    ข้อมูลการออกแบบ
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  {this.state.bestseller.length !== 0 && (
                                    <>
                                      <Row className="detailcardRow">
                                        <Col>
                                          <p
                                            style={{
                                              marginBottom: "5px",
                                              fontFamily: "RSU_Regular",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            {parse(
                                              this.state.bestseller[0]
                                                .detail_product
                                            )}
                                          </p>
                                        </Col>
                                      </Row>
                                    </>
                                  )}
                                </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                <AccordionItemHeading>
                                  <AccordionItemButton>
                                    เอกสารที่ได้รับ
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  {this.state.bestseller.length !== 0 && (
                                    <>
                                      <Row className="detailcardRow">
                                        <Col>
                                          <p
                                            style={{
                                              marginBottom: "5px",
                                              fontFamily: "RSU_Regular",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            {parse(
                                              this.state.product[0]
                                                .product_document
                                            )}
                                          </p>
                                        </Col>
                                      </Row>
                                    </>
                                  )}
                                </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                <AccordionItemHeading>
                                  <AccordionItemButton>
                                    บริการหลังการขาย
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                  {this.state.bestseller.length !== 0 && (
                                    <>
                                      <Row className="detailcardRow">
                                        <Col>
                                          <p
                                            style={{
                                              marginBottom: "5px",
                                              fontFamily: "RSU_Regular",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            {parse(
                                              this.state.product[0]
                                                .product_service
                                            )}
                                          </p>
                                        </Col>
                                      </Row>
                                    </>
                                  )}
                                </AccordionItemPanel>
                              </AccordionItem>
                            </Accordion>
                          </Col>
                        </Row>
                        {/* <Row style={{ marginTop: "2rem" }}>
                          <Col>
                            {" "}
                            <div>
                              <h1 style={divStyle1}>ความคิดเห็นลูกค้า</h1>
                            </div>
                            <hr />
                            <div className="card-footer card-comments">
                              {this.state.commentDiv.map((cm) => (
                                <div key={cm.id} className="card-comment">
                                  <img
                                    className="img-circle img-sm"
                                    src={URL_img + cm.img_user}
                                    alt="ww"
                                  />
                                  <div className="comment-text">
                                    <span className="username">
                                      {cm.fullname}
                                      <span className="text-muted float-right">
                                        {cm.date_comment}
                                        {cm.id_user ===
                                          cookies.get("ID_Login") && (
                                          <Deletecom id={cm.id} />
                                        )}
                                      </span>
                                    </span>

                                    {cm.text_comment}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <hr />
                            <textarea
                              className="form-control"
                              onChange={this.chcom.bind(this)}
                              value={this.state.textcom}
                            ></textarea>
                            {cookies.get("ID_Login") !== undefined && (
                              <Button
                                className="Btn1"
                                style={{ margin: "2rem 0" }}
                                onClick={this.chs.bind(this)}
                              >
                                ส่ง
                              </Button>
                            )}
                          </Col>
                        </Row> */}
                      </>
                    )}
                    <div style={{ height: "1rem", width: "100%" }}></div>
                  </div>

                  {/* //////////////////////////////////////////////////// */}

                  <div id="payment">
                    <h1 style={divStyle2}>PAYMENT FORM</h1>
                    <h3 style={divStyle2}>Customer Information</h3>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        this.submit();
                      }}
                    >
                      <Row>
                        <Col style={divStyle2}>
                          <h5>Full Name</h5>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.full_name}
                            onChange={(e) => {
                              this.setState({ full_name: e.target.value });
                            }}
                            required
                          />
                        </Col>
                        <Col style={divStyle2}>
                          <h5>Address</h5>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.address}
                            onChange={(e) => {
                              this.setState({ address: e.target.value });
                            }}
                            required
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col style={divStyle2}>
                          <h5>Phone Number</h5>
                          <input
                            type="text"
                            className="form-control"
                            required
                            value={this.state.phone_number}
                            onChange={(e) => {
                              this.setState({ phone_number: e.target.value });
                            }}
                          />
                        </Col>
                        <Col style={divStyle2}>
                          <h5>province</h5>
                          <input
                            type="text"
                            className="form-control"
                            required
                            value={this.state.province}
                            onChange={(e) => {
                              this.setState({ province: e.target.value });
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col style={divStyle2}>
                          <h5>District</h5>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.district}
                            onChange={(e) => {
                              this.setState({ district: e.target.value });
                            }}
                            required
                          />
                        </Col>
                        <Col style={divStyle2}>
                          <h5>Postal Code</h5>
                          <input
                            type="text"
                            className="form-control"
                            required
                            value={this.state.postal_code}
                            onChange={(e) => {
                              this.setState({ postal_code: e.target.value });
                            }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col style={divStyle2}>
                          <h5>Country</h5>
                          <input
                            type="text"
                            className="form-control"
                            value={this.state.country}
                            onChange={(e) => {
                              this.setState({ country: e.target.value });
                            }}
                            required
                          />
                        </Col>
                        <Col style={divStyle2} className="nnb">
                          <Button
                            className="Btn1 dsfdfdf"
                            style={divStyle2}
                            type="submit"
                          >
                            SAVE
                          </Button>
                        </Col>
                      </Row>
                    </form>
                    <h2 style={divStyle2}>Choose your payment method</h2>
                    <div style={divStyle2} className="Filter">
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
                          style={{ width: "30%", textAlign: "center" }}
                        >
                          <Image
                            src={icon10}
                            width="50%"
                            style={{ margin: "1rem 2rem" }}
                          />
                          Mobile / Bank Transfer
                          <input
                            type="radio"
                            name="radio"
                            value="50-100"
                            onClick={() => {
                              this.setState({ show: true });
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
                    {this.state.paynum === 1 && (
                      <>
                        {this.state.idpaymen !== "" && (
                          <Button
                            className="Btn1 pay"
                            style={divStyle2}
                            onClick={() => this.pay()}
                            href="#done"
                          >
                            Pay Now
                          </Button>
                        )}
                      </>
                    )}
                    <Modal centered show={this.state.show}>
                      <Modal.Header>
                        <Modal.Title>Payment Method : </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <ListGroup>
                          {this.state.paymen.map((pav) => (
                            <ListGroup.Item
                              action
                              onClick={() => {
                                this.onclickpayment(pav.id_payment_method);
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

                  {/* //////////////////////////////////////////////////////////////////// */}
                </div>
                <Col sm={1}></Col>
                {/* <Col sm={3} className="chatd">
                  <div className="chatd">
                    <CardChat id="mm1" />
                  </div>
                </Col> */}
              </Row>
            </Container>
          </div>
          {/* <Advertisement /> */}
          <OutServices />
          <IssueHome />
          {/* <Footer /> */}
          <Modal
            centered
            show={this.state.show3}
            onHide={() => {
              this.setState({ show3: false });
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Chat : </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CardChat id="mm2" />
            </Modal.Body>
          </Modal>

          <Button
            className="Btn1"
            style={{
              position: "fixed",
              bottom: "5vw",
              right: "5vw",
              borderRadius: "2rem",
              fontSize: "2rem",
            }}
            onClick={() => {
              this.setState({ show3: true });
            }}
          >
            <IoMdChatboxes />
          </Button>
        </div>
      </LoadingScreen>
    );
  }
}
