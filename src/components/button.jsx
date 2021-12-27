import React from 'react'
import '../styles/button.scss'

export default function Button({ active, switchButton, row, index }) {
    

    return (
        <>
         <button onClick={()=>{switchButton(row,index)}} className={'button '+(active?'active':'disabled')}></button>   
        </>
    )
}
