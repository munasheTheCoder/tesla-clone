
import React from 'react'
import styled from 'styled-components'

const Buttons =(props) => {
  return (
    <Button>
        
        {props.left ? <LeftButton>{props.left}</LeftButton> : '' }
        {props.right ? <RightButton>{props.right}</RightButton> : '' }
        {props.right2 ? <RightButton>{props.right2}</RightButton> : '' }
    </Button>
  )
}

const LeftButton = styled.div`
    padding: 0;
    width: 19rem;
    height: 3rem;
    background-color: rgb(66, 109, 222);
    color: white;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    @media (max-width : 1920px){
       width: 12rem;
       height: 1.7rem;
       font-size: 0.8rem;
      
    }
    @media (max-width: 980px) {
       width: 10rem;
       height: 2.5rem;
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
    background-color: #ffffff;
    color: black;
`

export default Buttons