import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'

const DoubleSection = (props) => {
  return (
    <Wrap>
        <Container image={props.image}>
            <Text>
                <h1>{props.title}</h1>
                <p>
                {props.description}
                </p>

            </Text>
            <Buttons left={props.lefttext} right={props.rightext}/>

        </Container>
        <Container2 image={props.secondImage}>
            <Text>
                <h1>{props.title2}</h1>
                <p>
                {props.description2}
                </p>

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
    width: 45.6vw;
    height: 80vh;
    display: flex;
    margin: 0.4vw 0;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${({image})=> `url(${require(`../../images/${image}`)})`};
    @media (max-width: 980px) {
        width: 85vw;
        margin: 1vw 0;
    }
    

`
const Container2 = styled(Container)`
  background-image: ${({image})=> `url(${require(`../../images/${image}`)})`};

`

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.8vw;
    @media (max-width: 980px) {
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