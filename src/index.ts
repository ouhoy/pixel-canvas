const pixels: { x: number, y: number, active: boolean }[] = []

function createCanvas() {

    const canvasSize = 8;
    const canvas = document.getElementById("canvas")

    for (let x = 0; x < canvasSize; x++) {
        for (let y = 0; y < canvasSize; y++) {
            pixels.push({x, y, active: false})

            const pixelBtn = createPixel({x, y, active: false})
            canvas.append(pixelBtn)
        }
    }
}

function createPixel(pixel: { x: number, y: number, active: boolean }): HTMLButtonElement {
    const pixelBtn = document.createElement('button');
    
    pixelBtn.addEventListener("click", ()=>{

    })

    return pixelBtn
}

createCanvas()
