import React, { useEffect, useContext } from "react";
import Cookies from "universal-cookie";
import Context from "../../store/context";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
const cookies = new Cookies();
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

// function onAuthRequired() {
//   window.location.replace("/Cart");
//   // Location.replace("/Cart");
//   // location.replace("https://www.w3schools.com")
//   // props.history.push('/Cart');
// }

export default function Buttonbuy(props) {
  const { state, actions } = useContext(Context);
  useEffect(() => {
      // console.log('id', cookies.get("Cart"))
    // cookies.remove("Cart", { path: "/" });
  }, []);
  const addcart = () => {
    let ii = 0;
    if (state.cart === 0) {
      actions({
        type: "setState",
        payload: {
          ...state,
          cart: state.cart+1,
          oncart: 1,
        },
      });
      if (cookies.get("Cart") === undefined) {
        cookies.set("Cart", [{ id: props.id, num: 1 }], { path: "/" });
      } else {
        var va = [...cookies.get("Cart")];
        va.push({ id: props.id, num: 1 });
        cookies.set("Cart", va, {
          path: "/",
        });
      }
      if (window.innerWidth <= 992) {
        window.location.replace("/Cart");
      }
    } else {
      var aa =[...cookies.get("Cart")]
      for (let index = 0; index < aa.length; index++) {
        if (aa[index].id === props.id) {
          ii++;
        }
        if (index === aa.length - 1) {
          if (ii === 0) {
            actions({
              type: "setState",
              payload: {
                ...state,
                cart: state.cart+1,
                oncart: 1,
              },
            });
            if (cookies.get("Cart") === undefined) {
              cookies.set("Cart", [{ id: props.id, num: 1 }], { path: "/" });
            } else {
              var va = [...cookies.get("Cart")];
              va.push({ id: props.id, num: 1 });
              cookies.set("Cart", va, {
                path: "/",
              });
            }
            if (window.innerWidth <= 992) {
              window.location.replace("/Cart");
            }
          } else {
            Toast.fire({
              icon: "error",
              title: "มีสินค้านี้แล้ว",
            });
          }
        }
      }
    }
  };
  return (
    <div>
      <Button
        className="Btn1"
        style={{
          width: "100%",
          marginBottom: "2rem",
        }}
        // href="/Signin"
        onClick={addcart}
      >
        ซื้อเลย
      </Button>
    </div>
  );
}
