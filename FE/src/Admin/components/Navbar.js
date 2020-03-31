import React, {  useContext } from "react";
import Swal from "sweetalert2";
import Context from "../../store/context";
import Cookies from "universal-cookie";
import axios from "axios";
import ROOT_API from "../../config/Aip_Url";
import { Link } from "react-router-dom";
const cookies = new Cookies();
export default function Navbar() {
  const { state, actions } = useContext(Context);
  const Logout = () => {
    actions({
      type: "setState",
      payload: { ...state, type: "user" }
    });
    // cookies.set('Type_Login', 'user', { path: '/' });
    axios.get(ROOT_API + "/api/putst?status_admin=0").then(res => {});
    cookies.remove("Type_Login", { path: "/" });
    cookies.remove("ID_Login", { path: "/" });
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
      title: "Signed in successfully"
    });
  };
  return (
    <>
      <aside
        style={{ fontSize: ".8rem" }}
        className="main-sidebar sidebar-dark-primary elevation-4"
      >
        {/* Brand Logo */}
        <a href="/Admin" className="brand-link">
          <img
            src="../../dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">8-PLAN</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="../../dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="UserImage"
              />
            </div>
            <div className="info">
              <a href="/Admin" className="d-block">
                Super Admin
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
              style={{
                backgroundColor: "unset",
                paddingLeft: "0",
                marginTop: "0"
              }}
            >
              <li className="nav-header">Order</li>
              <li className="nav-item">
                <a href="/Order" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Order</p>
                </a>
              </li>
              <li className="nav-header">Chat</li>
              <li className="nav-item">
                <a href="/Chat" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Chat</p>
                </a>
              </li>
              <li className="nav-header">Product</li>
              <li className="nav-item">
                <a href="/Catergory" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Catergory</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Product" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Product</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Excellence" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Excellence</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Package" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Package</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Promotion" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Promotion</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/BestSeller" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Best Seller</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/PaymentM" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Payment Method</p>
                </a>
              </li>

              <li className="nav-header">Content</li>
              <li className="nav-item">
                <a href="/Banner" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Banner</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Videos" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Videos</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/News" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>News</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Event" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Event</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Staff" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Staff</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Projects" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Projects</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/Company" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Company</p>
                </a>
              </li>
              <li className="nav-header">Logout</li>
              <li className="nav-item">
                <Link className="nav-link" onClick={Logout} to="/Signin">
                  <i className="fas fa-circle nav-icon" />
                  <p> Logout</p>
                </Link>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </>
  );
}
