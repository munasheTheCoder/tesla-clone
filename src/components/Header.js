import React , {useState, useRef}from 'react'
import logo from '../images/teslalogo.svg'
import profile from '../images/profile.svg'
import support from '../images/support.svg'
import global from '../images/globe.svg'
import styled from 'styled-components'

const Header = ({ modelSRef, model3Ref, modelXRef, modelYRef, modelCRef, modelNRef, modelARef }) => {

  

  
  const [open, setOpen] = useState(0)

 
  return (
    <header>
      <img className='tesla' src={logo}/>
      <nav>
        <ul>
          <li><a  href="/">Vehicles</a></li>
          <li><a  href='/'>Energy</a></li>
          <li><a  href="/">Charging</a></li>
          <li><a  href="/">Discover</a></li>
          <li><a  href="/">Shop</a></li>
          <li><a   href="/">We, Robot</a></li>
        </ul>
      </nav>

      <div className='second-menu'>
        
        <img src={support} onClick={() => setOpen(true)} />
        <img src={global} onClick={() => setOpen(true)} />
        <img src={profile} onClick={() => setOpen(true)} />
      </div>

      

    </header>
    
  )
}

const NavMenu = styled.div`
position: fixed;
    top:0;
    bottom: 0;
    right:0;
    background: transparent;
    backdrop-filter: blur(10px ) saturate(120%) drop-shadow(4px 4px 10px black);
    width: 300px;
    z-index: 100;
    padding: 20px;
    display: flex;
    flex-direction: column;
    li {
    list-style: none;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    
    }
    a{
    font-weight: 700;
    }
    img {
    margin-left: 230px;
   
    }
    justify-content: flex-start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
`

export default Header