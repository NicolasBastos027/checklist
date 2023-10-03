let input = document.getElementById('digiteTarefa');
let addBtn = document.getElementById('adicionaTarefa');
let main = document.getElementById('areaLista')
let contador = 0;  

function addTarefa() {
    let valorInput = input.value;
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        ++contador; 

        let novoItem = 
        `<div id="${contador}" class="tarefa_nova_geral">
        <div id="tarefa_nova" class="tarefa_nova">
            <div><img id="checkbox_imagem" class="checkbox_imagem" src="icons8-caixa-de-seleção-marcada-48.png" onclick="checkTarefa('${valorInput}'),  removeTarefa(${contador})"></div>
        <p id="tarefa_a_fazer" class="tarefa_a_fazer">
         ${valorInput}
        </p></div>
        <button type="button" id="lixeira" class="lixeira"><img src="icons8-lixeira.svg" onclick="removeTarefa(${contador})" alt=""></button>
        </div>`
        main.innerHTML += novoItem;
        
        input.value =''
        input.focus()

    }
}

function checkTarefa(valorInput) {
        let novoItem =
         `<div id="${contador}" class="tarefa_nova_geral">
        <div id="tarefa_nova" class="tarefa_nova">
            <div><img id='checkbox_i0,magem' class='checkbox_imagem' width='48' height='48' src='https://img.icons8.com/color/48/checked-checkbox.png' alt='checked-checkbox'/></div>
        <p id="tarefa_a_fazer" class="tarefa_a_fazer_check">${valorInput}
        </p></div>
        <button type="button" id="lixeira" class="lixeira"><img src="icons8-lixeira.svg" onclick="removeTarefa(${contador})" alt=""></button>
        </div>`
        main.innerHTML += novoItem; 
       ;
}

input.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        addBtn.click()
    }
})

function removeTarefa(id){    
        const element = document.getElementById(id);
        element.remove();

    }
