import React, { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import URL_img from "../../config/URL_img";
import parse from "html-react-parser";
export default function DataTable(props) {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">{props.title}</h3>
            </div>
            {/* /.card-header */}

            <div className="card-body" style={{ overflow: "auto" }}>
              <table
                // id="example1"
                id={props.idtable}
                className="table table-bordered table-striped"
              >
                <thead>
                  <tr>
                    {props.update ? <th></th> : <></>}
                    {props.onEdit ? <th></th> : <></>}
                    {props.videos ? <th key={"2assdfdsa4"}></th> : <></>}
                    {props.imgtable ? <th key={"2asdsa4"}></th> : <></>}
                    {props.imgtable2 ? <th key={"dfsfsdf"}></th> : <></>}
                    {props.tablehead.map((tablehead, index) => (
                      <th key={index + "24324"}>{tablehead}</th>
                    ))}

                    {/*<th>Status Type Gallery</th> */}
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((data, index) => (
                    <tr key={index + "tr"}>
                      {props.onEdit ? (
                        <td key={"td"} style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            className="btn  btn-primary"
                            onClick={event => props.onEdit(event, index)}
                          >
                            <FaEdit />
                          </button>
                          <button
                            type="button"
                            className="btn  btn-primary"
                            onClick={event => props.onDelete(event, index)}
                          >
                            <MdDelete />
                          </button>
                        </td>
                      ) : (
                        <></>
                      )}
                      {props.update ? (
                        <td key={"td"} style={{ textAlign: "center" }}>
                          <button
                            type="button"
                            className="btn  btn-primary"
                            onClick={event => props.update(event, index)}
                          >
                            {props.txtup}
                          </button>
                        </td>
                      ) : (
                        <></>
                      )}

                      {props.videos ? (
                        <td key={"ierwermg"}>
                          <iframe
                            title="sad"
                            width="100%"
                            src={data[props.videos]}
                            frameBorder={0}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </td>
                      ) : (
                        <></>
                      )}
                      {props.imgtable ? (
                        <td key={"img"}>
                          <img
                            src={URL_img + data[props.imgtable]}
                            width="100px"
                          />
                        </td>
                      ) : (
                        <></>
                      )}
                      {props.imgtable2 ? (
                        <td key={"imgwqewqe"}>
                          {data[props.imgtable2] === null && <p>No Picture</p>}
                          {data[props.imgtable2] !== null && (
                            <img
                              src={URL_img + data[props.imgtable2]}
                              width="100px"
                            />
                          )}
                        </td>
                      ) : (
                        <></>
                      )}
                      {props.bodytable.map((b, index) => (
                        <td key={index + "td"}>{data[b]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
    </div>
  );
}
