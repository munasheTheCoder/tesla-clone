
import React from 'react'
import styled from 'styled-components'

const Buttons =(props) => {
  return (
    <Button>
        <LeftButton>{props.left}</LeftButton>
        {props.right ? <RightButton>{props.right}</RightButton> : '' }
    </Button>
  )
}

const LeftButton = styled.div`
    padding: 0;
    width: 12rem;
    height: 1.7rem;
    background-color: rgb(65, 109, 221);
    color: white;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;

`
const Button = styled.div`
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    justify-content: center;
    @media (max-width: 980px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

`
const RightButton = styled(LeftButton)`
    background-color: #ffffff;
    color: black;
`

export default Buttons