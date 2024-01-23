import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const Icone = styled.li`
    display: flex;
    align-items: center;
    margin-left: 7px;
`;

const Icones = styled.ul`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`;

const StyledIcon = styled.div`
    font-size: 20px;
    margin: 5px 0px 5px 10px;
    color: #888; /* Cor inicial do ícone */

    &:hover {
        color: #fff; /* Cor do ícone ao passar o mouse */
    }
    cursor: pointer;
`;

function IconesSidebarNavigation() {
    return (
        <Icones>
            <Icone>
                <StyledIcon as={FaHome} />
            </Icone>
            <Icone>
                <StyledIcon as={FaSearch} />
            </Icone>
        </Icones>
    );
}

export default IconesSidebarNavigation;
