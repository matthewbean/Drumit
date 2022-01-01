import { SET_BUTTON, SET_COUNTER, SET_BPM, SET_BOARD } from "./types";
export default (state, action) => {
  switch (action.type) {
    case SET_BUTTON:
      //filter through the buttons and change the state of the clicked button
      return { ...state, board: action.payload };
    case SET_BOARD:
      //set the current board
      return{ ...state, activeBoard: action.payload }
    case SET_COUNTER:
      //increase the counter by one or reset it if it is at 15. reset to -1 if passed a true payload
      return action.payload
        ? { ...state, counter: -1 }
        : { ...state, counter: state.counter < 15 ? state.counter + 1 : 0 };
    case SET_BPM:
      //set the bpm
      return { ...state, bpm: action.payload };
    default:
      return state;
  }
};
