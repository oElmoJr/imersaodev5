let characters = ["characters/1.png", "characters/2.png", "characters/3.png", "characters/4.png", "characters/5.png", "characters/6.png", "characters/7.png"]
let positivePhrases = ["ACERTOU!! Parabens", "PARABENS VOCÊ ACERTOU!!!", "ARRASOU!!", "Isso mesmo! Acertou"]
let negativePhrases = ["ixi, não foi dessa vez.", "Na proxima você consegue.", "Que pena, você não acertou."]

let numeroSorteado = parseInt(window.Math.random() * 11);
let tentativas = 3;

let imageContainer = document.getElementById("imageContainer");
let dialog = document.getElementById("dialog");

function randomElement(array) {
    return (Math.random() * (array.length - 1)).toFixed();
}

function randomCharacter() {
    return characters[randomElement(characters)];
}

function atualizaCoracao(qtdCore) {
    let coracoes = document.getElementById("coracoes");
    coracoes.innerHTML = ""

    for (let i = 0; i < qtdCore; i++) {
        coracoes.innerHTML += "❤"
    }
}

function openMaisUmaVez() {
    document.body.classList.toggle("openDenovo");
    document.getElementById("btnChutar").disabled = true;
  }

function chutar() {
    let numeroPlayer = parseInt(document.getElementById("numeroPlayer").value);
    tentativas--;
    
  
    if (numeroPlayer === numeroSorteado) {
      dialog.innerHTML = `${positivePhrases[randomElement(positivePhrases)]} <span class="denovoText">Mais uma vez?</span>`;
      openMaisUmaVez();

    } else if (numeroPlayer !== numeroSorteado && tentativas > 0) {
        
        numeroPlayer > numeroSorteado ? dialog.innerHTML =`O numero é menor que ${numeroPlayer}.` : dialog.innerHTML = `O numero é maior que ${numeroPlayer}.`;
        atualizaCoracao(tentativas);

    } else {
        tentativas = 0;
        atualizaCoracao(tentativas);
        dialog.innerHTML = `${negativePhrases[randomElement(negativePhrases)]}</br> era o número ${numeroSorteado} <p class="denovoText">Mais uma vez?</p>`;
        openMaisUmaVez();
    }
}

imageContainer.innerHTML = `<img src="assets/${randomCharacter()}" alt="Character">`;