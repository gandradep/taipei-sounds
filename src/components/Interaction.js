import { ReactP5Wrapper } from 'react-p5-wrapper';
import sketch from '../sketch';

const Interaction = () => (
  <div className="d-flex justify-content-center">
    <ReactP5Wrapper sketch={sketch} />
  </div>
);

export default Interaction;
