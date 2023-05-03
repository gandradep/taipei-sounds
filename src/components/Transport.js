class Transport {
  constructor(img, y) {
    this.img = img;
    this.y = y;
  }

  show(p5, x) {
    p5.image(this.img, x, this.y);
  }
}

export default Transport;
