function converter() {
    let valor = document.getElementById("valor").value;
    let temp1 = document.getElementById("valor1").value;
    let temp2 = document.getElementById("valor2").value;
    let resultado = document.getElementById("resultado")
    let valorFinal;
  
    console.log(valor);
    console.log(temp1);
    console.log(temp2);
  
    if (temp1 == "Celcius") {
        if (temp2 == "Farenheit") {
            valorFinal = (parseInt(valor) * 9) / 5 + 32;
            resultado.innerHTML = `${valor}º ${temp1} = ${valorFinal}º ${temp2}`;
      
        } else if (temp2 == "Kelvin") {
            valorFinal = parseInt(valor) + 273.15;
            resultado.innerHTML = `${valor}º ${temp1} = ${valorFinal}º ${temp2}`;
        }
    
    } else if (temp1 == "Farenheit") {
        if (temp2 == "Celcius") {
            valorFinal = ((parseInt(valor) - 32) * 5) / 9;
            resultado.innerHTML = `${valor}º ${temp1} = ${valorFinal}º ${temp2}`;
        
        } else if (temp2 == "Kelvin") {
            valorFinal = (((parseInt(valor) - 32) * 5) / 9 + 273.15).toFixed(3);
            resultado.innerHTML = `${valor}º ${temp1} = ${valorFinal}º ${temp2}`;
        }
    
    } else if (temp1 == "Kelvin") {
        if (temp2 == "Celcius") {
            valorFinal = parseInt(valor) - 273.15;
            resultado.innerHTML = `${valor}º ${temp1} = ${valorFinal}º ${temp2}`;
        
        } else if (temp2 == "Farenheit") {
            valorFinal = ((parseInt(valor) - 273.15) * 9) / 5 + 32;
            resultado.innerHTML = `${valor}º ${temp1} = ${valorFinal}º ${temp2}`;
        }
    }
  }