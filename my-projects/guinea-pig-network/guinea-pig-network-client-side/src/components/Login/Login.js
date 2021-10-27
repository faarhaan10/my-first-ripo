import React from "react";
import { Container, Image, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center pt-5">
          <Image src="https://i.ibb.co/rcshhbN/logo.png" width="300px" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="py-5 border rounded w-50">
            <div className="p-5 my-5">
              <h5 className="py-3">Login With</h5>
              <Button
                className="px-4 w-100 rounded-pill position-relative"
                variant="outline-primary"
              >
                <span className="position-absolute start-0 ps-3 ">
                  <i class="fab fa-google"></i>
                </span>
                continue with google
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
