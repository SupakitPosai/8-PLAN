import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ROOT_API from "../../config/Aip_Url";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import photo from "../../img/photo.png";
import URL_img from "../../config/URL_img";
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
export default function Company() {
  const [Company, setCompany] = useState([]);
  const [namec, setnamec] = useState("");
  const [idc, setidc] = useState("");
  const [dtt, setdtt] = useState("");
  const [dee, setdee] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.title = "Company";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getCompany")
      .then(res => res.json())
      .then(
        result => {
          setCompany(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
  }, []);
  const putCom = () => {
    // var data1 = {
    //   value_company_th: dtt,
    //   value_company_en: dee,
    //   id_company: idc
    // };

    axios
      .post(
        ROOT_API + "/api/putCompany",
        qs.stringify({
          value_company_th: dtt,
          value_company_en: dee,
          id_company: idc
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        Toast.fire({
          icon: "success",
          title: "Edit Success"
        });
        setShow(false);
        window.location.reload(false);
      });
  };
  return (
    <div style={{ padding: "1rem" }}>
      {Company.length !== 0 && (
        <DataTable
          idtable="example18"
          data={Company}
          tablehead={["Name Company", "Value Company EN", "Value Company TH"]}
          bodytable={["name_company", "value_company_en", "value_company_th"]}
          title="Company DataTable"
          onEdit={(event, index) => {
            setnamec(Company[index].name_company);
            setidc(Company[index].id_company);
            setdtt(Company[index].value_company_th);
            setdee(Company[index].value_company_en);
            setShow(true);
          }}
          onDelete={(event, index) => {}}
        />
      )}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={e => {
            e.preventDefault();
            putCom();
            // if (edit === true) {
            //   putban();
            // } else {
            //   postban();
            // }
          }}
        >
          <Modal.Body>
            {/* <h6>Name Company :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={namec}
              onChange={e => {
                setnamec(e.target.value);
              }}
            /> */}
            <h6>Value Company EN :</h6>
            <textarea
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem", height: "100px" }}
              value={dee}
              onChange={e => {
                setdee(e.target.value);
              }}
            />
            <h6>Value Company TH :</h6>
            <textarea
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem", height: "100px" }}
              value={dtt}
              onChange={e => {
                setdtt(e.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
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
