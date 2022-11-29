let carta = {
    set isCard(newIsCard) {
        this._isCard = newIsCard;
    },//true or false
    set name(newName) {
        this._name = newName;
    },
    set image(newImage) {
        this._image = newImage;
    },
    set age(newAge) {
        this._age = newAge;
    },
    get info(){
        return this.newIsCard ,this.newName , this.newAge;
    }
}

function user(name, age, image) {
    this.name = name;
    this.age = age;
    this.image = false;
}
function card(isCard, colorName, colorAge) {
    this.isCard = false;
    this.colorName = colorName;
    this.colorAge = colorAge;
    this.headerImage = headerImage;

}

let user1 = new user('admin', '15')

console.log(carta)
export { user, card }
