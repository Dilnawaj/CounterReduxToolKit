import React from "react";
import { useSelector } from "react-redux";

function Content() {
   const counter=useSelector((state) => state.counter);
  return (
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Counter Current Value :{counter}</p>
    </div>
  );
}

export default Content;
