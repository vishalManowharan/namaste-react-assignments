import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import Header from "./components/Header";
import Body from "./components/Body";






const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  const [test, setTest] = useState(0);
  return (
    <>
      <Header />
      <Body />

    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
