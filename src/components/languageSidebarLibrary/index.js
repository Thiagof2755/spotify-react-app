import styled  from "styled-components";
import { FaGlobe } from 'react-icons/fa';

const LanguageSidebarLibraryContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 30px;

`;

const Button = styled.button`
    background-color: transparent;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    text-align: left;
    margin-left: 20px;
    margin-top: 5px;
    &:hover {
        color: #888;
        border: 1px solid #888;
    }
    cursor: pointer;
    justify-content: left;
    display: flex;
    align-items: center;

    svg {
        margin-right: 5px;
    }
`;

function LanguageSidebarLibrary() {

    return (
        <LanguageSidebarLibraryContainer>   
            <Button>
                <FaGlobe />
                Português do Brasil
            </Button>
        </LanguageSidebarLibraryContainer>
    )
}

export default LanguageSidebarLibrary