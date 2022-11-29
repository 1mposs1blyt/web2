// class Orange {
//     constructor(rad) {
//         this.name = "Orange";//свойство
//         this.rad = rad;
//     }
//     fall() {
//         return this.name + "упал с дерева"
//     }
//     obyom() {
//         let V = 3 / 4 * this.rad * 3.14
//         return V
//     }
//     //метод класса
//     // async metod2(){

//     // }
// };
// let or1 = new Orange(5);
// let or2 = new Orange(7.5);


// console.log(or1.obyom() + or2.obyom())
// console.log(or1.fall())


// let random1 = Math.floor(Math.random() * 10);
// let random = 
class Player {
    constructor(name,hp=100,random) {
        this.name = name;
        this.hp = hp;
        this.random = random;
    }
    attack(unit) {
        unit.hp = this.hp - this.attack
        console.log(this.name,"аайаййавфпггхгхг... умер при помощи",unit.name)
    }
    
}

let pl1 = new Player(100,'player1', Math.floor(Math.random() * 10));
let pl2 = new Player(100,'player2', Math.floor(Math.random() * 10));

while(pl1.hp >0 && pl2.hp>0){
    let attack =Math.random
    if (attack>=0.5){
        pl1.attack(pl2)
        console.log(pl1.hp, pl2.hp)
    }else{
        pl2.attack(pl1)
        console.log(pl1.hp, pl2.hp)
    }
}
console.log(pl1.hp, pl2.hp)
// console.log(pl1.attack())
// console.log(pl1.hp)
// for (let i = 0; i != 0; i++) {
            
// }
// V=3/4​πr*3

// Задача: Воены
// Напишите программу по следующему описанию.
// Есть класс "Воин". От него создаются два экземпляра-юнита.
// Каждому устанавливается здоровье в 100 очков. В случайном порядке они бьют друг друга.
// Тот, кто бьет, здоровья не теряет. У того, кого бьют, оно уменьшается на 20 очков от одного удара.
//  После каждого удара надо выводить сообщение, какой юнит атаковал, и сколько у противника осталось здоровья. \
// Как только у кого-то заканчивается ресурс здоровья, программа завершается сообщением о том, кто одержал победу.

