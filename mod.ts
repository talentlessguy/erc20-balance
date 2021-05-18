import { shared, ERC20BalanceArgs, Token } from './src/shared.ts'

const list = JSON.parse(
  await fetch('https://raw.githubusercontent.com/talentlessguy/erc20-balance/master/src/list.json').then((res) =>
    res.json()
  )
) as Token[]

export { list }

export const ERC20Balance = (args: ERC20BalanceArgs) => shared(list)(args)
