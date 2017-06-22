function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(5,30));
    this.speed = random(5,15);

    this.generateSymbols = function (x, y) {
        var first = round(random(0,4)) == 1;
        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(x, y, this.speed, first)
            symbol.setToRandom();
            this.symbols.push(symbol);
            y -= symbolSize;
            first = false;
        }
    }

    this.show = function functionName() {
        this.symbols.forEach(function (symbol) {
            if (symbol.first) {
                fill(190, 255, 190);
            }else{
            fill(0, 255, 70);
            }
            text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setToRandom();
        });
    }
}
