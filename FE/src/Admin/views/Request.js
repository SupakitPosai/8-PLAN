import React, { useEffect, useState } from "react";
import { Row, Col, Container, ListGroup, Badge } from "react-bootstrap";
import axios from "axios";
import ROOT_API from "../../config/Aip_Url";
import { FaCircle } from "react-icons/fa";
export default function Request() {
  const [re, setre] = useState([]);
  const [req, setreq] = useState([]);
  useEffect(() => {
    axios.get(ROOT_API + "/api/getRequest").then((res) => {
      setre(res.data);
    });
  }, []);
  const cl_ = (ii) => {
    axios.get(ROOT_API + "/api/getidReq?id_request=" + ii).then((res) => {
      setreq(res.data);
      axios.get(ROOT_API + "/api/getRequest").then((res) => {
        setre(res.data);
      });
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            {re.length !== 0 && (
              <ListGroup>
                {re.map((re) => (
                  <ListGroup.Item
                    onClick={() => {
                      cl_(re.id_request);
                    }}
                    action
                    className="group nameCut"
                  >
                    {re.name_request}
                    {re.read_request === 1 && (
                      <FaCircle
                        style={{
                          color: "red",
                          width: ".7rem",
                          marginLeft: "2rem",
                        }}
                      />
                    )}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <Col sm={8}>
            {req.length === 0 && (
              <h1 style={{ textAlign: "center" }}>select List</h1>
            )}
            {req.length !== 0 && (
              <div className="card card-danger" style={{ marginTop: "1rem" }}>
                <div className="card-header">
                  <h3 className="card-title">{req[0].name_request}</h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="maximize"
                    >
                      <i className="fas fa-expand" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "50%" }}>
                      <h4>ชื่อผู้ส่ง: {req[0].name_request}</h4>
                      <h4>อีเมล์: {req[0].emali_request}</h4>
                    </div>
                    <div style={{ width: "50%", textAlign: "right" }}>
                      <h4>โทร: {req[0].tel_request}</h4>
                      <h4>{req[0].date_request}</h4>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <h5>ข้อความ: </h5>
                    <h5>{req[0].message_request}</h5>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
