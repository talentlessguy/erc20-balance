<br />
<br />

<p align="center">
  <img src="logo.svg" width="400px" />
</p>

<br />
<br />

![Vulnerabilities][vulns-badge-url]
[![Version][v-badge-url]][npm-url]
![Minified size][size-badge-url] [![Downloads][dl-badge-url]][npm-url] [![GitHub Workflow Status][gh-actions-img]][github-actions] [![Codecov][cov-badge-url]][cov-url]

Get 2000+ ERC-20 token balances with JavaScript. Supports Node.js and Deno.

> JSON file is generated using [TokenLists](https://tokenlists.org) endpoitns

## Usage

### Node.js

```js
import { ERC20Balance } from 'erc20-balance'
import * as dotenv from '@tinyhttp/dotenv'
import fetch from 'node-fetch'

globalThis.fetch = fetch

dotenv.config()

ERC20Balance({
  addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
  coin: 'LINK',
  apiKey: process.env.ETHERSCAN_KEY
}).then((res) => console.log(res))
```

### Deno

```js
import { ERC20Balance } from 'https://deno.land/x/erc20_balance/mod.ts'

ERC20Balance({
  addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
  coin: 'LINK',
  apiKey: Deno.env.get('ETHERSCAN_KEY')
}).then((res) => console.log(res))
```

[vulns-badge-url]: https://img.shields.io/snyk/vulnerabilities/npm/erc20-balance.svg?style=flat-square
[v-badge-url]: https://img.shields.io/npm/v/erc20-balance.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/erc20-balance
[size-badge-url]: https://img.shields.io/bundlephobia/min/erc20-balance.svg?style=flat-square
[cov-badge-url]: https://img.shields.io/codecov/c/gh/talentlessguy/erc20-balance?style=flat-square
[cov-url]: https://codecov.io/gh/talentlessguy/erc20-balance
[dl-badge-url]: https://img.shields.io/npm/dt/erc20-balance?style=flat-square
[github-actions]: https://github.com/talentlessguy/erc20-balance/actions
[gh-actions-img]: https://img.shields.io/github/workflow/status/talentlessguy/tinyhttp/CI?style=flat-square
