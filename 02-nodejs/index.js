async function main() {
  try {
    console.time('potato')

    const usuario = await obterUsuario()
    const idUsuario = usuario.id

    const resto = await Promise.all([
      obterTelefone(idUsuario),
      obterEndereco(idUsuario),
    ])

    const telefone = resto[0]
    const endereco = resto[1]

    console.log('usuario', usuario)
    console.log('telefone', telefone)
    console.log('endereco', endereco)

    console.timeEnd('potato')
  } catch (erro) {
    console.error('Deu ruim: ' + erro)
  }
}

function obterUsuario() {
  return new Promise(function resolverUsuario(resolve, reject) {
    setTimeout(() => {
      const usuario = {
        id: 1,
        nome: 'Cláudio',
        dataNascimento: new Date(),
      }

      resolve(usuario)
    }, 1000)
  })
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverTelefone(resolve, reject) {
    setTimeout(() => {
      resolve('991543188')
    }, 2000)
  })
}

function obterEndereco(idUsuario) {
  return new Promise(function resolverEndereco(resolve, reject) {
    setTimeout(() => {
      const enedeco = {
        rua: 'Rua',
        numero: 1,
      }

      resolve(enedeco)
    }, 3000)
  })
}

main()
