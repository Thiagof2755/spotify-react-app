import React from 'react';
import { Titulo } from '../Titulo';
import styled from 'styled-components';
import IconesSidebarNavigation from '../iconesSidebarnavigation';

const OpcoesSidebarNavigationContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`;

const TituloContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;

const TituloHover = styled(Titulo)`
    color: #888;
    &:hover {
        color: #fff;
    }
    cursor: pointer;
`;

function OpcoesSidebarNavigation() {
    return (
        <OpcoesSidebarNavigationContainer>
            <IconesSidebarNavigation />
            <TituloContainer>
                <TituloHover cor="#888" tamanhoFonte="15px">Inicio</TituloHover>
                <TituloHover cor="#888" tamanhoFonte="15px">Buscar</TituloHover>
            </TituloContainer>
        </OpcoesSidebarNavigationContainer>
    );
}

export default OpcoesSidebarNavigation;