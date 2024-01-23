import styled from "styled-components";
import Iconsearch from "../../assets/icons/search.png";

const HeaderSeach = styled.div`
    display: flex;
    align-items: center;
`;

const Icon = styled.img`
    margin-right: 5px;
`;

const Button = styled.button`
    background-color: #242424;
    border: none;
    border-radius: 50px;
    padding: 10px 20px;
    font-weight: bold;
    text-align: left;
    margin-left: 20px;;
    &:hover {
        color: #888;
        border: 1px solid #888;
    }
    cursor: pointer;
    justify-content: left;
    display: flex;
    align-items: center;

`;

const Input = styled.input`
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    width: 200px;
    font :inherit;
    margin-left: 10px;
    ::placeholder {
        color: #888;
    }
`;

function Search() {
    return (
        <HeaderSeach>
            <Button>
                <Icon src={Iconsearch} alt="search" />
                <Input type="text" placeholder="O que você quer ouvir?" />
            </Button>
        </HeaderSeach>
    );
}

export default Search;