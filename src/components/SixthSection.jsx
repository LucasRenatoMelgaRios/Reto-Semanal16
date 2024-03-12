import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import imagen1 from '../img/bakers-delight-1.jpg';
import imagen2 from '../img/bakers-delight-2.jpg';



const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Herr+Von+Muellerhoff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Poiret+One&display=swap');
`;

const MainContainer = styled.section`
    max-width: 100%;
    padding-left: 120px;
    padding-right: 150px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
`;

const PrimeraMitad = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
    column-gap: 30px;
    
    img{
        width: 100%;
    }
`;

const SegundaMitad = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

   
   
    h2{
    color: #e1b164;
    font-weight: 100;
    letter-spacing: 3px;
    font-family: 'Herr Von Muellerhoff', cursive;
    font-size: 8rem;
    }

    h3{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 100;
        font-size: 3.2rem;
        font-weight: 600;
        letter-spacing: 5px;
        margin-top: -70px;
    }

`;

const DescriptionContainer = styled.div`
    width: 90%;
    text-align: center;
    font-size: 1.1rem;
    font-family: 'Cabin', sans-serif;;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    a{
        font-family: "Cabin", sans-serif;
        color: #e1b164;
        font-size: 1.3rem;
    }

    a:hover{
        color: #ed7226;
    }
`;


export const SixthSection = () =>{
    return(
       <MainContainer>
       <SegundaMitad>
            <h2>Baker's</h2>
            <h3 style={{marginTop: "-40px"}}>DELIGHT</h3>
            <DescriptionContainer>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus illo, libero esse repellat beatae reiciendis hic recusandae vero adipisci.</p>
                <a href="">MAKE A RESERVATION</a>
            </DescriptionContainer>
        </SegundaMitad>
        <PrimeraMitad>
            <img src={imagen1} alt="" />
            <img src={imagen2} alt="" />

        </PrimeraMitad>

       </MainContainer>
    )
}