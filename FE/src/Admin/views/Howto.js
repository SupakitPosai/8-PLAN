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
export default function Howto() {
  const [sd, setsd] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [edit, setedit] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [namehow, setnamehow] = useState("");
  const [nameimg, setnameimg] = useState("");
  const [idhow, setidhow] = useState("");
  useEffect(() => {
    document.title = "How to order";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getHowTo")
      .then((res) => res.json())
      .then(
        (result) => {
          setsd(result);
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
  const posthow = () => {
    axios
      .post(
        ROOT_API + "/api/postHowTo",
        qs.stringify({
          file: formData1.file,
          name_how_to: namehow,
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
  const puthow = () => {
    axios
      .post(
        ROOT_API + "/api/putHowTo",
        qs.stringify({
          file: formData1.file,
          id_how_to: idhow,
          img_name: nameimg,
          name_how_to: namehow,
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
          title: "Edit Success",
        });
        setShow(false);
        window.location.reload(false);
      });
  };
  const delhow = () => {
    axios.get(ROOT_API + "/api/deleteHowTo?id_how_to=" + idhow).then((res) => {
      Toast.fire({
        icon: "success",
        title: "Delete Success",
      });
      setShow2(false);
      window.location.reload(false);
    });
  };
  return (
    <div style={{ padding: "1rem" }}>
      {cookies.get("Type_Login") !== "admin" && (
        <Button
          style={{ marginBottom: "1rem" }}
          onClick={() => {
            setidhow("");
            setedit(false);
            setnamehow("");
            setsrc(photo);
            setnameimg("");
            setShow(true);
          }}
        >
          Add How to order
        </Button>
      )}
      <DataTable
        idtable="example12"
        data={sd}
        tablehead={["Name How to order"]}
        bodytable={["name_how_to"]}
        imgtable="img_how_to"
        title="How to order DataTable"
        onEdit={(event, index) => {
          setidhow(sd[index].id_how_to);
          setedit(true);
          setnamehow(sd[index].name_how_to);
          setsrc(URL_img + sd[index].img_how_to);
          setnameimg(sd[index].img_how_to);
          setShow(true);
        }}
        onDelete={(event, index) => {
          setidhow(sd[index].id_how_to);
          setShow2(true);
        }}
      />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {edit ? "Edit How to order" : "Add How to order"}
          </Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (edit === true) {
              puthow();
            } else {
              posthow();
            }
          }}
        >
          <Modal.Body>
            <h6>Upload Image How to order :</h6>
            <div className="form-group">
              <div className="custom-file">
                {edit ? (
                  <input
                    type="file"
                    className="custom-file-input"
                    name="file"
                    onChange={onChange}
                  />
                ) : (
                  <input
                    type="file"
                    className="custom-file-input"
                    name="file"
                    required
                    onChange={onChange}
                  />
                )}
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <img src={src} width="200px" />
            </div>
            <h6>Name How to order :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={namehow}
              onChange={(e) => {
                setnamehow(e.target.value);
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
      <Modal show={show2} onHide={() => setShow2(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Banner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow2(false)}>
            No
          </Button>
          <Button variant="primary" onClick={delhow}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
