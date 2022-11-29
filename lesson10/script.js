// import { get } from "johnny-five/lib/expander"

let user = {
    Login: "aaaaaa",
    Password: 'aa22222221',
    Age: 15,
    get login() {
        if (this.Login.length < 4) {
            return 'Please enter aanother login'
        } else { return "OK" }
    },
    get password() {
        if (this.Password.length < 8) { return 'Please enter another password' }
        else if (this.Password.length > 16) { return 'Please enter another password' }
        else { return "OK" }
    },
    get age() {
        if (this.Age < 5) { return 'Please enter another age' }
        else { return "OK" }
    }
}
// console.log(user.login, user.password, user.age);


// Задача 2

// Написать функцию-конструктор объекта для прямоугольника. На вход принимаются данные ширины, высоты и положения. Укажите внутри конструктора проверку размера: если размер отрицательный, то значения для него устанавливаются 0,0

// Также опишите внутри конструктора методы, которые выводят периметр и площадь этого прямоугольника.

// Создать с помощью конструктора три разных прямоугольника: один квадрат, один с отрицательной высотой и один прямоугольник со значениями 100, 37
// Вывести их периметр и площадь в консоль 

// Сделать проверку для установления значений:
// Недопустимый логин, если он короче 4 символов
// Пароль должен быть от 8 до 16 символов
// Возраст: Старше 5 лет


// get login() {
//     if (login.length < 4) {
//         console.log("error try longer login")
//     }
// },



// я `

// let student = {
//     firstName: 'Дима', // Свойство firstName со значением 'Дима'
//     class: 10,
//     get fullInfo() { // геттер fullInfo
//         return `Ученик ${this.firstName} учится в ${this.class} классе`
//     },
//     set changeClass(newClass) { // сеттер
//         if (newClass < 1 || newClass > 11) {
//             console.log('Недопустимое значение класса');
//             return;
//         }
//         this.class = newClass
//     },
//     get age() {
//         return this._age;
//     },
//     set age(val) {
//         if (val < 5 || val > 18) {
//             console.log('Недопустимый возраст ученика');
//             return;
//         };
//         this._age = val
//     }
// };
// student.age = 10; // срабатывает сеттер
// console.log(student.age); // срабатывает геттер

// student['letter'] = 'A'

// console.log(student.letter);
// student.changeClass = 11
// console.log(student);
let square = {
    height: 1,
    weight: -10
}

function squaref(height, weight) {
    this.height = height;
    this.weight = weight;
    return this.height,this.weight 

} 

let cords=[];
let cord1 = new height(9);
cord.prototype.new = 1;
console.log(cord)

squaref() 






// function Student(name_, class_) {
//     this.name = name_; // свойство
//     this.class = class_;
    
//     this.getInfo = function () { // метод объекта Student
//         return `Это ученик ${this.name}`
//     }
// };

// let students = []
// let student1 = new Student('Дима', 10);


// Student.prototype.new = 1
// let student2 = new Student('Дима', 10);
// console.log(student1);
// console.log(student2);






// let square = {
//     Height: -1,
//     Weight: -1,
//     get height() {
//         if (this.Height < 0) {
//             this.Height = 0
//         }
//     },
//     get weight(){
//         if (this.Weight < 0) {
//             this.Weight = 0
//         }
//     }
// }
// console.log(square.Height, square.Weight)