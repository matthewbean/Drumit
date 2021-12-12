import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import './board.scss'
import Row from './row';
import IndicatorRow from './indicatorRow';
import Metronome from './metronome';

export default function Board(props) {
    const appContext = useContext(AppContext)
    const { board, switchButton } = appContext;
    return (
        <div className='board'>
            <Metronome></Metronome>
            <IndicatorRow></IndicatorRow>
            {board.map((item, i)=>(
                <Row switchButton={switchButton} row={item} key={i} index={i}></Row>
            ))}
        </div>
    )
}
