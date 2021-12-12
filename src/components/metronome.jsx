import React, { useContext, useEffect, useState, useRef } from 'react'
import AppContext from '../context/appContext';
import * as Tone from 'tone'

export default function Metronome(props) {
    const [playing, setplaying] = useState(false)
    const appContext = useContext(AppContext)
    const { counter, incrementCounter, board }= appContext
    useEffect(() => {
        if (playing){
            
        }
    }, [counter])
    useEffect(() => {
        // side effects
        if (playing){
        var sampler = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
                "C#4": "C-4.mp3",
                "D4": "D4.mp3",
                "D#4": "D-4.mp3",
                "E4": "E4.mp3",
                "F4": "F4.mp3",
                "F#4": "F-4.mp3",
                "G4": "G4.mp3",
                "G#4": "G-4.mp3",
                "A5": "A5.mp3",
                "A#5": "A-5.mp3",
                "B5": "B5.mp3",
                "C5": "C5.mp3",
            },
            release: 1,
            baseUrl: "../sounds/",
            onload: ()=>{
                console.log('loaded')
            }
        }).toDestination();
        let index=counter;
        var loopA = new Tone.Loop(time => {
            incrementCounter()
            index+=(index<15?1:-15)
            let played=board.filter((item,i)=>item.values[index]).map((item)=>item.key)
            if (played.length>0){
            sampler.triggerAttackRelease(played, time)
            }
        }, "16n").start(0);
        Tone.Transport.start()
    }
        //cleanup
        return () => {
        if (loopA){
         loopA.dispose()
         sampler.dispose()
        }
        }
    }, [playing, board])
    const stop=()=>{
        setplaying(false)
    }
    const start= async ()=>{
        await Tone.start()
        setplaying(true)
    }
    return (
        <>
        <button onClick={start} id="a">Start</button>
        <button onClick={stop} id="a">Stop</button>
            
        </>
    )
}
