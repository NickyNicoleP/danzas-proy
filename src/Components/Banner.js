import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner =() =>{
    const [loopnum, setloopnum] =useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = ["Caporales" , "Diablada" , "Tinku"];
    const [text, setText] = useState('');
    const tiempo = 1000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

useEffect(()=>{
    let ticket = setInterval(()=>{
        tick();
    },delta)
    return()=>{clearInterval(ticket)};
},[text])

const tick = ()=>{
    let i = loopnum % toRotate.length;
    let fulltext = toRotate[i];
    let updateText = isDeleting ? fulltext.substring(0,text.length-1) : fulltext.substring(0,fulltext.length+1);

    setText(updateText);

    if(isDeleting){
        setDelta(prevDelta => prevDelta/2);
    }
    if(!isDeleting && updateText === fulltext){
        setisDeleting(true);
        setDelta(tiempo);

    }else {
        if(isDeleting && updateText === ''){
            setisDeleting(false);
            setloopnum(loopnum+1);
            setDelta(500);
        }
    }
}


    return(
        <section className="banner" id="home">
            <Container>
                 <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">DANZAS DE BOLIVIA</span>
                            <h1>{'Mira la danza de '}<span className="wrap">{text}</span></h1>
                            <p>Bienvenido a "Danzas de Bolivia", tu ventana virtual a la rica y diversa tradición cultural de Bolivia a través de sus expresivas danzas. Sumérgete en un viaje fascinante a lo largo y ancho de este hermoso país, donde cada región y comunidad tiene su propia historia para contar a través del arte del movimiento. En nuestra página, encontrarás una cuidadosa recopilación de videos y fotografías que capturan la esencia y la belleza de las danzas bolivianas. Desde las vibrantes y coloridas danzas folklóricas que celebran festividades tradicionales hasta las expresiones más profundas y rituales que conectan con las raíces indígenas, ofrecemos una experiencia inmersiva para que todos puedan apreciar y entender la riqueza cultural de Bolivia. "Danzas de Bolivia" es más que una página web; es un homenaje digital a la riqueza cultural del país, diseñado para educar, inspirar y promover el respeto y aprecio por la diversidad cultural. ¡Prepárate para sumergirte en el fascinante mundo de las danzas bolivianas y descubrir la magia que cada movimiento encierra!</p>
                            <button>Más Información<ArrowRightCircle size={25}/></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header"/>
                    </Col>
                 </Row>
            </Container>
        </section>
    )
}