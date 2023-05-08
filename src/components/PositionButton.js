import PropTypes from 'prop-types';

const PositionButton = ({ posCheck, setPosCheck }) => (
  <>
    <button type="button" onClick={() => setPosCheck(!posCheck)}>pos</button>
  </>
);
PositionButton.propTypes = {
  posCheck: PropTypes.bool.isRequired,
  setPosCheck: PropTypes.func.isRequired,
};
export default PositionButton;
