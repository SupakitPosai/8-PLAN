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
  ListGroup
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
      .then(res => res.json())
      .then(
        result => {},
        error => {}
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
      product: [],
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
      canv: <></>
    };
  }

  componentDidMount = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const ddd = {
      id_product: this.props.match.params.id
    };
    fetch(ROOT_API + "/api/getpaym")
      .then(res => res.json())
      .then(result => {
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
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(response => {
        console.log("ffsd", response.data);
        document.title = response.data[0].name_product_en;
        this.setState({ product: response.data, loading: false });
        // html2canvas(document.body).then(function(canvas) {
        //   document.body.appendChild(canvas);
        // });
      })
      .catch(error => {
        // console.log(error.response.data);
      });
    // fetch(ROOT_API + "/api/product/1", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_product: this.props.match.params.id
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     document.title = data[0].name_product_en;
    //     this.setState({ product: data, loading: false });
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
    fetch(
      ROOT_API + "/api/itempackage?id_product=" + this.props.match.params.id
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({ typepack: result });
          for (let index = 0; index < this.state.typepack.length; index++) {
            fetch(
              ROOT_API +
                "/api/itempackage/1?id_product=" +
                this.props.match.params.id +
                "&id_type_package=" +
                this.state.typepack[index].id_type_package
            )
              .then(res => res.json())
              .then(
                result => {
                  this.setState({ pack: result });
                  for (
                    let index1 = 0;
                    index1 < this.state.pack.length;
                    index1++
                  ) {
                    const pack = this.state.pack;
                    axios
                      .post(
                        ROOT_API + "/api/itempackage/1",
                        qs.stringify({
                          id_product: this.props.match.params.id,
                          id_package: this.state.pack[index1].id_package
                        }),
                        {
                          headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                          }
                        }
                      )
                      .then(response => {
                        this.setState({ item: response.data });

                        for (
                          let index2 = 0;
                          index2 < this.state.item.length;
                          index2++
                        ) {
                          this.setState({
                            itemDiv: (
                              <>
                                {this.state.itemDiv}

                                <div>
                                  <Image
                                    src={
                                      URL_img +
                                      this.state.item[index2].file_item_package
                                    }
                                    style={{
                                      width: "9.5rem",
                                      marginRight: ".5rem"
                                    }}
                                  />
                                </div>
                              </>
                            )
                          });
                          if (
                            this.state.typepack[index].name_type_package_en ===
                            "FREE"
                          ) {
                            this.setState({
                              Free: [
                                ...this.state.Free,
                                {
                                  name: pack[index1].name_package_en,
                                  value: this.state.item[index2]
                                    .file_item_package
                                }
                              ]
                            });
                          }

                          if (index2 === this.state.item.length - 1) {
                            this.setState({
                              packDiv: (
                                <>
                                  {this.state.packDiv}
                                  <Row style={{ marginBottom: "1rem" }}>
                                    <Col sm={3}>
                                      <div
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          backgroundColor: "#F25C05",
                                          marginRight: ".2rem",
                                          color: "#fff",
                                          padding: "1rem"
                                        }}
                                      >
                                        <h5>{pack[index1].name_package_en}</h5>
                                      </div>
                                    </Col>
                                    <div className="caluitem">
                                      {this.state.itemDiv}
                                    </div>
                                  </Row>
                                </>
                              ),
                              itemDiv: <></>
                            });
                          }
                        }

                        if (
                          index1 === pack.length - 1 &&
                          this.state.typepack[index].name_type_package_en !==
                            "FREE"
                        ) {
                          this.setState({
                            typepackDiv: (
                              <>
                                {this.state.typepackDiv}
                                <h3 style={{ fontWeight: "bold" }}>
                                  {
                                    this.state.typepack[index]
                                      .name_type_package_en
                                  }
                                </h3>
                                <hr />
                                {this.state.packDiv}
                              </>
                            ),
                            packDiv: <></>
                          });
                        }
                      })
                      .catch(error => {
                        // console.log(error.response.data);
                      });
                    // fetch(ROOT_API + "/api/itempackage/1", {
                    //   method: "POST", // or 'PUT'
                    //   headers: {
                    //     Accept: "application/json",
                    //     "Content-Type": "application/json"
                    //   },
                    //   body: JSON.stringify({
                    //     id_product: this.props.match.params.id,
                    //     id_package: this.state.pack[index1].id_package
                    //   })
                    // })
                    //   .then(response => response.json())
                    //   .then(data => {

                    //   })
                    //   .catch(error => {
                    //     //console.error("Error:", error);
                    //   });
                  }
                },
                error => {}
              );
          }
        },
        error => {}
      );
    this.setState({
      funcom: setInterval(() => {
        //console.log("object");
        fetch(
          ROOT_API + "/api/getcomment?id_product=" + this.props.match.params.id
        )
          .then(res => res.json())
          .then(
            result => {
              if (result.length !== this.state.comment.length) {
                this.setState({
                  comment: result,
                  commentDiv: []
                });
                for (
                  let comin = 0;
                  comin < this.state.comment.length;
                  comin++
                ) {
                  this.setState({
                    commentDiv: [
                      {
                        id_user: this.state.comment[comin].id_user,
                        id: this.state.comment[comin].id_comment,
                        img_user: this.state.comment[comin].img_user,
                        fullname:
                          this.state.comment[comin].f_name_user +
                          " " +
                          this.state.comment[comin].l_name_user,
                        date_comment: this.state.comment[comin].date_comment,
                        text_comment: this.state.comment[comin].text_comment
                      },
                      ...this.state.commentDiv
                    ]
                  });
                }
              }
            },
            error => {}
          );
      }, 1000)
    });
    fetch(ROOT_API + "/api/getPaymentForm?id_user=" + cookies.get("ID_Login"))
      .then(res => res.json())
      .then(
        result => {
          if (result.length !== 0) {
            this.setState({
              full_name: result[0].full_name,
              address: result[0].address,
              phone_number: result[0].phone_number,
              province: result[0].province,
              district: result[0].district,
              postal_code: result[0].postal_code,
              country: result[0].country,
              paynum: 1
            });
          }
        },
        error => {}
      );
  };
  buy() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    clearInterval(this.state.funcom);
    this.setState({
      disableDiv1: false,
      disableDiv2: true,
      disableDiv3: false
    });
  }
  pay() {
    fetch(ROOT_API + "/api/getPaymentForm?id_user=" + cookies.get("ID_Login"))
      .then(res => res.json())
      .then(
        result => {
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
                  id_payment_method: this.state.idpaymen
                }),
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }
              )
              .then(response => {
                // document.body.scrollTop = 0;
                // document.documentElement.scrollTop = 0;
                this.props.history.push("/Bill/" + response.data.no_order);
                // this.setState({
                //   disableDiv1: false,
                //   disableDiv2: false,
                //   disableDiv3: true
                // });

              })
              .catch(error => {
                // console.log(error.response.data);
              });
            // fetch(ROOT_API + "/api/postorder", {
            //   method: "POST", // or 'PUT'
            //   headers: {
            //     Accept: "application/json",
            //     "Content-Type": "application/json"
            //   },
            //   body: JSON.stringify({
            //     no_order: this.state.orno,
            //     id_product: this.props.match.params.id,
            //     status_order: "รอการชำระเงิน",
            //     id_user: cookies.get("ID_Login"),
            //     id_payment_form: idform,
            //     id_payment_method: this.state.idpaymen
            //   })
            // })
            //   // .then(response => response.json())
            //   .then(response => {
            //     document.body.scrollTop = 0;
            //     document.documentElement.scrollTop = 0;

            //     this.setState({
            //       disableDiv1: false,
            //       disableDiv2: false,
            //       disableDiv3: true
            //     });
            //   })
            //   .catch(error => {
            //     //console.error("Error:", error);
            //   });
          }
        },
        error => {}
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
          text_comment: this.state.textcom
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(response => {
        this.setState({ textcom: "" });
      })
      .catch(error => {
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
            id_user: cookies.get("ID_Login")
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
            title: "บันทึกสำเร็จ"
          });
        })
        .catch(error => {
          // console.log(error.response.data);
        });
      // fetch(ROOT_API + "/api/putPaymentForm", {
      //   method: "POST", // or 'PUT'
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     full_name: this.state.full_name,
      //     address: this.state.address,
      //     phone_number: this.state.phone_number,
      //     province: this.state.province,
      //     district: this.state.district,
      //     postal_code: this.state.postal_code,
      //     country: this.state.country,
      //     id_user: cookies.get("ID_Login")
      //   })
      // })
      //   .then(response => response.json())
      //   .then(data => {
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
      //       title: "บันทึกสำเร็จ"
      //     });
      //   })
      //   .catch(error => {
      //     //console.error("Error:", error);
      //   });
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
            id_user: cookies.get("ID_Login")
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
            title: "บันทึกสำเร็จ"
          });
          this.setState({ paynum: 1 });
        })
        .catch(error => {
          // console.log(error.response.data);
        });
      // fetch(ROOT_API + "/api/postPaymentForm", {
      //   method: "POST", // or 'PUT'
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     full_name: this.state.full_name,
      //     address: this.state.address,
      //     phone_number: this.state.phone_number,
      //     province: this.state.province,
      //     district: this.state.district,
      //     postal_code: this.state.postal_code,
      //     country: this.state.country,
      //     id_user: cookies.get("ID_Login")
      //   })
      // })
      //   .then(response => response.json())
      //   .then(data => {
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
      //       title: "บันทึกสำเร็จ"
      //     });
      //     this.setState({ paynum: 1 });
      //   })
      //   .catch(error => {
      //     //console.error("Error:", error);
      //   });
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
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
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
            {this.state.product.length !== 0 && (
              <div>
                <div style={{ position: "relative" }}>
                  <h1 className="CaroN2">
                    {this.state.product[0].name_product_en}
                  </h1>
                  <div className="CaroP2">
                    {this.state.product[0].price_sale !== 0 && (
                      <h4 className="price2313e" style={{ color: "#000" }}>
                        <NumberFormat
                          value={this.state.product[0].price_product}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Normal Price "}
                        />
                      </h4>
                    )}

                    <div className="CaroP2h1">
                      <h3
                        className="price2313e"
                        style={{ color: "#000", marginRight: "5px" }}
                      >
                        NOW{" "}
                      </h3>
                      <h1
                        className="samdsdasd0"
                        style={{
                          fontWeight: "bold",
                          fontFamily: "monospace",
                          fontSize: "3rem"
                        }}
                      >
                        {this.state.product[0].price_sale !== 0 && (
                          <NumberFormat
                            value={this.state.product[0].price_sale}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"THB "}
                          />
                        )}
                        {this.state.product[0].price_sale === 0 && (
                          <NumberFormat
                            value={this.state.product[0].price_product}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"THB "}
                          />
                        )}
                      </h1>
                    </div>
                  </div>

                  <Image
                    src={URL_img + this.state.product[0].img_product}
                    width="60%"
                    style={{ marginBottom: "1rem" }}
                  />
                  <Image
                    src={URL_img + this.state.product[0].img_plan}
                    width="40%"
                    style={{ marginBottom: "1rem", verticalAlign: "top" }}
                  />
                </div>
              </div>
            )}

            <Container>
              <Row>
                <Col sm={9}>
                  <div className="boxtext" style={divStyle1}></div>
                  <div className="He1">
                    {" "}
                    <h1 className="htext" style={divStyle1}>
                      DRAWING{" "}
                    </h1>
                    <h1 className="textlast" style={divStyle1}>
                      PACKAGE
                    </h1>
                  </div>

                  <Row>
                    <Col style={divStyle1}>
                      <h4 style={{ fontWeight: "bold", color: "#F25C05" }}>
                        FREE
                      </h4>
                    </Col>
                    <Col style={divStyle1}>
                      {this.state.Free.map(free => (
                        <h4
                          key={free}
                          style={{ fontWeight: "bold", marginBottom: "1rem" }}
                        >
                          {free.name}
                        </h4>
                      ))}
                    </Col>
                    <Col style={divStyle1}>
                      {this.state.Free.map(free => (
                        <Button
                          key={free + "tt"}
                          className="Btn1"
                          style={{ marginBottom: ".5rem" }}
                          // href={free.value}
                          // onClick={this.download.bind(this)}
                          href={ROOT_API + "/api/a1d?name_img=" + free.value}
                        >
                          Download Free
                        </Button>
                      ))}
                    </Col>
                  </Row>

                  <div style={divStyle1}>
                    <h2 style={{ fontWeight: "bold", color: "#F25C05" }}>
                      BUY PACKAGE
                    </h2>
                    {this.state.typepackDiv}
                    {this.state.product.length !== 0 && (
                      <>
                        {cookies.get("ID_Login") !== undefined && (
                          <Button
                            className="Btn1"
                            style={{ width: "100%", marginBottom: "2rem" }}
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
                        )}
                      </>
                    )}
                    <div className="boxtext" style={divStyle1}></div>
                    <div className="He1">
                      {" "}
                      <h1 className="htext" style={divStyle1}>
                        REVIEW{" "}
                      </h1>
                      <h1 className="textlast" style={divStyle1}>
                        CUSTOMER
                      </h1>
                    </div>
                    <hr />
                    <div className="card-footer card-comments">
                      {this.state.commentDiv.map(cm => (
                        <div key={cm.id} className="card-comment">
                          {/* User image */}
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
                                {cm.id_user === cookies.get("ID_Login") && (
                                  <Deletecom id={cm.id} />
                                )}
                              </span>
                            </span>
                            {/* /.username */}
                            {cm.text_comment}
                          </div>
                          {/* /.comment-text */}
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
                        SEND
                      </Button>
                    )}
                  </div>
                  {/* //////////////////////////////////////////////////// */}

                  <div id="payment">
                    <h1 style={divStyle2}>PAYMENT FORM</h1>
                    <h3 style={divStyle2}>Customer Information</h3>
                    <form
                      onSubmit={e => {
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
                            onChange={e => {
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
                            onChange={e => {
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
                            onChange={e => {
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
                            onChange={e => {
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
                            onChange={e => {
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
                            onChange={e => {
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
                            onChange={e => {
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
                              left: "50%"
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
                          {this.state.paymen.map(pav => (
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
                </Col>
                <Col sm={3}>
                  {this.state.product.length !== 0 && (
                    <Card style={{ padding: ".5rem" }}>
                      <h3>Order Summary</h3>
                      <h5>
                        {"Subtotal(1 Items)"}
                        {this.state.product[0].price_sale !== 0 && (
                          <NumberFormat
                            value={this.state.product[0].price_sale}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"฿ "}
                          />
                        )}
                        {this.state.product[0].price_sale === 0 && (
                          <NumberFormat
                            value={this.state.product[0].price_product}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"฿ "}
                          />
                        )}
                      </h5>
                      <h5>Discount $ 0</h5>
                      <div style={{ display: "flex" }}>
                        <input type="text" className="form-control" />
                        <Button className="Btn1" style={{ marginRight: "0" }}>
                          OK
                        </Button>
                      </div>
                      <h5>
                        {"Total"}
                        {this.state.product[0].price_sale !== 0 && (
                          <NumberFormat
                            value={this.state.product[0].price_sale}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"฿ "}
                          />
                        )}
                        {this.state.product[0].price_sale === 0 && (
                          <NumberFormat
                            value={this.state.product[0].price_product}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"฿ "}
                          />
                        )}
                      </h5>
                      {cookies.get("ID_Login") !== undefined && (
                        <Button
                          className="Btn1"
                          onClick={() => this.buy()}
                          href="#payment"
                          style={{ marginRight: "0" }}
                        >
                          NEXT TO PAYMENT
                        </Button>
                      )}
                    </Card>
                  )}
                  <div className="chatd">
                    <CardChat id="mm1" />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <Advertisement />
          <OutServices />
          <IssueHome />
          <Footer />
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
            className="chatm Btn1"
            style={{
              position: "fixed",
              bottom: "5vw",
              right: "5vw",
              borderRadius: "2rem",
              fontSize: "2rem"
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
