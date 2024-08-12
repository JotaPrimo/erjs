import { PropsWithChildren } from "react";
import * as C from './Cars.styles';

type CardProps = PropsWithChildren<{
    title: string,
    align?: 'left' | 'center' | 'right'
}>

export default function Card(props: CardProps) {
    console.log(props.children);

    return (
        <C.Wrapper align={props.align || "center"}>
            <C.Title>
                {props.title}
            </C.Title>
            {props.children}
        </C.Wrapper>
    )
}