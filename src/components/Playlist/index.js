import styled from "styled-components";
import { Titulo } from "../Titulo";
import Card from "../Card";
import data from "../../Data/Card.json";

const PlaylistContainer = styled.div`
    width: 90%;
    height: 68vh;
    padding-top: 16px;
    margin: 10px;
    border-radius: 10px;
    background-color: #121212;

    @media screen and (max-width: 390px) {
        width: 100%;
        height: 100%;
        padding-top: 8px;
        margin: 5px;
        border-radius: 5px;
        
    }
`;

const TopContainer = styled.div`
    margin: 24px;
    @media screen and (max-width: 390px) {
        max-height: 100vh;
    }
`;

const TituloHover = styled(Titulo)`
    display: flex;
`;

const CardContainer = styled.div`
    max-height: 43vh;
    overflow-y: scroll;
    overflow-x: hidden;
    display: grid;
    grid-gap: 20px;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

    @media screen and (max-width: 1015px) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }

    @media screen and (max-width: 390px) {
        max-height: 100vh;
     @media screen and (max-width: 1015px) {
         grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
     }

     @media screen and (max-width: 390px) {
        max-height: 100vh;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    }
};

`;

const CardStyle = styled(Card)`
    position: relative;
    width: 220px;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    

`;


function Playlist() {
    const cards = data;

    return (
        <PlaylistContainer>
            <TopContainer>
                <TituloHover tamanhoFonte="32px" cor="#fff">Boa tarde</TituloHover>
                <TituloHover tamanhoFonte="24px" cor="#fff">Navegar por todas as seções</TituloHover>
            </TopContainer>
            <CardContainer>
                {cards.map((card, index) => (
                    <CardStyle key={index} title={card.title} image={card.id} backgroundColor={card.backgroundColor} />
                ))}
            </CardContainer>
        </PlaylistContainer>
    );
}

export default Playlist;