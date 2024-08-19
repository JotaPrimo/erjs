import { useState } from "react";

export default function usePeople() {
    const [people, setPeople] = useState(['Jota', 'Jessica'])


    function addPeople(name:string) {
        setPeople([...people, name])
    }


    return {
        people,
        addPeople
    }
} 