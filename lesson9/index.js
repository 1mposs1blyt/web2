// const hi = require('./script.js');
import { hi, test, isInPath,radians,square,arrow } from './script.js';
// import * as test from './script.js';
// test.hi()
console.log(test.test)

var canvas  = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.fillRect(20,20,120,120);




canvas.addEventListener("click",function(){
    // isInPath(canvas)
    square()
    // ctx.beginPath();
    // ctx.moveTo(posX,posY);
    // ctx.lineTo(posX,posY);
    // ctx.stroke()
    alert('aaa')
})