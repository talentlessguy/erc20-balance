import { suite } from 'uvu'
import * as dotenv from '@tinyhttp/dotenv'
import * as assert from 'assert'
import { ERC20Balance } from '../src/index'
import fetch from 'node-fetch'

globalThis.fetch = fetch

dotenv.config()

const t = suite('ERC20Balance')

t('works for a supported contract', async () => {
  const result = await ERC20Balance({
    addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
    coin: 'DEV',
    apiKey: process.env.ETHERSCAN_KEY
  })

  assert.deepStrictEqual(result, {
    address: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26',
    chainId: 1,
    decimals: 18,
    logoURI: 'https://zapper.fi/images/DEV-icon.png',
    name: 'Dev Protocol',
    symbol: 'DEV',
    balance: 1
  })
})

t('throws an error for unsupported contract', async () => {
  try {
    await ERC20Balance({
      addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
      coin: 'NON_EXISTENT_TOKEN'
    })
  } catch (e) {
    assert.match(e.message, new RegExp('NON_EXISTENT_TOKEN token is not supported'))
  }
})

t.run()
