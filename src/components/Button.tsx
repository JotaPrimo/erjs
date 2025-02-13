import { Component, ReactNode } from "react";

/**
 * Estamos estudando componentes baseados em classes e sua importância,
 * Esses componentes são muito usados ainda, embora sua api seja verbosa
 * vamos usar hooks, eles aprimoram o classes componentes 
 */
class Button extends Component {

    // qual o jsx de retorno dessa class
    render(): ReactNode {
        return (
            <div>
                todo: button
            </div>
        )
    }
}

export default Button