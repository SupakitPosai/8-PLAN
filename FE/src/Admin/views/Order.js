import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ROOT_API from "../../config/Aip_Url";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
const qs = require("querystring");
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
    fetch(ROOT_API + "/api/getorder")
      .then(res => res.json())
      .then(
        result => {
          setorder(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
  }, []);
  const puttack = () => {
    axios
      .post(
        ROOT_API + "/api/puttackorder",
        qs.stringify({
          id_order: idorder,
          tack_num: tack,
          status_order: "จัดส่งเรียบร้อย"
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
          title: "Update Success"
        });
        setShow(false);
        window.location.reload(false);
      })
      .catch(error => {});
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
      {order.length !== 0 && (
        <DataTable
          idtable="example19"
          data={order}
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
          title="Order DataTable"
          txtup="เพิ่มเลขจัดส่ง"
          update={(event, index) => {
            setidorder(order[index].id_order);
            handleShow();
          }}
        />
      )}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update Tack</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={e => {
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
              onChange={e => {
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
