import usePeople from "./hooks/usePeople";

function PeopleList() {
    const { people, addPerson } = usePeople();

    return <>
        <ul>
            { people.map((person, index) => <li key={index}>{person}</li>) }
        </ul>

        <button onClick={() => addPerson('Mario')}>
            Adicionar pessoa
        </button>
    </>
}

export default PeopleList;