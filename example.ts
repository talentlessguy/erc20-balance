import * as dotenv from '@tinyhttp/dotenv'
import { ERC20Balance } from './src/index'

dotenv.config()

ERC20Balance({
  addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
  coin: 'DEV',
  apiKey: process.env.ETHERSCAN_KEY
}).then((balance) => console.log(balance))
