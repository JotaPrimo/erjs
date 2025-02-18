import { useEffect, useState } from "react";

function useCounter(initialNumber: number = 1) {
    const [number, setNumber] = useState(initialNumber);

    /**
     * nenhum efeito colateral pode ser executado direto na raiz do compoente
     * devo usar useEffect
     * 
     * */ 
    useEffect(() => {
        setTimeout(() => {
            setNumber(number + 1)
         }, 4000)
    }, [number])

    return number;
}

export default useCounter;