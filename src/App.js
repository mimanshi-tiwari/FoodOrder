import React from "react";
import ReactDOM from "react-dom/client";
import { Body } from "./body";
import { Header } from "./header";

const AppLayout = () => {
  return  <div className="app"><Header /><Body /></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
