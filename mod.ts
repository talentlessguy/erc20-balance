import { shared, ERC20BalanceArgs, Token } from './src/shared.ts'

const list = JSON.parse(await Deno.readTextFile('./src/list.json')) as Token[]

export { list }

export const ERC20Balance = (args: ERC20BalanceArgs) => shared(list)(args)
