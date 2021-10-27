import React from "react";
import { Container, Image, Button, Form, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center align-items-center pt-5">
          <Image src="https://i.ibb.co/rcshhbN/logo.png" width="300rem" />
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="p-5 border rounded" style={{ width: "30rem" }}>
            <h4 className="mb-3 fw-bold">Register as a Volunteer</h4>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FloatingLabel label="Full Name" className="mb-3 fw-bold">
                <Form.Control
                  type="text"
                  placeholder="name"
                  className="border-0 border-bottom"
                  {...register("name", { required: true })}
                />
              </FloatingLabel>
              <FloatingLabel label="User or Email" className="mb-3 fw-bold">
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="border-0 border-bottom"
                  {...register("email", { required: true })}
                />
              </FloatingLabel>
              <FloatingLabel label="Date" className="mb-3 fw-bold">
                <Form.Control
                  type="date"
                  placeholder="date"
                  defaultValue={date}
                  className="border-0 border-bottom"
                  {...register("date", { required: true })}
                />
              </FloatingLabel>
              <FloatingLabel label="Description" className="mb-3 fw-bold">
                <Form.Control
                  type="text"
                  placeholder="Description"
                  className="border-0 border-bottom"
                  {...register("desc", { required: true })}
                />
              </FloatingLabel>
              <FloatingLabel label="Event" className="mb-3 fw-bold">
                <Form.Control
                  type="text"
                  placeholder="Event"
                  className="border-0 border-bottom"
                  {...register("event", { required: true })}
                />
              </FloatingLabel>
              <Button className="px-4 w-100" variant="primary" type="submit">
                Registration
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
