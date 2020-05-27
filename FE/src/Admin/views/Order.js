import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ROOT_API from "../../config/Aip_Url";
import {
  Button,
  Modal,
  Row,
  Col,
  Container,
  Card,
  Image,
} from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import NumberFormat from "react-number-format";
import URL_img from "../../config/URL_img";
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
export default function Order() {
  const [order, setorder] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [idorder, setidorder] = useState("");
  const [tack, settack] = useState("");
  useEffect(() => {
    document.title = "Order";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getorderA")
      .then((res) => res.json())
      .then(
        (result) => {
          setorder(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
  }, []);
  const puttack = () => {
    axios
      .post(
        ROOT_API + "/api/puttackorder",
        qs.stringify({
          no_order: idorder,
          tack_num: tack,
          status_order: "จัดส่งเรียบร้อย",
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
          title: "Update Success",
        });
        setShow(false);
        window.location.reload(false);
      })
      .catch((error) => {});
    // fetch(ROOT_API + "/api/puttackorder", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_order: idorder,
    //     tack_num: tack,
    //     status_order: "จัดส่งเรียบร้อย"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Update Success"
    //     });
    //     setShow(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  return (
    <div style={{ padding: "1rem" }}>
      <Container>
        <Row>
          {order.map((mo) => (
            <Col sm={6}>
              <Card style={{ padding: "1rem" }}>
                <Row>
                  <Col sm={8}>
                    <h3>No: {mo.no_order}</h3>
                    <hr />
                    {mo.item.map((it) => (
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "1rem" }}>
                          <Image src={URL_img + it.img_product} width="100px" />
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
                    {mo.item[0].img_order !== null && (
                      <>
                        {mo.item[0].tack_num === null && (
                          <Button
                            id={mo.no_order}
                            className="Btn1 dsfdfdf"
                            style={{ marginBottom: "1rem" }}
                            onClick={(e) => {
                              setidorder(e.target.id);
                              setShow(true);
                            }}
                          >
                            เพิ่มเลขไปรษณีย์
                          </Button>
                        )}
                        {mo.item[0].date_payment !== null && (
                          <h5 style={{ marginBottom: "1rem" }}>
                            เวลาชำระเงิน:{" " + mo.item[0].date_payment}
                          </h5>
                        )}
                        <Image
                          style={{ marginBottom: "1rem" }}
                          width="100%"
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
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Tack</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            puttack();
          }}
        >
          <Modal.Body>
            <h6>Tack :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={tack}
              onChange={(e) => {
                settack(e.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
