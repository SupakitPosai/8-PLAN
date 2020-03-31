import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { Button, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import ROOT_API from "../../config/Aip_Url";
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
export default function Package() {
  const [typepack, settypepack] = useState([]);
  const [pack, setpack] = useState([]);
  const [item, setitem] = useState([]);

  const [idtype, setidtype] = useState("");
  const [namettp, setnamettp] = useState("");
  const [nameetp, setnameetp] = useState("");
  const [edittype, setedittype] = useState(false);

  const [editpacc, seteditpacc] = useState(false);
  const [namepackt, setnamepackt] = useState("");
  const [namepacke, setnamepacke] = useState("");
  const [selecttype, setselecttype] = useState("");
  const [idpack, setidpack] = useState("");

  const [product, setproduct] = useState([]);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [namep, setnamep] = useState("");
  const [pricep, setpricep] = useState("");
  const [idpacki, setidpacki] = useState("");
  const [idproi, setidproi] = useState("");
  const [edititem, setedititem] = useState(false);
  const [iditem, setiditem] = useState("");
  const [nameimg, setnameimg] = useState("");

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  useEffect(() => {
    document.title = "Package";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/gettypepackage")
      .then(res => res.json())
      .then(
        result => {
          settypepack(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
    fetch(ROOT_API + "/api/getpackage")
      .then(res => res.json())
      .then(
        result => {
          setpack(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
    fetch(ROOT_API + "/api/getItemPackage")
      .then(res => res.json())
      .then(
        result => {
          setitem(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
    fetch(ROOT_API + "/api/producta")
      .then(res => res.json())
      .then(
        result => {
          setproduct(result);
        },
        error => {}
      );
  }, []);
  const posttyp = () => {
    axios
      .post(
        ROOT_API + "/api/posttypepackage",
        qs.stringify({
          name_type_package_th: namettp,
          name_type_package_en: nameetp,
          status_type_package: "active"
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
    // fetch(ROOT_API + "/api/posttypepackage", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name_type_package_th: namettp,
    //     name_type_package_en: nameetp,
    //     status_type_package: "active"
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
  const puttype = () => {
    axios
      .post(
        ROOT_API + "/api/puttypepackage",
        qs.stringify({
          id_type_package: idtype,
          name_type_package_th: namettp,
          name_type_package_en: nameetp
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
    // fetch(ROOT_API + "/api/puttypepackage", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_type_package: idtype,
    //     name_type_package_th: namettp,
    //     name_type_package_en: nameetp
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Edit Success"
    //     });
    //     setShow(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const deltype = () => {
    fetch(ROOT_API + "/api/deltypepackage?id_type_package=" + idtype)
      .then(res => res.json())
      .then(
        result => {
          if (result === "no") {
            setShow2(false);
            Toast.fire({
              icon: "error",
              title: "Item deletion failed."
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Item deleted successfully."
            });
            setShow2(false);
            window.location.reload(false);
          }
        },
        error => {}
      );
  };
  const postpack = () => {
    axios
      .post(
        ROOT_API + "/api/postpackage",
        qs.stringify({
          name_package_th: namepackt,
          name_package_en: namepacke,
          id_type_package: selecttype,
          status_package: "active"
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
        setShow3(false);
        window.location.reload(false);
      })
      .catch(error => {});
    // fetch(ROOT_API + "/api/postpackage", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name_package_th: namepackt,
    //     name_package_en: namepacke,
    //     id_type_package: selecttype,
    //     status_package: "active"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Add Success"
    //     });
    //     setShow3(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const putpack = () => {
    axios
      .post(
        ROOT_API + "/api/putpackage",
        qs.stringify({
          id_package: idpack,
          name_package_th: namepackt,
          name_package_en: namepacke
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
        setShow3(false);
        window.location.reload(false);
      })
      .catch(error => {});
    // fetch(ROOT_API + "/api/putpackage", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_package: idpack,
    //     name_package_th: namepackt,
    //     name_package_en: namepacke
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Edit Success"
    //     });
    //     setShow3(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const delpack = () => {
    fetch(ROOT_API + "/api/delpackage?id_package=" + idpack)
      .then(res => res.json())
      .then(
        result => {
          if (result === "no") {
            setShow4(false);
            Toast.fire({
              icon: "error",
              title: "Item deletion failed."
            });
          } else {
            Toast.fire({
              icon: "success",
              title: "Item deleted successfully."
            });
            setShow4(false);
            window.location.reload(false);
          }
        },
        error => {}
      );
  };
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
  const postitem = () => {
    axios
      .post(
        ROOT_API + "/api/postItemPackage",
        qs.stringify({
          name_item_package: namep,
          price_item: pricep,
          file: formData1.file,
          id_package: idpacki,
          id_product: idproi,
          status_item_package: "active"
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
        setShow5(false);
        window.location.reload(false);
      })
      .catch(error => {});
    // fetch(ROOT_API + "/api/postItemPackage", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name_item_package: namep,
    //     price_item: pricep,
    //     file: formData1.file,
    //     id_package: idpacki,
    //     id_product: idproi,
    //     status_item_package: "active"
    //   })
    // })
    //   // .then(response => response.json())
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Add Success"
    //     });
    //     setShow5(false);
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     //console.error("Error:", error);
    //   });
  };
  const putitem = () => {
    axios
      .post(
        ROOT_API + "/api/putItemPackage",
        qs.stringify({
          id_item_package: iditem,
          name_item_package: namep,
          price_item: pricep,
          file: formData1.file,
          img_name: nameimg
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
    // fetch(ROOT_API + "/api/putItemPackage", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     id_item_package: iditem,
    //     name_item_package: namep,
    //     price_item: pricep,
    //     file: formData1.file,
    //     img_name: nameimg
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
  const delitem = () => {
    fetch(ROOT_API + "/api/delItemPackage?id_item_package=" + iditem)
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
                  Type Package
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
                  Package
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="custom-tabs-three-Package-tab"
                  data-toggle="pill"
                  href="#custom-tabs-three-Package"
                  role="tab"
                  aria-controls="custom-tabs-three-Package"
                  aria-selected="false"
                >
                  Item Package
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
                    setnameetp("");
                    setnamettp("");
                    setedittype(false);
                    setShow(true);
                  }}
                >
                  Add Type Package
                </Button>
                <DataTable
                  idtable="example6"
                  data={typepack}
                  tablehead={[
                    "Name Type Package TH",
                    "Name Type Package EN",
                    "Status Type Package"
                  ]}
                  title="Type Package DataTable"
                  bodytable={[
                    "name_type_package_th",
                    "name_type_package_en",
                    "status_type_package"
                  ]}
                  onEdit={(event, index) => {
                    setidtype(typepack[index].id_type_package);
                    setnamettp(typepack[index].name_type_package_th);
                    setnameetp(typepack[index].name_type_package_en);
                    setedittype(true);
                    setShow(true);
                  }}
                  onDelete={(event, index) => {
                    setidtype(typepack[index].id_type_package);
                    setShow2(true);
                  }}
                />
                <Modal show={show} onHide={() => setShow(false)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {edittype ? "Edit Type Package" : "Add Type Package"}
                    </Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      if (edittype === false) {
                        posttyp();
                      } else {
                        puttype();
                      }
                    }}
                  >
                    <Modal.Body>
                      <h6>Name Type Package TH :</h6>
                      <input
                        className="form-control"
                        type="text"
                        style={{ marginBottom: "1rem" }}
                        value={namettp}
                        onChange={e => {
                          setnamettp(e.target.value);
                        }}
                      />
                      <h6>Name Type Package EN :</h6>
                      <input
                        className="form-control"
                        type="text"
                        style={{ marginBottom: "1rem" }}
                        value={nameetp}
                        onChange={e => {
                          setnameetp(e.target.value);
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setShow(false)}
                      >
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
                    <Modal.Title>Delete Type Package </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow2(false)}>
                      No
                    </Button>
                    <Button variant="primary" onClick={deltype}>
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
                    setnamepackt("");
                    setnamepacke("");
                    seteditpacc(false);
                    setShow3(true);
                  }}
                >
                  Add Package
                </Button>
                {pack.length !== 0 && (
                  <DataTable
                    idtable="example7"
                    data={pack}
                    tablehead={[
                      "Name Package TH",
                      "Name Package EN",
                      "Name Type Package TH",
                      "Name Type Package EN",
                      "Status Package"
                    ]}
                    title="Package DataTable"
                    bodytable={[
                      "name_package_th",
                      "name_package_en",
                      "name_type_package_th",
                      "name_type_package_en",
                      "status_package"
                    ]}
                    onEdit={(event, index) => {
                      setnamepackt(pack[index].name_package_th);
                      setnamepacke(pack[index].name_package_en);
                      setidpack(pack[index].id_package);
                      seteditpacc(true);
                      setShow3(true);
                    }}
                    onDelete={(event, index) => {
                      setidpack(pack[index].id_package);
                      setShow4(true);
                    }}
                  />
                )}
                <Modal show={show3} onHide={() => setShow3(false)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {editpacc ? "Edit Package" : "Add Package"}
                    </Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      if (editpacc === false) {
                        postpack();
                      } else {
                        putpack();
                      }
                    }}
                  >
                    <Modal.Body>
                      {editpacc ? (
                        <></>
                      ) : (
                        <select
                          className="form-control"
                          required
                          style={{ marginBottom: "1rem" }}
                          onChange={e => {
                            setselecttype(e.target.value);
                          }}
                        >
                          <option key="ghgfhfg" value="">
                            {"<------ Select Type Package ------>"}
                          </option>
                          {typepack.map(typepack => (
                            <option
                              key={typepack.id_type_package}
                              value={typepack.id_type_package}
                            >
                              {typepack.name_type_package_en}
                            </option>
                          ))}
                        </select>
                      )}

                      <h6>Name Package TH :</h6>
                      <input
                        className="form-control"
                        type="text"
                        style={{ marginBottom: "1rem" }}
                        value={namepackt}
                        onChange={e => {
                          setnamepackt(e.target.value);
                        }}
                      />
                      <h6>Name Package EN :</h6>
                      <input
                        className="form-control"
                        type="text"
                        style={{ marginBottom: "1rem" }}
                        value={namepacke}
                        onChange={e => {
                          setnamepacke(e.target.value);
                        }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setShow3(false)}
                      >
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
                <Modal show={show4} onHide={() => setShow4(false)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Package </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow4(false)}>
                      No
                    </Button>
                    <Button variant="primary" onClick={delpack}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-three-Package"
                role="tabpanel"
                aria-labelledby="custom-tabs-three-Package-tab"
              >
                <Button
                  style={{ marginBottom: "1rem" }}
                  onClick={() => {
                    setnamep("");
                    setpricep("");
                    setsrc(photo);
                    setedititem(false);
                    setShow5(true);
                  }}
                >
                  Add Item Package
                </Button>
                {item.length !== 0 && (
                  <DataTable
                    idtable="example8"
                    data={item}
                    tablehead={[
                      "Name Item Package",
                      "Price Item",
                      "Name Package EN",
                      "Name Product EN"
                    ]}
                    title="Item Package DataTable"
                    bodytable={[
                      "name_item_package",
                      "price_item",
                      "name_package_en",
                      "name_product_en"
                    ]}
                    imgtable="file_item_package"
                    onEdit={(event, index) => {
                      setiditem(item[index].id_item_package);
                      setnamep(item[index].name_item_package);
                      setpricep(item[index].price_item);
                      setsrc(URL_img + item[index].file_item_package);
                      setnameimg(item[index].file_item_package);
                      setedititem(true);
                      setShow5(true);
                    }}
                    onDelete={(event, index) => {
                      setiditem(item[index].id_item_package);
                      setShow6(true);
                    }}
                  />
                )}
                <Modal show={show5} onHide={() => setShow5(false)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {edititem ? "Edit Item Package" : "Add Item Package"}
                    </Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      if (edititem === false) {
                        postitem();
                      } else {
                        putitem();
                      }
                    }}
                  >
                    <Modal.Body>
                      {edititem ? (
                        <></>
                      ) : (
                        <>
                          <select
                            className="form-control"
                            required
                            style={{ marginBottom: "1rem" }}
                            onChange={e => {
                              setidpacki(e.target.value);
                            }}
                          >
                            <option key="ghgfhfg" value="">
                              {"<------ Select Package ------>"}
                            </option>
                            {pack.map(pack => (
                              <option
                                key={pack.id_package}
                                value={pack.id_package}
                              >
                                {pack.name_package_en}
                              </option>
                            ))}
                          </select>
                          <select
                            className="form-control"
                            required
                            style={{ marginBottom: "1rem" }}
                            onChange={e => {
                              setidproi(e.target.value);
                            }}
                          >
                            <option key="ghfssdfgfhfg" value="">
                              {"<------ Select Product ------>"}
                            </option>
                            {product.map(product => (
                              <option
                                key={product.id_product}
                                value={product.id_product}
                              >
                                {product.name_product_en}
                              </option>
                            ))}
                          </select>
                        </>
                      )}

                      <h6>Name Item Package :</h6>
                      <input
                        className="form-control"
                        type="text"
                        style={{ marginBottom: "1rem" }}
                        value={namep}
                        onChange={e => {
                          setnamep(e.target.value);
                        }}
                      />
                      <h6>Price Item Package :</h6>
                      <input
                        className="form-control"
                        type="text"
                        style={{ marginBottom: "1rem" }}
                        value={pricep}
                        onChange={e => {
                          setpricep(e.target.value);
                        }}
                      />
                      <h6>Upload Image Item :</h6>
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
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => setShow5(false)}
                      >
                        Close
                      </Button>
                      <Button variant="primary" type="submit">
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </form>
                </Modal>
                <Modal show={show6} onHide={() => setShow6(false)} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete Package </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow6(false)}>
                      No
                    </Button>
                    <Button variant="primary" onClick={delitem}>
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
