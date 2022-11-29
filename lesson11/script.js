document.addEventListener('DOMContentLoaded', (event) => {
  function handleDragStart(e) {
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  function handleDragEnd(e) {
    this.innerHTML = null;
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    return false;
  }
  function handleDragEnter(e) {
    this.classList.add('over');
  }
  function handleDragLeave(e) {
    this.classList.remove('over');
  }
  function handleDrop(e) {
    e.stopPropagation();
    if (dragSrcEl !== this) {
      this.innerHTML += e.dataTransfer.getData('text/html', this.innerHTML);
      console.log('hello')
    } else {
      this.innerHTML = e.dataTransfer.getData('text/html', this.innerHTML);
      console.log("OK")
    }
    return false;
  }
  let items = document.querySelectorAll('.container .box');
  items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('dragenter', handleDragEnter);
    item.addEventListener('dragleave', handleDragLeave);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('drop', handleDrop);
  });

});




let modal = document.getElementById("create-task")

function modal_open() {
  modal.style = "display:block"
}

///////////////////////////////////////////////////////////
let titlee = document.getElementById("Title");
let descriptionn = document.getElementById("Description");
///////////////////////////////////////////////////////////
let card = {
  _title: 'Test',
  _description: 'Test',
  get title() {
    return this.title
  },
  get description() {
    return this.description
  },
  set Title(new_title) {
    new_title = titlee.value;
  },
  set Description(new_description) {
    new_description = descriptionn.value;
  }
}
console.log(card)
let cards = [];
function new_card(title, description) {
  let card1 = new card(titlee.value, descriptionn.value)

  alert(card1)
}
function modal_create_task() {
  
  // let new_card1 = new title(titlee) + new description(descriptionn)
  console.log(titlee.value, descriptionn.value)//работает=)
  // new_card.prototype = new title(titlee) + new description(descriptionn)
  console.log(cards)
  modal.style = "display:none"
}
// подключить jquery!!!
