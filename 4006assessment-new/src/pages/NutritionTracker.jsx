import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';

const NutritionTracker = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_NUTRITION_API_KEY; 

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    if (!query) {
      setError('Please enter a food item.');
      return;
    }

    console.log("Using API Key:", API_KEY);


    axios.get(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
      headers: { 'X-Api-Key': API_KEY }
    })
    .then((res) => {
      console.log('API response:', res.data.items);
      setResults(res.data.items);
    })
    .catch((err) => {
      console.error('API error:', err);
      setError('Failed to fetch nutrition data.');
    });
  };

  return (
    <Container>
      <Card bg="dark" text="light" className="mb-4">
        <Card.Body>
          <Card.Title>Nutrition Tracker</Card.Title>
          <Form onSubmit={handleSearch}>
            <Form.Group className="mb-3">
              <Form.Label>Search for a food item</Form.Label>
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., apple, banana, pizza..."
              />
            </Form.Group>
            <Button type="submit" variant="primary">Search</Button>
          </Form>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Card.Body>
      </Card>

      <Row>
        {results.map((item, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card bg="secondary" text="light">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Calories: {item.calories}<br />
                  Protein: {item.protein_g}g<br />
                  Fat: {item.fat_total_g}g<br />
                  Carbohydrates: {item.carbohydrates_total_g}g
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NutritionTracker;