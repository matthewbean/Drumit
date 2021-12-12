import React, { useContext } from 'react'
import AppContext from '../context/appContext'
import './indicatorRow.scss'
import Indicator from './Indicator';
export default function Board(props) {
    const appContext = useContext(AppContext)
    const { indicators, counter } = appContext;
    return (
        <>
        <div className='indicatorRow'>
        {indicators.map((item, i)=>(
            <Indicator active={counter === i} key={i}></Indicator>
        ))}

        </div>
            
        </>
    )
}
