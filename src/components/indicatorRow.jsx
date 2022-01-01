import React, { useContext } from "react";
import AppContext from "../context/appContext";
import "../styles/indicatorRow.scss";
import Indicator from "./indicator";

export default function Board(props) {
  //setup context
  const appContext = useContext(AppContext);
  const { indicators, counter } = appContext;

  return (
    <>
      <div className="indicatorRow">
        {indicators.map((item, i) => (
          <Indicator active={counter === i} key={i}></Indicator>
        ))}
      </div>
    </>
  );
}
