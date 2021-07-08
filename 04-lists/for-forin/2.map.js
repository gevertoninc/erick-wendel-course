const service = require('./service')

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = []

  for (let index = 0; index <= this.length - 1; index++) {
    const resultado = callback(this[index], index)

    novoArrayMapeado.push(resultado)
  }

  return novoArrayMapeado
}

async function main() {
  try {
    const resultado = await service.obterPessoa('a')

    let nomes = []

    resultado.results.forEach(function (pessoa) {
      nomes.push(pessoa.name)
    })

    nomes = resultado.results.map(function (pessoa) {
      return pessoa.name
    })

    nomes = resultado.results.map(pessoa => pessoa.name)

    nomes = resultado.results.meuMap(function (pessoa, index) {
      return `${index}. ${pessoa.name}`
    })

    console.log('nomes', nomes)
  } catch (erro) {
    console.error('erro', erro)
  }
}

main()
