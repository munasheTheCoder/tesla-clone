import React , {useState, useEffect}from 'react'
import logo from '../images/teslalogo.svg'
import profile from '../images/profile.svg'
import profileBlack from '../images/profile-black.svg'
import support from '../images/support.svg'
import global from '../images/globe.svg'
import globalBlack from '../images/globe-black.svg'
import styled from 'styled-components'
import cancelMenu from '../images/cancel.svg'

const Header = ({ modelSRef, model3Ref, modelXRef, modelYRef, modelCRef, modelNRef, modelARef }) => {
  const [open, setOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    
    if (currentScrollY < lastScrollY) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

 
  return (
    <HeaderContainer show={scrollingUp}>
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

      <div className='menu' onClick={() => setOpen(true)}>
        <p>Menu</p>
      </div>

      <NavMenu show={open}>
      <img className='cancel' onClick={() => setOpen(false)} src={cancelMenu} height={15}/>
          <li><a  href="/">Vehicles</a></li>
          <li><a  href='/'>Energy</a></li>
          <li><a  href="/">Charging</a></li>
          <li><a  href="/">Discover</a></li>
          <li><a  href="/">Shop</a></li>
          <li><a   href="/">We, Robot</a></li>
          <li><a  href="/">Support</a></li>
          <Contain>
          <li><a  href="/">United States</a></li>
          <img src={globalBlack} height={40} />

          </Contain>
          <Contain>
          <li><a   href="/">Account</a></li>
          <img src={profileBlack} height={40} onClick={() => setOpen(true)} />

          </Contain>
          
          
      </NavMenu>

      

    </HeaderContainer>
    
  )
}
const Contain = styled.div`
  display: flex;
  align-items: center;
`
const HeaderContainer = styled.div`
   width: 100vw;
    height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3%;
    z-index: 1000;
    cursor: pointer;
    ul{
    display: flex;
    justify-content: space-between;
    list-style: none;
    gap: 0.5rem;
    img{
    
    }
    @media (max-width: 1150px) {
    display: none;
}
}
    a{
       text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
   transition: color .33s ease, background-color .33s ease;
    }
   a:hover{
   background-color: rgba(0, 0, 0, .2);
   backdrop-filter: blur(10px) saturate(120%) drop-shadow(4px 4px 10px black) ;
   padding: 10px 20px;
   @media (max-width: 1150px) {
   
}
}
   
`
const NavMenu = styled.div`
position: fixed;
    top:0;
    bottom: 0;
    right:0;
    background: white;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    padding: 30px;
    display: flex;
    flex-direction: column;
    li {
    list-style: none;
    padding: 15px 0;
    
    }
    a{
    font-weight: 700;
    font-size: 20px;
    color: black;
    font-family: universal sans text,  -apple-system,  arial,  sans-serif, universal sans ;
    }
    img {
    margin-left: 300px;
   
    }
    justify-content: flex-start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
`

export default Header