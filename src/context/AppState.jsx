import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './AppReducer';
import{
    SWITCH_BUTTON,
    INCREMENT_COUNTER
} from './types'

const AppState = props=>{
    const initialState = {
        indicators: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        counter: 0,
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
         { key: 'C4', values: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,]}]
        
    };
    const  [state, dispatch] = useReducer(appReducer, initialState);


//handle switching buttons
const switchButton=(row, column)=>{
    dispatch({ type: SWITCH_BUTTON, payload: {row, column} })
}
//increment counter
const incrementCounter=()=>{
    dispatch({ type: INCREMENT_COUNTER })
}

//set app
    return (
        <AppContext.Provider 
            value = {{
                board: state.board,
                indicators: state.indicators,
                counter: state.counter,
                switchButton,
                incrementCounter
            }}   
            >
            
            {props.children}
        </AppContext.Provider>
    )

};

export default AppState;