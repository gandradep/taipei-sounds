class Transport {
  constructor(x) {
    this.x = x;
  }

  show(p5) {
    p5.ellipse(this.x, 50, 50, 50);
  }
}

export default Transport;
