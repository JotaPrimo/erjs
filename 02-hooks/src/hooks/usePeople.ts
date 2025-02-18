import { useState } from "react";

function usePeople() {
    const [people, setPeople] = useState(['Jailson', 'Jéssica'])


    function addPerson(nome: string) {
        setPeople([...people, nome])
    }

    return {
        people,
        addPerson
    }
}

export default usePeople;