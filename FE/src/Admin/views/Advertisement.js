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
export default function Advertisement() {
  const [sd, setsd] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [edit, setedit] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [nameAd, setnameAd] = useState("");
  const [UrAd, setUrAd] = useState("");
  const [idad, setidad] = useState("");
  const [nameimg, setnameimg] = useState("");
  useEffect(() => {
    document.title = "Advertisement";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getAdvertisement")
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

  const postad = () => {
    axios
      .post(
        ROOT_API + "/api/postAdvertisement",
        qs.stringify({
          file: formData1.file,
          name_advertisement: nameAd,
          url_advertisement: UrAd,
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
  const putad = () => {
    axios
      .post(
        ROOT_API + "/api/putAdvertisement",
        qs.stringify({
          file: formData1.file,
          id_advertisement: idad,
          img_name: nameimg,
          name_advertisement: nameAd,
          url_advertisement: UrAd,
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

  const delad = () => {
    axios
      .get(ROOT_API + "/api/deleteAdvertisement?id_advertisement=" + idad)
      .then((res) => {
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
            setidad("");
            setedit(false);
            setnameAd("");
            setsrc(photo);
            setnameimg("");
            setUrAd("");
            setShow(true);
          }}
        >
          Add Advertisement
        </Button>
      )}
      <DataTable
        idtable="example12"
        data={sd}
        tablehead={["Name Advertisement", "Url Advertisement"]}
        bodytable={["name_advertisement", "url_advertisement"]}
        imgtable="img_advertisement"
        title="Advertisement DataTable"
        onEdit={(event, index) => {
          setidad(sd[index].id_advertisement);
          setedit(true);
          setnameAd(sd[index].name_advertisement);
          setsrc(URL_img + sd[index].img_advertisement);
          setnameimg(sd[index].img_advertisement);
          setUrAd(sd[index].url_advertisement);
          setShow(true);
        }}
        onDelete={(event, index) => {
          setidad(sd[index].id_advertisement);
          setShow2(true);
        }}
      />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {edit ? "Edit Advertisement" : "Add Advertisement"}
          </Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (edit === true) {
              putad();
            } else {
              postad();
            }
          }}
        >
          <Modal.Body>
            <h6>Upload Image Advertisement :</h6>
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
            <h6>Name Advertisement :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={nameAd}
              onChange={(e) => {
                setnameAd(e.target.value);
              }}
            />
            <h6>Url Advertisement :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={UrAd}
              onChange={(e) => {
                setUrAd(e.target.value);
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
          <Button variant="primary" onClick={delad}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
