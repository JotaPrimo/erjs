import { useEffect, useState } from "react";

export default function Clock() {

    // isto é um state, algo que terá seu valor alterado
    const [time, setTime] = useState<Date>()

    // o use effect é usado para propagar as alterações no state para a aplicação
    // estado 
    // sem ele não seriam re-renderizados os compoentes onde o state sofreu alteração
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        })
    }, [])

 
    return (
        <>
            agora: { time?.toLocaleTimeString() }
        </>
    )
}