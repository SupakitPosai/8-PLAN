import React, { useEffect, useState } from "react";
import "../css/Chat.css";
import photo from "../../img/photo.png";
import URL_img from "../../config/URL_img";
import axios from "axios";
import ROOT_API from "../../config/Aip_Url";
import Swal from "sweetalert2";
import { Row, Col, Container, ListGroup, Badge } from "react-bootstrap";
import ChatAdmin from "../components/ChatAdmin";
const qs = require("querystring");

export default function Chat() {
  const [chatroom, setchatroom] = useState("");
  const [disableDiv1, setdisableDiv1] = useState(true);
  const [disableDiv2, setdisableDiv2] = useState(false);
  const [user, setuser] = useState("");
  const [idch, setidch] = useState("");
  const [fullname, setfullname] = useState("");
  const [chget, setchget] = useState(<></>);
  useEffect(() => {
    setchget(
      setInterval(() => {
        axios.get(ROOT_API + "/api/getchatroom").then(res => {
          setchatroom(res.data);
        });
      }, 1000)
    );
  }, []);
  const clickch = (vv, uu, ii) => {
    axios.get(ROOT_API + "/api/putread?id_chat_room=" + vv).then(res => {});
    setfullname(ii);
    setuser(uu);
    setidch(vv);
    setdisableDiv1(false);
    setdisableDiv2(true);
  };
  var divStyle1 = { display: disableDiv1 ? "block" : "none" };
  var divStyle2 = { display: disableDiv2 ? "block" : "none" };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            {chatroom.length !== 0 && (
              <ListGroup>
                {chatroom.map(chm => (
                  <ListGroup.Item
                    id={chm.id_chat_room}
                    action
                    onClick={() =>
                      clickch(
                        chm.id_chat_room,
                        chm.img_user,
                        chm.f_name_user + " " + chm.l_name_user
                      )
                    }
                    className="group"
                  >
                    <img
                      className="direct-chat-img"
                      src={URL_img + chm.img_user}
                      alt="User"
                      style={{ marginRight: "1rem" }}
                    />
                    {chm.f_name_user + " " + chm.l_name_user}
                    {chm.read !== 0 && (
                      <Badge
                        pill
                        variant="danger"
                        style={{ marginLeft: "2rem" }}
                      >
                        {chm.read}
                      </Badge>
                    )}

                    <p className="datechatroom">{chm.date_chat_room}</p>
                  </ListGroup.Item>
                ))}

                {/* <ListGroup.Item action>Link 2</ListGroup.Item>
        <ListGroup.Item action>This one is a button</ListGroup.Item> */}
              </ListGroup>
            )}
          </Col>
          <Col sm={8}>
            <div style={divStyle1}>
              <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
                Select ChatRoom
              </h1>
            </div>
            <div style={divStyle2}>
              <ChatAdmin id={idch} id_user={user} full={fullname} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
