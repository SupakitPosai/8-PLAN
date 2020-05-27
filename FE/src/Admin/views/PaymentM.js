import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ROOT_API from "../../config/Aip_Url";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import photo from "../../img/photo.png";
import URL_img from "../../config/URL_img";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
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
export default function PaymentM() {
  const [pay, setpay] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [detail, setdetail] = useState("");
  const [idpay, setidpay] = useState("");
  const [nameimg, setnameimg] = useState("");
  const [edit, setedit] = useState(false);
  useEffect(() => {
    document.title = "Payment Method";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getpaym")
      .then((res) => res.json())
      .then(
        (result) => {
          setpay(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
  }, []);
  const onChange = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setformData1({ file: e.target.result });
    };
    reader.onloadend = (e) => {
      setsrc([reader.result]);
    };
  };
  const postpay = () => {
    axios
      .post(
        ROOT_API + "/api/postpay",
        qs.stringify({
          detail_payment_method: detail,
          file: formData1.file,
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
          title: "Add Success",
        });
        setShow(false);
        window.location.reload(false);
      })
      .catch((error) => {});
    // fetch(ROOT_API + "/api/postpay", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     detail_payment_method: detail,
    //     file: formData1.file
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Add Success"
    //     });
    //     setShow(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const putpay = () => {
    axios
      .post(
        ROOT_API + "/api/putpay",
        qs.stringify({
          detail_payment_method: detail,
          file: formData1.file,
          img_name: nameimg,
          id_payment_method: idpay,
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
          title: "Edit Success",
        });
        setShow(false);
        window.location.reload(false);
      })
      .catch((error) => {});
    // fetch(ROOT_API + "/api/putpay", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     detail_payment_method: detail,
    //     file: formData1.file,
    //     img_name: nameimg,
    //     id_payment_method: idpay
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Edit Success"
    //     });
    //     setShow(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const delpay = () => {
    fetch(ROOT_API + "/api/delpay?id_payment_method=" + idpay)
      .then((res) => res.json())
      .then(
        (result) => {
          Toast.fire({
            icon: "success",
            title: "Item deleted successfully.",
          });
          setShow2(false);
          window.location.reload(false);
        },
        (error) => {}
      );
  };
  return (
    <div style={{ padding: "1rem" }}>
      {cookies.get("Type_Login") !== "admin" && (
        <Button
          style={{ marginBottom: "1rem" }}
          onClick={() => {
            setShow(true);
          }}
        >
          Add Payment Method
        </Button>
      )}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {edit ? "Edit Payment Method" : "Add Payment Method"}
          </Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (edit === false) {
              postpay();
            } else {
              putpay();
            }
          }}
        >
          <Modal.Body>
            <h6>Detail Payment Method :</h6>
            <textarea
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={detail}
              onChange={(e) => {
                setdetail(e.target.value);
              }}
            />

            <h6>Upload Image :</h6>
            {edit ? (
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    name="file"
                    onChange={onChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose file
                  </label>
                </div>
              </div>
            ) : (
              <div className="form-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    name="file"
                    required
                    onChange={onChange}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose file
                  </label>
                </div>
              </div>
            )}

            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <img src={src} width="200px" />
            </div>
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
      <Modal show={show2} onHide={() => setShow2(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Package </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow2(false)}>
            No
          </Button>
          <Button variant="primary" onClick={delpay}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

      <DataTable
        idtable="example11"
        data={pay}
        tablehead={["Detail Payment Method"]}
        bodytable={["detail_payment_method"]}
        imgtable="img_payment_method"
        title="Payment Method DataTable"
        onEdit={(event, index) => {
          setidpay(pay[index].id_payment_method);
          setdetail(pay[index].detail_payment_method);
          setsrc(URL_img + pay[index].img_payment_method);
          setnameimg(pay[index].img_payment_method);
          setedit(true);
          setShow(true);
        }}
        onDelete={(event, index) => {
          setidpay(pay[index].id_payment_method);
          setShow2(true);
        }}
      />
    </div>
  );
}
