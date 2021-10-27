import React from "react";
import { Container, FormControl, InputGroup, Button } from "react-bootstrap";
import Events from "./Events/Events";

const Home = () => {
  return (
    <div>
      <section className="py-5">
        <Container>
          <h2 className="text-uppercase fw-bold">
            i grow by helping people by need
          </h2>
          <div className="mx-auto" style={{ width: "400px" }}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary">Search</Button>
            </InputGroup>
          </div>
        </Container>
      </section>
      <Events></Events>
    </div>
  );
};

export default Home;
