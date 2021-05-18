import { shared, ERC20BalanceArgs, Token } from './src/shared.ts'

const list = JSON.parse(
  await fetch(
    'https://gitcdn.link/cdn/talentlessguy/erc20-balance/90f426aea0c94cfaf901fd0f002cfb00bad9d5f1/src/list.json'
  ).then((res) => res.json())
) as Token[]

export { list }

export const ERC20Balance = (args: ERC20BalanceArgs) => shared(list)(args)
