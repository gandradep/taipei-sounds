import PropTypes from 'prop-types';

const PlayButton = ({ playCheck, setPlayCheck }) => {
  let butt;
  if (playCheck) {
    butt = <button type="button" onClick={() => setPlayCheck(!playCheck)}>Stop</button>;
  } else {
    butt = <button type="button" onClick={() => setPlayCheck(!playCheck)}>Play</button>;
  }
  return (
    <>
      {butt}
    </>
  );
};

PlayButton.propTypes = {
  playCheck: PropTypes.bool.isRequired,
  setPlayCheck: PropTypes.func.isRequired,
};
export default PlayButton;
