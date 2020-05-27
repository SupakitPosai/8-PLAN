import React from "react";
// import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { strengthIndicator, strengthColor } from "./strength-password";
// import { ProgressBar } from "react-bootstrap";
export default function PasswordInput(props) {
  const strength = strengthIndicator(props.value);
  const color = strengthColor(strength);
  const strength2 = (strength + strength) * 10;
  // const ss = "background-color: "+color+" width:" +strength2+"%;"
  var ss = {
    backgroundColor: color,
    width: strength2.toString() + "%"
    //
  };
  return (
    <>
      <div className="inputbox">
        <input
          type="password"
          value={props.value}
          className="password-input"
          // placeholder={props.placeholder}
          onChange={props.handleChanges}
          required
          style={{ marginBottom: "10px" }}
        />
        <label htmlFor="username">รหัสผ่าน : </label>
      </div>

      <div
        className="progress"
        style={{
          marginBottom: "1.8rem",
          backgroundColor: "transparent",
          border: "1px  solid #fff"
        }}
      >
        <div
          role="progressbar"
          className="progress-bar"
          aria-valuenow={strength2}
          aria-valuemin="0"
          aria-valuemax="100"
          style={ss}
        ></div>
      </div>
      {/* <ProgressBar now={strength2} style={{
                    backgroundColor: color                    
                }}
            /> */}
    </>
  );
}
