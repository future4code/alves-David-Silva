import React from 'react';
import styled from 'styled-components';

const SmallerCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
    width: 40vw;
`

const SmallerCardContainerImg = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

function CardPequeno(props){
    return (
        <SmallerCardContainer>
            <SmallerCardContainerImg src={props.imagem}/>
            <p><strong>{props.dado}</strong> {props.info}</p>
        </SmallerCardContainer>
    )
}

export default CardPequeno;