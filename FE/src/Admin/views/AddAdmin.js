import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ROOT_API from "../../config/Aip_Url";
import { Button, Modal, Alert } from "react-bootstrap";
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
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export default function AddAdmin() {
  const [Admin, setAdmin] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setedit] = useState(false);
  const [divStyle, setdivStyle] = useState({ display: "none" });
  const [alUser, setalUser] = useState("success");
  const [txUser, settxUser] = useState("สามารถใช้ชื่อนี้ได้");
  const [username, setusername] = useState("");
  const [pass, setpass] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [tel, settel] = useState("");
  useEffect(() => {
    fetch(ROOT_API + "/api/getadmin")
      .then((res) => res.json())
      .then(
        (result) => {
          setAdmin(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
  }, []);
  const inputUsername = (e) => {
    var ee = e.target.value;
    fetch(ROOT_API + "/api/getusername?username=" + ee)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.length === 0) {
            setdivStyle({ display: "block" });
            setalUser("success");
            settxUser("สามารถใช้ชื่อนี้ได้");
          } else {
            setdivStyle({ display: "block" });
            setalUser("danger");
            settxUser("ชื่อนี้มีอยู่แล้ว");
          }

          if (ee === "") {
            setdivStyle({ display: "none" });
            setalUser("danger");
            settxUser("ชื่อนี้มีอยู่แล้ว");
          }
        },
        (error) => {}
      );
    setusername(e.target.value);
  };
  const postadmin = () => {
    axios
      .post(
        ROOT_API + "/api/postadmin",
        qs.stringify({
          f_name_user: fname,
          l_name_user: lname,
          email_user: email,
          tel_user: tel,
          username: username,
          password: pass,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Add Success",
        });
        setShow(false);
        window.location.reload(false);
      });
  };
  return (
    <div style={{ padding: "1rem" }}>
      <Button
        style={{ marginBottom: "1rem" }}
        onClick={() => {
          setShow(true);
        }}
      >
        Add Admin
      </Button>
      {Admin.length !== 0 && (
        <DataTable
          idtable="example16"
          data={Admin}
          tablehead={["f name user", "l name user", "email user", "tel user"]}
          bodytable={["f_name_user", "l_name_user", "email_user", "tel_user"]}
          title="Admin DataTable"
        //   onEdit={(event, index) => {}}
        //   onDelete={(event, index) => {}}
        />
      )}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Admin" : "Add Admin"}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postadmin()
            // if (edit === true) {
            //   putstaff();
            // } else {
            //   poststaff();
            // }
          }}
        >
          <Modal.Body>
            <h6>First Name Admin :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={fname}
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />
            <h6>Last Name Admin :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={lname}
              onChange={(e) => {
                setlname(e.target.value);
              }}
            />
            <h6>Email Admin :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <h6>Tel Admin :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={tel}
              onChange={(e) => {
                settel(e.target.value);
              }}
            />
            <h6>Username Admin :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={username}
              onChange={inputUsername}
            />
            <Alert style={divStyle} key="erewr" variant={alUser}>
              {txUser}
            </Alert>
            <h6>Password Admin :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={pass}
              onChange={(e) => {
                setpass(e.target.value);
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
