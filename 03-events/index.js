const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function click(click) {
  console.log(`Um usuário clicou em ${click}`)
})

setInterval(() => {
  meuEmissor.emit(nomeEvento, 'menu')
}, 1000)

const stdin = process.openStdin()

stdin.addListener('data', value => {
  console.log(`Usuário digitou ${value}`)
})
