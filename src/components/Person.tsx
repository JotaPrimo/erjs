import { useState } from "react"

/**
 * Vamos entender o useState, o componente reage a alteração de estado
 * E alteração de props
 */
export default function Person() {

    const [person, setPerson] = useState<string>('Jailson Santos')

    // ainda tem o useEffect para gerenciar efeitos colaterais
    setTimeout(() => {
        setPerson((state) => {           
            return 'Jessica Helena'
        })
    }, 3000)

    return (
        <div>
            <h1>Perfil</h1>
            <p>Este é o perfil de { person }</p>
        </div>
    )
}