import "../styles/settings.scss";
import React, { useState, useContext } from "react";
import AppContext from "../context/appContext";
export default function Settings({ stop, start }) {
  //setup context
  const appContext = useContext(AppContext);
  const { bpm, setBpm, board, activeBoard, setBoard } = appContext;

  //handle change of board
  const handleBoardChange = (e) => {
    stop();
    setBoard(e.target.value);
  };

  return (
    <>
      <div className="settings">
        <div className="group">
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
        </div>
        <select
          onChange={(e) => handleBoardChange(e)}
          value={activeBoard}
          name="instrument"
          id="instrumentChoice"
          className='dropDown'
        >
          {Object.keys(board).map((item) => (
            <option key={item} name={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="bpmSection">
        <h4 className="bpmLabel">BPM: {bpm}</h4>
        <input
          name="bpm"
          min="40"
          max="300"
          type="range"
          value={bpm}
          className="bpmScale"
          onChange={(e) => setBpm(e.target.value)}
        />
      </div>
    </>
  );
}
