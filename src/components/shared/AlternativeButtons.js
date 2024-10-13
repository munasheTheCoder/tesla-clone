import React from 'react'
import styled from 'styled-components'

const AlternativeButtons = (props) => {
  return (
    <Button>
        <LeftButton>{props.left}</LeftButton>
        {props.right ? <RightButton>{props.right}</RightButton> : '' }
    </Button>
  )
}

const LeftButton = styled.div`
    padding: 0;
    width: 19rem;
    height: 3rem;
    background-color: black;
    opacity: 0.7;
    cursor: pointer;
    margin-top: 1px;
    color: white;
    display: flex;
    border-top: 2.5px solid rgb(141, 138, 138);
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;

    @media (max-width : 1920px){
       width: 12rem;
       height: 1.7rem;
       font-size: 0.8rem;
      
    }
       @media (max-width: 980px) {
       width: 10rem;
       height: 2.5rem;
    }

    &:hover{
      opacity: 0.6;
    }


`
const Button = styled.div`
    margin-bottom: 20px;
    display: flex;
    gap: 15px;
    justify-content: center;
    @media (max-width: 980px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
      

`
const RightButton = styled(LeftButton)`
    border: 0


`

export default AlternativeButtons