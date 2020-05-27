import React, { useEffect, Component } from "react";
import Content from "./Content";
import axios from "axios";
import ROOT_API from "../../config/Aip_Url";

// if () {
    
// }
export default function Home() {
  useEffect(() => {}, []);
  return (
    <div>
      <Content />
      <Home1 />
    </div>
  );
}

export class Home1 extends Component {
  componentDidMount() {
    axios.get(ROOT_API + "/api/putst?status_admin=1").then(res => {});
   
  }
  componentWillUnmount() {
    axios.get(ROOT_API + "/api/putst?status_admin=0").then(res => {});
  }
  render() {
    return <div></div>;
  }
}
