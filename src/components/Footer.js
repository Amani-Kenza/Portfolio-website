import {Container, Row, Col} from "react-bootstrap";
import logo from '../logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const Footer =()=>{
return(
    <footer className="footer">
        <Container>
            <Row className="align-items-center"> 
               <Col sm={6} className="text-center text-sm-end">
                   <div className="social-icon i">
                       <a href="https://www.linkedin.com/in/kenza-amani-6217b1218/"><img src={navIcon1} alt="fac"/></a>
                       <a href="https://twitter.com/kenza47783242"><img src={navIcon2} alt="fac"/></a>
                       <a href="https://github.com/Amani-Kenza"><img src={navIcon3} alt="fac"/></a>
                   </div>
                   <p>CopyRight 2023, ALL Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
)
}