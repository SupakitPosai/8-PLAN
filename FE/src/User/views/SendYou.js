import React, { Component } from "react";
import Send from "../components/Send";
import IssueHome from "../components/IssueHome";
import OutServices from "../components/OutServices";

export default class SendYou extends Component {
  render() {
    return (
      <div>
        <Send />
        <OutServices />
        <IssueHome />
      </div>
    );
  }
}
