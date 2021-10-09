import React from 'react'

export default function Home({setShow}) {
    return (
        <div>
            <button id="startButton" onClick={()=>setShow(true)}>Empezar a jugar</button>
        </div>
    )
}
