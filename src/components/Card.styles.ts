import styled from "styled-components";

export const Wrapper = styled.div<{ align: 'left' | 'center' | 'right'}>`
    background: rgba(0,0,0,.25);
    border-radius: 8px;
    padding: 16px;
    text-align: ${props => props.align}
`

export const Title = styled.h2`
    font-size: 1.3em;
    text-transform: uppercase;
`