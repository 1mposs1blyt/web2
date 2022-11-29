// ЗАДАЧИ

//#1
// class circle {
//     constructor(radius,posX=0,posY=0) {
//         posX =this.posX;
//         posY =this.posY;
//         posX = this.posX;
//         posY = this.posY;
//         radius = this.radius;
//     }
//     create(radius) {
//         let Scircle = 2 * (Math.PI) * radius;
//         console.log(Scircle);
//     }
//     move(posX=0,posY=0){
//         this.posX = posX;
//         this.posY = posY;   
//         console.log(posX,posY);
//     }
// }
// let circle0 = new circle(5);
// let circle1 = new circle(9);
// let circle2 = new circle(3);
// let s = circle1.create(5)+circle2.create(9)+circle0.create(3);
// console.log(s)
// circle1.move(2,2)
// console.log(circle0,circle1,circle2);


//#2
// class pupil {
//     constructor(name, exam1, exam2, exam3, exam4, exam5) {
//         this.name = name;
//         this.exam1 = exam1;
//         this.exam2 = exam2;
//         this.exam3 = exam3;
//         this.exam4 = exam4;
//         this.exam5 = exam5;
//     }
//     math(name, exam1, exam2, exam3, exam4, exam5) {

//         let mathR = (exam1 + exam2 + exam3 + exam4 + exam5) / 5
//         console.log(name, mathR)
//     }
// }
// let p1 = new pupil()
// p1.math("vasya pupkin", 3, 4, 5, 3, 5)


//#4
class basic {
    constructor(Foodweight, mass, type) {
        // this.info = info;
        this.Foodweight = Foodweight;
        this.mass = mass;
        this.type = type;
    }
    feeed(Foodweight, mass) {//получается бред ну и ладно
        let food_amount = Foodweight / (mass * 0.07);
        console.log(food_amount)
        let foodtype
        this.type = type;
        if (food_amount > 15) {
            foodtype = "meat";
            type = "хищник"
            console.log(foodtype + ",тип: " + type);
        } else {
            foodtype = "zerna"
            type = "травоядный"
            console.log(foodtype + ",тип: " + type);
        }
    }
    name() {

    }

}
let b1 = new basic(111, 12)
b1.feeed(111, 12)
let b2 = new basic(11, 12)
b2.feeed(11, 12)


class potomok1 extends basic {
    constructor(Foodweight, mass, type) {
        super(Foodweight, mass, type);
    }
    newmethod() {
        console.log(potomok1)
    }

}

let b3 = new potomok1("fuck.1", "fuck.2")
console.log(b3)
b3.newmethod()
class potomok2 extends basic {
    constructor() { }
}
class potomok3 extends basic {
    constructor() { }
}
let a = { b1, b2 };
console.log(a)
