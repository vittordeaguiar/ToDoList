const btnAdd = document.querySelector('.btn-add');
const listGroup = document.querySelector('.list-group');
var input = document.querySelector('.input');

class item {
    constructor(nomeItem) {
        this.createDiv(nomeItem);
    }

    createDiv(nomeItem) {
        let input = document.createElement('input');
        input.value = nomeItem;
        input.disabled = true;
        input.classList.add('input_item');

        let boxItem = document.createElement('div');
        boxItem.classList.add('item');

        let editarBtn = document.createElement('button');
        editarBtn.innerHTML = 'Editar';
        editarBtn.classList.add('editarBtn');

        let removerBtn = document.createElement('button');
        removerBtn.innerHTML = 'Remover';
        removerBtn.classList.add('removerBtn');

        listGroup.appendChild(boxItem);
        boxItem.appendChild(input);
        boxItem.appendChild(editarBtn);
        boxItem.appendChild(removerBtn);

        editarBtn.addEventListener('click', () => this.editar(input));
        removerBtn.addEventListener('click', () => this.remover(boxItem));
    }

    editar(input) {
        input.disabled = !input.disabled;
    }

    remover(item) {
        listGroup.removeChild(item);
    }
}

function check() {
    if (input.value != "") {
        new item(input.value);
        input.value = "";
    }
}

btnAdd.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13){
        check();
    }
})