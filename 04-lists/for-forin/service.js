const axios = require('axios')
const URL = 'https://swapi.dev/api/people'

async function obterPessoa(nome) {
  const url = `${URL}?search=${nome}&format=json`

  const response = await axios.get(url)

  return response.data
}

obterPessoa('r2')
  .then(function (pessoa) {
    console.log(`Resultado: ${JSON.stringify(pessoa)}`)
  })
  .catch(error => {
    console.error(`Erro: ${error}`)
  })

module.exports = {
  obterPessoa,
}
