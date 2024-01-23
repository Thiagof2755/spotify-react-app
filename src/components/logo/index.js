import styled from "styled-components";
import logo from '../../assets/icons/logo-spotify.png';


const LogoContainer = styled.div`
margin: 5px 0px 0px 10px;



`;

const LogoImage = styled.img`
    width: 30%;
    margin-top: 20px;
    margin-left: 20px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="logo"/>
        </LogoContainer>
    );
}

export default Logo;