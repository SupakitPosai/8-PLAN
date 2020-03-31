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
export default function Videos() {
  const [vi, setvi] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [edit, setedit] = useState(false);
  const [tt, settt] = useState("");
  const [te, sette] = useState("");
  const [uv, setuv] = useState("");
  const [idvideos, setidvideos] = useState("");
  useEffect(() => {
    document.title = "Videos";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getvideo")
      .then(res => res.json())
      .then(
        result => {
          setvi(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
  }, []);
  const postvideos = () => {
    // var data1 = {
    //   title_video_th: tt,
    //   title_video_en: te,
    //   url_video: uv
    // };
    axios
      .post(
        ROOT_API + "/api/postvideos",
        qs.stringify({
          title_video_th: tt,
          title_video_en: te,
          url_video: uv
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
          title: "Add Success"
        });
        setShow(false);
        window.location.reload(false);
      })
      .catch(error => {});
    // axios.post(ROOT_API + "/api/postvideos", data1).then(res => {
    //   Toast.fire({
    //     icon: "success",
    //     title: "Add Success"
    //   });
    //   setShow(false);
    //   window.location.reload(false);
    // });
  };
  const putvideos = () => {
    // var data1 = {
    //   title_video_th: tt,
    //   title_video_en: te,
    //   url_video: uv,
    //   id_video: idvideos
    // };
    axios
      .post(
        ROOT_API + "/api/putvideos",
        qs.stringify({
          title_video_th: tt,
          title_video_en: te,
          url_video: uv,
          id_video: idvideos
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
          title: "Edit Success"
        });
        setShow(false);
        window.location.reload(false);
      })
      .catch(error => {});
    // axios.post(ROOT_API + "/api/putvideos", data1).then(res => {
    //   Toast.fire({
    //     icon: "success",
    //     title: "Edit Success"
    //   });
    //   setShow(false);
    //   window.location.reload(false);
    // });
  };
  const delvideos = () => {
    axios.get(ROOT_API + "/api/delvideos?id_video=" + idvideos).then(res => {
      Toast.fire({
        icon: "success",
        title: "Delete Success"
      });
      setShow2(false);
      window.location.reload(false);
    });
  };
  return (
    <div style={{ padding: "1rem" }}>
      <Button
        style={{ marginBottom: "1rem" }}
        onClick={() => {
          setedit(false);
          settt("");
          sette("");
          setuv("");
          setidvideos("");
          setShow(true);
        }}
      >
        Add Videos
      </Button>
      <DataTable
        idtable="example13"
        data={vi}
        tablehead={["Title Video TH", "Title Video EN", "Date Upload Video"]}
        bodytable={["title_video_th", "title_video_en", "date_upload_video"]}
        title="Videos DataTable"
        videos="url_video"
        onEdit={(event, index) => {
          setedit(true);
          settt(vi[index].title_video_th);
          sette(vi[index].title_video_en);
          setuv(vi[index].url_video);
          setidvideos(vi[index].id_video);

          setShow(true);
        }}
        onDelete={(event, index) => {
          setidvideos(vi[index].id_video);
          setShow2(true);
        }}
      />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Videos" : "Add Videos"}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={e => {
            e.preventDefault();

            if (edit === true) {
              putvideos();
            } else {
              postvideos();
            }
          }}
        >
          <Modal.Body>
            <h6>Title Video TH :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={tt}
              onChange={e => {
                settt(e.target.value);
              }}
            />
            <h6>Title Video EN :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={te}
              onChange={e => {
                sette(e.target.value);
              }}
            />
            <h6>URL Videos :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={uv}
              onChange={e => {
                setuv(e.target.value);
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
          <Modal.Title>Delete Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow2(false)}>
            No
          </Button>
          <Button variant="primary" onClick={delvideos}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
