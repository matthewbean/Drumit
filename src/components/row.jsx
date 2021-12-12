import React from 'react'
import AppContext from '../context/appContext'
import Button from './button';
import './row.scss'
export default function Board({ row, index, switchButton }) {
    return (
        <div className="row">
        <span className='label'>{row.key}</span>
        {row.values.map((item, i)=>(
                <Button active={item} key= {i} switchButton={switchButton} row={index} index={i}></Button>
        ))}
        </div>
            
    )
}
