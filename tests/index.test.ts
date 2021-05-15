import { suite } from 'uvu'
import * as dotenv from '@tinyhttp/dotenv'
import * as assert from 'uvu/assert'
import { ERC20Balance } from '../src/index'
import fetch from 'node-fetch'

globalThis.fetch = fetch

dotenv.config()

const t = suite('ERC20Balance')

t('works for a supported contract', async () => {
  const { balance, symbol } = await ERC20Balance({
    addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
    coin: 'DEV',
    apiKey: process.env.ETHERSCAN_KEY
  })

  assert.equal(symbol, 'DEV')
  assert.equal(1, balance)
})

t('throws an error for unsupported contract', async () => {
  try {
    await ERC20Balance({
      addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
      coin: 'NON_EXISTENT_TOKEN'
    })
  } catch (e) {
    assert.instance(e, Error)
    assert.match(e.message, 'NON_EXISTENT_TOKEN token is not supported')
  }
})

t.run()
