import React from 'react'
import styled from 'styled-components'

const MainSection = (props) => {
  return (
    <Wrap img={props.image} img2={props.image2}>

    </Wrap>
  )
}

const Wrap = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    margin-top: 0;
    margin-bottom: 0.4vw;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${({img}) => `url(${require(`../images/${img}`)})`};
    @media (max-width: 740px) {
        background-image: ${({img2}) => `url(${require(`../images/${img2}`)})`};
    }

`

export default MainSection