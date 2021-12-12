import { SWITCH_BUTTON,
    INCREMENT_COUNTER } from './types'
// eslint-disable-next-line
export default (state, action) =>{
    switch(action.type){
        case SWITCH_BUTTON:
            return{...state,
                board: state.board.map((item, i)=>i === action.payload.row? {...item, values:item.values.map((item,i)=>i === action.payload.column?!item:item)}:item)}
        case INCREMENT_COUNTER:
            return{...state,
                counter: state.counter<15?state.counter+1:0}
        default:
            return state
    }
}