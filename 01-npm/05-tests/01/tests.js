const assert = require('assert')
const { obterPessoas, URL } = require('./service')
const nock = require('nock')

const testeQualquer = 1

assert.ok(testeQualquer, `${testeQualquer} não é truthy`)

describe('Star Wars tests', () => {
  it('Should fetch R2D2 correctly', async () => {
    const response = {
      results: [
        {
          name: 'R2-D2',
          height: '96',
        },
      ],
    }

    nock(URL).get('?search=r2-d2&format=json').reply(200, response)

    const expected = [
      {
        nome: 'R2-D2',
        peso: 96,
      },
    ]

    const nomeBase = 'r2-d2'

    const result = await obterPessoas(nomeBase)

    assert.deepEqual(result, expected)
  })
})
