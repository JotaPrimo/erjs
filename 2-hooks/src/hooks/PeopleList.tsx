import usePeople from "./usePeople";

export default function PeopleList() {

    // o estado do HOOK pertecen ao componente onde este HOOK é usado
    // seu estado é local

    const { people, addPeople } = usePeople();

    return <>
        <ul>
            { people.map(person =>  <li key={person}>{person}</li>)}
        </ul>
        <button onClick={
            () => addPeople('Mario')
        }>
            Alterar Listagem
        </button>
    </>
}