var idade = document.querySelector("input#ano");
console.log(idade);

var sexoM = document.querySelector("input#sexoM");
var sexoF = document.querySelector("input#sexoF");
console.log(sexoM.checked);

var img = document.querySelector(".img");
console.log(img);

var texto = document.querySelector(".texto");
console.log(texto);

function verificar() {
  if (idade.value < 12 && sexoF.checked) {
    img.src = "./public/menina.jpeg";
    texto.innerText = `Menina de ${idade.value} anos`;
  } else if (idade.value < 12 && sexoM.checked) {
    img.src = "./public/menino.jpeg";
    texto.innerText = `Menino de ${idade.value} anos`;
  } else if (idade.value < 60 && sexoF.checked) {
    img.src = "./public/mulher.jpeg";
    texto.innerText = `Mulher de ${idade.value} anos`;
  } else if (idade.value < 60 && sexoM.checked) {
    img.src = "./public/man.jpg";
    texto.innerText = `Homem de ${idade.value} anos`;
  } else if (idade.value < 100 && sexoF.checked) {
    img.src = "./public/senhora.jpg";
    texto.innerText = `Senhora de ${idade.value} anos`;
  } else if (idade.value < 100 && sexoM.checked) {
    img.src = "./public/senhor.jpg";
    texto.innerText = `Senhor de ${idade.value} anos`;
  }
}
