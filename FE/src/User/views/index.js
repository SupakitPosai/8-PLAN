import React, { Component } from "react";
import { withRouter, Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Image,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import TH from "../../img/TH.jpg";
import EN from "../../img/EN.jpg";
import "../css/navbar.css";
import Home from "./Home";
import Navigation from "../views/Navbar";
import FooterLine from "../components/FooterLine";
import About from "../views/About";
import Projects from "../views/Projects";
import Updates from "../views/Updates";
import ProductGallery from "../views/ProductGallery";
import Howtoorder from "../views/Howtoorder";
import DetailProduct from "./DetailProduct";
import Cookies from "universal-cookie";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import URL_img from "../../config/URL_img";
import Swal from "sweetalert2";
import Logo from "../../img/8Plan.png";
import MyOrder from "./MyOrder";
import Bill from "./Bill";
import ROOT_API from "../../config/Aip_Url";
import CartCom from "../components/CartCom";
import Cart from "./Cart";
import Consultant from "./Consultant";
import GalleryDesign from "./GalleryDesign";
import SendYou from "./SendYou";
import Payment from "./Payment";
import Articles from "./Articles";
import CheckHo from "./CheckHo";
const cookies = new Cookies();
//  cookies.set('Type_Login', 'admin', { path: '/' });
//cookies.remove('Type_Login', { path: '/' })
const NotFoundPage = () => <h1>NotFoundPage</h1>;
class IndexUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      getnav: [],
    };
  }
  componentDidMount() {
    console.log(this.props);
    fetch(ROOT_API + "/api/getnav")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ getnav: result });
        },
        (error) => {}
      );
  }
  addtype() {
    cookies.set("Type_Login", "admin", { path: "/" });

    // this.props.history.push('/Admin')
  }
  addlanguageth() {
    cookies.set("language", "TH", { path: "/" });
    window.location.reload(false);
  }
  addlanguageen() {
    cookies.set("language", "EN", { path: "/" });
    window.location.reload(false);
  }
  logout() {
    // cookies.set('Type_Login', 'user', { path: '/' });
    cookies.remove("ID_Login", { path: "/" });
    cookies.remove("Type_Login", { path: "/" });
    cookies.remove("F_name", { path: "/" });
    cookies.remove("L_name", { path: "/" });
    cookies.remove("Img", { path: "/" });

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
      title: "ออกจากระบบสำเร็จ",
    });
  }
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/#home">
              <Image
                className="mlogo"
                src={Logo}
                style={{ width: "100px", marginRight: "10px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="n1" href="/#home">
                  {cookies.get("language") === undefined && "หน้าหลัก"}
                  {cookies.get("language") === "TH" && "หน้าหลัก"}
                  {cookies.get("language") === "EN" && "HOME"}
                </Nav.Link>
                <div className="dropdown">
                  <Nav.Link className="n1" href="##">
                    {cookies.get("language") === undefined && "สินค้า"}
                    {cookies.get("language") === "TH" && "สินค้า"}
                    {cookies.get("language") === "EN" && "PRODUCT"}
                  </Nav.Link>
                  <div className="dropdown-content">
                    {this.state.getnav.map((na) => (
                      <>
                        {na.ga.map((ga) => (
                          <a
                            style={{ color: "#000" }}
                            className="navbar2"
                            href={"/ProductGallery/" + ga.id_gallery}
                          >
                            {ga.name_gallery}
                          </a>
                        ))}
                      </>
                    ))}
                  </div>
                </div>
                <div className="dropdown">
                  <Nav.Link className="n1" href="#sdsa">
                    {cookies.get("language") === undefined && "บริการอื่นๆ"}
                    {cookies.get("language") === "TH" && "บริการอื่นๆ"}
                    {cookies.get("language") === "EN" && "SERVICE"}
                  </Nav.Link>

                  <div className="dropdown-content" >
                    <a
                      style={{ color: "#000" }}
                      className="navbar2"
                      href="/GalleryDesign"
                    >
                      {cookies.get("language") === undefined &&
                        "แกลลอรี่ ดีไซน์"}
                      {cookies.get("language") === "TH" && "แกลลอรี่ ดีไซน์"}
                      {cookies.get("language") === "EN" && "GALLERY DESIGN"}
                    </a>
                    <a
                      style={{ color: "#000" }}
                      className="navbar2"
                      href="/Consultant"
                    >
                      {cookies.get("language") === undefined && "ที่ปรึกษา"}
                      {cookies.get("language") === "TH" && "ที่ปรึกษา"}
                      {cookies.get("language") === "EN" && "CONSULTANT"}
                    </a>
                    <a
                      style={{ color: "#000" }}
                      className="navbar2"
                      href="/Check"
                    >
                      {cookies.get("language") === undefined && "ตรวจบ้าน"}
                      {cookies.get("language") === "TH" && "ตรวจบ้าน"}
                      {cookies.get("language") === "EN" && "INSPECT HOUSE"}
                    </a>
                  </div>
                </div>
                <Nav.Link className="n1" href="/About">
                  {cookies.get("language") === undefined && "เกี่ยวกับเรา"}
                  {cookies.get("language") === "TH" && "เกี่ยวกับเรา"}
                  {cookies.get("language") === "EN" && "ABOUT US"}
                </Nav.Link>
                <Nav.Link className="n1" href="/Send">
                  {cookies.get("language") === undefined && "ติดต่อเรา"}
                  {cookies.get("language") === "TH" && "ติดต่อเรา"}
                  {cookies.get("language") === "EN" && "CONTACT US"}
                </Nav.Link>
                {/* <div className="dropdown mdn">
                  <button className="dropbtn">
                    {cookies.get("language") === undefined && (
                      <Image
                        className="imgTh"
                        src={TH}
                        style={{ width: "35px", margin: "0 1rem" }}
                      />
                    )}
                    {cookies.get("language") === "TH" && (
                      <Image
                        className="imgTh"
                        src={TH}
                        style={{ width: "35px", margin: "0 1rem" }}
                      />
                    )}
                    {cookies.get("language") === "EN" && (
                      <Image
                        className="imgTh"
                        src={EN}
                        style={{ width: "35px", margin: "0 1rem" }}
                      />
                    )}
                  </button>
                  <div className="dropdown-content" style={{ minWidth: "0" }}>
                    <Link to="##" onClick={this.addlanguageth.bind(this)}>
                      <Image
                        src={TH}
                        style={{ width: "35px", margin: ".5rem 1rem" }}
                      />
                    </Link>
                    <Link to="##" onClick={this.addlanguageen.bind(this)}>
                      <Image
                        src={EN}
                        style={{ width: "35px", margin: ".5rem 1rem" }}
                      />
                    </Link>
                  </div>
                </div> */}
                <div className="dropdown mdn">
                  {cookies.get("Type_Login") === undefined && (
                    <>
                      <button className="dropbtn">
                        <span>
                          {" "}
                          <FaUserCircle
                            style={{ fontSize: "1.5rem", color: "#ff9500" }}
                          />
                        </span>
                        <span
                          style={{
                            fontSize: "1rem",
                            color: "#ff9500",
                            marginLeft: "1rem",
                          }}
                        >
                          {cookies.get("language") === undefined &&
                            "เข้าสู่ระบบ"}
                          {cookies.get("language") === "TH" && "เข้าสู่ระบบ"}
                          {cookies.get("language") === "EN" && "Login"}
                        </span>
                      </button>
                      <div className="dropdown-content">
                        <Link to="/Signin">
                          {cookies.get("language") === undefined &&
                            "เข้าสู่ระบบ"}
                          {cookies.get("language") === "TH" && "เข้าสู่ระบบ"}
                          {cookies.get("language") === "EN" && "Sign in"}
                        </Link>
                        <Link to="/Signup">
                          {cookies.get("language") === undefined &&
                            "ลงชื่อเข้าใช้"}
                          {cookies.get("language") === "TH" && "ลงชื่อเข้าใช้"}
                          {cookies.get("language") === "EN" && "Sign up"}
                        </Link>
                      </div>
                    </>
                  )}
                  {cookies.get("Type_Login") === "user" && (
                    <>
                      <button className="dropbtn" style={{ padding: "0" }}>
                        <span>
                          {" "}
                          <Image
                            src={URL_img + cookies.get("Img")}
                            roundedCircle
                            style={{
                              width: "35px",
                              height: "35px",
                              margin: "0",
                            }}
                          />
                        </span>
                        <span
                          style={{
                            fontSize: "1rem",
                            color: "#ff9500",
                            marginLeft: "1rem",
                          }}
                        >
                          {cookies.get("F_name") + " " + cookies.get("L_name")}
                        </span>
                        {/* <FaUserCircle
                      style={{ fontSize: "1.5rem", color: "#fff" }}
                    /> */}
                      </button>
                      <div className="dropdown-content">
                        <Link to="/MyOrder">
                          {cookies.get("language") === undefined && "ออเดอร์"}
                          {cookies.get("language") === "TH" && "ออเดอร์"}
                          {cookies.get("language") === "EN" && "My Order"}
                        </Link>
                        <Link onClick={() => this.logout()} to="/Signin">
                          {cookies.get("language") === undefined &&
                            "ออกจากระบบ"}
                          {cookies.get("language") === "TH" && "ออกจากระบบ"}
                          {cookies.get("language") === "EN" && "Log out"}
                        </Link>
                      </div>
                    </>
                  )}
                </div>
                <div className="mdn">
                  <CartCom bt="cartm" />
                </div>
              </Nav>
            </Navbar.Collapse>
            {/* <div className="dropdown ddn">
              <button className="dropbtn">
                {cookies.get("language") === undefined && (
                  <Image
                    className="imgTh"
                    src={TH}
                    style={{ width: "35px", margin: "0 1rem" }}
                  />
                )}
                {cookies.get("language") === "TH" && (
                  <Image
                    className="imgTh"
                    src={TH}
                    style={{ width: "35px", margin: "0 1rem" }}
                  />
                )}
                {cookies.get("language") === "EN" && (
                  <Image
                    className="imgTh"
                    src={EN}
                    style={{ width: "35px", margin: "0 1rem" }}
                  />
                )}
              </button>
              <div className="dropdown-content" style={{ minWidth: "0" }}>
                <Link to="##" onClick={this.addlanguageth.bind(this)}>
                  <Image
                    src={TH}
                    style={{ width: "35px", margin: ".5rem 1rem" }}
                  />
                </Link>
                <Link to="##" onClick={this.addlanguageen.bind(this)}>
                  <Image
                    src={EN}
                    style={{ width: "35px", margin: ".5rem 1rem" }}
                  />
                </Link>
              </div>
            </div> */}
            <div className="dropdown ddn">
              {cookies.get("Type_Login") === undefined && (
                <>
                  <button className="dropbtn">
                    <span>
                      {" "}
                      <FaUserCircle
                        style={{ fontSize: "1.5rem", color: "#ff9500" }}
                      />
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#ff9500",
                        marginLeft: "1rem",
                      }}
                    >
                      {cookies.get("language") === undefined && "เข้าสู่ระบบ"}
                      {cookies.get("language") === "TH" && "เข้าสู่ระบบ"}
                      {cookies.get("language") === "EN" && "Login"}
                    </span>
                  </button>
                  <div className="dropdown-content">
                    <Link to="/Signin">
                      {cookies.get("language") === undefined && "เข้าสู่ระบบ"}
                      {cookies.get("language") === "TH" && "เข้าสู่ระบบ"}
                      {cookies.get("language") === "EN" && "Sign in"}
                    </Link>
                    <Link to="/Signup">
                      {cookies.get("language") === undefined && "ลงชื่อเข้าใช้"}
                      {cookies.get("language") === "TH" && "ลงชื่อเข้าใช้"}
                      {cookies.get("language") === "EN" && "Sign up"}
                    </Link>
                  </div>
                </>
              )}
              {cookies.get("Type_Login") === "user" && (
                <>
                  <button className="dropbtn" style={{ padding: "0" }}>
                    <span>
                      {" "}
                      <Image
                        src={URL_img + cookies.get("Img")}
                        roundedCircle
                        style={{ width: "35px", height: "35px", margin: "0" }}
                      />
                    </span>
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#ff9500",
                        marginLeft: "1rem",
                      }}
                    >
                      {cookies.get("F_name") + " " + cookies.get("L_name")}
                    </span>
                    {/* <FaUserCircle
                      style={{ fontSize: "1.5rem", color: "#fff" }}
                    /> */}
                  </button>
                  <div className="dropdown-content">
                    <Link to="/MyOrder">
                      {cookies.get("language") === undefined && "ออเดอร์"}
                      {cookies.get("language") === "TH" && "ออเดอร์"}
                      {cookies.get("language") === "EN" && "My Order"}
                    </Link>
                    <Link onClick={() => this.logout()} to="/Signin">
                      {cookies.get("language") === undefined && "ออกจากระบบ"}
                      {cookies.get("language") === "TH" && "ออกจากระบบ"}
                      {cookies.get("language") === "EN" && "Log out"}
                    </Link>
                  </div>
                </>
              )}
            </div>
            <div className="ddn">
              <CartCom bt="cart" />
            </div>
          </Container>
        </Navbar>
        {/* <Navbar expand="lg" className="nav" sticky="top">
            <Container>
              <Link
                style={{ color: "#fff" }}
                to="/Navigation"
                className="iconmenu"
              >
                {" "}
                <GiHamburgerMenu style={{ fontSize: "1.5rem" }} />
              </Link>
              <Link to="/">
                <Image
                  className="mlogo"
                  src={Logo}
                  style={{ width: "100px", marginRight: "10px" }}
                />
              </Link>

              <a
                style={{ color: "#fff" }}
                className="navbar2 nam"
                href="#About"
              >
                about
              </a>

              <div className="n1 nam">
                <Link
                  style={{ color: "#fff" }}
                  className="navbar2"
                  to="/Projects"
                >
                  projects
                </Link>
              </div>
              <div className="n1 nam">
                <Link
                  style={{ color: "#fff" }}
                  className="navbar2"
                  to="/Updates"
                >
                  updates
                </Link>
              </div>
              <div className="n1 n2 nam" style={{ width: "63%" }}>
                <div className="dropdown">
                  <a
                    href="##"
                    style={{ color: "#fff" }}
                    className="navbar2 dropbtn"
                  >
                    product gallery
                  </a>

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
              </div>
              <div className="n1 n3 nam" style={{ width: "100%" }}>
                <Link
                  style={{ color: "#fff" }}
                  className="navbar2"
                  to="/Howtoorder"
                >
                  how to order
                </Link>
              </div>
              <div className="auto1"></div>

              <Nav.Link style={{ color: "#fff" }} className="searchm">
                <FaSearch style={{ fontSize: "1.5rem" }} />
              </Nav.Link>

              <div className="dropdown">
                {cookies.get("Type_Login") === undefined && (
                  <>
                    <button className="dropbtn">
                      <FaUserCircle
                        style={{ fontSize: "1.5rem", color: "#fff" }}
                      />
                    </button>
                    <div className="dropdown-content">
                      <Link to="/Signin">Sign in</Link>
                      <Link to="/Signup">Sign up</Link>
                    </div>
                  </>
                )}
                {cookies.get("Type_Login") === "user" && (
                  <>
                    <button className="dropbtn" style={{ padding: "0" }}>
                      <Image
                        src={URL_img + cookies.get("Img")}
                        roundedCircle
                        style={{ width: "35px", height: "35px", margin: "0" }}
                      />
                      {/* <FaUserCircle style={{ fontSize: '1.5rem', color: "#fff" }} /> 
                    </button>
                    <div className="dropdown-content">
                      <Link to="/MyOrder">My Order</Link>
                      <Link onClick={() => this.logout()} to="/Signin">
                        Log out
                      </Link>
                    </div>
                  </>
                )}
              </div>

              <div className="dropdown">
                <button className="dropbtn">
                  <Image
                    className="imgTh"
                    src={TH}
                    style={{ width: "35px", margin: "0 1rem" }}
                  />
                </button>
                <div className="dropdown-content" style={{ minWidth: "0" }}>
                  {/* <Link to="##" onClick={this.addlanguageth.bind(this)}>
                    <Image
                      src={TH}
                      style={{ width: "35px", margin: ".5rem 1rem" }}
                    />
                  </Link>
                  <Link to="##" onClick={this.addlanguageen.bind(this)}>
                    EN
                  </Link> 
                </div>
              </div>
            </Container>
          </Navbar> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Navigation" component={Navigation} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Updates" component={Updates} />
          <Route path="/ProductGallery/:id" component={ProductGallery} />
          <Route path="/Howtoorder" component={Howtoorder} />
          <Route path="/DetailProduct/:id" component={DetailProduct} />
          <Route path="/Signin" component={SignIn} />
          <Route path="/Signup" component={SignUp} />
          <Route path="/MyOrder" component={MyOrder} />
          <Route path="/Bill/:id" component={Bill} />
          <Route path="/Cart" component={Cart} />
          <Route path="/Consultant" component={Consultant} />
          <Route path="/GalleryDesign" component={GalleryDesign} />
          <Route path="/Send" component={SendYou} />
          <Route path="/Payment" component={Payment} />
          <Route path="/Articles" component={Articles} />
           <Route path="/Check" component={CheckHo} />
          <Route component={NotFoundPage} />
        </Switch>

        <FooterLine />
      </div>
    );
  }
}
export default withRouter(IndexUser);
