import React, { useEffect, useState } from "react";
import ROOT_API from "../../config/Aip_Url";
import ReactExport from "react-export-excel";
import { Button, Modal, Container, Row, Col } from "react-bootstrap";
import DataTable from "../components/DataTable";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
export default function ExportExcel() {
  const [excus, setexcus] = useState([]);
  const [req, setreq] = useState([]);
  const [admin, setadmin] = useState([]);
  useEffect(() => {
    fetch(ROOT_API + "/api/getExortCus")
      .then((res) => res.json())
      .then(
        (result) => {
          setexcus(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
    fetch(ROOT_API + "/api/getRequest")
      .then((res) => res.json())
      .then(
        (result) => {
          setreq(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
    fetch(ROOT_API + "/api/getStatistics")
      .then((res) => res.json())
      .then(
        (result) => {
          setadmin(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        (error) => {}
      );
  }, []);
  return (
    <div>
      <div className="col-12 ">
        <div className="card card-primary card-outline card-outline-tabs">
          <div className="card-header p-0 border-bottom-0">
            <ul
              className="nav nav-tabs"
              id="custom-tabs-three-tab"
              role="tablist"
              style={{
                backgroundColor: "unset",
                paddingLeft: "0",
                marginTop: "0",
              }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="custom-tabs-three-home-tab"
                  data-toggle="pill"
                  href="#custom-tabs-three-home"
                  role="tab"
                  aria-controls="custom-tabs-three-home"
                  aria-selected="true"
                >
                  Customer
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="custom-tabs-three-profile-tab"
                  data-toggle="pill"
                  href="#custom-tabs-three-profile"
                  role="tab"
                  aria-controls="custom-tabs-three-profile"
                  aria-selected="false"
                >
                  Request
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="custom-tabs-three-admin-tab"
                  data-toggle="pill"
                  href="#custom-tabs-three-admin"
                  role="tab"
                  aria-controls="custom-tabs-three-admin"
                  aria-selected="false"
                >
                  Admin
                </a>
              </li>
            </ul>
          </div>

          <div className="card-body">
            <div className="tab-content" id="custom-tabs-three-tabContent">
              <div
                className="tab-pane fade active show"
                id="custom-tabs-three-home"
                role="tabpanel"
                aria-labelledby="custom-tabs-three-home-tab"
              >
                {excus.length !== 0 && (
                  <>
                    <ExcelFile
                      filename="Customer"
                      element={
                        <Button style={{ marginBottom: "1rem" }}>
                          Export Excel
                        </Button>
                      }
                    >
                      <ExcelSheet data={excus} name="Customer">
                        <ExcelColumn label="ชื่อ" value="f_name_user" />
                        <ExcelColumn label="นามสกุล" value="l_name_user" />
                        <ExcelColumn label="รหัสประชาชน" value="id_card" />
                        <ExcelColumn label="ที่อยู่" value="address_user" />
                        <ExcelColumn label="วันเกิด" value="date_year" />
                        <ExcelColumn label="เมล์" value="email_user" />
                        <ExcelColumn label="เบอร์โทร" value="tel_user" />
                      </ExcelSheet>
                    </ExcelFile>
                    <DataTable
                      idtable="example1"
                      data={excus}
                      tablehead={[
                        "f name user",
                        "l name user",
                        "id card",
                        "address user",
                        "date year",
                        "email user",
                        "tel user",
                      ]}
                      title="Customer"
                      bodytable={[
                        "f_name_user",
                        "l_name_user",
                        "id_card",
                        "address_user",
                        "date_year",
                        "email_user",
                        "tel_user",
                      ]}
                    />
                  </>
                )}
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-three-profile"
                role="tabpanel"
                aria-labelledby="custom-tabs-three-profile-tab"
              >
                <ExcelFile
                  filename="Request"
                  element={
                    <Button style={{ marginBottom: "1rem" }}>
                      Export Excel
                    </Button>
                  }
                >
                  <ExcelSheet data={req} name="Request">
                    <ExcelColumn label="ชื่อผู้ส่ง" value="name_request" />
                    <ExcelColumn label="อีเมล์" value="emali_request" />
                    <ExcelColumn label="เบอร์โทร" value="tel_request" />
                    <ExcelColumn label="ข้อความ" value="message_request" />
                    <ExcelColumn label="วันเวลาที่ส่ง" value="date_request" />
                  </ExcelSheet>
                </ExcelFile>
                {req.length !== 0 && (
                  <DataTable
                    idtable="example2"
                    data={req}
                    tablehead={[
                      "name request",
                      "emali request",
                      "tel request",
                      "message request",
                      "date request",
                    ]}
                    title="Request DataTable"
                    bodytable={[
                      "name_request",
                      "emali_request",
                      "tel_request",
                      "message_request",
                      "date_request",
                    ]}
                  />
                )}
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-three-admin"
                role="tabpanel"
                aria-labelledby="custom-tabs-three-admin-tab"
              >
                <ExcelFile
                  filename="Admin"
                  element={
                    <Button style={{ marginBottom: "1rem" }}>
                      Export Excel
                    </Button>
                  }
                >
                  <ExcelSheet data={admin} name="Admin">
                    <ExcelColumn label="ชื่อ" value="f_name_user" />
                    <ExcelColumn label="นามสกุล" value="l_name_user" />
                    <ExcelColumn label="อีเมล์" value="email_user" />
                    <ExcelColumn label="เบอร์โทร" value="tel_user" />
                    <ExcelColumn label="เวลา" value="date_statistics" />
                    <ExcelColumn label="สถานะ" value="status_statistics" />
                  </ExcelSheet>
                </ExcelFile>
                {admin.length !== 0 && (
                  <DataTable
                    idtable="example3"
                    data={admin}
                    tablehead={[
                      "f name user",
                      "l name user",
                      "email user",
                      "tel user",
                      "date statistics",
                      "status statistics",
                    ]}
                    title="Admin DataTable"
                    bodytable={[
                      "f_name_user",
                      "l_name_user",
                      "email_user",
                      "tel_user",
                      "date_statistics",
                      "status_statistics",
                    ]}
                  />
                )}
              </div>
            </div>
          </div>

          {/* /.card */}
        </div>
      </div>
    </div>
  );
}
