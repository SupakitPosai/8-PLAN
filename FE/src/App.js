import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IndexUser from "./User/views/index";
import IndexAdmin from "./Admin/views/index";
import Cookies from "universal-cookie";
import Context from "./store/context";
const cookies = new Cookies();
//  cookies.set('Type_Login', 'admin', { path: '/' });
const App = () => {
  const { state, actions } = useContext(Context);
  const Cha1 = (value) => {
    actions({
      type: "setState",
      payload: { ...state, type: value },
    });
  };

  useEffect(() => {
    if (
      cookies.get("Type_Login") === undefined ||
      cookies.get("Type_Login") === "user"
    ) {
      Cha1("user");
    } else if (
      cookies.get("Type_Login") === "admin" ||
      cookies.get("Type_Login") === "SuperAdmin"
    ) {
      Cha1("admin");
    }
  }, []);
  return (
    <div>
      {state.type === "user" && <IndexUser />}
      {state.type === "admin" && <IndexAdmin />}
    </div>
    //  <div><IndexAdmin /></div>
  );
};
export default App;
// export default class App extends Component {
//   render() {
//     return (
//       <div >
//         {cookies.get('Type_Login') === undefined && <IndexUser />}
//         {cookies.get('Type_Login') === 'user' && <IndexUser />}
//         {cookies.get('Type_Login') === 'admin' && <IndexAdmin />}
//         {/* <IndexUser />
//         <IndexAdmin /> */}
//       </div>
//     )
//   }
// }
