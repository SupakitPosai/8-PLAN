import React, { Component } from "react";
import { withRouter, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import TH from "../../img/TH.jpg";
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
import Logo from "../../img/8Plan.jpg";
import MyOrder from "./MyOrder";
import Bill from "./Bill";
const cookies = new Cookies();
//  cookies.set('Type_Login', 'admin', { path: '/' });
//cookies.remove('Type_Login', { path: '/' })
const NotFoundPage = () => <h1>NotFoundPage</h1>;
class IndexUser extends Component {
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
      onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: "success",
      title: "ออกจากระบบสำเร็จ"
    });
  }
  render() {
    return (
      <div>
        <div id="nav1">
          <Navbar expand="lg" className="nav" sticky="top">
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

              <Link
                style={{ color: "#fff" }}
                className="navbar2 nam"
                to="/About"
              >
                about
              </Link>

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
                <Link
                  style={{ color: "#fff" }}
                  className="navbar2"
                  to="/ProductGallery/All"
                >
                  product gallery
                </Link>
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
                      {/* <FaUserCircle style={{ fontSize: '1.5rem', color: "#fff" }} /> */}
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
                  </Link> */}
                </div>
              </div>
            </Container>
          </Navbar>
        </div>

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
          <Route component={NotFoundPage} />
        </Switch>

        <FooterLine />
      </div>
    );
  }
}
export default withRouter(IndexUser);
