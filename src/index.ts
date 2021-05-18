import { readFileSync } from 'fs'
import { shared, ERC20BalanceArgs, Token } from './shared'

const __dirname = new URL('.', import.meta.url).pathname

const list = JSON.parse(readFileSync(__dirname + '/list.json').toString()) as Token[]

export { list }

export const ERC20Balance = (args: ERC20BalanceArgs) => shared(list)(args)
