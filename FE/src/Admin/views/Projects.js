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
export default function Projects() {
  const [project, setproject] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [edit, setedit] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [namept, setnamept] = useState("");
  const [namepe, setnamepe] = useState("");
  const [nameot, setnameot] = useState("");
  const [nameoe, setnameoe] = useState("");
  const [lot, setlot] = useState("");
  const [loe, setloe] = useState("");
  const [cost, setcost] = useState("");
  const [sta, setsta] = useState("");
  const [idproject, setidproject] = useState("");
  const [nameimg, setnameimg] = useState("");

  useEffect(() => {
    document.title = "Projects";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/projects")
      .then(res => res.json())
      .then(
        result => {
          setproject(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
  }, []);
  const onChange = e => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = e => {
      setformData1({ file: e.target.result });
    };
    reader.onloadend = e => {
      setsrc([reader.result]);
    };
  };
  const postprojects = () => {
    // var data1 = {
    //   file: formData1.file,
    //   name_projects_th: namept,
    //   name_projects_en: namepe,
    //   name_owner_th: nameot,
    //   name_owner_en: nameoe,
    //   location_th: lot,
    //   location_en: loe,
    //   construction_cost: cost,
    //   status_projects: sta
    // };

    axios
      .post(
        ROOT_API + "/api/postprojects",
        qs.stringify({
          file: formData1.file,
          name_projects_th: namept,
          name_projects_en: namepe,
          name_owner_th: nameot,
          name_owner_en: nameoe,
          location_th: lot,
          location_en: loe,
          construction_cost: cost,
          status_projects: sta
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        Toast.fire({
          icon: "success",
          title: "Add Success"
        });
        setShow(false);
        window.location.reload(false);
      });
  };
  const putprojects = () => {
    // var data1 = {
    //   file: formData1.file,
    //   name_projects_th: namept,
    //   name_projects_en: namepe,
    //   name_owner_th: nameot,
    //   name_owner_en: nameoe,
    //   location_th: lot,
    //   location_en: loe,
    //   construction_cost: cost,
    //   status_projects: sta,
    //   id_projects: idproject,
    //   img_name: nameimg
    // };

    axios
      .post(
        ROOT_API + "/api/putprojects",
        qs.stringify({
          file: formData1.file,
          name_projects_th: namept,
          name_projects_en: namepe,
          name_owner_th: nameot,
          name_owner_en: nameoe,
          location_th: lot,
          location_en: loe,
          construction_cost: cost,
          status_projects: sta,
          id_projects: idproject,
          img_name: nameimg
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        Toast.fire({
          icon: "success",
          title: "Edit Success"
        });
        setShow(false);
        window.location.reload(false);
      });
  };
  const delprojects = () => {
    axios
      .get(ROOT_API + "/api/delprojects?id_projects=" + idproject)
      .then(res => {
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
          setsrc(photo);
          setnamept("");
          setnamepe("");
          setnameot("");
          setnameoe("");
          setlot("");
          setloe("");
          setcost("");
          setsta("");
          setedit(false);
          setShow(true);
        }}
      >
        Add Projects
      </Button>
      {project.length !== 0 && (
        <DataTable
          idtable="example17"
          data={project}
          tablehead={[
            "Name Projects TH",
            "Name Projects EN",
            "Name Owner TH",
            "Name Owner EN",
            "Location TH",
            "Location EN",
            "Construction Cost",
            "Status Projects"
          ]}
          bodytable={[
            "name_projects_th",
            "name_projects_en",
            "name_owner_th",
            "name_owner_en",
            "location_th",
            "location_en",
            "construction_cost",
            "status_projects"
          ]}
          imgtable="img_projects"
          title="Projects DataTable"
          onEdit={(event, index) => {
            setsrc(URL_img + project[index].img_projects);
            setnameimg(project[index].img_projects);
            setnamept(project[index].name_projects_th);
            setnamepe(project[index].name_projects_en);
            setnameot(project[index].name_owner_th);
            setnameoe(project[index].name_owner_en);
            setlot(project[index].location_th);
            setloe(project[index].location_en);
            setcost(project[index].construction_cost);
            setsta(project[index].status_projects);
            setidproject(project[index].id_projects);
            setedit(true);
            setShow(true);
          }}
          onDelete={(event, index) => {
            setidproject(project[index].id_projects);
            setShow2(true);
          }}
        />
      )}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Projects" : "Add Projects"}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={e => {
            e.preventDefault();

            if (edit === true) {
              putprojects();
            } else {
              postprojects();
            }
          }}
        >
          <Modal.Body>
            <h6>Upload Image Projects :</h6>
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
            <h6>Name Projects TH :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={namept}
              onChange={e => {
                setnamept(e.target.value);
              }}
            />

            <h6>Name Projects EN :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={namepe}
              onChange={e => {
                setnamepe(e.target.value);
              }}
            />
            <h6>Name Owner TH :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={nameot}
              onChange={e => {
                setnameot(e.target.value);
              }}
            />
            <h6>Name Owner EN :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={nameoe}
              onChange={e => {
                setnameoe(e.target.value);
              }}
            />
            <h6>Location TH :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={lot}
              onChange={e => {
                setlot(e.target.value);
              }}
            />
            <h6>Location EN :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={loe}
              onChange={e => {
                setloe(e.target.value);
              }}
            />
            <h6>Construction Cost :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={cost}
              onChange={e => {
                setcost(e.target.value);
              }}
            />
            <h6>Status Projects :</h6>
            {edit ? (
              <select
                className="form-control"
                required
                style={{ marginBottom: "1rem" }}
                onChange={e => {
                  setsta(e.target.value);
                }}
              >
                <option key="2e3e32e3" value="">
                  {"<------ Select Status ------>"}
                </option>
                {sta === "on_going" && (
                  <>
                    <option selected value="on_going">
                      On Going
                    </option>
                    <option value="completed">Completed</option>
                  </>
                )}
                {sta === "completed" && (
                  <>
                    <option value="on_going">On Going</option>
                    <option selected value="completed">
                      Completed
                    </option>
                  </>
                )}
              </select>
            ) : (
              <select
                className="form-control"
                required
                style={{ marginBottom: "1rem" }}
                onChange={e => {
                  setsta(e.target.value);
                }}
              >
                <option key="2e3e32e3" value="">
                  {"<------ Select Status ------>"}
                </option>
                <option value="on_going">On Going</option>
                <option value="completed">Completed</option>
              </select>
            )}
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
          <Button variant="primary" onClick={delprojects}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
