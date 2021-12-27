import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './AppReducer';
import{
    SWITCH_BUTTON,
    INCREMENT_COUNTER,
    SET_BPM
} from './types'

const AppState = props=>{
    const initialState = {
        indicators: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        counter: -1,
        board:
        [ {key: 'C5', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'B5', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key:'A#5', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'A5', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'G#4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'G4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'F#4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'F4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'E4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'D#4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'D4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'C#4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]},
         { key: 'C4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]}],
        bpm: 120
        
    };

//set up the reducer
const [state, dispatch] = useReducer(appReducer, initialState);

//handle switching buttons
const switchButton=(row, column)=>{
    dispatch({ type: SWITCH_BUTTON, payload: {row, column} })
}

//increment counter. If true is passed for payload, the counter will be set to -1
const incrementCounter=(reset)=>{
    dispatch({ type: INCREMENT_COUNTER, payload: reset })
}

//change bpm
const setBpm=(newBpm)=>{
    dispatch({ type: SET_BPM, payload: newBpm })
}

//return the context provider
    return (
        <AppContext.Provider 
            value = {{
                board: state.board,
                indicators: state.indicators,
                counter: state.counter,
                bpm: state.bpm,
                getCounter,
                switchButton,
                setBpm
            }}   
            >
            {props.children}
        </AppContext.Provider>
    )

};

export default AppState;