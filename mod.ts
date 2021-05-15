import { balance, ERC20BalanceArgs } from './src/shared.ts'

const list = JSON.parse(await Deno.readTextFile('./list.json'))

export const ERC20Balance = (args: ERC20BalanceArgs) => balance(list)(args)
