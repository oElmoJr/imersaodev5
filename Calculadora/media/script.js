let qtdInput = 4;

function addInput() {
    if (qtdInput < 40) {
        let inputContainer = document.getElementById("inputContainer")
        
        qtdInput++
        inputContainer.innerHTML += `<input class="input" placeholder="${qtdInput}º valor" type="number">` 
    } 
}

function calcularMedia() {
    let inputs = document.getElementsByClassName("input");
    let resultado = document.getElementById("resultado");
    let mediaApr = Number(document.getElementById("mediaApr").value);
    let sum = 0;
    let media = 0;
    
    for (i=0; i<qtdInput; i++) {
        sum += Number(inputs[i].value);
    }
    
    media = (sum/qtdInput).toFixed(2)

    console.log(mediaApr)
    console.log(media)

    if (media < mediaApr) {
        resultado.innerHTML = `A média dos valores é: <span class="vermelho">${media} Reprov </span>`
    } else {
        resultado.innerHTML = `A média dos valores é: <span class="verde">${media} Aprov </span>`
    }

}