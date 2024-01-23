import React from 'react';
import styled from 'styled-components';
import SidebarNavigation from './components/sidebarNavigation'
import SidebarLibrary from './components/sidebarLibrary'
import Footer from './components/footer';
import HeaderNavigation from './components/headerNavigation';

const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    margin-top: 0;
    display: flex;
`
const SideBar = styled.div`
    display: flex;
    flex-direction: column;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
`;

function App() {
    return (
        <AppContainer>
            <MainContainer>
                <SideBar>
                    <SidebarNavigation />
                    <SidebarLibrary />
                </SideBar>
                <Container>
                    <HeaderNavigation />
                </Container>
                <Footer />
            </MainContainer>
        </AppContainer>
    );
}

export default App;
