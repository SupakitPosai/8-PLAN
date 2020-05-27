import React, { Component } from "react";
import "../css/Chat.css";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import URL_img from "../../config/URL_img";
import axios from "axios";
const qs = require("querystring");
const cookies = new Cookies();
export default class CardChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatM: [],
      getchat: <></>,
      messages: "",
      le: 0,
    };
  }
  componentDidMount() {
    if (cookies.get("ID_Login") !== undefined) {
      axios
        .get(ROOT_API + "/api/getchatuser?id_user=" + cookies.get("ID_Login"))
        .then((res) => {
          this.setState({ chatM: res.data });
          var messageBody = document.querySelector("#" + this.props.id);
          messageBody.scrollTop =
            messageBody.scrollHeight - messageBody.clientHeight;
          this.setState({
            getchat: setInterval(() => {
              axios
                .get(
                  ROOT_API +
                    "/api/getchatuser?id_user=" +
                    cookies.get("ID_Login")
                )
                .then((res) => {
                  this.setState({
                    chatM: res.data,
                  });
                  if (this.state.le < res.data.length) {
                    var messageBody = document.querySelector(
                      "#" + this.props.id
                    );
                    messageBody.scrollTop =
                      messageBody.scrollHeight - messageBody.clientHeight;
                  }
                  this.setState({ le: res.data.length });
                });
            }, 1000),
          });
        });
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.getchat);
  }
  sendmess() {
    if (cookies.get("ID_Login") !== undefined) {
      axios
      .post(
        ROOT_API + "/api/postchatdb",
        qs.stringify({
          id_user: cookies.get("ID_Login"),
          message: this.state.messages,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        this.setState({ messages: "" });
        axios
          .get(ROOT_API + "/api/getchatuser?id_user=" + cookies.get("ID_Login"))
          .then((res) => {
            this.setState({ chatM: res.data });
            var messageBody = document.querySelector("#" + this.props.id);
            messageBody.scrollTop =
              messageBody.scrollHeight - messageBody.clientHeight;
          });
      })
      .catch((error) => {});
    } else {
      window.location.replace("/Signin");
    }
    
  }
  render() {
    return (
      <div>
        <div className="card card-prirary cardutline direct-chat direct-chat-primary">
          <div className="card-header">
            <h3 className="card-title">แชท</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>
            </div>
          </div>
          <div className="card-body">
            <div className="direct-chat-messages" id={this.props.id}>
              {this.state.chatM.map((cm) => (
                <>
                  {cm.type_user === "admin" && (
                    <div className="direct-chat-msg">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-left">
                          Admin
                        </span>
                        <span className="direct-chat-timestamp float-right">
                          {cm.date_chat}
                        </span>
                      </div>
                      <img
                        className="direct-chat-img"
                        src={URL_img + cm.img_user}
                        alt="User"
                      />
                      <div className="direct-chat-text">{cm.message}</div>
                    </div>
                  )}
                  {cm.type_user === "SuperAdmin" && (
                    <div className="direct-chat-msg">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-left">
                          Admin
                        </span>
                        <span className="direct-chat-timestamp float-right">
                          {cm.date_chat}
                        </span>
                      </div>
                      <img
                        className="direct-chat-img"
                        src={URL_img + cm.img_user}
                        alt="User"
                      />
                      <div className="direct-chat-text">{cm.message}</div>
                    </div>
                  )}
                  {cm.type_user === "user" && (
                    <div className="direct-chat-msg right">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-right">
                          {cookies.get("F_name") + " " + cookies.get("L_name")}
                        </span>
                        <span className="direct-chat-timestamp float-left">
                          {cm.date_chat}
                        </span>
                      </div>
                      <img
                        className="direct-chat-img"
                        src={URL_img + cm.img_user}
                        alt="User"
                      />
                      <div className="direct-chat-text">{cm.message}</div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
          <div className="card-footer">
            <div className="input-group">
              <input
                type="text"
                name="message"
                placeholder="พิมพ์ข้อความ ..."
                className="form-control"
                value={this.state.messages}
                onChange={(e) => {
                  this.setState({ messages: e.target.value });
                }}
              />
              <span className="input-group-append">
                <button
                  className="btn btn-primary Btn1"
                  style={{ marginRight: "0" }}
                  onClick={this.sendmess.bind(this)}
                >
                  ส่ง
                </button>
              </span>
            </div>
          </div>
          {/* /.card-footer*/}
        </div>
      </div>
    );
  }
}
