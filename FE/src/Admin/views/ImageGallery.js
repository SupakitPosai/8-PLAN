import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  Modal,
  ListGroup,
} from "react-bootstrap";
import InnerImageZoom from "react-inner-image-zoom";
import URL_img from "../../config/URL_img";
import ROOT_API from "../../config/Aip_Url";
import photo from "../../img/photo.png";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
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
export default function ImageGallery() {
  const [imgg, setimgg] = useState([]);
  const [imgs, setimgs] = useState([]);
  const [name_img_gallery, setname_img_gallery] = useState("");
  const [id_product, setid_product] = useState("");
  const [show, setshow] = useState(false);
  const [formData1, setformData1] = useState({ file: "" });
  const [src, setsrc] = useState(photo);
  const [idIG, setidIG] = useState("");
  const [show2, setShow2] = useState(false);
  useEffect(() => {
    fetch(ROOT_API + "/api/getIGAd")
      .then((res) => res.json())
      .then((result) => {
        setimgg(result);
        var tt = [];
        for (let index = 0; index < result.length; index++) {
          tt.push({ ims: result[index].img_product });
          if (index === result.length - 1) {
            setimgs(tt);
          }
        }
      });
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
  const postIg = () => {
    axios
      .post(
        ROOT_API + "/api/postIGAd",
        qs.stringify({
          file: formData1.file,
          name_img_gallery: name_img_gallery,
          id_product: id_product,
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
  const delIg = () => {
    fetch(ROOT_API + "/api/delIG?id_img_gallery=" + idIG)
      .then((res) => res.json())
      .then((result) => {
        Toast.fire({
          icon: "success",
          title: "Delete Success",
        });
        setShow2(false);
        window.location.reload(false);
      });
  };
  return (
    <div style={{ marginTop: "1rem" }}>
      <Container>
        {imgg.length !== 0 && (
          <Row>
            {imgg.map((im, index) => (
              <Col sm={6} style={{ marginBottom: "2rem" }}>
                <Card style={{ padding: "1rem" }}>
                  {cookies.get("Type_Login") !== "admin" && (
                    <>
                      <Button
                        onClick={() => {
                          setid_product(im.id_product);
                          setshow(true);
                        }}
                      >
                        Add Image Gallery
                      </Button>
                      <hr />
                    </>
                  )}

                  <h5>ชื่อสินค้า:{" " + im.name_product_th}</h5>
                  <div className="gimgdtp">
                    <div className="gimgdtp2">
                      {imgs.length !== 0 && (
                        <InnerImageZoom
                          className="gimgdtp3"
                          src={URL_img + imgs[index].ims}
                          zoomSrc={URL_img + imgs[index].ims}
                        />
                      )}
                    </div>
                  </div>
                  <Row style={{ marginTop: "1rem" }}>
                    <div style={{ display: "flex", overflow: "auto" }}>
                      <div
                        className="hoverlistimg_q"
                        style={{ width: "50px", margin: "0 .4rem" }}
                        onClick={() => {
                          var tt1 = [...imgs];
                          tt1[index].ims = im.img_product;
                          setimgs(tt1);
                        }}
                      >
                        <div className="listimg11">
                          <div className="listimg12">
                            <Image
                              className="listimg13"
                              src={URL_img + im.img_product}
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className="hoverlistimg_q"
                        style={{ width: "50px", margin: "0 .4rem" }}
                        onClick={() => {
                          var tt1 = [...imgs];
                          tt1[index].ims = im.img_plan;
                          setimgs(tt1);
                        }}
                      >
                        <div className="listimg11">
                          <div className="listimg12">
                            <Image
                              className="listimg13"
                              src={URL_img + im.img_plan}
                            />
                          </div>
                        </div>
                      </div>

                      {im.imggalery1.length !== 0 && (
                        <>
                          {im.imggalery1.map((img1) => (
                            <div>
                              <div
                                className="hoverlistimg_q"
                                style={{
                                  width: "50px",
                                  margin: "0 .4rem",
                                }}
                                onClick={() => {
                                  var tt1 = [...imgs];
                                  tt1[index].ims = img1.url_img_gallery;
                                  setimgs(tt1);
                                }}
                              >
                                <div className="listimg11">
                                  <div className="listimg12">
                                    <Image
                                      className="listimg13"
                                      src={URL_img + img1.url_img_gallery}
                                    />
                                  </div>
                                </div>
                              </div>
                              <Button
                                onClick={() => {
                                  setidIG(img1.id_img_gallery);
                                  setShow2(true);
                                }}
                              >
                                <MdDelete />
                              </Button>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
      <Modal
        show={show}
        onHide={() => {
          setshow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postIg();
          }}
        >
          <Modal.Body>
            <h6>Upload Image Product :</h6>
            <div className="form-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  name="file"
                  required
                  onChange={onChange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  Choose file
                </label>
              </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <img src={src} width="200px" />
            </div>
            <h6>Name Image Gallery :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={name_img_gallery}
              onChange={(e) => {
                setname_img_gallery(e.target.value);
              }}
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
      <Modal
        show={show2}
        onHide={() => {
          setShow2(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Image Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setShow2(false);
            }}
          >
            No
          </Button>
          <Button variant="primary" onClick={delIg}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
