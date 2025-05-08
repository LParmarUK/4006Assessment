import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [water, setWater] = useState(() => localStorage.getItem('water') || '');
  const [calories, setCalories] = useState(() => localStorage.getItem('calories') || '');
  const [steps, setSteps] = useState(() => localStorage.getItem('steps') || '');

  useEffect(() => {
    localStorage.setItem('water', water);
    localStorage.setItem('calories', calories);
    localStorage.setItem('steps', steps);
  }, [water, calories, steps]);

  return (
    <Container>
      <h2 className="mb-4">Personalised Health Dashboard</h2>
      <Row>
        <Col md={4}>
          <Card bg="dark" text="light" className="mb-4">
            <Card.Body>
              <Card.Title>Water Intake (Litres)</Card.Title>
              <Form.Control
                type="number"
                value={water}
                min="0"
                onChange={(e) => setWater(e.target.value)}
                placeholder="Enter litres of water"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card bg="dark" text="light" className="mb-4">
            <Card.Body>
              <Card.Title>Calories Consumed</Card.Title>
              <Form.Control
                type="number"
                value={calories}
                min="0"
                onChange={(e) => setCalories(e.target.value)}
                placeholder="Enter calories"
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card bg="dark" text="light" className="mb-4">
            <Card.Body>
              <Card.Title>Steps Walked</Card.Title>
              <Form.Control
                type="number"
                value={steps}
                min="0"
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Enter steps"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;