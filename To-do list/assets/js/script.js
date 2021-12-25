var inputTextoWrapper = document.getElementById("inputTexto");
var botaoAdicionarWrapper = document.getElementById("botaoAdicionar");
var toDoListWrapper = document.getElementById("toDoList");
var itemCount = 0;



function criaAfazer(){
    var novoAfazer = document.createElement("li");
    var inputCheckbox = document.createElement("input");
    var labelCheckbox = document.createElement("label");
    var textoCheckbox = document.createElement("span");

    //Cria o Span
    textoCheckbox.className = "textoCheckbox";
    textoCheckbox.innerHTML = inputTextoWrapper.value;

    //Cria o Label
    labelCheckbox.className = "labelCheckbox";
    labelCheckbox.setAttribute("for", "item" + itemCount);

    //Cria o Input CheckBox
    inputCheckbox.className = "inputCheckbox";
    inputCheckbox.setAttribute("name", "item" + itemCount);
    inputCheckbox.setAttribute("type", "checkbox");


    //Constroi elementos e "empacota" tudo em novoAfazer
    labelCheckbox.appendChild(textoCheckbox);
    novoAfazer.appendChild(inputCheckbox);
    novoAfazer.appendChild(labelCheckbox);

    //Joga o novoAfazer no HTML
    document.getElementById("toDoList").appendChild(novoAfazer);

    itemCount++;
}

function teste(){
    alert("Tá funcionando")
}