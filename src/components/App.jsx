import React, { useEffect, useState } from 'react';

import Section from './section/Section';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackoptions/FeedbackOptions';
import Notification from './notification/Notification';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  function countPositive() {
    const percentage = Math.round((good / total) * 100);
    setPositive(percentage + '%');
  }

  function countTotal() {
    const sum = good + neutral + bad;
    setTotal(sum);
  }

  function handleClick(e) {
    const key = e.target.id;
    if (key === 'good') {
      setGood(good + 1);
    }

    if (key === 'neutral') {
      setNeutral(neutral + 1);
    }

    if (key === 'bad') {
      setBad(bad + 1);
    }
  }

  useEffect(countTotal, [good, neutral, bad]);
  useEffect(countPositive, [good, total]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification title="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={positive}
          />
        )}
      </Section>
    </div>
  );
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
