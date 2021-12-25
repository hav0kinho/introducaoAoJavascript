var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
var botaoSomar = document.getElementById("botaoSomar");
var botaoSubtrair = document.getElementById("botaoSubtrair");

botaoSomar.addEventListener("click", increment());
botaoSubtrair.addEventListener("click", decrement());

function decrement(){
    if(currentNumber > -10){
        currentNumber -= 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        console.log("Numero chegou no limite negativo")
    }
    mudaCorNegativoPositivo()
}

function increment(){
    if(currentNumber < 10){
        currentNumber += 1;
        currentNumberWrapper.innerHTML = currentNumber;
    } else {
        console.log("Numero chegou no limite positivo")
    }
    mudaCorNegativoPositivo()
}

function mudaCorNegativoPositivo(){
    if(currentNumber == 0){
        currentNumberWrapper.style.color = "gray";
    } else if(currentNumber > 0){
        currentNumberWrapper.style.color = "green";
    } else{
        currentNumberWrapper.style.color = "red";
    }
}