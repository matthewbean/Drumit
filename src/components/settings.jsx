import '../styles/settings.scss'
import React, { useState, useContext } from 'react'
import AppContext from '../context/appContext'
export default function Settings(props) {
    //setup context
    const appContext = useContext(AppContext)
    const { bpm, setBpm } = appContext
    return (
        <>
            <input name="bpm"
                min='40' 
                max='300' 
                type="number" 
                value={bpm} 
                onChange={(e)=>setBpm(e.target.value)} 
            />   
        </>
    )
}
