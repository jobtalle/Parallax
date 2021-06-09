class Layer {
    constructor(element, shift) {
        this.element = element;
        this.shift = shift;
    }

    setShift(x, y) {
        this.element.style.left = (100 * x * this.shift).toString() + "%";
        this.element.style.top = (100 * y * this.shift).toString() + "%";
    }
}

const approach = .1;
const layers = [
    new Layer(document.getElementById("layer-1"), .005),
    new Layer(document.getElementById("layer-2"), .02),
    new Layer(document.getElementById("layer-3"), .03),
    new Layer(document.getElementById("layer-4"), .08),
    new Layer(document.getElementById("layer-5"), .1)
];

let x = 0;
let y = 0;
let xt = 0;
let yt = 0;

window.addEventListener("mousemove", event => {
    xt = 2 * event.clientX / window.innerWidth - 1;
    yt = 2 * event.clientY / window.innerHeight - 1;
});

const loop = () => {
    x += (xt - x) * approach;
    y += (yt - y) * approach;

    for (const layer of layers)
        layer.setShift(x, y);

    requestAnimationFrame(loop);
};

requestAnimationFrame(loop);
