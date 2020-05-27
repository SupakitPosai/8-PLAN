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
export default function Staff() {
  const [staff, setstaff] = useState([]);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [edit, setedit] = useState(false);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [fnameth, setfnameth] = useState("");
  const [fnameen, setfnameen] = useState("");
  const [lnameth, setlnameth] = useState("");
  const [lnameen, setlnameen] = useState("");
  const [resuth, setresuth] = useState("");
  const [resuen, setresuen] = useState("");
  const [posi, setposi] = useState("");
  const [nameimg, setnameimg] = useState("");
  const [idstaff, setidstaff] = useState("");
  const [sta, setsta] = useState("");
  useEffect(() => {
    document.title = "Staff";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getstaffall")
      .then((res) => res.json())
      .then(
        (result) => {
          setstaff(result);
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
  const poststaff = () => {
    // var data1 = {
    //   file: formData1.file,
    //   first_name_staff_th: fnameth,
    //   first_name_staff_en: fnameen,
    //   last_name_staff_th: lnameth,
    //   last_name_staff_en: lnameen,
    //   position_staff: posi,
    //   resume_staff_th: resuth,
    //   resume_staff_en: resuen
    // };

    axios
      .post(
        ROOT_API + "/api/poststaff",
        qs.stringify({
          file: formData1.file,
          first_name_staff_th: fnameth,
          first_name_staff_en: fnameen,
          last_name_staff_th: lnameth,
          last_name_staff_en: lnameen,
          position_staff: posi,
          resume_staff_th: resuth,
          resume_staff_en: resuen,
          status_staff: sta,
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
  const putstaff = () => {
    // var data1 = {
    //   file: formData1.file,
    //   first_name_staff_th: fnameth,
    //   first_name_staff_en: fnameen,
    //   last_name_staff_th: lnameth,
    //   last_name_staff_en: lnameen,
    //   position_staff: posi,
    //   resume_staff_th: resuth,
    //   resume_staff_en: resuen,
    //   id_staff: idstaff,
    //   img_name: nameimg
    // };

    axios
      .post(
        ROOT_API + "/api/putstaff",
        qs.stringify({
          file: formData1.file,
          first_name_staff_th: fnameth,
          first_name_staff_en: fnameen,
          last_name_staff_th: lnameth,
          last_name_staff_en: lnameen,
          position_staff: posi,
          resume_staff_th: resuth,
          resume_staff_en: resuen,
          id_staff: idstaff,
          status_staff: sta,
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
  const delstaff = () => {
    axios.get(ROOT_API + "/api/delstaff?id_staff=" + idstaff).then((res) => {
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
            setidstaff("");
            setfnameen("");
            setfnameth("");
            setlnameen("");
            setlnameth("");
            setposi("");
            setresuen("");
            setresuth("");
            setedit(false);
            setsta("");
            setsrc(photo);
          }}
        >
          Add Staff
        </Button>
      )}
      {staff.length !== 0 && (
        <DataTable
          idtable="example16"
          data={staff}
          tablehead={[
            "First Name Staff TH",
            "First Name Staff EN",
            "last Name Staff TH",
            "last Name Staff EN",
            "Position Staff",
            "Resume Staff TH",
            "Resume Staff EN",
            "Status Staff",
          ]}
          bodytable={[
            "first_name_staff_th",
            "first_name_staff_en",
            "last_name_staff_th",
            "last_name_staff_en",
            "position_staff",
            "resume_staff_th",
            "resume_staff_en",
            "status_staff",
          ]}
          imgtable="img_staff"
          title="Staff DataTable"
          onEdit={(event, index) => {
            setidstaff(staff[index].id_staff);
            setfnameen(staff[index].first_name_staff_en);
            setfnameth(staff[index].first_name_staff_th);
            setlnameen(staff[index].last_name_staff_en);
            setlnameth(staff[index].last_name_staff_th);
            setposi(staff[index].position_staff);
            setresuen(staff[index].resume_staff_en);
            setresuth(staff[index].resume_staff_th);
            setsrc(URL_img + staff[index].img_staff);
            setnameimg(staff[index].img_staff);
            setsta(staff[index].status_staff);
            setedit(true);
            setShow(true);
          }}
          onDelete={(event, index) => {
            setidstaff(staff[index].id_staff);
            setShow2(true);
          }}
        />
      )}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{edit ? "Edit Staff" : "Add Staff"}</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (edit === true) {
              putstaff();
            } else {
              poststaff();
            }
          }}
        >
          <Modal.Body>
            <h6>Upload Image Staff :</h6>
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
            <h6>First Name Staff TH :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={fnameth}
              onChange={(e) => {
                setfnameth(e.target.value);
              }}
            />

            <h6>First Name Staff EN :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={fnameen}
              onChange={(e) => {
                setfnameen(e.target.value);
              }}
            />
            <h6>last Name Staff TH :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={lnameth}
              onChange={(e) => {
                setlnameth(e.target.value);
              }}
            />
            <h6>last Name Staff EN :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={lnameen}
              onChange={(e) => {
                setlnameen(e.target.value);
              }}
            />
            <h6>Position Staff :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={posi}
              onChange={(e) => {
                setposi(e.target.value);
              }}
            />
            <h6>Resume Staff TH :</h6>
            <textarea
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem", height: "100px" }}
              value={resuth}
              onChange={(e) => {
                setresuth(e.target.value);
              }}
            />
            <h6>Resume Staff EN :</h6>
            <textarea
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem", height: "100px" }}
              value={resuen}
              onChange={(e) => {
                setresuen(e.target.value);
              }}
            />
            <h6>Status Staff :</h6>
            {edit ? (
              <select
                className="form-control"
                required
                style={{ marginBottom: "1rem" }}
                onChange={(e) => {
                  setsta(e.target.value);
                }}
              >
                <option key="2e3e32e3" value="">
                  {"<------ Select Status ------>"}
                </option>
                {sta === "normal" && (
                  <>
                    <option selected value="normal">
                      normal
                    </option>
                    <option value="founder">founder</option>
                  </>
                )}
                {sta === "founder" && (
                  <>
                    <option value="normal">normal</option>
                    <option selected value="founder">
                      founder
                    </option>
                  </>
                )}
              </select>
            ) : (
              <select
                className="form-control"
                required
                style={{ marginBottom: "1rem" }}
                onChange={(e) => {
                  setsta(e.target.value);
                }}
              >
                <option key="2e3e32e3" value="">
                  {"<------ Select Status ------>"}
                </option>
                <option value="normal">normal</option>
                <option value="founder">founder</option>
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
          <Button variant="primary" onClick={delstaff}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
