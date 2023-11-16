import PropTypes from 'prop-types';

export default function Notification({ title }) {
  return <p>{title}</p>;
}

Notification.propTypes = {
  title: PropTypes.string,
};
