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
    width: 12rem;
    height: 1.7rem;
    background-color: black;
    opacity: 0.7;
    cursor: pointer;
    margin-top: 1px;
    color: white;
    display: flex;
    border-top: 2.5px solid rgb(141, 138, 138);
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;


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
    border: 0


`

export default AlternativeButtons