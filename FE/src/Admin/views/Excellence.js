import React, { useEffect, useState } from "react";
import ROOT_API from "../../config/Aip_Url";
import DataTable from "../components/DataTable";
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

export default function Excellence() {
  const [Exce, setExce] = useState([]);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [nameexc, setnameexc] = useState("");
  const [nameimg, setnameimg] = useState("");
  const [idexc, setidexc] = useState("");
  const [ExcePro, setExcePro] = useState([]);
  const [product, setproduct] = useState([]);
  const [selectpro, setselectpro] = useState("");
  const [selectgaller, setselectgaller] = useState("");
  const [detail, setdetail] = useState("");
  const [idExpr, setidExpr] = useState("");

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
    document.title = "Excellence";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/getExcellenceAll")
      .then(res => res.json())
      .then(
        result => {
          setExce(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
    fetch(ROOT_API + "/api/GetExcellenceProductAll")
      .then(res => res.json())
      .then(
        result => {
          setExcePro(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
    fetch(ROOT_API + "/api/getproductAll")
      .then(res => res.json())
      .then(
        result => {
          setproduct(result);
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
  const postExc = () => {
    axios
      .post(
        ROOT_API + "/api/postExcellence",
        qs.stringify({
          file: formData1.file,
          name_excellence: nameexc,
          status_excellence: "active"
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
    // fetch(ROOT_API + "/api/postExcellence", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     file: formData1.file,
    //     name_excellence: nameexc,
    //     status_excellence: "active"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Add Success"
    //     });
    //     setShow(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const putExc = () => {
    axios
      .post(
        ROOT_API + "/api/putExcellence",
        qs.stringify({
          id_excellence: idexc,
          img_name: nameimg,
          file: formData1.file,
          name_excellence: nameexc
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
        setShow2(false);
        window.location.reload(false);
      })
      .catch(error => {});
    // fetch(ROOT_API + "/api/putExcellence", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_excellence: idexc,
    //     img_name: nameimg,
    //     file: formData1.file,
    //     name_excellence: nameexc
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
    //     //console.error("Error:", error);
    //   });
  };
  const detexc = () => {
    fetch(ROOT_API + "/api/deleteExcellence?id_excellence=" + idexc)
      .then(res => res.json())
      .then(
        result => {
          if (result === "no") {
            handleClose3();
            Toast.fire({
              icon: "error",
              title: "Item deletion failed."
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Item deleted successfully."
            });
            setShow3(false);
            window.location.reload(false);
          }
        },
        error => {}
      );
  };
  const postexpr = () => {
    axios
      .post(
        ROOT_API + "/api/postExcellenceProduct",
        qs.stringify({
          detail_excellence_product: detail,
          id_product: selectpro,
          id_excellence: selectgaller,
          status_excellence_product: "active"
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
        setShow4(false);
        window.location.reload(false);
      })
      .catch(error => {});
    // fetch(ROOT_API + "/api/postExcellenceProduct", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     detail_excellence_product: detail,
    //     id_product: selectpro,
    //     id_excellence: selectgaller,
    //     status_excellence_product: "active"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Add Success"
    //     });
    //     setShow4(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const putexpr = () => {
    axios
      .post(
        ROOT_API + "/api/putExcellenceProduct",
        qs.stringify({
          id_excellence_product: idExpr,
          detail_excellence_product: detail
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
        setShow5(false);
        window.location.reload(false);
      })
      .catch(error => {});
    // fetch(ROOT_API + "/api/putExcellenceProduct", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_excellence_product: idExpr,
    //     detail_excellence_product: detail
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
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
  const detexcpr = () => {
    fetch(
      ROOT_API + "/api/delExcellenceProduct?id_excellence_product=" + idExpr
    )
      .then(res => res.json())
      .then(
        result => {
          Toast.fire({
            icon: "success",
            title: "Item deleted successfully."
          });
          setShow6(false);
          window.location.reload(false);
        },
        error => {}
      );
  };
  return (
    <div style={{ paddingTop: "1rem" }}>
      <div className="col-12">
        <div className="card card-primary card-outline card-outline-tabs">
          <div className="card-header p-0 border-bottom-0">
            <ul
              className="nav nav-tabs"
              id="custom-tabs-three-tab"
              role="tablist"
              style={{
                backgroundColor: "unset",
                paddingLeft: "0",
                marginTop: "0"
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
                  Excellence
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
                  Excellence Product
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content" id="custom-tabs-three-tabContent">
              <div
                className="tab-pane fade active show"
                id="custom-tabs-three-home"
                role="tabpanel"
                aria-labelledby="custom-tabs-three-home-tab"
              >
                <Button
                  style={{ marginBottom: "1rem" }}
                  onClick={() => {
                    handleShow();
                    setformData1({ file: "" });
                  }}
                >
                  Add Excellence
                </Button>
                <DataTable
                  idtable="example4"
                  data={Exce}
                  tablehead={["Name Excellence", "Status Excellence"]}
                  title="Excellence DataTable"
                  bodytable={["name_excellence", "status_excellence"]}
                  imgtable="img_excellence"
                  onEdit={(event, index) => {
                    setformData1({ file: "" });
                    setnameexc(Exce[index].name_excellence);
                    setsrc(URL_img + Exce[index].img_excellence);
                    setnameimg(Exce[index].img_excellence);
                    setidexc(Exce[index].id_excellence);
                    handleShow2();
                  }}
                  onDelete={(event, index) => {
                    setidexc(Exce[index].id_excellence);
                    handleShow3();
                  }}
                />
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Excellence</Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      postExc();
                    }}
                  >
                    <Modal.Body>
                      <h6>Upload Image Excellence :</h6>
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

                      <div
                        style={{ textAlign: "center", marginBottom: "1rem" }}
                      >
                        <img src={src} width="200px" />
                      </div>

                      <h6>Name Excellence :</h6>
                      <input
                        className="form-control"
                        type="text"
                        required
                        style={{ marginBottom: "1rem" }}
                        value={nameexc}
                        onChange={e => {
                          setnameexc(e.target.value);
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
                <Modal show={show2} onHide={handleClose2} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Excellence</Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      putExc();
                    }}
                  >
                    <Modal.Body>
                      <h6>Upload Image Excellence :</h6>
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

                      <div
                        style={{ textAlign: "center", marginBottom: "1rem" }}
                      >
                        <img src={src} width="200px" />
                      </div>

                      <h6>Name Excellence :</h6>
                      <input
                        className="form-control"
                        type="text"
                        style={{ marginBottom: "1rem" }}
                        value={nameexc}
                        onChange={e => {
                          setnameexc(e.target.value);
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose2}>
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
                <Modal show={show3} onHide={handleClose3} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Excellence</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                      No
                    </Button>
                    <Button variant="primary" onClick={detexc}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-three-profile"
                role="tabpanel"
                aria-labelledby="custom-tabs-three-profile-tab"
              >
                <Button
                  style={{ marginBottom: "1rem" }}
                  onClick={() => {
                    handleShow4();
                  }}
                >
                  Add Excellence Product
                </Button>
                {ExcePro.length !== 0 && (
                  <DataTable
                    idtable="example5"
                    data={ExcePro}
                    tablehead={[
                      "Name Excellence",
                      "Detail Excellence Product",
                      "Name Product TH",
                      "Name Product EN"
                    ]}
                    title="Excellence Product DataTable"
                    bodytable={[
                      "name_excellence",
                      "detail_excellence_product",
                      "name_product_th",
                      "name_product_en"
                    ]}
                    imgtable="img_excellence"
                    imgtable2="img_product"
                    onEdit={(event, index) => {
                      setidExpr(ExcePro[index].id_excellence_product);
                      setdetail(ExcePro[index].detail_excellence_product);
                      setShow5(true);
                    }}
                    onDelete={(event, index) => {
                      setidExpr(ExcePro[index].id_excellence_product);
                      handleShow6();
                    }}
                  />
                )}
                <Modal show={show4} onHide={handleClose4} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Excellence Product</Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      postexpr();
                    }}
                  >
                    <Modal.Body>
                      <select
                        className="form-control"
                        required
                        value={selectgaller}
                        style={{ marginBottom: "1rem" }}
                        onChange={e => {
                          setselectgaller(e.target.value);
                        }}
                      >
                        <option key="2e3e32e3" value="">
                          {"<------ Select Excellence ------>"}
                        </option>
                        {Exce.map((ex, index) => (
                          <option key={index} value={ex.id_excellence}>
                            {ex.name_excellence}
                          </option>
                        ))}
                        >
                      </select>
                      <select
                        className="form-control"
                        required
                        value={selectpro}
                        style={{ marginBottom: "1rem" }}
                        onChange={e => {
                          setselectpro(e.target.value);
                        }}
                      >
                        <option key="2e3dsfde32e3" value="">
                          {"<------ Select Product ------>"}
                        </option>
                        {product.map(pr => (
                          <option key={pr.id_product} value={pr.id_product}>
                            {pr.name_product_en}
                          </option>
                        ))}
                      </select>
                      <textarea
                        className="form-control"
                        type="text"
                        required
                        style={{ marginBottom: "1rem" }}
                        value={detail}
                        onChange={e => {
                          setdetail(e.target.value);
                        }}
                      />
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
                    <Modal.Title>Edit Excellence Product</Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      putexpr();
                    }}
                  >
                    <Modal.Body>
                      <textarea
                        className="form-control"
                        type="text"
                        required
                        style={{ marginBottom: "1rem" }}
                        value={detail}
                        onChange={e => {
                          setdetail(e.target.value);
                        }}
                      />
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
                    <Modal.Title>Delete Excellence Product</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose6}>
                      No
                    </Button>
                    <Button variant="primary" onClick={detexcpr}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
