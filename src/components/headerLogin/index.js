import styled from "styled-components";
import { Button } from "../Button";
import { Titulo } from "../Titulo";


const HeaderLogin = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;

const TituloHover = styled(Titulo)`
    margin-right: 10px;
    color: #888;
    &:hover {
        color: #fff;
        transform: scale(1.1);
    }
    cursor: pointer;
`;

const ButtonHover = styled(Button)`

    margin-left: 10px;
    &:hover {
        transform: scale(1.1);
    }
    cursor: pointer;
`;


function HeaderLogins() {
    return (
        <HeaderLogin>
            <TituloHover tamanhoFonte="16px">
                Increva-se
            </TituloHover>
            <ButtonHover>Entrar</ButtonHover>
        </HeaderLogin>
    );
}

export default HeaderLogins;