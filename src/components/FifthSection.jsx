import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import imagenBackground from "../img/tasty.jpg";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Herr+Von+Muellerhoff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Poiret+One&display=swap');
`;


const MainContainer = styled.section`
    width: 100%;
    height: 300px;
    object-fit: cover;
    position: relative;
    margin-bottom: 750px;

    img{
        max-width: 100%;
        z-index: 10;
    }


`;

const TitleContainer = styled.div`
    margin: 0 auto;
    width: 300px;
    position: absolute;
    z-index: 1000;
    top: 150%;
    left: 55%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    


    h2{
    color: #e1b164;
    font-weight: 100;
    letter-spacing: 3px;
    font-family: 'Herr Von Muellerhoff', cursive;
    font-size: 10rem;
    }

    h3{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 100;
        font-size: 3.2rem;
        font-weight: 900;
        letter-spacing: 15px;
        margin-top: -70px;

    }
`;

export const FifthSection = () => {
    return(
        <MainContainer>
            <img src={imagenBackground} alt="" />
          <TitleContainer>
            <h2>Everything</h2>
            <h3>TASTY</h3>
          </TitleContainer>
        </MainContainer>
    )
}