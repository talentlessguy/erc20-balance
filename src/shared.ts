export type Token = {
  address: string
  chainId: number
  decimals: number
  logoURI: string
  name: string
  symbol: string
}

export type ERC20BalanceArgs = { addr: string; coin: string; apiKey?: string }

export const shared =
  (contracts: Token[]) =>
  async ({ addr, coin, apiKey = 'freekey' }: ERC20BalanceArgs) => {
    const contract = contracts.find((x) => x.symbol === coin)

    if (!contract) throw new Error(`${coin} token is not supported`)

    const url = `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${contract.address}&address=${addr}&tag=latest&apiKey=${apiKey}`

    const res = await fetch(url)

    const json = await res.json()

    if (json.message === 'NOTOK') throw new Error(json.result)

    return { ...contract, balance: parseInt(json.result, 10) / 10 ** contract.decimals }
  }
