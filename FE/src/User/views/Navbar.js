import React, { Component } from "react";
import { Container, Row, Col ,DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "../../img/nav.jpg";
import ROOT_API from "../../config/Aip_Url";
export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getnav: []
    };
  }

  componentDidMount() {
    fetch(ROOT_API + "/api/getnav")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ getnav: result });
        },
        error => {}
      );
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Background})`,
          position: "relative",
          marginTop: "-7rem",
          height: "100vh"
        }}
      >
        <Container style={{ paddingTop: "7rem" }}>
          <Row>
            <Col>
              <ul className="b">
                <li className="menuli">
                  <Link className="menua" to="/">
                    <h2>Home</h2>
                  </Link>
                </li>
                <li className="menuli">
                  <Link className="menua" to="/About">
                    <h2>About</h2>
                  </Link>
                </li>
                <li className="menuli">
                  <Link className="menua" to="/Projects">
                    <h2>Projects</h2>
                  </Link>
                </li>
                <li className="menuli">
                    
                  <Link className="menua" to="/Updates">
                    <h2>Updates</h2>
                  </Link>
                </li>
                <li className="menuli">
                <div className="dropdown">
                <Link className="menua" to="##">
                    <h2>Product Gallery</h2>
                  </Link>

                  <div className="dropdown-content">
                    {this.state.getnav.map(na => (
                      <DropdownButton
                        key="right"
                        id={`dropdown-button-drop-right`}
                        drop="right"
                        variant="secondary"
                        title={na.name_type_gallery}
                      >
                        {na.ga.map(ga => (
                          <a
                            style={{ color: "#000" }}
                            className="navbar2"
                            href={"/ProductGallery/" + ga.id_gallery}
                          >
                            {ga.name_gallery}
                          </a>
                        ))}
                      </DropdownButton>
                    ))}
                  </div>
                </div>
                  
                </li>
                <li className="menuli">
                  <Link className="menua" to="/Howtoorder">
                    <h2>How to order</h2>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
