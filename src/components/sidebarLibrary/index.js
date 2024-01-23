import styled from "styled-components";
import ContentSidebarLibrary from "../contentSidebarLibrary";
import CreatePlaylistSidebarLibrary from "../createPlaylistSidebarLibraly";

const SidebarLibraryContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    background-color: #121212;
    width: 300px;
    height: 330px;
    border-radius: 10px;
    align-items: center;
    
`;

function SidebarLibrary() {
    return (
        <SidebarLibraryContainer>
            <ContentSidebarLibrary />
            <CreatePlaylistSidebarLibrary/>
        </SidebarLibraryContainer>
    );
}

export default SidebarLibrary;