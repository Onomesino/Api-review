import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./SeaFooter.css";
function SeabornFooter() {
  return (
    <>
      <Container style={{ marginTop: "5rem" }}>
        <Row>
          <Col>
            
          </Col>
          <Col>
            <h5>CONTACT US</h5>
            <hr />
            <h6>
              Sandviksboder 66
              <br />
              N-5035 Bergen, Norwayb
            </h6>
            <h6 className="space">T: (+47) 55 33 40 50</h6>
            <h6 className="space">sales@seaborn.no</h6>
          </Col>
          <Col id="media">
            <h5>SOCIAL MEDIA</h5>
            <hr />
            <a href="https://www.facebook.com/seabornas/?fref=ts">
              <img src="./Facebook.png" alt="" id="facebook" />
            </a>
            <a href="https://www.linkedin.com/company/seaborn-as/">
              <img src="./linkdin.png" alt="" id="linkdin" />
            </a>
            <a href="https://www.instagram.com/seabornnorway/">
              <img src="./instagram.png" alt="" id="insta" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SeabornFooter;
