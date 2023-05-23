import PropTypes from 'prop-types';

const PositionButton = ({ posCheck, setPosCheck }) => (
  <>
    <button type="button" onClick={() => setPosCheck(!posCheck)}>
      <i className="fa-solid fa-arrows-left-right" />
    </button>
  </>
);
PositionButton.propTypes = {
  posCheck: PropTypes.bool.isRequired,
  setPosCheck: PropTypes.func.isRequired,
};
export default PositionButton;
