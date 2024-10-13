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
        
                    
                
                                    
                {props.id === 4 && <img src={foundation} height={300} style={{marginTop: '150px 0'}}  alt="cyber truck foundation"/> }
                {props.id === 4 && <img src={foundation2} height={30}  alt="cyber truck foundation"/> }

                    
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
                    <ScrollToTop/>
                    
        
                    
                    
        
                </div>
                
                
        
            </Container>
            </Wrap>
          )

    }


       
  
});

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
        font-size: 3vw;
        color: white;
       
    }
`
const Title = styled.h1`
 font-size: 5rem;
 @media (max-width: 1920px){
  font-size: 3rem;
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
        font-size: 1.5rem;
    }
 
`

const Summary = styled.p`
font-size: 1.5rem;
font-weight: 500;
@media (max-width: 1920px){
    font-size: 1rem;
}
    @media (max-width: 980px) {
        font-size: 0.8rem;
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