import React from 'react';
import styled from 'styled-components';

function Tool(props) {
    return(
        <Span>{props.language}</Span>
    )
}

export default Tool;

const Span = styled.span`
    text-transform: uppercase;
    margin-left: 5px;
    margin-bottom: 5px;
    font-size: 12px;
    border: 1.5px solid black;
    color: black;
    padding: 8px;
    border-radius: 4px;
`