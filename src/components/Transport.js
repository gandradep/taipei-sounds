class Transport {
  constructor(img, bgImg, x0, y, songMix, song0) {
    this.img = img;
    this.bgImg = bgImg;
    this.y = y;
    this.x0 = x0;
    this.x = 0;
    this.var = 0;
    this.isPlaying = false;
    this.songMix = songMix;
    this.song0 = song0;
    this.current = [];
  }

  show(p5, num, xXtra, xtra) {
    this.x = this.x0 + xXtra;
    p5.image(this.bgImg[num], 0, 0);
    p5.image(this.img[num], this.x, this.y + xtra);

  }

  playSound(num, pCheck) {
    this.current = (this.x === this.x0) ? this.song0 : this.songMix;
    console.log(this.x);
    // console.log(this.x);
    // console.log(this.current);
    if (pCheck) {
      if (this.var !== num) {
        // this.songR[this.var].stop();
        console.log('Next stop:' + this.current[this.var].url);
        this.var = num;
        this.isPlaying = pCheck;
        // this.songR[num].play();
        console.log('NExtplaying:' + this.current[this.var].url);
      }
      if (this.isPlaying !== pCheck) {
        console.log('playing:' + this.current[this.var].url);
        this.isPlaying = pCheck;
      }
    } else {
      console.log('stop:' + this.current[this.var].url );
      this.isPlaying = pCheck;
    }
  }
}

export default Transport;
