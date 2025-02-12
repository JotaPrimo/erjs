/** 
 * um arquivo que exporta uma função que retorna html 
 * JSX cria elementos react, adiciona poderes ao JS
 * */
export function HelloWorld() {
    const name = "Jailson Santos";
    const index = 0;

    return (
        <div>
            <h1>Hello World React</h1>
            <p tabIndex={index} style={{ background: 'red'}}>{ name ? name : 'Danielo' }</p>
            <p>Isto é um componente react</p>
            <p>Sem escolha, vamos entender esse canalha</p>
        </div>
    )
}