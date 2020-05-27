import React, { Component } from "react";

import { Container, Row, Image } from "react-bootstrap";
import ROOT_API from "../../config/Aip_Url";
import URL_img from "../../config/URL_img";
export default class Advertisement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ad: []
    };
  }

  componentDidMount() {
    fetch(ROOT_API + "/api/getAdvertisement")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ ad: result });
        },
        error => {}
      );
  }
  render() {
    return (
      <div style={{ marginBottom: "1.5rem" }}>
        <Container>
          <Row style={{marginTop:'2rem'}}>
            {this.state.ad.length !== 0 && (
              <a href={this.state.ad[0].url_advertisement}>
                {" "}
                <Image src={URL_img + this.state.ad[0].img_advertisement} width="100%" />
              </a>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
