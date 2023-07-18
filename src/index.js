var pixels = [];
function createCanvas() {
    var canvasSize = 8;
    var canvas = document.getElementById("canvas");
    for (var x = 0; x < canvasSize; x++) {
        for (var y = 0; y < canvasSize; y++) {
            pixels.push({ x: x, y: y, active: false });
            var pixelBtn = createPixel({ x: x, y: y, active: false });
            canvas.append(pixelBtn);
        }
    }
}
function createPixel(pixel) {
    var pixelBtn = document.createElement('button');
    pixelBtn.addEventListener("click", function () {
    });
    return pixelBtn;
}
createCanvas();
