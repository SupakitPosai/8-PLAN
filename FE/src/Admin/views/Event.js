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
export default function Event() {
  const [event1, setevent1] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [edit, setedit] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [te, sette] = useState("");
  const [de, setde] = useState("");
  const [nameimg, setnameimg] = useState("");
  const [ideve, setideve] = useState("");
  useEffect(() => {
    document.title = "Event";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getEvent")
      .then((res) => res.json())
      .then(
        (result) => {
          setevent1(result);
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
  const postevent = () => {
    // var data1 = {
    //   file: formData1.file,
    //   title_event: te,
    //   detail_event: de
    // };

    axios
      .post(
        ROOT_API + "/api/postevent",
        qs.stringify({
          file: formData1.file,
          title_event: te,
          detail_event: de,
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
  const putevent = () => {
    // var data1 = {
    //   file: formData1.file,
    //   title_event: te,
    //   detail_event: de,
    //   id_event: ideve,
    //   img_name: nameimg
    // };

    axios
      .post(
        ROOT_API + "/api/putevent",
        qs.stringify({
          file: formData1.file,
          title_event: te,
          detail_event: de,
          id_event: ideve,
          img_name: nameimg,
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
  const delevent = () => {
    axios.get(ROOT_API + "/api/delnews?id_event=" + ideve).then((res) => {
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
            setedit(false);
            setsrc(photo);
            sette("");
            setde("");
            setnameimg("");
            setideve("");
            setShow(true);
          }}
        >
          Add Event
        </Button>
      )}
      <DataTable
        idtable="example15"
        data={event1}
        tablehead={["Title Event", "Detail Event"]}
        bodytable={["title_event", "detail_event"]}
        imgtable="img_event"
        title="Event DataTable"
        onEdit={(event, index) => {
          setedit(true);
          setsrc(URL_img + event1[index].img_event);
          sette(event1[index].title_event);
          setde(event1[index].detail_event);
          setnameimg(event1[index].img_event);
          setideve(event1[index].id_event);
          setShow(true);
        }}
        onDelete={(event, index) => {
          setideve(event1[index].id_event);
          setShow2(true);
        }}
      />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Event" : "Add Event"}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (edit === true) {
              putevent();
            } else {
              postevent();
            }
          }}
        >
          <Modal.Body>
            <h6>Upload Image Event :</h6>
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
            <h6>Title Event :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={te}
              onChange={(e) => {
                sette(e.target.value);
              }}
            />

            <h6>Detail Event :</h6>
            <textarea
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem", height: "100px" }}
              value={de}
              onChange={(e) => {
                setde(e.target.value);
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
          <Modal.Title>Delete Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow2(false)}>
            No
          </Button>
          <Button variant="primary" onClick={delevent}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
