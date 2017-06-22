function Symbol(x, y, speed, first  ) {
    this.x = x;
    this.y = y;
    this.value;
    this.speed = speed;
    this.switchInterval = round(random(8, 20));
    this.first = first;

    this.setToRandom = function () {
        if (frameCount % this.switchInterval == 0) {
            this.value = String.fromCharCode(0x30A0 + round(random(0,96)));
        }
    }

    this.rain = function () {
        if (this.y >= height) {
            this.y = 0
        }else{
            this.y += this.speed;
        }
    }
}
