import React, {useEffect,useState} from 'react'

export default function Game() {
    const [respuesta, setRespuesta] = useState([''])
    const [numero, setNumero] = useState('')
    const [submit, setSubmit] = useState(false)
    useEffect(() => {
        if(submit){
            async function fetchapi(){
                let response = await fetch(`https://f8b2-2800-e2-2580-2d40-f151-8b75-4c43-5385.ngrok.io/api/codebreaker/guess/${numero}`)
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
            <input type='number' value={numero} onChange={(event)=>setNumero(event.target.value)} /> <button onClick={()=>setSubmit(true)}>Advinar</button>
            <div>
                {respuesta.map((numero,key)=>(
                    <p key={key}>
                        {numero}
                    </p>
                ))}
                
            </div>
        </div>
    )
}
