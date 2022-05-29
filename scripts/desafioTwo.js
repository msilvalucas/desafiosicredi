/** 
  * Questão 2: Calcular o rendimento da poupança de acordo com os seguintes requisitos:
  - As entradas são: valor, quantidade de meses, Taxa SELIC e Taxa Referencial
  - Se a SELIC estiver abaixo de 8.5, a poupança rende 70% da SELIC + Taxa Referencial 
    
  - Se a SELIC estiver acima, a poupança rende 0.5% + Taxa Referencial (ao mês)

  - A saída deve ser o resultado do investimento (inicial + rendimento).
  */

const btnCalcular = document.querySelector("#btnCalculuar");

btnCalcular.addEventListener("click", function () {
  var inputValorInicial = document.querySelector("#valor_inicial");
  var valorInicial = parseFloat(inputValorInicial.value);

  var inputTaxaSelic = document.querySelector("#taxa_selic");
  var taxaSelic = parseFloat(inputTaxaSelic.value);

  var inputTaxaReferencial = document.querySelector("#taxa_referencial");
  var taxaReferencial = parseFloat(inputTaxaReferencial.value);

  var inputQtdMeses = document.querySelector("#periodo");
  var qtdMeses = parseFloat(inputQtdMeses.value);

  var calcSelicAbaixoInflacao = 0.7 * taxaSelic + 0;
  var calcSelicAcimaInflacao = 0.5 * 12 + taxaReferencial;

  var taxaJuros =
    taxaSelic <= 8.5 ? calcSelicAbaixoInflacao : calcSelicAcimaInflacao;

  var taxaJuros = taxaJuros / 100;
  var rendimentoPoupanca =
    valorInicial * Math.pow(1 + taxaJuros, qtdMeses / 12);
  alert(
    "O resultado final do investimento foi de R$: " +
      rendimentoPoupanca.toFixed(2)
  );
});
