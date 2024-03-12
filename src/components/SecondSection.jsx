import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import StoryImg from '../img/story-img.jpg'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Herr+Von+Muellerhoff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Poiret+One&display=swap');
`;

const PrincipalContainer = styled.section`
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 80px;
   margin-bottom: 80px;
`;

export const Mitad = styled.div`
    width: 50%;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 h2{
    color: #e1b164;
    font-weight: 100;
    letter-spacing: 3px;
    font-family: 'Herr Von Muellerhoff', cursive;
    font-size: 5rem;
 }
 p{
    font-family: "Cabin", sans-serif;
    font-weight: 600;
    letter-spacing: 4px;
    font-size: 1.2rem;

 }

  img{
    width: 70%;
  }
`;

const TextContainer = styled.div`
    width: 80%; 
    display: flex;
    text-align: center;
    padding: 20px;
    flex-direction: column;
    gap: 30px;

    p{
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 100;
        font-size: 1.2rem;
        
    }

    a{
        font-family: "Cabin", sans-serif;
        color: #e1b164;
        font-size: 1.3rem;
    }
`;

export const SecondSection = () =>{
    return(
    <PrincipalContainer>
       <Mitad style={{marginRight: "-100px"}}>
        <h2>Discover</h2>
        <p style={{fontSize: "2.3rem", marginTop:"-30px"}}>OUR STORY</p>
        <TextContainer>
            <p style={{fontSize: "1rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil deserunt illoksa.</p>
            <a href="">LEARN MORE</a>
        </TextContainer>
       </Mitad>
       <Mitad>
          <img src={StoryImg} style={{marginLeft: "100px"}} />
       </Mitad>
    </PrincipalContainer>
   )
}