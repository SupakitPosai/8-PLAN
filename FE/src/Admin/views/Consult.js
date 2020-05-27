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
export default function Consult() {
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  const [consult, setconsult] = useState([]);
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [src2, setsrc2] = useState(photo);
  const [formData2, setformData2] = useState({ file: "" });
  const [titel, settitel] = useState("");
  const [detail, setdetail] = useState("");
  const [edit, setedit] = useState(false);
  const [name1, setname1] = useState("");
  const [name2, setname2] = useState("");
  const [idcon, setidcon] = useState("");
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
    document.title = "Consult";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getConsultant")
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
  const onChange2 = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setformData2({ file: e.target.result });
    };
    reader.onloadend = (e) => {
      setsrc2([reader.result]);
    };
  };
  const postcon = () => {
    axios
      .post(
        ROOT_API + "/api/postConsultant",
        qs.stringify({
          file: formData1.file,
          file2: formData2.file,
          titel_consultant: titel,
          detail_consultant: detail,
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
        ROOT_API + "/api/putConsultant",
        qs.stringify({
          id_consultant: idcon,
          file: formData1.file,
          file2: formData2.file,
          img_name: name1,
          img_name2: name2,
          titel_consultant: titel,
          detail_consultant: detail,
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
    const html = consult[index].detail_consultant;
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    seteditorState(editorState);
  };
  const delcon = () => {
    axios.get(ROOT_API + "/api/delcon?id_consultant=" + idcon).then((res) => {
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
            setname2("");
            setsrc(photo);
            setsrc2(photo);
            seteditorState(EditorState.createEmpty());
            setshow(true);
          }}
        >
          Add Consultant
        </Button>
      )}
      {consult.length !== 0 && (
        <DataTable
          idtable="example3"
          data={consult}
          tablehead={["Titel Consultant", "Detail Consultant"]}
          title="Consultant DataTable"
          bodytable={["titel_consultant", "detail_consultant"]}
          imgtable="img_consultant"
          imgtable2="img_bg_consultant"
          onEdit={(event, index) => {
            setedit(true);
            setidcon(consult[index].id_consultant);
            settitel(consult[index].titel_consultant);
            setdetail(consult[index].detail_consultant);
            setname1(consult[index].img_consultant);
            setname2(consult[index].img_bg_consultant);
            setsrc(URL_img + consult[index].img_consultant);
            setsrc2(URL_img + consult[index].img_bg_consultant);
            edittt(index);
            setshow(true);
            //   inputedit(index);
            //   handleShow2();
          }}
          onDelete={(event, index) => {
            setidcon(consult[index].id_consultant);
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
          <Modal.Title>
            {edit ? "Edit Consultant" : "Add Consultant"}
          </Modal.Title>
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
            <Row>
              <Col>
                <h6>Upload Image Consultant :</h6>
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
              </Col>
              <Col>
                <h6>Upload Image Background Consultant :</h6>
                <div className="form-group">
                  <div className="custom-file">
                    {edit ? (
                      <input
                        type="file"
                        className="custom-file-input"
                        name="file"
                        onChange={onChange2}
                      />
                    ) : (
                      <input
                        type="file"
                        className="custom-file-input"
                        name="file"
                        required
                        onChange={onChange2}
                      />
                    )}
                    <label className="custom-file-label" htmlFor="customFile">
                      Choose file
                    </label>
                  </div>
                </div>

                <div style={{ textAlign: "center", marginBottom: "1rem" }}>
                  <img src={src2} width="200px" />
                </div>
              </Col>
            </Row>
            <h6>Title Consultant :</h6>
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
            <h6>Detail Consultant :</h6>
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
