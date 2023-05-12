class Transport {
  constructor(img, bgImg, songR, x, y) {
    this.img = img;
    this.bgImg = bgImg;
    this.songR = songR;
    this.y = y;
    this.x = x;
    this.var = -1;
  }

  show(p5, num, xXtra, xtra) {
    p5.image(this.bgImg[num], 0, 0);
    p5.image(this.img[num], this.x + xXtra, this.y + xtra);
  }

  playSound(num) {
    if (this.var !== num) {
      if(this.var >= 0) {
        this.songR[this.var].stop();
      }
      this.var = num;
      this.songR[num].play();
    }
    // this.songR[num].play();
  }
}

export default Transport;
