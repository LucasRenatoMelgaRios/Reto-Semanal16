import styled from 'styled-components';


const HeaderContainer = styled.header`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-around;
    top: 20px;

`;

const BarraNav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-left: 890px;
`;

const EnlacesNav = styled.a`
    cursor: pointer;
    font-size: 1.2rem;
`;



export const Header = () =>{
    return(
        <>
        <HeaderContainer>
        <EnlacesNav  style={{fontSize: "1.5rem", fontFamily: "'Source Sans Pro', sans-serif"}}>BAKERY</EnlacesNav>
            <BarraNav>
                <EnlacesNav>HOME</EnlacesNav>
                <EnlacesNav>ABOUT US</EnlacesNav>
                <EnlacesNav>RESERVATION</EnlacesNav>
                <EnlacesNav>BAKERS</EnlacesNav>
            </BarraNav>
        </HeaderContainer>

        </>
    )
}