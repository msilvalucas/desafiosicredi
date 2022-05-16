/** 
  * Questão 3: retornar não apenas o resultado, mas retornar de forma estruturada o valor inicial,
  resultado final do investimento e o resultado e rendimento mês a mês.
  * Questão Bônus: Descrever ou escrever testes para garantir que o código funciona nos casos
  mais comuns (acima da SELIC, abaixo da SELIC, etc.)  
*/

btnCalcular.addEventListener("click", function () {
  var inputValorInicial = document.querySelector("#valor_inicial");
  var valorInicial = parseFloat(inputValorInicial.value);

  var inputTaxaSelic = document.querySelector("#taxa_selic");
  var taxaSelic = parseFloat(inputTaxaSelic.value);

  var inputTaxaReferencial = document.querySelector("#taxa_referencial");
  var taxaReferencial = parseFloat(inputTaxaReferencial.value);

  var inputQtdMeses = document.querySelector("#periodo");
  var qtdMeses = parseFloat(inputQtdMeses.value);

  var taxaJuros =
    taxaSelic <= 8.5 ? 0.7 * taxaSelic + 0 : 0.5 * 12 + taxaReferencial;

  var taxaJuros = taxaJuros / 100;

  if (taxaSelic <= 8.5) {
    var rendimentoPoupanca =
      valorInicial * Math.pow(1 + taxaJuros, qtdMeses / 12);
    alert(
      "O resultado final do investimento foi de R$: " +
        rendimentoPoupanca.toFixed(2)
    );
  } else {
    var rendimentoPoupanca =
      valorInicial * Math.pow(1 + taxaJuros, qtdMeses / 12);
    alert(
      "O resultado final do investimento foi de R$: " +
        rendimentoPoupanca.toFixed(2)
    );
  }

  for (i = 0; i <= qtdMeses; i++) {
    let taxaEquivalente = Math.round(((1 + taxaJuros) ** (i / 12) - 1) * 100);
    console.log(taxaEquivalente);
    let tr = document.createElement("tr");
    document.getElementById("tr-data").appendChild(tr);
    // Td Mês
    let tdMes = document.createElement("td");
    tdMes.innerHTML = i;

    // Td Juros
    let tdJuros = document.createElement("td");
    tdJuros.innerHTML = taxaEquivalente * i;

    console.log(taxaJuros);
    // Td Total Investido
    let tdTotalInvestido = document.createElement("td");
    tdTotalInvestido.innerHTML = valorInicial;

    // Td Total Juros
    let tdTotalJuros = document.createElement("td");
    tdTotalJuros.innerHTML = taxaJuros * i * valorInicial;

    // Td Total Acumulado
    let tdTotalAcumulado = document.createElement("td");
    tdTotalAcumulado.innerHTML = valorInicial + tdTotalJuros;

    tr.appendChild(tdMes);
    tr.appendChild(tdJuros);
    tr.appendChild(tdTotalInvestido);
    tr.appendChild(tdTotalJuros);
    tr.appendChild(tdTotalAcumulado);
  }
  // Adding the entire table to the body tag
});
