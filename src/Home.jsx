import React from 'react'

export default function Home({setShow}) {
    return (
        <div>
            <button onClick={()=>setShow(true)}>Empezar a jugar</button>
        </div>
    )
}
