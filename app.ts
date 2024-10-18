function calcularIMC(): void {
  //buscando os id
  const pesoInput = document.getElementById("peso") as HTMLInputElement;
  const alturaInput = document.getElementById("altura") as HTMLInputElement;
  const res = document.getElementById("resultado");

  //convertendo para numero inteiro
  const peso = parseFloat(pesoInput.value);
  const altura = parseFloat(alturaInput.value);

  //ver se o valor é NaN
  if (isNaN(peso) || isNaN(altura)) {
    res!.innerHTML = "Por favor, insira valores válidos.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    classificacao = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    classificacao = "Sobrepeso";
  } else {
    classificacao = "Obesidade";
  }

  res!.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}

document.getElementById("calcularBtn")!.addEventListener("click", calcularIMC);
