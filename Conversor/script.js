// ========================================= MOEDA ===========================================//

function converterMoeda() {
    let moedaInicial = document.getElementById("valor1Moeda").value;
    let url = `https://v6.exchangerate-api.com/v6/e21611f760275389ee84d845/latest/${moedaInicial}`;
    let dados = Array();
    let resultadoMoeda = document.getElementById("resultadoMoeda")

    fetch(url).then((res) => {
      res.json().then((data) => {
        dados = data.conversion_rates;
  
        let valor = parseFloat(document.getElementById("valorMoeda").value);
        let moedaFinal = document.getElementById("valor2Moeda").value;
  
        valorConvertido = valor * dados[moedaFinal];
        valorFinal = parseFloat(valorConvertido).toFixed(2);

        resultadoMoeda.innerHTML = `A conversão de ${moedaInicial} para ${moedaFinal} é ${valorFinal}`;
      });
    });
  }


// =========================================DISTANCIA===========================================//

function converterDistancia() {
    let valor = Number(document.getElementById("valorDistancia").value);
    let dis1 = document.getElementById("valor1Distancia").value;
    let dis2 = document.getElementById("valor2Distancia").value;
    let valorFinal = 0;
  
    if (dis1 == "kl") {
        if (dis2 == "al") {
            valorFinal = valor / 9.461e12;
            imprimirResultado(dis1, dis2, valorFinal);

        } else if (dis2 == "m") {
            valorFinal = valor * 1000;
            imprimirResultado(dis1, dis2, valorFinal);

        }

    } else if (dis1 == "al") {
        if (dis2 == "kl") {
            valorFinal = valor * 9.461e12;
            imprimirResultado(dis1, dis2, valorFinal);

        } else if (dis2 == "m") {
            valorFinal = (valor * 9.461e15).toFixed(3);
            imprimirResultado(dis1, dis2, valorFinal);

        }

    } else if (dis1 == "m") {
        if (dis2 == "kl") {
            valorFinal = valor / 1000;
            imprimirResultado(dis1, dis2, valorFinal);

        } else if (dis2 == "al") {
            valorFinal = valor * 9.461e15;
            imprimirResultado(dis1, dis2, valorFinal);

        }
    }

    function imprimirResultado(distancia1, distancia2, distanciaFinal) {
        let resultado = document.getElementById("resultadoDistancia")

        // resultado.innerHTML = `A distancia convertida de ${distancia1} para ${distancia2} é ${distanciaFinal}`;
        resultado.innerHTML = `${valor} ${distancia1} = ${distanciaFinal} ${distancia2}`;
    }
  }