const menu = {
  seletor: ".principal2",
};
//console.log(menu.seletor.toUpperCase());

function upperName(name) {
  return name.toUpperCase();
}
//console.log(upperName("Helio Franca"));

//Arrow Function
const lowerName = (name) => name.toLowerCase();
//console.log(lowerName("HELIO FRANCA"));

function mouseEvent(event) {
  //Desestruturando objetos
  const { clientX, clientY } = event;
  //console.log(event);
  //console.log(event.clientX, event.clientY);
  console.log(clientX, clientY);
}
document.addEventListener("click", mouseEvent);

const frutas = ["maça", "banana", "melancia"];
const [fruta01, fruta02, fruta03] = frutas;
console.log(fruta01, fruta02, fruta03);

//spread
function numeros(...num) {
  //array
  console.log(num);
  //expandido
  console.log(...num);
  console.log("Maior: ", Math.max(...num));
  console.log("Menor: ", Math.min(...num));
}
numeros(9, 8, 7, 6, 5, 4, 3, 0);

//objeto
const pesssoa = {
  nome: "Helio",
  idade: "33",
};
console.log(pesssoa);
