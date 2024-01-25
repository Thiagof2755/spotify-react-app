import { FaBook, FaPlus} from 'react-icons/fa';
import styled from 'styled-components';
import { Titulo } from '../Titulo';

const ContentSidebarLibraryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: 390px) {
        width: 100%;
        height: auto;
    }
`;

const Icone = styled.div`
    color : #888;
    justify-content: space-between;
    &:hover {
        color: #666;
    }
    cursor: pointer
`;

const StyledIcon = styled(FaBook, FaPlus)`
margin: 25px 20px 5px 20px;

`;

const TituloHover = styled(Titulo)`
margin-top: 15px;



`;

function ContentSidebarLibrary() {
    return (
        <ContentSidebarLibraryContainer>
            <Icone>
                <StyledIcon as={FaBook} />
            </Icone>
            <TituloHover cor="#888" tamanhoFonte="15px" alinhamento="left">Sua Biblioteca</TituloHover>
            <Icone>
                <StyledIcon as={FaPlus} />
            </Icone>
        </ContentSidebarLibraryContainer>
    );
}

export default ContentSidebarLibrary;
