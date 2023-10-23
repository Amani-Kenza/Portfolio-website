import { Container, Row, Col, Tab} from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import certiImg1 from '../assets/img/certi-img1.png'
import certiImg2 from '../assets/img/certi-img2.png'
import certiImg3 from '../assets/img/certi-img3.png'
import certiImg4 from '../assets/img/certi-img4.png'
import { CertificatesCard } from "./CertificatesCard";
export const Certificates=()=>{

    const certificates=[
        {
          title: "Full Stack Development",
          description: "Udacity",
          imgUrl: certiImg1,
        },
        {
          title: "React",
          description: "SATR",
          imgUrl: certiImg2,
        },
        {
          title: "Data science IBM",
          description: "Coursera",
          imgUrl: certiImg3,
        },
        {
            title: "Regression and classification",
            description: "Coursera",
            imgUrl: certiImg4,
          },
      ];
      return(
        <section className="project" id="certificates">
                  <Container>
                   <Row>
                       <Col>
                         <h2>Certificates</h2>
                         <p>Here are my diffrent certificates.</p>
                        <Tab.Container id="certificates-tabs" defaultActiveKey="first">
                        <Tab.Content id="slideInUp">
                           <Tab.Pane eventKey="First">
                               <Row className="flexx">
                               {
                                   certificates.map((certificate, index) => {
                                   return (
                                  <CertificatesCard
                                  key={index}
                                  {...certificate}
                                 />
                                     )
                                 })
                               }
                               </Row>
                           </Tab.Pane>
                           
                           
                        </Tab.Content>
                        </Tab.Container>
                      
                       </Col>
                   </Row>
                  </Container>
                 
        </section>
 )
}