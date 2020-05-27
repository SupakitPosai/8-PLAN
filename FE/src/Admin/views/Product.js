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

export default function Product() {
  const [product, setproduct] = useState([]);
  const [gallery, setgallery] = useState([]);
  const [src, setsrc] = useState(photo);
  const [formData1, setformData1] = useState({ file: "" });
  const [src2, setsrc2] = useState(photo);
  const [formData2, setformData2] = useState({ file: "" });
  const [select, setselect] = useState("");
  const [nameth, setnameth] = useState("");
  const [nameen, setnameen] = useState("");
  const [price_product, setprice_product] = useState("");
  const [price_sale, setprice_sale] = useState("");
  const [detail_product, setdetail_product] = useState("");
  const [size_product, setsize_product] = useState("");
  const [excellence, setexcellence] = useState("");
  const [type_product, settype_product] = useState("");
  const [idpro, setidpro] = useState("");
  const [readyy, setreadyy] = useState("");
  const [product_document, setproduct_document] = useState("");
  const [product_service, setproduct_service] = useState("");
  const [editorState, seteditorState] = useState(EditorState.createEmpty());
  const [editorState2, seteditorState2] = useState(EditorState.createEmpty());
  const [editorState3, seteditorState3] = useState(EditorState.createEmpty());
  const [nameimg1, setnameimg1] = useState("");
  const [nameimg2, setnameimg2] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  useEffect(() => {
    document.title = "Product";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/producta")
      .then((res) => res.json())
      .then(
        (result) => {
          setproduct(result);

          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
    fetch(ROOT_API + "/api/galleryall")
      .then((res) => res.json())
      .then(
        (result) => {
          setgallery(result);
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
  const postpro = () => {
    axios
      .post(
        ROOT_API + "/api/postproduct",
        qs.stringify({
          file: formData1.file,
          file2: formData2.file,
          name_product_th: nameth,
          name_product_en: nameen,
          price_product: price_product,
          price_sale: price_sale,
          detail_product: detail_product,
          size_product: size_product,
          excellence: excellence,
          ready_to_build: readyy,
          type_product: type_product,
          id_gallery: select,
          product_document: product_document,
          product_service: product_service,
        }),
        {
          headers: {
            //"Content-Type": "application/json"
            //            'Content-Type': 'multipart/form-data'
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
       
        Toast.fire({
          icon: "success",
          title: "Add Success",
        });
        setShow(false);
        window.location.reload(false);
      })
      .catch((error) => {
        // console.log(error.response.data);
      });
    // fetch(ROOT_API + "/api/postproduct", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     file: formData1.file,
    //     file2: formData2.file,
    //     name_product_th: nameth,
    //     name_product_en: nameen,
    //     price_product: price_product,
    //     price_sale: price_sale,
    //     detail_product: detail_product,
    //     size_product: size_product,
    //     excellence: excellence,
    //     ready_to_build:readyy,
    //     type_product: type_product,
    //     id_gallery: select
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
  const inputedit = (index) => {
    setproduct_document(product[index].product_document);
    setproduct_service(product[index].product_service);
    setsrc(URL_img + product[index].img_product);
    setsrc2(URL_img + product[index].img_plan);
    setnameimg1(product[index].img_product);
    setnameimg2(product[index].img_plan);
    setnameth(product[index].name_product_th);
    setnameen(product[index].name_product_en);
    setprice_product(product[index].price_product);
    setprice_sale(product[index].price_sale);
    setdetail_product(product[index].detail_product);
    setsize_product(product[index].size_product);
    setexcellence(product[index].excellence);
    settype_product(product[index].type_product);
    setidpro(product[index].id_product);
    setreadyy(product[index].ready_to_build);
    const html = product[index].detail_product;
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);
    seteditorState(editorState);

    lll(index);

    // setvalue(product[index].detail_product)
  };
  const lll = (index) => {
    const html2 = product[index].product_document;
    const contentBlock2 = htmlToDraft(html2);
    const contentState2 = ContentState.createFromBlockArray(
      contentBlock2.contentBlocks
    );
    const editorState2 = EditorState.createWithContent(contentState2);
    seteditorState2(editorState2);
    lll2(index);
  };
  const lll2 = (index) => {
    const html3 = product[index].product_service;
    const contentBlock3 = htmlToDraft(html3);
    const contentState3 = ContentState.createFromBlockArray(
      contentBlock3.contentBlocks
    );
    const editorState3 = EditorState.createWithContent(contentState3);
    seteditorState3(editorState3);
  };
  const inputpost = () => {
    setsrc(photo);
    setsrc2(photo);
    setproduct_document("");
    setproduct_service("");
    setnameth("");
    setnameen("");
    setprice_product("");
    setprice_sale("");
    setdetail_product("");
    setsize_product("");
    setexcellence("");
    settype_product("");
    setidpro("");
    setreadyy("");
    seteditorState(EditorState.createEmpty());
    seteditorState2(EditorState.createEmpty());
    seteditorState3(EditorState.createEmpty());
  };
  const putpro = () => {
    // var data1 = {
    //   id_product: idpro,
    //   file: formData1.file,
    //   file2: formData2.file,
    //   img_name: nameimg1,
    //   img_name2: nameimg2,
    //   name_product_th: nameth,
    //   name_product_en: nameen,
    //   price_product: price_product,
    //   price_sale: price_sale,
    //   detail_product: detail_product,
    //   size_product: size_product,
    //   excellence: excellence,
    //   ready_to_build: readyy,
    //   type_product: type_product
    // };

    axios
      .post(
        ROOT_API + "/api/putproduct",
        qs.stringify({
          id_product: idpro,
          file: formData1.file,
          file2: formData2.file,
          img_name: nameimg1,
          img_name2: nameimg2,
          name_product_th: nameth,
          name_product_en: nameen,
          price_product: price_product,
          price_sale: price_sale,
          detail_product: detail_product,
          size_product: size_product,
          excellence: excellence,
          ready_to_build: readyy,
          type_product: type_product,
          product_document: product_document,
          product_service: product_service,
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
        setShow2(false);
        window.location.reload(false);
      });
    // fetch(ROOT_API + "/api/putproduct", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify()
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
  const delpro = () => {
    fetch(ROOT_API + "/api/deleteproduct?id_product=" + idpro)
      .then((res) => res.json())
      .then(
        (result) => {
          Toast.fire({
            icon: "success",
            title: "Item deleted successfully.",
          });
          setShow3(false);
          window.location.reload(false);
        },
        (error) => {}
      );
  };
  const onChange11 = (editorState) => {
    seteditorState(editorState);

    setdetail_product(
      draftToHtml(convertToRaw(editorState.getCurrentContent())).toString(
        "html"
      )
    );
  };
  const onChange12 = (editorState) => {
    seteditorState2(editorState);

    setproduct_document(
      draftToHtml(convertToRaw(editorState.getCurrentContent())).toString(
        "html"
      )
    );
  };
  const onChange13 = (editorState) => {
    seteditorState3(editorState);

    setproduct_service(
      draftToHtml(convertToRaw(editorState.getCurrentContent())).toString(
        "html"
      )
    );
  };
  return (
    <div style={{ padding: "1rem" }}>
      {cookies.get("Type_Login") !== "admin" && (
        <Button
          style={{ marginBottom: "1rem" }}
          onClick={() => {
            inputpost();
            handleShow();
          }}
        >
          Add Product
        </Button>
      )}
      {product.length !== 0 && (
        <DataTable
          idtable="example3"
          data={product}
          tablehead={[
            "Name Product Th",
            "Name Product En",
            "Price Product",
            "Price Sale",
            "Detail Product",
            "Size Product",

            "Product Document",
            "Product Service",
            "Type Product",
            "Name Gallery",
            "Created Product",
          ]}
          title="Product DataTable"
          bodytable={[
            "name_product_th",
            "name_product_en",
            "price_product",
            "price_sale",
            "detail_product",
            "size_product",

            "product_document",
            "product_service",
            "type_product",
            "name_gallery",
            "created_product",
          ]}
          imgtable="img_product"
          imgtable2="img_plan"
          onEdit={(event, index) => {
            inputedit(index);
            handleShow2();
          }}
          onDelete={(event, index) => {
            setidpro(product[index].id_product);
            handleShow3();
          }}
        />
      )}
      <Modal  size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            postpro();
          }}
        >
          <Modal.Body>
            <select
              className="form-control"
              required
              style={{ marginBottom: "1rem" }}
              onChange={(e) => {
                setselect(e.target.value);
              }}
            >
              <option key="2e3e32e3" value="">
                {"<------ Select Gallery ------>"}
              </option>
              {gallery.map((gallery) => (
                <option key={gallery.id_gallery} value={gallery.id_gallery}>
                  {gallery.name_gallery}
                </option>
              ))}
            </select>
            <Row>
              <Col>
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
              </Col>
              <Col>
                <h6>Upload Image Plan :</h6>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      name="file"
                      required
                      onChange={onChange2}
                    />
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
            <h6>Name Product TH :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={nameth}
              onChange={(e) => {
                setnameth(e.target.value);
              }}
            />
            <h6>Name Product EN :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={nameen}
              onChange={(e) => {
                setnameen(e.target.value);
              }}
            />
            <h6>Price Product :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={price_product}
              onChange={(e) => {
                setprice_product(e.target.value);
              }}
            />
            <h6>Price Sale :</h6>
            <input
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={price_sale}
              onChange={(e) => {
                setprice_sale(e.target.value);
              }}
            />
            <h6>Detail Product :</h6>
            {/* <textarea
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={detail_product}
              onChange={(e) => {
                setdetail_product(e.target.value);
              }}
            /> */}
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper tdee"
              editorClassName="demo-editor"
              onEditorStateChange={onChange11}
            />
            <h6>Size Product :</h6>
            <input
              required
              className="form-control"
              type="text"
              required
              style={{ marginBottom: "1rem" }}
              value={size_product}
              onChange={(e) => {
                setsize_product(e.target.value);
              }}
            />

            <h6>Type Product :</h6>
            <input
              required
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={type_product}
              onChange={(e) => {
                settype_product(e.target.value);
              }}
            />
            <h6>Product Document :</h6>
            {/* <input
              required
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={product_document}
              onChange={(e) => {
                setproduct_document(e.target.value);
              }}
            /> */}
            <Editor
              editorState={editorState2}
              wrapperClassName="demo-wrapper tdee"
              editorClassName="demo-editor"
              onEditorStateChange={onChange12}
            />
            <h6>After Service :</h6>
            {/* <input
              required
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={product_service}
              onChange={(e) => {
                setproduct_service(e.target.value);
              }}
            /> */}
            <Editor
              editorState={editorState3}
              wrapperClassName="demo-wrapper tdee"
              editorClassName="demo-editor"
              onEditorStateChange={onChange13}
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
      <Modal  size="lg" show={show2} onHide={handleClose2} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            putpro();
          }}
        >
          <Modal.Body>
            <Row>
              <Col>
                <h6>Upload Image Product :</h6>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      name="file"
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
              </Col>
              <Col>
                <h6>Upload Image Plan :</h6>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      name="file"
                      onChange={onChange2}
                    />
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
            <h6>Name Product TH :</h6>
            <input
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={nameth}
              onChange={(e) => {
                setnameth(e.target.value);
              }}
            />
            <h6>Name Product EN :</h6>
            <input
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={nameen}
              onChange={(e) => {
                setnameen(e.target.value);
              }}
            />
            <h6>Price Product :</h6>
            <input
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={price_product}
              onChange={(e) => {
                setprice_product(e.target.value);
              }}
            />
            <h6>Price Sale :</h6>
            <input
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={price_sale}
              onChange={(e) => {
                setprice_sale(e.target.value);
              }}
            />
            <h6>Detail Product :</h6>
            {/* <textarea
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={detail_product}
              onChange={(e) => {
                setdetail_product(e.target.value);
              }}
            /> */}
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper tdee"
              editorClassName="demo-editor"
              onEditorStateChange={onChange11}
            />
            <h6>Size Product :</h6>
            <input
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={size_product}
              onChange={(e) => {
                setsize_product(e.target.value);
              }}
            />
            <h6>Excellence :</h6>
            <textarea
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={excellence}
              onChange={(e) => {
                setexcellence(e.target.value);
              }}
            />
            <h6>Ready to build :</h6>
            <input
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={readyy}
              onChange={(e) => {
                setreadyy(e.target.value);
              }}
            />
            <h6>Type Product :</h6>
            <input
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={type_product}
              onChange={(e) => {
                settype_product(e.target.value);
              }}
            />
            <h6>Product Document :</h6>
            {/* <input
              required
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={product_document}
              onChange={(e) => {
                setproduct_document(e.target.value);
              }}
            /> */}
            <Editor
              editorState={editorState2}
              wrapperClassName="demo-wrapper tdee"
              editorClassName="demo-editor"
              onEditorStateChange={onChange12}
            />
            <h6>After Service :</h6>
            {/* <input
              required
              className="form-control"
              type="text"
              style={{ marginBottom: "1rem" }}
              value={product_service}
              onChange={(e) => {
                setproduct_service(e.target.value);
              }}
            /> */}
            <Editor
              editorState={editorState3}
              wrapperClassName="demo-wrapper tdee"
              editorClassName="demo-editor"
              onEditorStateChange={onChange13}
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
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{ textAlign: "center" }}>Delete confirmation</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            No
          </Button>
          <Button variant="primary" onClick={delpro}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
