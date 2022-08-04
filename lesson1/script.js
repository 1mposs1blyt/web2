let data = [
    {
        "id": "1",
        "author": "книга 1",
        "name": "названиие книги 1...",
        "date": "01.08.2022"
    },
    {
        "id": "2",
        "author": "книга 2",
        "name": "названиие книги 2...",
        "date": "02.08.2022"
    },
    {
        "id": "3",
        "author": "книга 3",
        "name": "названиие книги 3...",
        "date": "03.08.2022"
    },
    {
        "id": "4",
        "author": "книга 4",
        "name": "названиие книги 4...",
        "date": "04.08.2022"
    }
]
// console.log(data)
function createBook() {
    let id = document.getElementById("crt1")
    let author = document.getElementById("crt2")
    let name = document.getElementById("crt2")
    let date = document.getElementById("crt3")
    let findId = false; // флаг
    data.forEach(function (book) {
        if (book.id == id) {
            findId = true
        }
    })
    if (findId) {
        return "Такая книга уже есть"
    } else {
        data.push({
            "id": id,
            "author": author,
            "name": name, 
            "date": date
        })
        return "Книга добавлена"
    }
}
function updateBOOK() {   
    let array = []
    let updt2 = document.getElementById("updt2")
    let updt3 = document.getElementById("updt3")
    let updt4 = document.getElementById("updt4")
    let id = document.getElementById("updt1")

    for (let i = 0; i < data.length; i++) {
        if (data[i]["id"] == id.value) {
            // array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            data[i]["author"] = updt2.value
            data[i]["name"] = updt3.value
            data[i]["date"] = updt4.value
            console.log(updt2.value)
            console.log(data)
        }else console.log('ничего не найдено')
    }
}
function DeleteBook() {
    let array = []
    let id = document.getElementById("deleteID")
    for (let i = 0; i < data.length; i++) {
        if (data[i]["id"] == id.value) {
            // array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(data.indexOf(data[i]))
        
            data.splice(data.indexOf(data[i]) ,data.indexOf(data[i])+1)
            // console.log(updt2.value)
            console.log(data)
        }else console.log('ничего не найдено')
    }
}
function ShowAllBooks(id, author, name, date){
    let array = []
    for (let i = 0; i < data.length; i++){
        console.log(data[i])
    }
    
}
// РАБОТАЕТ НЕ ТРОГАТЬ!!!///////////////////////////////////////////////////////////////////////
function searchbbbyid() {
    let id = document.getElementById("1")
    console.log("По поиску:", id.value)
    let array = []
    for (let i = 0; i < data.length; i++) {
        if (data[i]["id"] == id.value ) {
            array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(array)
        }else console.log('ничего не найдено')
    }
    

}
function searchbbbyauthor() {
    let array = []

    let author = document.getElementById("2")
    for (let i = 0; i < data.length; i++) {
        if (data[i]["author"] == author.value) {
            array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(array)
        }else console.log('ничего не найдено')
    }
}
function searchbbbyname() {
    let array = []

    let name = document.getElementById("3")
    for (let i = 0; i < data.length; i++) {
        if (data[i]["name"] == name.value) {
            array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(array)
        } else console.log('ничего не найдено')
    }
}
function searchbbbydate() {
    let array = []

    let date = document.getElementById("4")
    for (let i = 0; i < data.length; i++) {
        if (data[i]["date"] == date.value) {
            array.push(data[i]["author"], data[i]["name"], data[i]["date"], data[i]["id"])
            console.log(array)
        }else console.log('ничего не найдено')
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////