import React from 'react';
import styled from 'styled-components';

function ImageGallery(props) {

    const renderColumns = () => {
        if (props.columns.length === 1) {
            return (
                <Column>
                    {props.columns[0].map(image => <Image key={image} oneColumn={true} src={image} alt='Work Example'/>)}
                </Column>  
            );
        } else {
            return props.columns.map(column => {
                return (
                    <Column key={props.columns.indexOf(column)}>
                        {column.map(image => <Image key={image} src={image} alt='Work Example'/>)}
                    </Column>
                )
            });
        }
    }

    return(
        <>
            {renderColumns()}
        </>
    )
};

export default ImageGallery;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 425px) {
        align-items: center;
    }
`

const Image = styled.img`
    border: 1px solid black;
    ${props => props.oneColumn ?
    `width:  100%;`
    : `width:  400px;`}
    margin-bottom: 25px;
    @media (max-width: 425px) {
        width: 100%;
        height: auto;
    }
`

