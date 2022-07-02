import calc from "./calculos.js";
import { letraMaiuscula, letraMinuscula } from "./imprimir.js";
import numeroAleatorio from "./numeroAleatorio.js";
import { getApiAsync } from "./requisicao.js";

//imports
console.log("soma: ", calc.somar(2, 2));
console.log("Texto: ", letraMaiuscula("olá muNdo!"));
console.log("Texto: ", letraMinuscula("oLá muNdo!"));
console.log("Aleatório: ", numeroAleatorio());
