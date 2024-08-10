import { useEffect, useState } from 'react';
export default function Person() {

   const [person, setPerson] = useState<string[]>(['Jota Santos', ' Jessica Helena'])

   // o useEffect propaga a alteração no componente, gerando as re-renderizações
    useEffect(() => {
        setTimeout(() => {
            setPerson((state) => {
                // deve ser para processar algo
                // essa funcao traz o estado atual como parametro
                console.log(state);                
                return [...state, 'Regina Helena']
            })
           }, 1000000)
    }, [])

    return (
        <>
            <h1>Perfil</h1>
            <p>Este é o perfil de {person}</p>
        </>
    )
}