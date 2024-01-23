import React from 'react';
import styled from 'styled-components';
import SidebarNavigation from './components/sidebarNavigation'
import SidebarLibrary from './components/sidebarLibrary'



const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    margin-top: 0;
`

function App() {
    return (
        <AppContainer>
            <SidebarNavigation />
            <SidebarLibrary />
        </AppContainer>
    );
}

export default App;
