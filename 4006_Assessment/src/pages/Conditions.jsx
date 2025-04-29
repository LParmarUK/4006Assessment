import React from 'react';

const Conditions = () => {
    const conditions = [
        { name: 'Anxiety', description: 'A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with one\'s daily activities.' },
        { name: 'Depression', description: 'A mood disorder that causes a persistent feeling of sadness and loss of interest.' },
        { name: 'Diabetes', description: 'A chronic disease that occurs when the body cannot effectively use insulin.' },
        { name: 'Hypertension', description: 'A condition in which the force of the blood against the artery walls is too high.' },
        { name: 'Obesity', description: 'A complex disease involving an excessive amount of body fat.' },
    ];

    return (
        <div>
      <h2>Common Health Conditions</h2>
      <ul>
        {conditions.map((condition, index) => (
          <li key={index}>
            <strong>{condition.name}</strong>: {condition.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conditions;