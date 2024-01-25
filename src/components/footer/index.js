import React from "react";
import styled from "styled-components";
import { Button }from "../Button" ;

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to right, #ae2896, #509bf5);
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 390px) {
        width: 100%;
        height: auto;
    }
`;

const FooterText = styled.div`
    color: #fff;
    font-size: 14px;

`;



function Footer() {
    return (
        <FooterContainer>
            <FooterText>
                TESTAR O PREMIUM DE GRAÇA
                <br />
                Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.
            </FooterText>
            <Button>Increva-se grátis</Button>
        </FooterContainer>
    );
}

export default Footer;

