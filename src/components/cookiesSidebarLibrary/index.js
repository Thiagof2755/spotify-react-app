import React from "react"; // Add the missing import statement for React
import styled from "styled-components";

const CookiesSidebarLibraryContainer = styled.div`
    font-size: 10px;
    display: flex;
    margin-left: 30px;
    margin-top: 30px;
`;

const Cookies = styled.div` // Correct the typo in the styled component declaration
    color: #888;
    &:hover {
        color: #fff;
        text-decoration: underline;
    }
    cursor: pointer;
    justify-content: left;
`;

function CookiesSidebarLibrary() {
    return (
        <CookiesSidebarLibraryContainer>
            <Cookies>Cookies</Cookies>
        </CookiesSidebarLibraryContainer>
    );
}

export default CookiesSidebarLibrary;
