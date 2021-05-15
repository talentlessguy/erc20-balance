import { readFile } from 'fs/promises'
import { shared, ERC20BalanceArgs } from './shared'

const __dirname = new URL('.', import.meta.url).pathname

const list = JSON.parse((await readFile(__dirname + '/list.json')).toString())

export const ERC20Balance = (args: ERC20BalanceArgs) => shared(list)(args)
