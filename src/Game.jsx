import React, {useEffect,useState} from 'react'

export default function Game() {
    const [respuesta, setRespuesta] = useState([''])
    const [numero, setNumero] = useState('')
    const [submit, setSubmit] = useState(false)
    
    useEffect(() => {
        if(submit){
            async function fetchapi(){
                let response = await fetch(`http://localhost:8080/api/codebreaker/guess/${numero}`)
                response = await response.text();
                setRespuesta([...respuesta,response]);
                setSubmit(false);
            }
            fetchapi()
        }
    }, [submit])
    console.log(respuesta)
    
    return (
        <div>
            <h1>Adivina el numero secreto</h1>
            <input id="inputNumber" type='number' value={numero} onChange={(event)=>setNumero(event.target.value)} /> <button id="guessNumberBtn" onClick={()=>setSubmit(true)}>Advinar</button>
            <div id="responseContainer">
                {respuesta.map((numero,key)=>(
                    <p key={key}>
                        {numero}
                    </p>
                ))}
                
            </div>
        </div>
    )
}
