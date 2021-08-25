import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Button, Input } from "@material-ui/core";

export default function SearchInput() {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <input style={{ height: "100%" }} type="text" />
        </Col>
        <Col xs={2}>
          <Button style={{ borderWidth: "30px" }} variant="success">
            Se
          </Button>
          {/* <Button size="small" variant="contained" color="success">
            save
          </Button> */}
        </Col>
      </Row>
    </Container>
  );
}
