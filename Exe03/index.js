var start = document.querySelector(".inicio");
var end = document.querySelector(".fim");
var pass = document.querySelector(".passo");
var resp = document.querySelector(".resposta");

function contar() {
  var startN = Number(start.value);
  var endN = Number(end.value);
  var passN = Number(pass.value);
  console.log(startN, endN, passN);

  i = startN - 1;
  const intervalodoido = setInterval(() => {
    i += passN;
    resp.innerHTML += "<img class='mao'src='Public/mao.png'>" + i.toString();

    if (i == endN) {
      resp.innerHTML += "<img class='mao'src='Public/bandeira.jpg'>";
      clearInterval(intervalodoido);
    }
  }, 10);
}
