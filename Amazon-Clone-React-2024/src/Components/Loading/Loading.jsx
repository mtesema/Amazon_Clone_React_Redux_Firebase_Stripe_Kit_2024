import React from "react";
import { PulseLoader } from "react-spinners";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh" 
      }}
    >
      <PulseLoader color="#36d7b7" />
    </div>
  );
}

export default Loading;
