import { useEffect, useState } from "react"

/**
 * componentes são re-renderizados quando ocorre alteração em props ou estados
 * por isso o useState
 */
export default function Clock() {
    
    // aqui é um estado
    const [time, setTime] =useState<Date>()

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [time])
    
    return (
        <div>
            agora: { time?.toLocaleTimeString() }
        </div>
    )
}