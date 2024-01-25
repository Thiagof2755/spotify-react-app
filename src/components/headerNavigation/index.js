import styled from "styled-components";
import IconLeftImg from "../../assets/icons/small-left.png";
import IconRightImg from "../../assets/icons/small-right.png";
import HeaderLogins from "../headerLogin";
import Search from "../headersearch";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    margin-top: 0;
    max-width: 94%;
    margin-right: 30px;
    border-radius: 8px;
    background-color: #121212;
    padding: 12px;
    overflow: hidden;
`;


const ButtonH = styled.div`
    margin-top: 3%;
    margin-right: 15px;
    align-items: center;
    
`;

const HeaderSeach = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
`;

const IconLeft = styled.img`
    background-color: black;
    border-radius: 50%;;

    &:hover {
        transform: scale(1.1);
    }
    cursor: pointer;
`;
const IconRight = styled.img`
    background-color: black;
    border-radius: 50%;
    margin-right: 10px;
    &:hover {
        transform: scale(1.1);
    }
    cursor: pointer;
`; 

function HeaderNavigation() {
    return (
        <HeaderContainer>
            <HeaderSeach>
                <ButtonH>
                    <IconLeft src={IconLeftImg} alt="left"/> 
                </ButtonH>
                <ButtonH>
                    <IconRight src={IconRightImg} alt="right"/>
                </ButtonH>
                <Search/>
            </HeaderSeach>
            <HeaderLogins/>
        </HeaderContainer>
    );
}
export default HeaderNavigation;