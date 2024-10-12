import React, {forwardRef} from 'react';
import downArrow from '../../images/down-arrow.svg'
import top from '../../images/chevron-direction-top-white-icon.png'
import './section.css';
import styled from 'styled-components'
import { Fade

 } from 'react-reveal';
import ScrollToTop from './ScrollToTop';

const Section = forwardRef((props, ref) => {

    
        const handleScrollDown = () => {
          window.scrollBy({
            top: window.innerHeight, 
            behavior: 'smooth'
          });
        };

        const handleScrollToTop = () => {
            window.scrollTo({
                top: 0, 
                behavior: 'smooth'
            });
        };
        console.log(props)
  return (
    
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
                <div className='buttons'>
                    <div className='leftButton'>
                        {props.lefttext}
                    

                    </div>
                    {props.rightext ? <div className='rightButton'>
                    {props.rightext}

                    </div> : '' }
                    
                </div>
            </Fade>
            <img src={downArrow} onClick={handleScrollDown} height={40} />
            <ScrollToTop/>
            

            
            

        </div>
        
        

    </Container>
  )
});

const Container = styled.div`
    
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${({image})=> `url(${require(`../../images/${image}`)})`};;
    

`
export default Section