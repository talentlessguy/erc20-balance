import { shared, ERC20BalanceArgs } from './src/shared.ts'

const list = JSON.parse(await Deno.readTextFile('./src/list.json'))

export { list }

export const ERC20Balance = (args: ERC20BalanceArgs) => shared(list)(args)
