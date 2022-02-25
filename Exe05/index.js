var numeroInit = document.querySelector(".inpN");
var nbox = document.querySelector(".nbox");
var analisebox = document.querySelector(".analiseFinal");
var nArray = [];

function adicionar() {
  var numeroFinal = Number(numeroInit.value);
  console.log(numeroInit.value);
  if (numeroInit.value.length == 0) {
    alert("Adicione um número");
  }
  if (nArray.includes(numeroFinal)) {
    alert("Número já adicionado");
  }
  if (!nArray.includes(numeroFinal) && numeroInit.value.length != 0) {
    nArray.push(numeroFinal);
    console.log(nArray);
    nbox.innerHTML += "Valor " + numeroFinal + " adicionado" + "<br>";
  }
  analisebox.innerHTML = " ";
}

function analisar() {
  if (numeroInit.value.length == 0) {
    alert("Adicione um número antes de finalizar");
  } else {
    var qtdNumero = nArray.length;
    var maiorValor = Math.max.apply(null, nArray);
    const reducer = (a, b) => a + b;
    var soma = nArray.reduce(reducer);
    var media = soma / qtdNumero;

    analisebox.innerHTML =
      "Ao todo temos " +
      qtdNumero +
      " números cadastrados" +
      "<br>" +
      "O maior valor informado foi " +
      maiorValor +
      "<br>" +
      "somando todos os valores temos " +
      soma +
      "<br>" +
      " A média dos valores digitados é " +
      media;
  }
}
