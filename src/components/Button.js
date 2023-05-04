class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show(p5) {
    p5.fill(150);
    p5.rect(this.x, this.y, p5.width / 2, p5.height * 0.9);
  }
}

export default Button;
