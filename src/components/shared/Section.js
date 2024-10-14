import React, {forwardRef} from 'react';
import './section.css';
import styled from 'styled-components'
import { Fade } from 'react-reveal';
import ScrollToTop from './ScrollToTop';
import Buttons from './Buttons';
import video from '../../images/tesla-video.webm'
import AlternativeButtons from './AlternativeButtons';
import foundation from '../../images/tesla-cybertruck-seeklogo.svg'
import foundation2 from '../../images/tesla-foundation-series.svg'

const Section = forwardRef((props, ref) => {

    if(props.video === true){
        return(

    <>
        <Container2>
            
            <video src={video} autoPlay loop muted/>
        
                
            
                <Content>
                <h3>{props.title}</h3>

                

                <Button>{props.videoText}</Button>

                </Content>
                
            

            
            

        </Container2>
        
        
    </>

        )
    } else{
        return (
    
            <Wrap>
                <Container ref={ref} image={props.image}>
        
                    
                
                  {props.id === 4 && 
                    <ImageContainer>
                        <ImageOne src={foundation} alt="cyber truck foundation" />
                        <ImageTwo src={foundation2} alt="cyber truck foundation" />
                    </ImageContainer>
                  }                  
                

                    
                <Fade bottom>

                    {props.id !== 4 && 
                    <Text>
                        <Title>{props.title}</Title>
                        <Description>
                        {props.description}

                        </Description>
                        {props.description2 && <Description>
                        {props.description2}

                        </Description>}

                        {props.pricing && 
                        <Summary>
                        {props.pricing}<sup>1</sup>
                        </Summary>}
                        
        
                    </Text>}
                    
        
                </Fade>
                
        
                <div className='all-buttons'>
                    <Fade bottom>
                        
                            {props.id === 4 ? <AlternativeButtons left={props.lefttext} right={props.rightext}/> :
                                              <Buttons left={props.lefttext} right={props.rightext}/>}
                            
                            
                        
                    </Fade>
                    
        
                    
                    
        
                </div>
                
                
        
            </Container>
            </Wrap>
          )

    }


       
  
});

const ImageContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  gap: -3rem;
  align-items: center; 
  margin-top: 0; 
  
  @media (max-width: 800px) {
    margin-top: 50px; 
  }
`;
const ImageOne = styled.img`
  height: 700px;
  margin: 0;

  @media (max-width: 1300px) {
    height: 300px; 
  }
`;

const ImageTwo = styled.img`
  height: 50px;
  margin: 0; /* Default height for large screens */
   
  @media (max-width: 1300px) {
    height: 30px; 
  }
   
`;
const Text = styled.div`
text-align: center;
    display: flex;
    font-size: larger;
    flex-direction: column;
    margin-top: 9vh;
    color: white;
`
const Content = styled.div`
  
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 3%;
  gap: 20px;
    h3{
        font-size: 2.5rem;
        color: white;
       
    }

    
`
const Title = styled.h1`
 font-size: 5rem;
 @media (max-width: 1920px){
  font-size: 3rem;
 }
  @media (max-width: 920px){
  font-size: 2.5rem;
 }
`
const Description = styled.a`
    color: white;
    font-weight: 600;
    font-size: 2rem;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    cursor: pointer; 
    &:hover {
        text-decoration-thickness: 2px;
    }
    @media (max-width: 1920px){
    font-size: 1.5rem;
    }
    @media (max-width: 980px) {
        font-size: 1.4rem;
    }
 
`

const Summary = styled.p`
font-size: 1.5rem;
font-weight: 500;
@media (max-width: 1920px){
    font-size: 1rem;
}
    @media (max-width: 980px) {
        font-size: 0.9rem;
    }

`
const Container = styled.div`
    
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    width: 88vw;
    height: 92vh;
    display: flex;
    margin: 0.4vw 0;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    background-image: ${({image}) => `url(${require(`../../images/${image}`)})`};
    @media (max-width: 980px) {
        width: 93vw;
        height: 60vh;
        margin: 1vw 0;
    }
    

`
const Button = styled.div`
    padding: 0;
    width: 10vw;
    min-width: 10rem;
    height: 6vh;
    font-size: 2vh;
    background-color: white;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;

`

const Container2 = styled.div`
    border-radius: 5px;
    width: 88vw;
    height: 92vh;
    margin: 0.4vw auto;
    display: grid;
    justify-items: start;
    align-items: center;
    @media (max-width: 980px) {
        width: 93vw;
        height: 60vh;
    }

`

const Wrap = styled.div`
   display: flex;
   justify-content: center;

`


export default Section