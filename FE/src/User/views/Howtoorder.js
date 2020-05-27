import React, { Component } from "react";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import { Container, Row, Image } from "react-bootstrap";
import ROOT_API from "../../config/Aip_Url";
import URL_img from "../../config/URL_img";
export default class Howtoorder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howto: []
    };
  }

  componentDidMount() {
    document.title = "How To Order";
    fetch(ROOT_API + "/api/getHowTo")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ howto: result });
       
        },
        error => {}
      );
  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.state.howto.length !== 0 && (
              <Image
                src={URL_img + this.state.howto[0].img_how_to}
                width="100%"
              />
            )}
          </Row>
        </Container>

        <Advertisement />
        <OutServices />
        <IssueHome />
        <Footer />
      </div>
    );
  }
}
