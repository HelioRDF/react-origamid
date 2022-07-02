const precos = ["Credito", "R$ 200", "R$ 500", "R$ 300", "XPTO"];

console.log(precos);

const precosFiltro = precos.filter((p) => p.includes("R$"));
const precosNum = precosFiltro.map((precos) =>
  Number(precos.replace("R$", ""))
);

console.log(precosFiltro);
console.log(precosNum);
console.log(typeof precosNum[0]);
