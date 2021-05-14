# erc20-balance

Get ERC-20 token (Chainlink, Filecoin etc) balances with JavaScript. Supports browsers, Node.js and Deno.

## Usage

### Node.js

```js
import { ERC20Balance } from 'erc20-balance'
import * as dotenv from '@tinyhttp/dotenv'

dotenv.config()

ERC20Balance({
  addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
  coin: 'LINK',
  apiKey: process.env.ETHERSCAN_KEY
}).then((res) => console.log(res))
```

### Deno

```js
import { ERC20Balance } from 'https://deno.land/x/erc20_balance/src/index.ts'

ERC20Balance({
  addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
  coin: 'LINK',
  apiKey: Deno.env.get('ETHERSCAN_KEY')
}).then((res) => console.log(res))
```

### Browser

```js
import { ERC20Balance } from 'https://unpkg.com/erc20-balance?module'

ERC20Balance({
  addr: '0xD3B282e9880cDcB1142830731cD83f7ac0e1043f',
  coin: 'LINK',
  apiKey: API_KEY
}).then((res) => console.log(res))
```
