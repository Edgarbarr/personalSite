import React from "react";
import scrollToTop from "./scrollToTop.jsx";

function Resume() {
  scrollToTop();
  return (
    <div>
      <div
        className="container-fluid desktop-resume"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        <div className="row" style={{ height: "600px" }}>
          <object
            type="application/pdf"
            data="/assets/embresume.pdf"
            width="100%"
            height="100%"
          ></object>
        </div>
      </div>
    </div>
  );
}

export default Resume;
