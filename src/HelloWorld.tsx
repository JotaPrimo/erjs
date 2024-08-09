export default function HelloWorld () {

    const name = 'Jota'
    const title = <h1>Hello, {name}</h1>

    // atributos com jsx


    if (name === 'Jota') {
        return (
            <>
               <h1 tabIndex={0} style={ {background: 'blue'} }>{name}</h1>
            </>
        )
    }
    
    

    return (
        <>
            { title }
        </>
    )
}