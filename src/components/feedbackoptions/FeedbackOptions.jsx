import css from './FeedbackOptions.module.css';

import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      className={css.button}
      key={option}
      id={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
