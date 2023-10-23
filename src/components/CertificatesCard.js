import { Col } from "react-bootstrap";

export const CertificatesCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbxx" >
        <img src={imgUrl} alt="img" className="custom-image"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
