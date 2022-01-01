import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import '../styles/board.scss'
import Row from './row';
import IndicatorRow from './indicatorRow';
import Metronome from './metronome';

export default function Board(props) {
    //setup context
    const appContext = useContext(AppContext)
    const { board, activeBoard, switchButton } = appContext;

    return (
        <div className='board'>
            <Metronome></Metronome>
            <IndicatorRow></IndicatorRow>
            <div className="boardSquares">
            {board[activeBoard].map((item, i)=>(
                <Row switchButton={switchButton} row={item} key={i} index={i}></Row>
            ))}
            </div>
        </div>
    )
}
