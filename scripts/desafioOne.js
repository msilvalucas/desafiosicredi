/**
 * Questão 1: Implementar um gerenciador de limite de cartão de crédito.
  o As entradas são: limite e lista de compras;
  o A saída deve ser 1 se o limite foi excedido e 0 se o limite não foi;
  o O limite é excedido quando a soma das compras é maior que o limite.
 */

const btnComprar = document.querySelector("#btnComprar");
btnComprar.addEventListener("click", () => {
  var limite = prompt("Insira o valor do limite do cartão: ");
  limite = parseFloat(limite);

  do {
    var compra = prompt("Insira o valor da compra: ");
    compra = parseFloat(compra);
    if (compra > limite) {
      alert("O valor da compra não pode ser maior que o limite: " + limite);
      compra;
    } else if (compra === limite) {
      limite = limite - compra;
      alert("Compra aprovada e limite atingido: " + limite);
      break;
    } else {
      limite = limite - compra;
      alert("Limite Disponível: " + limite);
    }
  } while (limite > 0);
});
