import PropTypes from 'prop-types';

const IconButton = ({ count, setCount }) => (
  <>
    <button type="button" onClick={() => setCount((count + 1) % 3)}>Vehicle</button>
  </>
);
IconButton.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
export default IconButton;
