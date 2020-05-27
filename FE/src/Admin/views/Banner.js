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
export default function Banner() {
  const [ban, setban] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [select, setselect] = useState("");
  const [name, setname] = useState("");
  const [edit, setedit] = useState(false);
  const [idban, setidban] = useState("");
  const [nameimg, setnameimg] = useState("");
  useEffect(() => {
    document.title = "Banner";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getbanner")
      .then((res) => res.json())
      .then(
        (result) => {
          setban(result);
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
  const postban = () => {
    // var data1 = {
    //   file: formData1.file,
    //   name_banner: name,
    //   page: select
    // };

    axios
      .post(
        ROOT_API + "/api/postbanner",
        qs.stringify({
          file: formData1.file,
          name_banner: name,
          page: select,
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
  const putban = () => {
    // var data1 = {
    //   file: formData1.file,
    //   name_banner: name,
    //   img_name: nameimg,
    //   id_banner: idban
    // };

    axios
      .post(
        ROOT_API + "/api/putbanner",
        qs.stringify({
          file: formData1.file,
          name_banner: name,
          img_name: nameimg,
          id_banner: idban,
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
  const delban = () => {
    axios.get(ROOT_API + "/api/deleteban?id_banner=" + idban).then((res) => {
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
            setShow(true);
            setidban("");
            setname("");
            setsrc(photo);
          }}
        >
          Add Banner
        </Button>
      )}
      <DataTable
        idtable="example12"
        data={ban}
        tablehead={["Name Banner", "Page"]}
        bodytable={["name_banner", "page"]}
        imgtable="img_banner"
        title="Banner DataTable"
        onEdit={(event, index) => {
          setidban(ban[index].id_banner);
          setedit(true);
          setname(ban[index].name_banner);
          setsrc(URL_img + ban[index].img_banner);
          setnameimg(ban[index].img_banner);
          setShow(true);
        }}
        onDelete={(event, index) => {
          setidban(ban[index].id_banner);
          setShow2(true);
        }}
      />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Banner" : "Add Banner"}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (edit === true) {
              putban();
            } else {
              postban();
            }
          }}
        >
          <Modal.Body>
            {edit ? (
              <></>
            ) : (
              <select
                className="form-control"
                required
                style={{ marginBottom: "1rem" }}
                onChange={(e) => {
                  setselect(e.target.value);
                }}
              >
                <option key="2e3e32e3" value="">
                  {"<------ Select Page ------>"}
                </option>
                <option value="About">About</option>
                <option value="Projects">Projects</option>
                <option value="Updates">Updates</option>
              </select>
            )}

            <h6>Upload Image Banner :</h6>
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
            <h6>Name Banner :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={name}
              onChange={(e) => {
                setname(e.target.value);
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
          <Button variant="primary" onClick={delban}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
