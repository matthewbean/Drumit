import React from "react";
import "../styles/indicator.scss";

export default function Button({ active }) {
  return (
    <>
      <div className={"indicator " + (active ? "active" : "disabled")}></div>
    </>
  );
}
