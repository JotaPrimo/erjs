import { useEffect, useState } from "react";

function useCounter() {
    const [number, setNumber] = useState(0);

    /**
     * nenhum efeito colateral pode ser executado direto na raiz do compoente
     * devo usar useEffect
     * 
     * */ 
    useEffect(() => {
        setTimeout(() => {
            setNumber(2)
         }, 4000)
    }, [])

    return number;
}

export default useCounter;