var inputN = document.querySelector("#ntabuada");
var boxResp = document.querySelector(".resultado");
console.log(inputN, boxResp);

function gerador() {
  var inputNotNumber = inputN.value;
  // console.log(inputNotNumber.length);
  boxResp.innerHTML = "";

  if (inputNotNumber.length == 0) {
    alert("Preencha um Número");
  }
  if (inputNotNumber.length !== 0) {
    for (i = 0; i <= 10; i++) {
      var inputNumero = Number(inputN.value);

      console.log(i);
      console.log(inputNumero);
      boxResp.innerHTML +=
        inputNumero + "X" + i + "=" + i * inputNumero + "<br>";
    }
  }
}
