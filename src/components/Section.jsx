import styled from 'styled-components';
import  ImagenBackground  from '../img/hero-bg.jpg'

const PrincipalContainer = styled.section`
   width: 100%;
`;

const Title = styled.h1`
    position: absolute;
    z-index: 100;
    color: white;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    font-size: 3.4rem;

`;

const OrderButton = styled.button`
  padding: 20px;
  background-color: #e1b164;
  color: white;
  border: 0;
  position: absolute;
  bottom: 30%;
  right: 76%;
  transform: translate(-50%, -50%);
  font-size: 1.4rem;
  
`;


export const Section = () =>{
    return(
        <>
        <PrincipalContainer>
        <img src={ImagenBackground} width="100%"alt="" />
        <Title>LET'S MAKE THE PERFECTION</Title>
        <OrderButton>ORDER NOW</OrderButton>
        </PrincipalContainer>
        </>
    )
}