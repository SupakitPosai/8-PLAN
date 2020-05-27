import React, { useEffect, useState } from "react";
import ROOT_API from "../../config/Aip_Url";
import DataTable from "../components/DataTable";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
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
export default function Inte() {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  const [consult, setconsult] = useState([]);
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [titel, settitel] = useState("");
  const [detail, setdetail] = useState("");
  const [edit, setedit] = useState(false);
  const [name1, setname1] = useState("");
  const [idcon, setidcon] = useState("");
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
  const onChange11 = (editorState) => {
    seteditorState(editorState);
    setdetail(
      draftToHtml(convertToRaw(editorState.getCurrentContent())).toString(
        "html"
      )
    );
    // console.log(
    //   draftToHtml(convertToRaw(editorState.getCurrentContent())).toString(
    //     "html"
    //   )
    // );
  };
  useEffect(() => {
    document.title = "Interior";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getInterior")
      .then((res) => res.json())
      .then(
        (result) => {
          setconsult(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
  }, []);
  const postcon = () => {
    axios
      .post(
        ROOT_API + "/api/postInterior",
        qs.stringify({
          file: formData1.file,
          titel_interior: titel,
          detail_interior: detail,
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
        setshow(false);
        window.location.reload(false);
      })
      .catch((error) => {});
  };
  const putcon = () => {
    axios
      .post(
        ROOT_API + "/api/putInterior",
        qs.stringify({
          id_interior: idcon,
          file: formData1.file,
          img_name: name1,
          titel_interior: titel,
          detail_interior: detail,
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
        setshow(false);
        window.location.reload(false);
      });
  };
  const edittt = (index) => {
    const html = consult[index].detail_interior;
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    seteditorState(editorState);
  };
  const delcon = () => {
    axios
      .get(ROOT_API + "/api/delInterior?id_interior=" + idcon)
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Delete Success",
        });
        setshow2(false);
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
            settitel("");
            setdetail("");
            setname1("");

            setsrc(photo);

            seteditorState(EditorState.createEmpty());
            setshow(true);
          }}
        >
          Add Interior
        </Button>
      )}
      {consult.length !== 0 && (
        <DataTable
          idtable="example3"
          data={consult}
          tablehead={["Titel Interior", "Detail Interior"]}
          title="Interior DataTable"
          bodytable={["titel_interior", "detail_interior"]}
          imgtable="img_interior"
          onEdit={(event, index) => {
            setedit(true);
            setidcon(consult[index].id_interior);
            settitel(consult[index].titel_interior);
            setdetail(consult[index].detail_interior);
            setname1(consult[index].img_interior);

            setsrc(URL_img + consult[index].img_interior);

            edittt(index);
            setshow(true);
            //   inputedit(index);
            //   handleShow2();
          }}
          onDelete={(event, index) => {
            setidcon(consult[index].id_interior);
            setshow2(true);
          }}
        />
      )}
      <Modal
        size="lg"
        show={show}
        onHide={() => {
          setshow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Interior" : "Add Interior"}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (edit) {
              putcon();
            } else {
              postcon();
            }
          }}
        >
          <Modal.Body>
            <h6>Upload Image Interior :</h6>
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

            <h6>Title Interior :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={titel}
              onChange={(e) => {
                settitel(e.target.value);
              }}
            />
            <h6>Detail Interior :</h6>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper tdee"
              editorClassName="demo-editor"
              onEditorStateChange={onChange11}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                setshow(false);
              }}
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <Modal show={show2} onHide={() => setshow2(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete DataTable</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setshow2(false)}>
            No
          </Button>
          <Button variant="primary" onClick={delcon}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
