import React, { Component } from "react";
import { Container, Row, Col, Carousel, Image } from "react-bootstrap";
import c1 from "../../img/c1.jpg";
import c2 from "../../img/c2.jpg";
import H1 from "../../img/h1.png";
import Advertisement from "../components/Advertisement";
import OutServices from "../components/OutServices";
import IssueHome from "../components/IssueHome";
import Footer from "../components/Footer";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import URL_img from "../../config/URL_img";
import LoadingScreen from "react-loading-screen";
export default class Updates extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disableDiv1: true,
      disableDiv2: false,
      disableDiv3: false,
      disableDiv4: false,
      all1: [],
      all2: [],
      all3: [],
      news: [],
      eventt: [],
      video: [],
      banner: [],
      loading: true
    };
  }

  componentDidMount() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = "Updates";
    fetch(ROOT_API + "/api/bannerpage?page=Updates")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ banner: result });
        },
        error => {}
      );
    fetch(ROOT_API + "/api/getshownews")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ all1: result });
        },
        error => {}
      );
    fetch(ROOT_API + "/api/getshoweven")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ all2: result });
        },
        error => {}
      );
    fetch(ROOT_API + "/api/getshowvideos")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ all3: result, loading: false });
        },
        error => {}
      );
  }

  onckick(val) {
    if (val === "All") {
      this.componentDidMount();
      this.setState({
        disableDiv1: true,
        disableDiv2: false,
        disableDiv3: false,
        disableDiv4: false
      });
    } else if (val === "News") {
      fetch(ROOT_API + "/api/getNews")
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              news: result,
              disableDiv1: false,
              disableDiv2: true,
              disableDiv3: false,
              disableDiv4: false
            });
          },
          error => {}
        );
    } else if (val === "Event") {
      fetch(ROOT_API + "/api/getEvent")
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              eventt: result,
              disableDiv1: false,
              disableDiv2: false,
              disableDiv3: true,
              disableDiv4: false
            });
          },
          error => {}
        );
    } else if (val === "Video") {
      fetch(ROOT_API + "/api/getvideo")
        .then(res => res.json())
        .then(
          result => {
            this.setState({
              video: result,
              disableDiv1: false,
              disableDiv2: false,
              disableDiv3: false,
              disableDiv4: true
            });
          },
          error => {}
        );
    }
  }
  render() {
    var divStyle1 = { display: this.state.disableDiv1 ? "block" : "none" };
    var divStyle2 = { display: this.state.disableDiv2 ? "block" : "none" };
    var divStyle3 = { display: this.state.disableDiv3 ? "block" : "none" };
    var divStyle4 = { display: this.state.disableDiv4 ? "block" : "none" };
    return (
      <LoadingScreen
        //this.state.loading
        loading={this.state.loading}
        bgColor="#f1f1f1"
        spinnerColor="#F25C05"
        textColor="#676767"
        // logoSrc='/logo.png'
        // text='Here an introduction sentence (Optional)'
      >
        <div>
          <div >
            <Carousel style={{ marginBottom: "3rem" }}>
              {this.state.banner.map(ban => (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={URL_img + ban.img_banner}
                    alt="First slide"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
            <Container>
              <div className="boxtext"></div>
              <div className="He1">
                {" "}
                <h1 className="htext">UPDATE </h1>
                <h1 className="textlast">GALLERY</h1>
              </div>
              <Row>
                <Col className="Filter">
                  <p style={{ marginRight: "10px" }}>Filter : </p>
                  <div className="Filter">
                    <label className="cont">
                      All
                      <input
                        type="radio"
                        defaultChecked="checked"
                        name="radio"
                        onClick={() => this.onckick("All")}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="cont">
                      News
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => this.onckick("News")}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="cont">
                      Event
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => this.onckick("Event")}
                      />
                      <span className="checkmark" />
                    </label>
                    <label className="cont">
                      Video
                      <input
                        type="radio"
                        name="radio"
                        onClick={() => this.onckick("Video")}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </Col>
              </Row>

              <hr />
              <div style={divStyle1}>
                <h2>NEWS</h2>
                {this.state.all1.map(all => (
                  <Row style={{ marginBottom: "1rem" }}>
                    <Col sm={6}>
                      <Image src={URL_img + all.img_news} width="100%" />
                    </Col>
                    <Col>
                      <h2>{all.title_news}</h2>
                      <p>{all.detail_news}</p>
                      <p>{all.date_news}</p>
                    </Col>
                  </Row>
                ))}
                <hr />
                <h2>EVENT</h2>
                {this.state.all2.map(all => (
                  <Row style={{ marginBottom: "1rem" }}>
                    <Col sm={6}>
                      <Image src={URL_img + all.img_event} width="100%" />
                    </Col>
                    <Col>
                      <h2>{all.title_event}</h2>
                      <p>{all.detail_event}</p>
                      <p>{all.date_event}</p>
                    </Col>
                  </Row>
                ))}
                <hr />
                <h2>VIDEOS</h2>
                {this.state.all3.map(all => (
                  <Row>
                    <Col sm={6}>
                      <iframe
                        title={all.title_video_en}
                        width="100%"
                        height={315}
                        src={all.url_video}
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Col>
                    <Col>
                      <h2 style={{ fontWeight: "bold" }}>
                        {all.title_video_en}
                      </h2>
                      <p>{all.date_upload_video}</p>
                    </Col>
                  </Row>
                ))}
              </div>
              <div style={divStyle2}>
                <h2>NEWS</h2>
                {this.state.news.map(news => (
                  <Row style={{ marginBottom: "1rem" }}>
                    <Col sm={6}>
                      <Image src={URL_img + news.img_news} width="100%" />
                    </Col>
                    <Col>
                      <h2>{news.title_news}</h2>
                      <p>{news.detail_news}</p>
                      <p>{news.date_news}</p>
                    </Col>
                  </Row>
                ))}
              </div>
              <div style={divStyle3}>
                <h2>EVENT</h2>
                {this.state.eventt.map(eventt => (
                  <Row style={{ marginBottom: "1rem" }}>
                    <Col sm={6}>
                      <Image src={URL_img + eventt.img_event} width="100%" />
                    </Col>
                    <Col>
                      <h2>{eventt.title_event}</h2>
                      <p>{eventt.detail_event}</p>
                      <p>{eventt.date_event}</p>
                    </Col>
                  </Row>
                ))}
              </div>
              <div style={divStyle4}>
                <h2>VIDEOS</h2>
                {this.state.video.map(video => (
                  <Row>
                    <Col sm={6}>
                      <iframe
                        title={video.title_video_en}
                        width="100%"
                        height={315}
                        src={video.url_video}
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Col>
                    <Col>
                      <h2 style={{ fontWeight: "bold" }}>
                        {video.title_video_en}
                      </h2>
                      <p>{video.date_upload_video}</p>
                    </Col>
                  </Row>
                ))}
              </div>
            </Container>
          </div>
          <Advertisement />
          <OutServices />
          <IssueHome />
          <Footer />
        </div>
      </LoadingScreen>
    );
  }
}
