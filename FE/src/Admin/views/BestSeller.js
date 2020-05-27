import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import ROOT_API from "../../config/Aip_Url";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const qs = require("querystring");
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
export default function BestSeller() {
  const [best, setbest] = useState([]);
  const [product, setproduct] = useState([]);
  const [sepro, setsepro] = useState("");

  useEffect(() => {
    document.title = "BestSeller";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetch(ROOT_API + "/api/bestseller")
      .then(res => res.json())
      .then(
        result => {
          setbest(result);
          const script = document.createElement("script");
          script.src = "js/content.js";
          script.async = true;
          document.body.appendChild(script);
        },
        error => {}
      );
    fetch(ROOT_API + "/api/producta")
      .then(res => res.json())
      .then(
        result => {
          setproduct(result);
        },
        error => {}
      );
  }, []);
  const putpromo = index => {
    axios
      .post(
        ROOT_API + "/api/putbestseller",
        qs.stringify({
          index_best_seller: index,
          id_product: sepro
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(response => {
        Toast.fire({
          icon: "success",
          title: "Success"
        });
        window.location.reload(false);
      })
      .catch(error => {});
    // fetch(ROOT_API + "/api/putbestseller", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     index_best_seller: index,
    //     id_product: sepro
    //   })
    // })
    //   .then(response => {
    //     Toast.fire({
    //       icon: "success",
    //       title: "Success"
    //     });
    //     window.location.reload(false);
    //   })
    //   .catch(error => {
    //     // console.error("Error:", error);
    //   });
  };
  return (
    <div style={{ padding: "1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          putpromo(1);
        }}
      >
        <select
          className="form-control"
          required
          style={{ marginBottom: "1rem" }}
          onChange={e => {
            setsepro(e.target.value);
          }}
        >
          <option key="ghfssdfgfhfg" value="">
            {"<------ Select Product ------>"}
          </option>
          {product.map(product => (
            <option key={product.id_product} value={product.id_product}>
              {product.name_product_en}
            </option>
          ))}
        </select>
        <Button style={{ marginBottom: "1rem" }} type="submit">
          Save
        </Button>
      </form>
      <form
        onSubmit={e => {
          e.preventDefault();
          putpromo(2);
        }}
      >
        <select
          className="form-control"
          required
          style={{ marginBottom: "1rem" }}
          onChange={e => {
            setsepro(e.target.value);
          }}
        >
          <option key="ghfssdfgfhfg" value="">
            {"<------ Select Product ------>"}
          </option>
          {product.map(product => (
            <option key={product.id_product} value={product.id_product}>
              {product.name_product_en}
            </option>
          ))}
        </select>
        <Button style={{ marginBottom: "1rem" }} type="submit">
          Save
        </Button>
      </form>

      <DataTable
        idtable="example10"
        data={best}
        tablehead={[
          "Name Product Th",
          "Name Product En",
          "Price Product",
          "Price Sale",
          "Detail Product"
        ]}
        bodytable={[
          "name_product_th",
          "name_product_en",
          "price_product",
          "price_sale",
          "detail_product"
        ]}
        imgtable="img_product"
        title="BestSeller DataTable"
      />
    </div>
  );
}
