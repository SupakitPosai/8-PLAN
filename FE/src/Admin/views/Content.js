import React, { useEffect } from "react";

export default function Content() {
  useEffect(() => {
    document.title = "Home Admin";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      {/* <div className="col-12 col-sm-6 col-lg-4">
        <div className="card card-primary card-outline card-outline-tabs">
          <div className="card-header p-0 border-bottom-0">
            <ul
              className="nav nav-tabs"
              id="custom-tabs-three-tab"
              role="tablist"
              style={{
                backgroundColor: "unset",
                paddingLeft: "0",
                marginTop: "0"
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
                  Home
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
                  Profile
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                malesuada lacus ullamcorper dui molestie, sit amet congue quam
                finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam
                odio magna, mollis auctor felis vitae, ullamcorper ornare
                ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper
                felis aliquam id. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Proin id orci eu
                lectus blandit suscipit. Phasellus porta, ante et varius ornare,
                sem enim sollicitudin eros, at commodo leo est vitae lacus.
                Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus
                rhoncus quis. In in quam a nibh cursus pulvinar non consequat
                neque. Mauris lacus elit, condimentum ac condimentum at, semper
                vitae lectus. Cras lacinia erat eget sapien porta consectetur.
              </div>
              <div
                className="tab-pane fade"
                id="custom-tabs-three-profile"
                role="tabpanel"
                aria-labelledby="custom-tabs-three-profile-tab"
              >
                Mauris tincidunt mi at erat gravida, eget tristique urna
                bibendum. Mauris pharetra purus ut ligula tempor, et vulputate
                metus facilisis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin,
                nisi a luctus interdum, nisl ligula placerat mi, quis posuere
                purus ligula eu lectus. Donec nunc tellus, elementum sit amet
                ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
              </div>
             
            </div>
          </div>
          
        </div>
      </div> */}
      <h1>Welcome to the admin system.</h1>
    </div>
  );
}
