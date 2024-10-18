"use strict";
function calcularIMC() {
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const resultadoDiv = document.getElementById("resultado");
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);
    if (isNaN(peso) || isNaN(altura)) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos.";
        return;
    }
    const imc = peso / (altura * altura);
    let classificacao = "";
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }
    else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    }
    else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
    }
    else {
        classificacao = "Obesidade";
    }
    resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}
document.getElementById("calcularBtn").addEventListener("click", calcularIMC);
