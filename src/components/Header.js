import React , {useState, useRef}from 'react'
import logo from '../images/logo.svg'
import cancelMenu from '../images/cancel.svg'
import menu from '../images/three-horizontal-lines-icon.svg'
import styled from 'styled-components'
const Header = ({ modelSRef, model3Ref, modelXRef, modelYRef, modelCRef, modelNRef, modelARef }) => {

  const scrollToSection = (elementRef, event) => {
    event.preventDefault();
    if (elementRef.current) {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth',
        });
    }
};
  const [open, setOpen] = useState(0)

 
  return (
    <header>
      <img className='tesla' src={logo}/>
      <nav>
        <ul>
          <li><a onClick={(event) => scrollToSection(modelSRef, event)} href="/">Model S</a></li>
          <li><a onClick={(event) => scrollToSection(model3Ref, event)} href='/'>Model 3</a></li>
          <li><a onClick={(event) => scrollToSection(modelXRef, event)} href="/">Model X</a></li>
          <li><a onClick={(event) => scrollToSection(modelYRef, event)} href="/">Model Y</a></li>
          <li><a onClick={(event) => scrollToSection(modelCRef, event)} href="/">Cyber Truck</a></li>
          <li><a onClick={(event) => scrollToSection(modelNRef, event)}  href="/">Solar Roof</a></li>
          <li><a onClick={(event) => scrollToSection(modelARef, event)}  href="/">Accessories</a></li>
        </ul>
      </nav>

      <div className='second-menu'>
        <p>
          shop
        </p>
        <p>
          tesla account
        </p>
        <img src={menu} onClick={() => setOpen(true)} height={20}/>
      </div>

      <NavMenu show={open}>
            <img className='cancel' onClick={() => setOpen(false)} src={cancelMenu} height={25}/>
            <li><a onClick={(event) => scrollToSection(modelSRef, event)} href="#">Model S</a></li>
          <li><a onClick={(event) => scrollToSection(model3Ref, event)} href='#'>Model 3</a></li>
          <li><a onClick={(event) => scrollToSection(modelXRef, event)} href="#">Model X</a></li>
          <li><a onClick={(event) => scrollToSection(modelYRef, event)} href="#">Model Y</a></li>
          <li><a onClick={(event) => scrollToSection(modelCRef, event)} href="#">Cyber Truck</a></li>
          <li><a onClick={(event) => scrollToSection(modelNRef, event)}  href="#">Solar Roof</a></li>
          <li><a onClick={(event) => scrollToSection(modelARef, event)}  href="#">Accessories</a></li>
        </NavMenu>

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