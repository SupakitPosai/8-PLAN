import React, { Component } from "react";
import HomeAbout from "../components/HomeAbout";
import BestSeller from "../components/BestSeller";
import NewUpdates from "../components/NewUpdates";
import ProductCategories from "../components/ProductCategories";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import "../css/Heardhome.css";
import { FaCircle } from "react-icons/fa";
import Background from "../../img/hh.jpg";
// import h2 from "../../img/h1.png";
import ROOT_API from "../../config/Aip_Url";
import {
  Card,
  OverlayTrigger,
  Tooltip,
  Modal,
  Row,
  Col,
  Image,
  Container,
  Button,
} from "react-bootstrap";
import LogoW from "../../img/logow.png";
import { Link } from "react-router-dom";
import LoadingScreen from "react-loading-screen";
import NumberFormat from "react-number-format";
import URL_img from "../../config/URL_img";
import Dis from "../components/Dis";
import Send from "../components/Send";
import CardChat from "../components/CardChat";
import { IoMdChatboxes } from "react-icons/io";

var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      promotion: [],
      newupdate: [],
      eex: [],
      bestseller: [],
      beee: [],
      new1: [],
      exc1: [],
      neww1: [],
      excc1: [],
      show3: false,
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "หน้าหลัก | 8-Plan";
    fetch(ROOT_API + "/api/getpromotion")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            promotion: result[0],
            loading: false,
          });
        },
        (error) => {}
      );
    // this.neww();
    // this.best();
  }
  // neww() {
  //   fetch(ROOT_API + "/api/newupdate")
  //     .then((res) => res.json())
  //     .then(
  //       (data) => {
  //         this.setState({ new1: data });
  //         for (let index = 0; index < this.state.new1.length; index++) {
  //           //console.log("newupdate1", this.state.new1);
  //           fetch(
  //             ROOT_API +
  //               "/api/excellenceproduct?id_product=" +
  //               this.state.new1[index].id_product
  //           )
  //             .then((res) => res.json())
  //             .then(
  //               (data) => {
  //                 this.setState({ exc1: data });
  //                 for (
  //                   let index1 = 0;
  //                   index1 < this.state.exc1.length;
  //                   index1++
  //                 ) {
  //                   this.setState({
  //                     eex: [
  //                       ...this.state.eex,
  //                       {
  //                         img_excellenceN: this.state.exc1[index1]
  //                           .img_excellence,
  //                         detail_excellence_productN: this.state.exc1[index1]
  //                           .detail_excellence_product,
  //                       },
  //                     ],
  //                   });

  //                   if (index1 === this.state.exc1.length - 1) {
  //                     var m = new Date(this.state.new1[index].created_product);
  //                     var mm = month[m.getMonth()];
  //                     var dd = m.getDate();
  //                     var yy = m.getFullYear();

  //                     this.setState({
  //                       newupdate: [
  //                         ...this.state.newupdate,
  //                         {
  //                           id_productN: this.state.new1[index].id_product,
  //                           img_productN: this.state.new1[index].img_product,
  //                           name_product_thN: this.state.new1[index]
  //                             .name_product_th,
  //                           name_product_enN: this.state.new1[index]
  //                             .name_product_en,
  //                           created_productN: dd + " " + mm + " " + yy,
  //                           name_galleryN: this.state.new1[index].name_gallery,
  //                           size_productN: this.state.new1[index].size_product,
  //                           detail_productN: this.state.new1[index]
  //                             .detail_product,
  //                           excellenceN: this.state.eex,
  //                           price_productN: this.state.new1[index]
  //                             .price_product,
  //                           price_saleN: this.state.new1[index].price_sale,
  //                           ready_to_build: this.state.new1[index]
  //                             .ready_to_build,
  //                         },
  //                       ],
  //                       eex: [],
  //                     });
  //                     //console.log("newupdate", this.state.newupdate);
  //                     if (index === this.state.new1.length - 1) {
  //                       this.best();
  //                     }
  //                   }
  //                 }
  //               },
  //               (error) => {}
  //             );
  //         }
  //       },
  //       (error) => {}
  //     );
  // }
  // best() {
  //   fetch(ROOT_API + "/api/bestseller")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({ neww1: result });
  //         for (let indexx = 0; indexx < this.state.neww1.length; indexx++) {
  //           //console.log("bestseller1", this.state.neww1);
  //           fetch(
  //             ROOT_API +
  //               "/api/excellenceproduct?id_product=" +
  //               this.state.neww1[indexx].id_product
  //           )
  //             .then((res) => res.json())
  //             .then(
  //               (result) => {
  //                 this.setState({ excc1: result });
  //                 for (
  //                   let indexx1 = 0;
  //                   indexx1 < this.state.excc1.length;
  //                   indexx1++
  //                 ) {
  //                   this.setState({
  //                     beee: [
  //                       ...this.state.beee,
  //                       {
  //                         img_excellence: this.state.excc1[indexx1]
  //                           .img_excellence,
  //                         detail_excellence_product: this.state.excc1[indexx1]
  //                           .detail_excellence_product,
  //                       },
  //                     ],
  //                   });

  //                   if (indexx1 === this.state.excc1.length - 1) {
  //                     this.setState({
  //                       bestseller: [
  //                         ...this.state.bestseller,
  //                         {
  //                           id_product: this.state.neww1[indexx].id_product,
  //                           img_product: this.state.neww1[indexx].img_product,
  //                           name_product_th: this.state.neww1[indexx]
  //                             .name_product_th,
  //                           name_product_en: this.state.neww1[indexx]
  //                             .name_product_en,
  //                           created_product: this.state.neww1[indexx]
  //                             .created_product,
  //                           name_gallery: this.state.neww1[indexx].name_gallery,
  //                           size_product: this.state.neww1[indexx].size_product,
  //                           detail_product: this.state.neww1[indexx]
  //                             .detail_product,
  //                           excellence: this.state.beee,
  //                           price_product: this.state.neww1[indexx]
  //                             .price_product,
  //                           price_sale: this.state.neww1[indexx].price_sale,
  //                           ready_to_build: this.state.neww1[indexx]
  //                             .ready_to_build,
  //                         },
  //                       ],
  //                       beee: [],
                       
  //                     });
  //                     //console.log("bestseller", this.state.bestseller);
  //                   }
  //                 }
  //               },
  //               (error) => {}
  //             );
  //         }
  //       },
  //       (error) => {}
  //     );
  // }
  render() {
    //แอดภาพจาก server url
    // var Background = 'http://localhost/E-MART/storage/banner/banner2.jpg'

    return (
      <div id="home">
        <LoadingScreen
          //this.state.loading
          loading={this.state.loading}
          bgColor="#f1f1f1"
          spinnerColor="#F25C05"
          textColor="#676767"
          // logoSrc='/logo.png'
          // text='Here an introduction sentence (Optional)'
        >
          <Container>
            <Row>
              <Col
                className="pimg1"
                style={{
                  backgroundImage: `url(${Background})`,
                  minHeight: "100%",
                }}
              >
                <div style={{ paddingTop: "100px", paddingBottom: "30px" }}>
                  <center>
                    <span className="logotext">EST.</span>
                    <Image
                      className="logoimg"
                      src={LogoW}
                      style={{ width: "200px" }}
                    />
                    <span className="logotext">2020</span>
                  </center>
                </div>

                <h1 className="h1h">เพียงแค่คุณ..คลิก</h1>
                <h2 className="h2h">บ้านที่คุณฝัน..สัมผัสนวัตกรรม</h2>
                <hr className="hrh" />
                <center>
                  <span>
                    <FaCircle
                      className="Fcir"
                      style={{
                        height: "8px",
                        color: "#fff",
                        marginBottom: "3px",
                        marginRight: "1rem",
                      }}
                    />
                  </span>
                  <span className="h5h">ONLINE SUSTAINABLE HOUSE DESIGN</span>
                  <span>
                    <FaCircle
                      className="Fcir"
                      style={{
                        height: "8px",
                        color: "#fff",
                        marginBottom: "3px",
                        marginLeft: ".6rem",
                      }}
                    />
                  </span>
                </center>
                <center>
                  <Button
                    className="Btn1"
                    style={{
                      fontSize: "1.5rem",
                      width: "150px",
                      marginTop: "5rem",
                      marginBottom: "5rem",
                    }}
                    href="/ProductGallery/All"
                  >
                    ไปที่ร้าน
                  </Button>
                </center>

                <p className="hph" style={{ paddingBottom: "1rem" }}>
                  บ้านฉลาดประหยัดพลังงาน | มิตรสิ่งแวดล้อม | ราคาประหยัด |
                  นวัตกรรม Cell Crete
                </p>
              </Col>
            </Row>
          </Container>
          <ProductCategories />
          <HomeAbout />
          <Dis />
          <Send />
          <OutServices />
          <IssueHome />
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
        </LoadingScreen>
      </div>
    );
  }
}
