import React, { useContext, useEffect, useState, useRef } from "react";
import AppContext from "../context/appContext";
import * as Tone from "tone";
import Settings from "./settings";

export default function Metronome(props) {
  //set up state to see if loop is playing
  const [playing, setplaying] = useState(false);
  //setup context
  const appContext = useContext(AppContext);
  const { counter, incrementCounter, board, activeBoard, bpm, getCounter } = appContext;

  //function to stop loop
  const stop = () => {
    Tone.Transport.stop();
    setplaying(false);
    incrementCounter(true);
  };

  //function to start loop
  const start = async () => {
    await Tone.start();
    Tone.Transport.start();
    setplaying(true);
  };

  //set up a new loop if any note is changed 
  useEffect(() => {
    // only run if if loop is supposed to be playing
    if (playing) {
      //grabbed the URLs from state
      let urls= {}
      board[activeBoard].forEach((item)=>{
        urls[item.key]=item.file
      })
      //instantiate instrument
      var sampler = new Tone.Sampler({
        urls: urls,
        release: 1,
        baseUrl: "../sounds/",
      }).toDestination();

      //set up index counter to be used inside loop
      var index = counter;
      //set up music loop
      var musicLoop = new Tone.Loop((time) => {
        board[activeBoard].forEach((item, i) => {
          if (item.values[index]) {
            sampler.triggerAttackRelease(item.key, "16n", time);
          }
        });
        //increase index or reset if past the end
        index = index < 15 ? index + 1 : 0;
      }, "16n").start(0);

      //set up counter loop to set up a visual indicator
      var counterLoop = new Tone.Loop((time) => {
        incrementCounter();
      }, "16n").start("8n");
    }

    //dispose of music loop if a new one will be created
    return () => {
      if (musicLoop) {
        musicLoop.dispose();
        counterLoop.dispose();
        sampler.dispose();
      }
    };
  }, [playing, board, bpm]);

  //pause loops if the bpm is adjusted
  useEffect(() => {
    stop();
    Tone.getTransport().bpm.rampTo(bpm, 1);
  }, [bpm]);

  return (
    <>
      <Settings start={start} stop={stop}></Settings>
    </>
  );
}
