import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 24.9) setCategory('Normal weight');
    else if (bmiValue < 29.9) setCategory('Overweight');
    else setCategory('Obesity');
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title className="text-center mb-4">BMI Calculator</Card.Title>
              <Form onSubmit={calculateBMI}>
                <Form.Group className="mb-3">
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter your weight"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter your height"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Calculate
                </Button>
              </Form>

              {bmi && (
                <Alert variant="info" className="mt-4 text-center">
                  Your BMI is <strong>{bmi}</strong> – <em>{category}</em>
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BmiCalculator;
