import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.js";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/healthy.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/medai.png";
import projImg6 from "../assets/img/portfolio.png";
import icon from "../assets/img/icon-link.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Projects = () => {
  const projects = [
    {
      title: "MedAI Application",
      technologies: "Reactjs - TailwindCSS - Nodejs - MongoDB- AI",
      description:'A medical application, which helps patients discuss their symptoms with an AI chatbot and search for nearby hospitals.',
      imgUrl: projImg5,
      icon:icon,
      iconLink:"https://medai-afrihacks2023.vercel.app/auth"
    },
    {
      title: "Healthy_cakes shop",
      technologies: "Reactjs - TailwindCSS - Nodejs - MongoDB",
      description:'A shop application for selling healthy cakes and we can find different recipes for cakes, muffins,....',
      imgUrl: projImg2,
      icon:icon,
      iconLink:"https://github.com/Amani-Kenza/food-shop",
    },
    {
      title: "Track system website",
      technologies: "Bootstrap - PHP - MySQL",
      description:'An application developed during my internship at ENIEM to interact with the company"s tracking system.',
      imgUrl: projImg4,
      icon:icon,
    },
    {
      title: "Quiz Application",
      technologies: "Bootstrap - jQuery",
      description:'A quiz application with multiples questions to test your knowledge in HTML, CSS, and JavaScript.',
      imgUrl: projImg3,
      icon:icon,
      iconLink:"https://github.com/Amani-Kenza/quiz_app"
    },
    {
      title: "Online CV",
      technologies: "Bootstrap",
      description:'An online CV developed using Bootstrap where you can input your informations.',
      imgUrl: projImg1,
      icon:icon,
      iconLink:"https://github.com/Amani-Kenza/Online_CV",
    },
    {
      title: "Portfolio",
      technologies: "Reactjs - TailwindCSS",
      description:'An example of a portfolio websiste, where you can show your work.',
      imgUrl: projImg6,
      icon:icon,
      iconLink:"https://github.com/Amani-Kenza/Blog/tree/main"
    }
  ];

  const projectPairs = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectPairs.push(projects.slice(i, i + 2));
  }

  return (
    <section className="project" id="projects">
      <Container>
        <h2>Projects</h2>
        <p>Here are my different projects.</p>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Tab.Content id="slideInUp">
            <Tab.Pane eventKey="First">
              {projectPairs.map((pair, index) => (
                <Row key={index} className="flex flexx">
                  {pair.map((project, innerIndex) => (
                    <Col key={innerIndex} className="cus-img">
                      <ProjectCard {...project} />
                    </Col>
                  ))}
                </Row>
              ))}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image6" />
    </section>
  );
};
