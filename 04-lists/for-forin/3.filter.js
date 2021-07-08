const { obterPessoa } = require('./service')

Array.prototype.meuFilter = function (callback) {
  const lista = []

  for (index in this) {
    const item = this[index]

    const result = callback(item, index, this)

    if (!result) {
      continue
    }

    lista.push(item)
  }

  return lista
}

async function main() {
  try {
    const { results } = await obterPessoa('a')

    let familiaLars = results.filter(function (item) {
      return item.name.toLowerCase().indexOf('lars') !== -1
    })

    familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`Index: ${index}`, lista.length)

      try {
        return item.name.toLowerCase().indexOf('lars') !== -1
      } catch (erro) {
        console.log(erro, item)
      }
    })

    const names = familiaLars.map(pessoa => pessoa.name)

    console.log('names', names)
  } catch (erro) {
    console.error('erro', erro)
  }
}

main()
