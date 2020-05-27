import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/ProductCat.css";
import ROOT_API from "../../config/Aip_Url";
import URL_img from "../../config/URL_img";
import { Link } from "react-router-dom";

export default class ProductCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      typeGallery: [],
      Gallery: [],
      GalleryDiv: [],
      GalleryDiv2: [],
    };
  }

  componentDidMount() {
    fetch(ROOT_API + "/api/typeGallery")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ typeGallery: result });
          fetch(
            ROOT_API +
              "/api/gallery?id_type_gallery=" +
              this.state.typeGallery[0].id_type_gallery
          )
            .then((res) => res.json())
            .then(
              (result) => {
                this.setState({ Gallery: result });
                // console.log("object", this.state.Gallery);
              },
              (error) => {}
            );
        },
        (error) => {}
      );
  }
  click(id) {
    fetch(ROOT_API + "/api/gallery?id_type_gallery=" + id)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            Gallery: result,
            GalleryDiv: <></>,
            GalleryDiv2: <></>,
          });
          //console.log("object", this.state.Gallery);
          for (let index = 0; index < this.state.Gallery.length; index++) {
            if (index % 2 === 0) {
              this.setState({
                GalleryDiv2: (
                  <>
                    {this.state.GalleryDiv2}
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <Link
                        to={
                          "/ProductGallery/" +
                          this.state.Gallery[index].id_gallery
                        }
                        style={{ width: "50%" }}
                      >
                        <Image
                          src={URL_img + this.state.Gallery[index].img_gallery}
                          width="100%"
                        />
                        <h1 className="imgText">
                          {this.state.Gallery[index].name_gallery}
                        </h1>
                      </Link>
                      {index + 1 !== this.state.Gallery.length && (
                        <Link
                          to={
                            "/ProductGallery/" +
                            this.state.Gallery[index + 1].id_gallery
                          }
                          style={{ width: "50%" }}
                        >
                          <Image
                            src={
                              URL_img +
                              this.state.Gallery[index + 1].img_gallery
                            }
                            width="100%"
                          />
                          <h1 className="imgText">
                            {this.state.Gallery[index + 1].name_gallery}
                          </h1>
                        </Link>
                      )}
                    </div>
                  </>
                ),
                GalleryDiv: <></>,
              });
            }
          }
        },
        (error) => {}
      );
  }
  render() {
    return (
      <div>
        {/* <Container>
          <div className="boxtext"></div>
          <div className="He1">
            {" "}
            <h1 className="htext">PRODUCT </h1>
            <h1 className="textlast">CATEGORIES</h1>
          </div>
          <Row>
            <Col className="Filter">
              <p style={{ marginRight: "10px" }}>Filter : </p>
              <div className="Filter">
                {this.state.typeGallery.map((typeGallery, index) => (
                  <label key={index} className="cont">
                    {typeGallery.name_type_gallery}
                    <input
                      type="radio"
                      defaultChecked={index === 0 && "checked"}
                      name="radio"
                      onClick={() => this.click(typeGallery.id_type_gallery)}
                    />
                    <span className="checkmark" />
                  </label>
                ))}
              </div>
            </Col>
          </Row>
        </Container> */}
        <Container>
          <Row>
            {this.state.Gallery.map((ga) => (
              <Col
                md={4}
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              >
                <Link className="aa" to={"/ProductGallery/" + ga.id_gallery}>
                  <div
                    style={{
                      backgroundImage: `url(${URL_img + ga.img_gallery})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div
                      style={{
                        paddingBottom: "20vw",
                        backgroundColor: "#2f2f3033",
                        color: "#ff9500",
                        paddingTop: "1rem",
                      }}
                    >
                      <h2 style={{ textAlign: "center" }}>{ga.name_gallery}</h2>
                      <hr
                        style={{
                          backgroundColor: "#ff9500",
                          width: "80%",
                          height: "1.8px",
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
            
          </Row>
          <div id="About" ></div>
        </Container>
      </div>
    );
  }
}
