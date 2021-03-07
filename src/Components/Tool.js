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
    font-size: 12px;
    background-color: black;
    color: white;
    padding: 8px;
    border-radius: 4px;
`