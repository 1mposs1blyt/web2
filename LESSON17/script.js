class Person {

    constructor(name,value) {
        // вызывает сеттер
        this.name = name;
        this.worker = true;
        this.value = value;
    }

    get name() {
        return this._name;
    }
    get_info() {
        console.log(this.name, this.worker);
    }
    kick_worker() {
        this.worker = false;
        console.log("До свидания, мистер " + this.name, "//" + this.worker);
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Имя слишком короткое.");
            
            // return;
        }
        this._name = value;
    }

}
// let person = new Person("");

let person1 = new Person ("a",1);
let person2 = new Person ("Александр",10);
let person3 = new Person ("ИмяСотрудника",3);
let persons = [person1, person2, person3];  
// person1.get_info();  
// person1.kick_worker()
console.log(person1.value); // Иван
let lS = persons[0]
for(let i = 0; i < persons.length; i++){
    if(persons[i].value < lS.value){
        lS = persons[i]
        console.log(persons[i].value)
        lS.kick_worker()
    }else{
        console.log("draw")
    }
}
// if(){

// }

// for(let i = 0; i < Person.length; i++){
// }

//   —  Есть класс Person, конструктор которого принимает три параметра – имя, фамилию и квалификацию специалиста. Квалификация имеет значение заданное по умолчанию, равное единице.
// Также должно быть свойство worker которое по умолчанию - true (признак работает человек или нет)
//  —   У класса Person есть метод, который возвращает строку, включающую в себя всю информацию о сотруднике.
//  —   Класс Person содержит метод, который увольняет сотрудника (ставит ему worker-false), который выводит на экран фразу "До свидания, мистер …" (вместо троеточия должны выводиться имя и фамилия объекта).
//  —   В основной ветке программы создайте три объекта класса Person. Посмотрите информацию о сотрудниках и увольте самое слабое звено. 


class Table{
    constructor(l,w,h,color){
        this.length = l;
        this.width = w;
        this.height = h;
        this.color = color; 
    }
    square(){
        return this.width * this.length - this.squareMonitor;
    }
};

class ComputeerTable extends Table{
    constructor(l,w,h,color="black", monitor=0.0){
        super(l,w,h,color)
        this.squareMonitor = monitor;
    }

    // set color(color){
    //     this.color = color;
    // }
}

let table = new ComputeerTable(150.5,62,54,"black",150);
// console.log(table.square())
