import React from "react";

function Container({ children }) {
  return (
    <center style={{ marginTop: "5%" }}>
      <div className="card" style={{ width: "29rem" }}>
        <div className="card-body">{children}</div>
      </div>
    </center>
  );
}

export default Container;
