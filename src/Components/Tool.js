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
    margin-left: 10px;
`