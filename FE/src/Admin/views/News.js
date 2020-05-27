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
export default function News() {
  const [news, setnews] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [edit, setedit] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [tn, settn] = useState("");
  const [dn, setdn] = useState("");
  const [nameimg, setnameimg] = useState("");
  const [idnew, setidnew] = useState("");
  useEffect(() => {
    document.title = "News";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getNews")
      .then((res) => res.json())
      .then(
        (result) => {
          setnews(result);
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
  const postnews = () => {
    // var data1 = {
    //   file: formData1.file,
    //   title_news: tn,
    //   detail_news: dn
    // };

    axios
      .post(
        ROOT_API + "/api/postnews",
        qs.stringify({
          file: formData1.file,
          title_news: tn,
          detail_news: dn,
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
  const putnews = () => {
    // var data1 = {
    //   file: formData1.file,
    //   title_news: tn,
    //   detail_news: dn,
    //   id_news: idnew,
    //   img_name: nameimg
    // };

    axios
      .post(
        ROOT_API + "/api/putnews",
        qs.stringify({
          file: formData1.file,
          title_news: tn,
          detail_news: dn,
          id_news: idnew,
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
  const delnews = () => {
    axios.get(ROOT_API + "/api/delnews?id_news=" + idnew).then((res) => {
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
            settn("");
            setdn("");
            setnameimg("");
            setidnew("");
            setShow(true);
          }}
        >
          Add Article
        </Button>
      )}
      <DataTable
        idtable="example14"
        data={news}
        tablehead={["Title Article", "Detail Article", "Date Article"]}
        bodytable={["title_news", "detail_news", "date_news"]}
        imgtable="img_news"
        title="Article DataTable"
        onEdit={(event, index) => {
          setedit(true);
          setsrc(URL_img + news[index].img_news);
          settn(news[index].title_news);
          setdn(news[index].detail_news);
          setnameimg(news[index].img_news);
          setidnew(news[index].id_news);
          setShow(true);
        }}
        onDelete={(event, index) => {
          setidnew(news[index].id_news);
          setShow2(true);
        }}
      />
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Article" : "Add Article"}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (edit === true) {
              putnews();
            } else {
              postnews();
            }
          }}
        >
          <Modal.Body>
            <h6>Upload Image Article :</h6>
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
            <h6>Title Article :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={tn}
              onChange={(e) => {
                settn(e.target.value);
              }}
            />

            <h6>Detail Article :</h6>
            <textarea
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem", height: "100px" }}
              value={dn}
              onChange={(e) => {
                setdn(e.target.value);
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
          <Modal.Title>Delete News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow2(false)}>
            No
          </Button>
          <Button variant="primary" onClick={delnews}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
