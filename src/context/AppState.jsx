import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './AppReducer';
import{
    SET_BUTTON,
    SET_COUNTER,
    SET_BPM,
    SET_BOARD
} from './types'

const AppState = props=>{
    const initialState = {
        indicators: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        counter: -1,
        board:
        {
            'Keyboard': [ {name: 'C5', key: 'C5', file: 'c5.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'B5', key: 'B5', file: 'b5.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'A#5', key: 'A#5', file: 'a-5.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'A5', key: 'A5', file: 'a5.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'G#4', key: 'G#4', file: 'g-4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'G4', key: 'G4', file: 'g4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'F#4', key: 'F#4', file: 'f-4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'F4', key: 'F4', file: 'f4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'E4', key: 'E4', file: 'e4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'D#4', key: 'D#4', file: 'd-4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'D4', key: 'D4', file: 'd4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'C#4', key: 'C#4', file: 'c-4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'C4', key: 'C4', file: 'c4.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]}],

            '808 Kit': [ { name: 'CLAP', key: 'G4', file: 'clap.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'SNARE', key: 'F#4', file: 'electronic snare.wav', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'HH CLOSED', key: 'F4', file: 'hhclosed.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'HH OPEN', key: 'E4', file: 'hhopen.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'CYMBAL', key: 'D#4', file: 'cymbal.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'BASS 2', key: 'D4', file: 'bass2.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'BASS 1', key: 'C#4', file: 'bass.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]}],

            'Pearl Kit': [ { name: 'HH CLOSED', key: 'A5', file: 'pearlkit-hihat.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'HH OPEN', key: 'G#4', file: 'pearlkit-hihatO.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'RIDE', key: 'G4', file: 'pearlkit-ride.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'CRASH', key: 'F#4', file: 'pearlkit-ridecrash.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'SNARE', key: 'F4', file: 'pearlkit-snare.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'R SNARE', key: 'E4', file: 'pearlkit-snareroll.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'TOM 1', key: 'D#4', file: 'pearlkit-tom1.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'TOM 2', key: 'D4', file: 'pearlkit-tom2.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'TOM 3', key: 'C#4', file: 'pearlkit-tom3.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
                { name: 'KICK', key: 'C4', file: 'pearlkit-kick.mp3', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]}],
        },
        activeBoard: '808 Kit',
        bpm: 120
        
    };

//set up the reducer
const [state, dispatch] = useReducer(appReducer, initialState);


//handle switching buttons
const switchButton = (row, column) => {
const { activeBoard, board } = state;
//create a new board so that we can map over just the currently use board
let newBoard = { ...board };
newBoard[activeBoard] = board[activeBoard].map((item, i) =>i === row ? 
    {
        ...item,
        values: item.values.map((item, i) => (i === column ? !item : item)),
    }
    : item
);
dispatch({ type: SET_BUTTON, payload: newBoard });
};

//increment counter. If true is passed for payload, the counter will be set to -1
const incrementCounter=(reset)=>{
    dispatch({ type: SET_COUNTER, payload: reset })
}

//change bpm
const setBpm=(newBpm)=>{
    dispatch({ type: SET_BPM, payload: newBpm })
}

//change aboard
const setBoard=(board)=>{
    dispatch({ type: SET_BOARD, payload: board })
}
//return the context provider
    return (
        <AppContext.Provider 
            value = {{
                board: state.board,
                activeBoard: state.activeBoard,
                indicators: state.indicators,
                counter: state.counter,
                bpm: state.bpm,
                incrementCounter,
                switchButton,
                setBpm,
                setBoard
            }}   
            >
            {props.children}
        </AppContext.Provider>
    )

};

export default AppState;