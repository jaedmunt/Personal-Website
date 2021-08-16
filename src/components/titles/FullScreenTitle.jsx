import React from "react";
import "./FullScreenTitle.css";
import { Col, Container, Image, Row } from "react-bootstrap";

function FullScreenTitle(props) {
  return (
    <Container fluid className="py-4">
      <Container>
        <Row className="fs-title-container align-items-center">
          <Col lg className="text-center text-lg-start py-5">
            <h1 className="display-1 mb-4 type-writer">{props.title}</h1>
            <p className="fs-3">{props.subtitle}</p>
          </Col>
          <Col lg className="d-flex justify-content-center">
            <Image className="full-screen-image rounded-corners border-purple shadow" fluid src={props.imageSrc} alt={props.imageAlt} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FullScreenTitle;
