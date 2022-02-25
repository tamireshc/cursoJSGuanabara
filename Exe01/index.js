var day = new Date();
var hour = day.getHours();
console.log(hour);

function alterarFundo() {
  let corFundo = "";
  if (hour <= 12) {
    window.document.body.style.background = "rgb(97, 97, 243)";
  } else if (hour <= 18) {
    window.document.body.style.background = "rgb(243, 97, 109)";
  } else {
    window.document.body.style.background = "rgb(65, 48, 52)";
  }
}
alterarFundo();

function alteraHora() {
  var time = document.querySelector(".hora");
  console.log(time);
  time.innerText = `Agora são ${hour} horas`;
}
alteraHora();

function alteraImg() {
  var imagem = document.querySelector(".img");
  console.log(imagem);

  if (hour <= 12) {
    document.getElementById("img").src = "./Public/dia.jpg";
  } else if (hour <= 18) {
    document.getElementById("img").src = "./Public/tarde.jpg";
  } else {
    document.getElementById("img").src = "./Public/noite.jpeg";
  }
}

alteraImg();
