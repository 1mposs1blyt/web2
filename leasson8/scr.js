let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// cxt.beginPath();
// cxt.moveTo(250, 250);
// cxt.lineTo(300, 250);
// cxt.stroke();

// function line(posstart, length) {
//     let [x, y] = posstart;
//     cxt.beginPath();
//     cxt.moveTo(x, y);
//     cxt.lineTo(x+length, y);
//     cxt.stroke();
// }
function triangle(A = [0, 0], B = [0, 110], C = [100, -100]) {
    ctx.beginPath();
    ctx.moveTo(A[0], A[1])
    ctx.lineTo(B[0], B[1])
    ctx.lineTo(C[0], C[1])
    ctx.lineTo(A[0], A[1])
    ctx.stroke()

}
// triangle()
function square(A = [10, 10], B = [100, 10], C = [100, 100], D = [10, 100]) {
    ctx.beginPath();
    ctx.moveTo(A[0], A[1])
    ctx.lineTo(B[0], B[1])
    ctx.lineTo(C[0], C[1])
    ctx.lineTo(D[0], D[1])
    ctx.lineTo(A[0], A[1])
    ctx.stroke()
}
// square()

function arrow(A = [0, 30], B = [100, 30], C = [70, 50], D = [70, 10]) {
    ctx.beginPath();
    ctx.moveTo(A[0], A[1]);
    ctx.lineTo(B[0], B[1]);
    ctx.lineTo(C[0], C[1]);
    ctx.moveTo(B[0], B[1]);
    ctx.lineTo(D[0], D[1]);
    ctx.stroke()
}
// arrow()
// let color = red;//Цвет красный
// ctx.stroke.style = color;//Поменять цвет линии на красный
// ctx.stroke.fillStyle = color;//Поменять цвет линии на красный
// 
// ctx.fillRect(50,50,150,50)//Левая верхняя 50,50;Правая нижняя 150,50//Квадрат
// ctx.clearRect(x,y,w,h)//очистить простравнство
// ctx.closePath();
function radians(deg) {
    return (Math.PI / 180) * deg
}


let aaa = {
    "a": [50, 60],
    "b": [50, 0]
}
let massive = {
    "A": [3, -500],
    "B": [50, 250],
    "C": [50, 190],
}


// ctx.beginPath()
// ctx.arc(300, 300, 100, 0, radians(90));
// ctx.fill()
function diagram(A = [0, 250], B = [1000, 250], C = [3, -500], D = [50, 250], E = [50, 190]){
    console.log('hello world!')
    ctx.beginPath();
    ctx.moveTo(A[0], A[1]);
    ctx.lineTo(B[0], B[1]);
    ctx.moveTo(A[0], A[1]);
    ///////////////////////
    for (let i = 0; i < massive.length; i++){
        console.log(massive[i][i][1], massive[i]);
        // ctx.lineTo(massive[i][0], massive[i][1]);
        // ctx.moveTo(massive[i][0], massive[i][1]);
        // ctx.lineTo(massive[i][0], massive[i][1]);
    }
    // ctx.lineTo(C[0], C[1]);
    // ctx.moveTo(D[0], D[1]);
    // ctx.lineTo(E[0], E[1]);

    ctx.stroke()
}
diagram()

