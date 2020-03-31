import React, { Component, useContext } from "react";
import Swal from "sweetalert2";
import Context from "../../store/context";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
const cookies = new Cookies();

const ButtonLogout = props => {
  const { state, actions } = useContext(Context);
  const Logout = () => {
    actions({
      type: "setState",
      payload: { ...state, type: "user" }
    });
    // cookies.set('Type_Login', 'user', { path: '/' });
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
    <div>
      <li className="nav-item">
        <a href="##" className="nav-link">
          <i className="fas fa-circle nav-icon" />
          <p>Level 1</p>
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={Logout} to="/Signin">
          <i className="fas fa-circle nav-icon" />
          <p> Logout</p>
        </Link>
      </li>
    </div>
  );
};
export default ButtonLogout;
