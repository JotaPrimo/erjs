export default function HelloWorld () {

    const name = 'Jota Santos'

    return (
        <>
            <h2>
                Hello World React.js, { name === 'Jota Santos' 
                    ? name : 
                    'Jessica' } !!!
            </h2>
        </>
    )
}