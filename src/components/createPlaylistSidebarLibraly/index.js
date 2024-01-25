import styled from "styled-components";
import { Titulo } from '../Titulo';

const CreatePlaylistSidebarLibraryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #242424;
    border-radius: 10px;
    width: 280px;
    height: 130px;
    margin-top: 15px;
    margin-left: 10px;

    
    @media (max-width: 390px) {
        width: 100%;
        height: auto;
    }
`

const TituloHover = styled(Titulo)`

    margin-left: 20px;

`;

const SubtituloHover = styled(Titulo)`

    margin-left: 20px;
`;

const Button = styled.button`
    background-color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    text-align: left;
    margin-left: 20px;
    margin-top: 5px;
`;

function CreatePlaylistSidebarLibrary() {
    return (
        <CreatePlaylistSidebarLibraryContainer>
            <TituloHover cor="#fff" tamanhoFonte="14px" alinhamento="left">Crie sua primeira playlist</TituloHover>
            <SubtituloHover cor="#fff" tamanhoFonte="12px" alinhamento="left">É fácil, vamos te ajudar.</SubtituloHover>
            <Button>Criar Playlist</Button>
        </CreatePlaylistSidebarLibraryContainer>
    );
}

export default CreatePlaylistSidebarLibrary;
