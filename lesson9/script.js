function hi() {
    console.log('hi, world')
}
let test = 1;
var canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener("click", function (e) {
    const rect = canvas.getBoundingClientRect();
    let posX = e.clientX - rect.left;
    let posY = e.clientY - rect.top;
    console.log(posX, posY)
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.lineTo(posX, posY);
    ctx.stroke()
    // alert('aaa')
})
function isInPath(canvas, e, ctx) {
    const rect = canvas.getBoundingClientRect();
    let posX = e.clientX - rect.left;
    let posY = e.clientY - rect.top;
    let t = ctx.isPointInRect(posX, posY);
    console.log(t)

}
const rect = canvas.getBoundingClientRect();
let posX = e.clientX - rect.left;
let posY = e.clientY - rect.top;
function radians(deg) {
    return (Math.PI / 180) * deg
}
function triangle() {
    ctx.beginPath();
    ctx.moveTo(posX,posY)
    ctx.lineTo(posX,posY)
    ctx.lineTo(posX,posY)
    ctx.lineTo(posX,posY)
    ctx.stroke()

}
// triangle()
function square() {
    ctx.beginPath();
    ctx.moveTo(posX,posY)
    ctx.lineTo(posX,posY)
    ctx.lineTo(posX,posY)
    ctx.lineTo(posX,posY)
    ctx.lineTo(posX,posY)
    ctx.stroke()
}
// square()

function arrow() {
    ctx.beginPath();
    ctx.moveTo(posX,posY);
    ctx.lineTo(posX,posY);
    ctx.lineTo(posX,posY);
    ctx.moveTo(posX,posY);
    ctx.lineTo(posX,posY);
    ctx.stroke()
}
export { hi, test, isInPath,radians,square,arrow }
export default hi
