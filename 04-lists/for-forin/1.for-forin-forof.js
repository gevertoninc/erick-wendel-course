const service = require("./service");

async function main() {
  try {
    const names = [];

    const resultado = await service.obterPessoa("a");

    console.time("for");
    for (let i = 0; i <= resultado.results.length - 1; i++) {
      const pessoa = resultado.results[i];

      names.push(pessoa.name);
    }
    console.timeEnd("for");

    console.time("for-in");
    for (let i in resultado.results) {
      const pessoa = resultado.results[i];

      names.push(pessoa.name);
    }
    console.timeEnd("for-in");

    console.time("for-of");
    for (pessoa of resultado.results) {
      names.push(pessoa.name);
    }
    console.timeEnd("for-of");

    console.log("Nomes", names);
  } catch (erro) {
    console.error("Erro", erro);
  }
}

main();
