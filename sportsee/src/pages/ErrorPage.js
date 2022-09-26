import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ErrorPage () {
    return (
        <Main>
            <Title>404</Title>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </Main>
    );
};

const Main = styled.main`
    margin: 10rem 20rem 20rem;
    a{
        margin-top: 4rem;
        display:flex;
        flex-direction:column;
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
    }
    p{
        font-size: 2.5rem;
        text-align: center;
    }
`;

const Title = styled.h1`
    color: red;
    font-size: 10rem;
    text-align: center;
    margin-bottom: 5rem;
`;

