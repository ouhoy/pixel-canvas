"use strict";
const pixels = [];
const canvas = document.getElementById("canvas");
function createCanvas() {
    const canvasSize = 8;
    for (let x = 0; x < canvasSize; x++) {
        for (let y = 0; y < canvasSize; y++) {
            pixels.push({ x, y, active: false });
            const pixelBtn = createPixel({ x, y, active: false });
            canvas.append(pixelBtn);
        }
    }
}
function createPixel(pixel) {
    const pixelBtn = document.createElement('button');
    pixelBtn.id = `${pixel.x}-${pixel.y}`;
    // pixelBtn.addEventListener("click", function () {
    //     updateState(pixel.x, pixel.y)
    //     refreshCanvas()
    // })
    return pixelBtn;
}
function updateState(x, y) {
    const pixelToUpdate = pixels.find(p => p.x == x && p.y == y);
    if (pixelToUpdate)
        pixelToUpdate.active = !pixelToUpdate.active;
}
canvas.addEventListener("click", function (e) {
    const target = e.target;
    if (target.nodeName !== "BUTTON")
        return;
    const x = +target.id.split("-")[0];
    const y = +target.id.split("-")[1];
    updateState(x, y);
    refreshCanvas();
});
function refreshCanvas() {
    for (const p of pixels) {
        const pixelBtn = document.getElementById(`${p.x}-${p.y}`);
        if (pixelBtn)
            pixelBtn.style.backgroundColor =
                p.active ? '#28bb84' : '#efefe1';
    }
}
createCanvas();
