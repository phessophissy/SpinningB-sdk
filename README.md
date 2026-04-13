# Spinning Board SDK

[![CI](https://github.com/phessophissy/SpinningB-sdk/actions/workflows/ci.yml/badge.svg)](https://github.com/phessophissy/SpinningB-sdk/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Standalone JavaScript SDK for building transactions against the **Spinning Board** smart contract on [Stacks](https://www.stacks.co/) (Bitcoin L2).

This package was extracted from the main [SpinningB](https://github.com/phessophissy/SpinningB) app repo so the SDK can be versioned and published independently.

## Installation

```bash
npm install spinning-board-sdk
```

## Quick Start

```js
import { broadcastTransaction } from '@stacks/transactions';
import { SpinningBoardSDK } from 'spinning-board-sdk';

async function playTheGame() {
  const sdk = new SpinningBoardSDK({ network: 'mainnet' });

  const tx = await sdk.buildPlayTransaction({
    spinValue: 7,
    senderKey: 'YOUR_PRIVATE_KEY_HERE',
  });

  const result = await broadcastTransaction(tx, sdk.network);

  if (result.error) {
    console.error('Failed to broadcast transaction:', result.error);
    return;
  }

  console.log('Transaction broadcast successfully:', result.txid);
}
```

## Configuration

`new SpinningBoardSDK(options)` accepts:

| Option            | Type     | Default                                        |
| ----------------- | -------- | ---------------------------------------------- |
| `network`         | `string` | `'mainnet'`                                    |
| `coreApiUrl`      | `string` | Stacks default                                 |
| `contractAddress` | `string` | `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09`   |
| `contractName`    | `string` | `spinning-board`                               |

## API

### `buildPlayTransaction({ spinValue, senderKey, nonce?, fee? })`

Build a signed Stacks transaction that calls the contract's `play` function.

- **spinValue** — integer between 1 and 10
- **senderKey** — sender's private key hex string
- **nonce** *(optional)* — override the account nonce
- **fee** *(optional)* — override the transaction fee in microSTX

Returns a `Promise<StacksTransaction>`.

### `getContractIdentifier()`

Returns the full contract identifier string (`address.name`).

## Testing

```bash
node --test test.js
```

## TypeScript

Type definitions are included (`index.d.ts`). No additional `@types` package is needed.

## License

MIT
