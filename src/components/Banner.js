import { useState, useEffect } from "react";
import '../tailwind.css';
import {Container, Row, Col} from 'react-bootstrap';

import headerImg from '../assets/img/header.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = [ "Software Engineer"];
    const period = 2000;
  
    useEffect(() => {
      let ticker = setInterval(() => {
        tick();
      }, delta);
  
      return () => { clearInterval(ticker) };
    }, [text])
  
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
  
      setText(updatedText);
  
      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }
  
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
      
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
       
        setDelta(500);
      }
}
    return(
      <section className="banner" id="home">
         <Container>
            <Row className="align-items-center" style={{ display: 'flex' }}>
                <Col xs={10} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Kenza`}</h1><span className="wrap">{text}</span>
                    <p>I am a software engineer and a social media content creator. I love sharing my experience with others. And I also love to learn something new every single day.</p>
                    
                </Col>
                <Col  xs={12} md={6} xl={5} >
                      <img src={headerImg} alt="Header img"/>
                </Col>
            </Row>
         </Container>
      </section>
    )
}