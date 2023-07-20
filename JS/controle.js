let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
  //PEGAR O VALOR DIGITADO NO INPUT
  let valorInput = input.value;

  //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = ` <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id= "icone_${contador}" class="material-symbols-outlined">
                radio_button_unchecked
                </span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">

            ${valorInput}  <!--determina o valor que o cliente digitou-->

        </div>
        <div class="item-botao">
            <button onclick='deletar(${contador})' class="delete">Deletar</button>
            

        </div>
    </div>`;
    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;

    //ZERAR O CAMPO DE DIGITAR
    input.value = "";
    input.focus();
  }
}
//DELETAR UMA TAREFA
function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("material-symbols-outlined");
    icone.classList.add("material-symbols-rounded");

    item.parentNode.appendChild(item); //joga o item marcado para baixo
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("material-symbols-rounded");
    icone.classList.add("material-symbols-outlined");
  }
}

//clicar enter para adicionar uma tarefa
input.addEventListener("keyup", function (event) {
  //SE TECLOU ENTER (13) = TECLA DO ENTER
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
