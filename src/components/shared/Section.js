import React, {forwardRef} from 'react';
import './section.css';
import styled from 'styled-components'
import { Fade } from 'react-reveal';
import ScrollToTop from './ScrollToTop';
import Buttons from './Buttons';
import video from '../../images/tesla-video.webm'
import AlternativeButtons from './AlternativeButtons';

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
        
                    
                <Fade bottom>
                    
                    <div className='textitem'>
                        <h1>{props.title}</h1>
                        <p>
                        {props.description}
                        </p>
        
                    </div>
        
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
const Container = styled.div`
    
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    width: 92vw;
    height: 80vh;
    display: flex;
    margin: 0.4vw 0;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${({image}) => `url(${require(`../../images/${image}`)})`};
    @media (max-width: 980px) {
        width: 85vw;
        height: 60vh;
        margin: 1vw 0;
    }
    

`
const Button = styled.div`
    padding: 0;
    width: 13vw;
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
    width: 92vw;
    height: 80vh;
    margin: 0.4vw auto;
    display: grid;
    justify-items: start;
    align-items: center;
    @media (max-width: 980px) {
        width: 85vw;
        margin: 1vw auto;
    }

`

const Wrap = styled.div`
   display: flex;
   justify-content: center;

`


export default Section