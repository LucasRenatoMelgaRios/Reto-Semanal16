import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import estrellas from '../img/estrellas.png'
import { IoMdClose } from "react-icons/io";



const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Herr+Von+Muellerhoff&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=Poiret+One&display=swap');
`;

const MainContainer = styled.section`
    max-width: 100%;
    padding: 120px;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2{
        font-family: 'Cabin', sans-serif;
        font-size: 2rem;
        color: #fff;
    }
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    margin-top: 50px;
    justify-content: space-around;
    padding-right: 180px;
`;

const BasicInput = styled.input`
    width: 200px;
    padding: 10px;
`;

const BasicButton = styled.button`
    padding: 10px;
    width:225px;
    justify-content: center;
    font-family: 'Cabin', sans-serif;
    
`;

const FormularySection = styled.div`
    width: 30%;
    flex-direction: column;

    form{
        display: flex;
        flex-direction: column;
        align-items:center; 
        gap: 20px;
    }
`;


const PublishedComments = styled.div`
    min-width: 220px;
    border-radius: 10px;
    background-color: #272727;
    border: 1px solid white;
   


    `;

const Comment = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    gap: 50px;


    p{

        font-family: 'Cabin', sans-serif;
    }
`;

const CommentTextContainer = styled.div`
    width: 80%;
    overflow: hidden;
    margin: 0 auto;
    overflow-wrap: break-word;
`;


const EstrellasAndDeleteButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

const AllCommentsContainer = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Máximo de 3 columnas */
    column-gap: 150px;
    row-gap: 20px;

`;

export const CommentsSection = () => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSaveComment = (event) => {
        event.preventDefault();
        const newComment = {
            name: name,
            review: review
        };
        setComments([...comments, newComment]);
        setName('');
        setReview('');
    };
    

    return (
        <>
            <MainContainer>
                <h2>Customers Review</h2>
                <Content>
                    <FormularySection>
                        <form action="">
                            <BasicInput placeholder='Your name' value={name} onChange={handleNameChange} />
                            <BasicInput placeholder='Your review' value={review} onChange={handleReviewChange} />
                            <BasicButton onClick={handleSaveComment}>Send</BasicButton>
                        </form>
                    </FormularySection>
                    <AllCommentsContainer>
                         {/* Aquí puedes mostrar los comentarios guardados en el arreglo */}
                            {comments.map((comment, index) => (
                            <PublishedComments>
                            <Comment key={index}>
                                <EstrellasAndDeleteButton>
                                    <img src={estrellas} style={{height: "20px"}} />
                                    <IoMdClose style={{width: "40px", height: "30px"}}></IoMdClose>
                                </EstrellasAndDeleteButton>
                                <CommentTextContainer>
                                <p>{comment.review}</p>
                                </CommentTextContainer>
                                <p style={{textAlign: "right", marginBottom:"20px", marginRight: "20px"}}>{comment.name}</p>
                            </Comment>
                            </PublishedComments> 
                        ))}
                    </AllCommentsContainer>

                </Content>
            </MainContainer>
        </>
    );
};





