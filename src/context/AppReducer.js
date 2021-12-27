import { SWITCH_BUTTON,
    INCREMENT_COUNTER,
    SET_BPM } from './types'
export default (state, action) =>{
    switch(action.type){
        case SWITCH_BUTTON:
            //filter through the buttons and change the state of the clicked button
            return{...state,
                board: state.board.map((item, i)=>i === action.payload.row? {...item, values:item.values.map((item,i)=>i === action.payload.column?!item:item)}:item)}
        case INCREMENT_COUNTER:
            //increase the counter by one or reset it if it is at 15. reset to -1 if passed a true payload
            return (action.payload?{...state, counter: -1}:{...state, counter: state.counter<15?state.counter+1:0})
        case SET_BPM:
            //set the bpm
            return{...state,
                    bpm: action.payload}
        default:
            return state
    }
}