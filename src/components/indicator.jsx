import React from 'react'
import './indicator.scss'

export default function Button({ active }) {
    

    return (
        <>
         <div className={'indicator '+(active?'active':'')}></div>   
        </>
    )
}
