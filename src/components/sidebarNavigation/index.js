import React from "react";
import styled from "styled-components";
import Logo from '../logo';
import OpcoesSidebarNavigation from '../opcoesSidebarNavigation'

const SidebarNavigationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #121212;
    border-radius: 10px;
    width: 300px;
    height: 150px;

    @media (max-width: 390px) {
        width: 100%;
        height: auto;
    }
`;

function SidebarNavigation() {
    return (
        <SidebarNavigationContainer>
            <Logo/>
            <OpcoesSidebarNavigation/>
        </SidebarNavigationContainer>
    );
}

export default SidebarNavigation;