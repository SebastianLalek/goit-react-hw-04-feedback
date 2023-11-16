import React, { Component } from 'react';

import Section from './section/section';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackoptions/FeedbackOptions';
import Notification from './notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positive: 0,
};

class Feedback extends Component {
  state = {
    ...initialState,
  };

  counter = e => {
    const key = e.target.id;
    this.setState(state => ({
      [key]: state[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    let sum;
    this.setState(state => {
      sum = state.good + state.neutral + state.bad;
      return { total: sum };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => {
      let percentage = Math.round((state.good / state.total) * 100);
      return { positive: `${percentage}%` };
    });
  };

  handleClick = e => {
    this.counter(e);
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.state.total === 0 ? (
            <Notification title="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positive={this.state.positive}
            />
          )}
        </Section>
      </div>
    );
  }
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
