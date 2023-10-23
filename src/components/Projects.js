import { Container, Row, Col, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp from "../assets/img/color-sharp.png"


export const Projects = ()=>{

    const projects=[
            {
              title: "Online CV",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Track system website",
              description: "Design & Development",
              imgUrl: projImg4,
            },
            {
              title: "Quiz Application",
              description: "Design & Development",
              imgUrl: projImg3,
            },
          ];
    
      return(
             <section className="project" id="projects">
                       <Container>
                        <Row>
                            <Col>
                              <h2>Projects</h2>
                              <p>Here are my diffrent projects.</p>
                             <Tab.Container id="projects-tabs" defaultActiveKey="first">
                             <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="First">
                                    <Row className="flex">
                                    {
                                        projects.map((project, index) => {
                                        return (
                                       <ProjectCard
                                       key={index}
                                       {...project}
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
                      <img className="background-image-left" src={colorSharp} alt="Image6" />
             </section>
      )
}