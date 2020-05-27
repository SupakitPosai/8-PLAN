import React, { useEffect, useState } from "react";
import ROOT_API from "../../config/Aip_Url";
import DataTable from "../components/DataTable";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
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

export default function Catergory() {
  const [typeGallery, settypeGallery] = useState([]);
  const [Gallery, setGallery] = useState([]);
  const [name_type, setname_type] = useState("");
  const [editnametepe, seteditnametepe] = useState("");
  const [id_type, setid_type] = useState("");
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [namegaller, setnamegaller] = useState("");
  const [selecttype, setselecttype] = useState("");
  const [idgallery, setidgallery] = useState("");

  const [namegalleredit, setnamegalleredit] = useState("");
  const [imge, setimge] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  useEffect(() => {
    document.title = "Catergory";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/typeGallery")
      .then((res) => res.json())
      .then(
        (result) => {
          settypeGallery(result);

          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
    fetch(ROOT_API + "/api/gallerya")
      .then((res) => res.json())
      .then(
        (result) => {
          setGallery(result);

          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
  }, []);
  const posttype = () => {
    axios
      .post(
        ROOT_API + "/api/posttypeGallery",
        qs.stringify({
          name_type_gallery: name_type,
          status_type_gallery: "active",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
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
        Toast.fire({
          icon: "success",
          title: "Add Success",
        });
        setShow(false);
        window.location.reload(false);
      })
      .catch((error) => {});
    // fetch(ROOT_API + "/api/posttypeGallery", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name_type_gallery: name_type,
    //     status_type_gallery: "active"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     const Toast = Swal.mixin({
    //       toast: true,
    //       position: "top-end",
    //       showConfirmButton: false,
    //       timer: 3000,
    //       timerProgressBar: true,
    //       onOpen: toast => {
    //         toast.addEventListener("mouseenter", Swal.stopTimer);
    //         toast.addEventListener("mouseleave", Swal.resumeTimer);
    //       }
    //     });

    //     Toast.fire({
    //       icon: "success",
    //       title: "Add Success"
    //     });
    //     setShow(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     // //console.error("Error:", error);
    //   });
  };
  const puttype = () => {
    axios
      .post(
        ROOT_API + "/api/puttypeGallery",
        qs.stringify({
          id_type_gallery: id_type,
          name_type_gallery: editnametepe,
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
          title: "Edit Success",
        });
        setShow2(false);
        window.location.reload(false);
      })
      .catch((error) => {});
    // fetch(ROOT_API + "/api/puttypeGallery", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_type_gallery: id_type,
    //     name_type_gallery: editnametepe
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Edit Success"
    //     });
    //     setShow2(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     // //console.error("Error:", error);
    //   });
  };
  const dettype = () => {
    fetch(ROOT_API + "/api/deletetypeGallery?id_type_gallery=" + id_type)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result === "no") {
            handleClose3();
            Toast.fire({
              icon: "error",
              title: "Item deletion failed.",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Item deleted successfully.",
            });
            setShow3(false);
            window.location.reload(false);
          }
        },
        (error) => {}
      );
  };
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
  const postgallery = () => {
    axios
      .post(
        ROOT_API + "/api/postgallerya",
        qs.stringify({
          name_gallery: namegaller,
          file: formData1.file,
          id_type_gallery: selecttype,
          status_gallery: "active",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
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

        Toast.fire({
          icon: "success",
          title: "Add Success",
        });
        setShow4(false);
        window.location.reload(false);
      })
      .catch((error) => {});
    // fetch(ROOT_API + "/api/postgallerya", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name_gallery: namegaller,
    //     file: formData1.file,
    //     id_type_gallery: selecttype,
    //     status_gallery: "active"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     const Toast = Swal.mixin({
    //       toast: true,
    //       position: "top-end",
    //       showConfirmButton: false,
    //       timer: 3000,
    //       timerProgressBar: true,
    //       onOpen: toast => {
    //         toast.addEventListener("mouseenter", Swal.stopTimer);
    //         toast.addEventListener("mouseleave", Swal.resumeTimer);
    //       }
    //     });

    //     Toast.fire({
    //       icon: "success",
    //       title: "Add Success"
    //     });
    //     setShow4(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     // //console.error("Error:", error);
    //   });
  };
  const putgallery = () => {
    axios
      .post(
        ROOT_API + "/api/putgallerya",
        qs.stringify({
          id_gallery: idgallery,
          name_gallery: namegalleredit,
          file: formData1.file,
          img_name: imge,
          status_gallery: "active",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
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

        Toast.fire({
          icon: "success",
          title: "Edit Success",
        });
        setShow5(false);
        window.location.reload(false);
      })
      .catch((error) => {});
    // fetch(ROOT_API + "/api/putgallerya", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_gallery: idgallery,
    //     name_gallery: namegalleredit,
    //     file: formData1.file,
    //     img_name: imge,
    //     status_gallery: "active"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     const Toast = Swal.mixin({
    //       toast: true,
    //       position: "top-end",
    //       showConfirmButton: false,
    //       timer: 3000,
    //       timerProgressBar: true,
    //       onOpen: toast => {
    //         toast.addEventListener("mouseenter", Swal.stopTimer);
    //         toast.addEventListener("mouseleave", Swal.resumeTimer);
    //       }
    //     });

    //     Toast.fire({
    //       icon: "success",
    //       title: "Edit Success"
    //     });
    //     setShow5(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const detgel = () => {
    fetch(ROOT_API + "/api/deletegallerya?id_gallery=" + idgallery)
      .then((res) => res.json())
      .then(
        (result) => {
          if (result === "no") {
            handleClose6();
            Toast.fire({
              icon: "error",
              title: "Item deletion failed.",
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Item deleted successfully.",
            });
            setShow6(false);
            window.location.reload(false);
          }
        },
        (error) => {}
      );
  };
  return (
    <div style={{ paddingTop: "1rem" }}>
      <div className="col-12 ">
        <div className="card card-primary card-outline card-outline-tabs">
          <div className="card-header p-0 border-bottom-0">
            <ul
              className="nav nav-tabs"
              id="custom-tabs-three-tab"
              role="tablist"
              style={{
                backgroundColor: "unset",
                paddingLeft: "0",
                marginTop: "0",
              }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="custom-tabs-three-home-tab"
                  data-toggle="pill"
                  href="#custom-tabs-three-home"
                  role="tab"
                  aria-controls="custom-tabs-three-home"
                  aria-selected="true"
                >
                  Type Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="custom-tabs-three-profile-tab"
                  data-toggle="pill"
                  href="#custom-tabs-three-profile"
                  role="tab"
                  aria-controls="custom-tabs-three-profile"
                  aria-selected="false"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <div className="tab-content" id="custom-tabs-three-tabContent">
              {typeGallery.length !== 0 && (
                <div
                  className="tab-pane fade active show"
                  id="custom-tabs-three-home"
                  role="tabpanel"
                  aria-labelledby="custom-tabs-three-home-tab"
                >
                  {cookies.get("Type_Login") !== "admin" && (
                    <Button
                      style={{ marginBottom: "1rem" }}
                      onClick={handleShow}
                    >
                      Add Type Gallery
                    </Button>
                  )}
                  <DataTable
                    idtable="example1"
                    data={typeGallery}
                    tablehead={["Name Type Gallery", "Status Type Gallery"]}
                    title="Type Gallery DataTable"
                    bodytable={["name_type_gallery", "status_type_gallery"]}
                    onEdit={(event, index) => {
                      seteditnametepe(typeGallery[index].name_type_gallery);
                      setid_type(typeGallery[index].id_type_gallery);
                      handleShow2();
                      //   //console.log("onEdit", index);
                    }}
                    onDelete={(event, index) => {
                      setid_type(typeGallery[index].id_type_gallery);
                      handleShow3();
                      //   //console.log("onDelete", index);
                    }}
                  />
                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Type Gallery</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h5>Name Type Gallery :</h5>
                      <input
                        className="form-control"
                        type="text"
                        onChange={(e) => {
                          setname_type(e.target.value);
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={posttype}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Modal show={show2} onHide={handleClose2} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Type Gallery</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h5>Name Type Gallery :</h5>
                      <input
                        className="form-control"
                        type="text"
                        value={editnametepe}
                        onChange={(e) => {
                          seteditnametepe(e.target.value);
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={puttype}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <Modal show={show3} onHide={handleClose3} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Type Gallery</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h5 style={{ textAlign: "center" }}>
                        Delete confirmation
                      </h5>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose3}>
                        No
                      </Button>
                      <Button variant="primary" onClick={dettype}>
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              )}
              {Gallery.length !== 0 && (
                <div
                  className="tab-pane fade"
                  id="custom-tabs-three-profile"
                  role="tabpanel"
                  aria-labelledby="custom-tabs-three-profile-tab"
                >
                  {cookies.get("Type_Login") !== "admin" && (
                    <Button
                      style={{ marginBottom: "1rem" }}
                      onClick={() => {
                        setsrc(photo);
                        setformData1({ file: "" });
                        handleShow4();
                      }}
                    >
                      Add Gallery
                    </Button>
                  )}
                  <DataTable
                    idtable="example2"
                    data={Gallery}
                    tablehead={[
                      "Name Gallery",
                      "Name Type Gallery",
                      "Status Gallery",
                    ]}
                    title="Gallery DataTable"
                    bodytable={[
                      "name_gallery",
                      "name_type_gallery",
                      "status_gallery",
                    ]}
                    imgtable="img_gallery"
                    onEdit={(event, index) => {
                      setnamegalleredit(Gallery[index].name_gallery);
                      setimge(Gallery[index].img_gallery);
                      setidgallery(Gallery[index].id_gallery);
                      setformData1({ file: "" });
                      setsrc(URL_img + Gallery[index].img_gallery);
                      handleShow5();
                    }}
                    onDelete={(event, index) => {
                      setidgallery(Gallery[index].id_gallery);
                      handleShow6();
                    }}
                  />
                  <Modal show={show4} onHide={handleClose4} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Gallery</Modal.Title>
                    </Modal.Header>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        postgallery();
                      }}
                    >
                      <Modal.Body>
                        <h6>Name Gallery :</h6>
                        <input
                          className="form-control"
                          type="text"
                          style={{ marginBottom: "1rem" }}
                          value={namegaller}
                          onChange={(e) => {
                            setnamegaller(e.target.value);
                          }}
                          required
                        />
                        <h6>Select Type Gallery :</h6>
                        <select
                          className="form-control"
                          required
                          style={{ marginBottom: "1rem" }}
                          onChange={(e) => {
                            setselecttype(e.target.value);
                          }}
                        >
                          <option key="2e3e32e3" value="">
                            {"<------ Select Type Gallery ------>"}
                          </option>
                          {typeGallery.map((typeGallery) => (
                            <option
                              key={typeGallery.id_type_gallery}
                              value={typeGallery.id_type_gallery}
                            >
                              {typeGallery.name_type_gallery}
                            </option>
                          ))}
                        </select>
                        <h6>Upload Image :</h6>
                        <div className="form-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              name="file"
                              required
                              onChange={onChange}
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                        <Container>
                          <Row>
                            <Col style={{ textAlign: "center" }}>
                              <img src={src} width="200px" />
                            </Col>
                          </Row>
                        </Container>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose4}>
                          Close
                        </Button>
                        <Button variant="primary" type="submit">
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </form>
                  </Modal>
                  <Modal show={show5} onHide={handleClose5} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Gallery</Modal.Title>
                    </Modal.Header>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        putgallery();
                      }}
                    >
                      <Modal.Body>
                        <h6>Name Gallery :</h6>
                        <input
                          className="form-control"
                          type="text"
                          style={{ marginBottom: "1rem" }}
                          value={namegalleredit}
                          onChange={(e) => {
                            setnamegalleredit(e.target.value);
                          }}
                          required
                        />

                        <h6>Upload Image :</h6>
                        <div className="form-group">
                          <div className="custom-file">
                            <input
                              type="file"
                              className="custom-file-input"
                              name="file"
                              onChange={onChange}
                            />
                            <label
                              className="custom-file-label"
                              htmlFor="customFile"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                        <Container>
                          <Row>
                            <Col style={{ textAlign: "center" }}>
                              <img src={src} width="200px" />
                            </Col>
                          </Row>
                        </Container>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose5}>
                          Close
                        </Button>
                        <Button variant="primary" type="submit">
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </form>
                  </Modal>
                  <Modal show={show6} onHide={handleClose6} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Delete Gallery</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h5 style={{ textAlign: "center" }}>
                        Delete confirmation
                      </h5>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose6}>
                        No
                      </Button>
                      <Button variant="primary" onClick={detgel}>
                        Yes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              )}
            </div>
          </div>

          {/* /.card */}
        </div>
      </div>
    </div>
  );
}
