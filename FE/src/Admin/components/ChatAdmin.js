import React, { Component } from "react";
import "../css/Chat.css";
import ROOT_API from "../../config/Aip_Url";
import Cookies from "universal-cookie";
import URL_img from "../../config/URL_img";
import axios from "axios";
const qs = require("querystring");
const cookies = new Cookies();
export default class ChatAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatM: [],
      getchat: <></>,
      messages: "",
      le: 0
    };
  }
  componentDidMount() {
    axios
      .get(ROOT_API + "/api/getchat?id_chat_room=" + this.props.id)
      .then(res => {
        this.setState({ chatM: res.data });
        var messageBody = document.querySelector("#mm");
        messageBody.scrollTop =
          messageBody.scrollHeight - messageBody.clientHeight;
        this.setState({
          getchat: setInterval(() => {
            axios
              .get(ROOT_API + "/api/getchat?id_chat_room=" + this.props.id)
              .then(res => {
                this.setState({ chatM: res.data });
                if (this.state.le < res.data.length) {
                  var messageBody = document.querySelector("#mm" );
                  messageBody.scrollTop =
                    messageBody.scrollHeight - messageBody.clientHeight;
                }
                this.setState({ le: res.data.length });
              });
          }, 1000)
        });
      });
  }
  componentWillUnmount() {
    clearInterval(this.state.getchat);
  }
  sendmess() {
    axios
      .post(
        ROOT_API + "/api/postchatAdmin",
        qs.stringify({
          id_chat_room: this.props.id,
          id_user: "fe3fe3c3cr34",
          message: this.state.messages
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(response => {
        this.setState({ messages: "" });
        axios
          .get(ROOT_API + "/api/getchat?id_chat_room=" + this.props.id)
          .then(res => {
            this.setState({ chatM: res.data });
            var messageBody = document.querySelector("#mm");
            messageBody.scrollTop =
              messageBody.scrollHeight - messageBody.clientHeight;
          });
      })
      .catch(error => {});
  }
  render() {
    return (
      <div style={{ marginTop: "2rem", height: "90vh" }}>
        <div
          className="card card-prirary cardutline direct-chat direct-chat-primary"
          style={{ height: "100%" }}
        >
          <div className="card-header">
            <img
              className="direct-chat-img"
              src={URL_img + this.props.id_user}
              alt="User"
              style={{ marginRight: "1rem" }}
            />
            {this.props.full}
            {/*<h3 className="card-title">Direct Chat</h3>
             <div className="card-tools">
              <button
                type="button"
                className="btn btn-tool"
                data-card-widget="collapse"
              >
                <i className="fas fa-minus" />
              </button>
            </div> */}
          </div>
          <div className="card-body">
            <div
              className="direct-chat-messages"
              id="mm"
              style={{ height: "100%" }}
            >
              {this.state.chatM.map(cm => (
                <>
                  {cm.type_user !== "admin" && (
                    <div className="direct-chat-msg">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-left">
                          {cm.f_name_user + " " + cm.l_name_user}
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
                  {cm.type_user === "admin" && (
                    <div className="direct-chat-msg right">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-right">
                          {cm.f_name_user + " " + cm.l_name_user}
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
                placeholder="Type Message ..."
                className="form-control"
                value={this.state.messages}
                onChange={e => {
                  axios
                    .get(
                      ROOT_API + "/api/putread?id_chat_room=" + this.props.id
                    )
                    .then(res => {});
                  this.setState({ messages: e.target.value });
                }}
              />
              <span className="input-group-append">
                <button
                  className="btn btn-primary Btn1"
                  style={{ marginRight: "0" }}
                  onClick={this.sendmess.bind(this)}
                >
                  Send
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
