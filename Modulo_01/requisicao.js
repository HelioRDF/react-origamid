export function getApi(url) {
  fetch(url)
    .then((r) => r.json()) //Transforma em json
    .then((r) => console.log(r));
}

export async function getApiAsync(url) {
  const resposta = await fetch(url);
  const json = await resposta.json();
  console.log(json);
  return json;
}

getApiAsync("https://ranekapi.origamid.dev/json/api/produto/smartphone");
