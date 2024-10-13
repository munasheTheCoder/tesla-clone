import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const DoubleSection = (props) => {
  return (
    <Wrap>
        <Container image={props.image}>
            <Text>
            <Title>{props.title}</Title>
                        <Description>
                        {props.description}

                        </Description>

            </Text>
            <Buttons left={props.lefttext} right={props.rightext}/>

        </Container>
        <Container2 image={props.secondImage}>
            <Text>
            <Title>{props.title2}</Title>
                        <Description>
                        {props.description2}

                        </Description>

            </Text>
            <Buttons left={props.lefttext} right={props.rightext}/>

        </Container2>
    </Wrap>
  )
}

const Container = styled.div`
    
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    width: 43.6vw;
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
        @media (max-width: 1200px){
        width: 88vw;
        height: 92vh;
        }
    

`
const Container2 = styled(Container)`
  background-image: ${({image})=> `url(${require(`../../images/${image}`)})`};

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
        font-size: 1rem;
    }
 
`

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.8vw;
    @media (max-width: 1200px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`

const Text = styled.div`
    text-align: center;
    display: flex;
    font-size: larger;
    flex-direction: column;
    padding-top: 65px;
    color: white;
`
export default DoubleSection