
function hi() {
    console.log('hi, world')
}
let test = 1;

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
function isInPath(canvas,e) {
    const rect = canvas.getBoundingClientRect();
    let posX = e.clientX - rect.left;
    let posY = e.clientY - rect.top;
    let t = ctx.isPointInRect(posX, posY);
    console.log(t)

}
export { hi, test,isInPath }
export default hi
