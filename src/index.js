import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h3
      style={{
        width: "100%",
        textAlign: "center",
        height: "80vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      Hello World
    </h3>
    {/*<App />*/}
  </React.StrictMode>
);
