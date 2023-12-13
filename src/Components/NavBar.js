import { Navbar , Container , Nav}from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import navIcon1 from'../assets/img/nav-icon1.svg';
import navIcon2 from'../assets/img/nav-icon2.svg';
import navIcon3 from'../assets/img/nav-icon3.svg';


export const NavBar = () =>{

    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink]= useState('home');

    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(true);
            }
        }
        window.addEventListener("scroll", onScroll)
        return ()=>window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> 
            

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home"className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#sc"className={activeLink === 'sc' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('sc')}>SCZ</Nav.Link>
                <Nav.Link href="#lp"className={activeLink === 'lp' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('lp')}>LPZ</Nav.Link>
                <Nav.Link href="#cb"className={activeLink === 'cb' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('cb')}>CBBA</Nav.Link>
                <Nav.Link href="#tj"className={activeLink === 'tj' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('tj')}>TJA</Nav.Link>
                <Nav.Link href="#or"className={activeLink === 'or' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('or')}>ORU</Nav.Link>
                <Nav.Link href="#po"className={activeLink === 'po' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('po')}>PSI</Nav.Link>
                <Nav.Link href="#be"className={activeLink === 'be' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('be')}>BNI</Nav.Link>
                <Nav.Link href="#ca"className={activeLink === 'ca' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('ca')}>CHQ</Nav.Link>
                <Nav.Link href="#pa"className={activeLink === 'pa' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('pa')}>PND</Nav.Link>
                <Nav.Link href="#de"className={activeLink === 'de' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('de')}>DED</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#"> <img src={navIcon1} alt=""/> </a>
                        <a href="#"> <img src={navIcon2} alt=""/> </a>
                        <a href="#"> <img src={navIcon3} alt=""/> </a>
                    </div>
                    <button className="vvd" onClick={()=>console.log('Conectado')}><span>Go</span></button>
                </span>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}