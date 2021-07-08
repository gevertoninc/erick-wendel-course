const { obterPessoa } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = typeof valorInicial !== undefined ? valorInicial : this[0]

  for (let index = 0; index <= this.length - 1; index++) {
    valorFinal = callback(valorFinal, this[index], this)
  }

  return valorFinal
}

async function main() {
  try {
    const { results } = await obterPessoa('a')

    const pesos = results.map(item => parseInt(item.height))

    console.log('Pesos', pesos)

    let total = pesos.reduce((anterior, proximo) => {
      return anterior + proximo
    })

    const minhaLista = [
      ['Erick', 'Wendel'],
      ['NodeBR', 'Nerdzão'],
    ]

    total = minhaLista
      .meuReduce((anterior, proximo) => {
        console.log('anterior', anterior)
        console.log('proximo', proximo)

        return anterior.concat(proximo)
      }, [])
      .join()

    console.log('Total', total)
  } catch (erro) {
    console.error('erro', erro)
  }
}

main()
