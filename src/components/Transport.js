class Transport {
  constructor(img, bgImg, x0, y, songMix, song0) {
    this.img = img;
    this.bgImg = bgImg;
    this.y = y;
    this.x0 = x0;
    this.x = 0;
    this.whatever = false;
    this.var = 0;
    this.isPlaying = false;
    this.songMix = songMix;
    this.song0 = song0;
    this.current = this.song0;
    this.data = [false, 0];
    this.dataCopy = this.data;
  }

  show(p5, num, xXtra, xtra) {
    this.x = this.x0 + xXtra;
    p5.image(this.bgImg[num], 0, 0);
    p5.image(this.img[num], this.x, this.y + xtra);
  }

  playSound(num, pCheck, posCheck) {
    this.data = [posCheck, num];
    if (pCheck) {
      if (this.data.toString() !== this.dataCopy.toString()) {
        this.current[this.var].stop();
        this.current = (this.x === this.x0) ? this.song0 : this.songMix;
        this.dataCopy = this.data;
        [this.whatever, this.var] = this.dataCopy;
        this.isPlaying = pCheck;
        this.current[this.var].play();
      }
      if (this.isPlaying !== pCheck) {
        this.current[this.var].play();
        this.isPlaying = pCheck;
      }
    } else {
      this.current[this.var].stop();
      this.isPlaying = pCheck;
    }
  }
}

export default Transport;
