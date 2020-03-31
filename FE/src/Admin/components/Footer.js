import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 3.0.2
        </div>
        <strong>
          Copyright © 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.
        </strong>{" "}
        All rights reserved.
      </footer>
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
    </div>
  );
}
