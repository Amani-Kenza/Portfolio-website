import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, technologies, description, imgUrl,icon,iconLink }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx" >
        <img src={imgUrl} alt="img" className="custom-image"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h6>{description}</h6>
          <span>{technologies}</span>
          <a href={iconLink}>
            <img src={icon} alt="img" className="icon-image"/>
           </a>
        </div>
      </div>
    </Col>
  )
}
