import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  //   const color = () => Math.floor(Math.random() * 16777215).toString(16);
  //   const color = () => ;

  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div id="events" className="pt-5">
      <Container>
        <Row>
          {events.map((event) => (
            <Col
              xs={6}
              md={4}
              lg={3}
              key={event.eventTitle}
              className="mb-4 h-100"
            >
              <Link to="/register">
                <Card className="position-relative border-0 my-shadow">
                  <Card.Img variant="top" src={event.thumb} />
                  <div className="position-absolute bottom-0 w-100  ">
                    <Card.Body
                      className="rounded-bottom text-white"
                      style={{
                        backgroundColor:
                          "#" +
                            Math.ceil(Math.random() * 11111111).toString(16) ||
                          "ddd",
                      }}
                    >
                      <Card.Title>{event.eventTitle}</Card.Title>
                    </Card.Body>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Events;
