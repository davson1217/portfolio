import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Render = ({ hidePortfolio }) => {
  if (hidePortfolio) {
    return (
      <h3
        style={{
          width: "100%",
          textAlign: "center",
          height: "80vh",
          color: "#07ffff",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        Hello World
      </h3>
    );
  }

  return <App />;
};
root.render(
  <React.StrictMode>
    <Render hidePortfolio={false} />
  </React.StrictMode>
);
