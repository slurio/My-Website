import React from 'react';
import styled from 'styled-components';

function ImageGallery(props) {

    const renderColumns = () => {
        return props.columns.map(column => {
            return (
                <Column>
                    {column.map(image => <Image src={image} alt='test'/>)}
                </Column>
            )
        })
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
`

const Image = styled.img`
    border: 1px solid black;
    width:  425px;
    margin-bottom: 25px;
`