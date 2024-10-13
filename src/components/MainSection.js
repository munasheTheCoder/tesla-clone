import React, {useState, useEffect} from 'react'
import robot from '../images/we-robot.svg'
import styled from 'styled-components'
import Buttons from './shared/Buttons';

const MainSection = ({image, image2, secondImage, secondImage2}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const backgrounds = [
    { image: image, img2: image2,text: '0% APR With Purchase of FSD (Supervised)', buttonText: 'Order Model 3', buttonText2: 'Order Model Y' },
    { image: secondImage, img2: secondImage2, img: robot, buttonText: 'Learn More' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        setFade(false);
      }, 1000); 
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(false);
    }, 1000); 
  };

  return (
    <Wrap fade={fade} img={backgrounds[currentIndex].image} img2={backgrounds[currentIndex].img2}>

        <Container>
          <RoundButtons>
            
            
              {backgrounds.map((_, index) => (
                <Dot
                  key={index}
                  className={currentIndex === index ? 'active' : ''}
                  onClick={() => handleButtonClick(index)}
                />
              ))}
            
            
          </RoundButtons>
      
          <Contain>
            <Description>

            {backgrounds[currentIndex].text && backgrounds[currentIndex].text}
            

            </Description>
            {backgrounds[currentIndex].img && <img src={backgrounds[currentIndex].img} style={{ margin: '20px 0', display: 'block', maxWidth: '100%', height: 200 }}  alt="we robot logo"/>}
            <Buttons right={backgrounds[currentIndex].buttonText2} right2={backgrounds[currentIndex].buttonText}/>
          </Contain>

        </Container>

    </Wrap>
  )
}

const RoundButtons = styled.div`
display: flex;
gap: 0.5rem;
margin-bottom: 10px 0;
`

const Contain = styled.div`
display: flex;
flex-direction:column;
align-items: flex-start;
`

const Dot = styled.button`
  height: 15px;
  width: 15px;
  border: 0;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s ease; 

  &:active {
    background-color: white; 
  }

  &.active {
    background-color: rgb(149, 148, 148); 
  }
`;
const Description = styled.h1`
    color: white;
    font-weight: 600;
    font-size: 4rem; 
    width: 40%;
    margin-bottom: 0.4vw 0 ;
    
    &:hover {
        text-decoration-thickness: 2px;
    }
    @media (max-width: 1920px){
    font-size: 2rem;
    }
    @media (max-width: 980px) {
        width: 90%;

    }
 
`

const Wrap = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-bottom: 2vw;
    transition: opacity 0.4s ease-in-out;
    opacity: ${({ fade }) => (fade ? 0 : 1)};
    background-image: ${({img}) => `url(${require(`../images/${img}`)})`};
    @media (max-width: 740px) {
        background-image: ${({img2}) => `url(${require(`../images/${img2}`)})`};
    }
    @media (max-width: 980px) {
      align-items: center;
      justify-content: center;
    }
    

  

`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
  padding: 0 3%;
  width: 100%;
  height: 100vh;
  @media (max-width: 1200px){
   justify-content: flex-end;
   height: 90vh;
  }

  @media (max-width: 980px) {
    width: 80%;
    align-items: flex-start; 
    justify-content: flex-end; 
    margin-bottom: 10vh;
  }

`

export default MainSection