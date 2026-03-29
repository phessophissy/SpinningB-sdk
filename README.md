# Spinning Board SDK

Standalone JavaScript SDK for building transactions against the **Spinning Board** smart contract on Stacks.

This package was extracted from the main [`SpinningB`](https://github.com/phessophissy/SpinningB) app repo so the SDK can be versioned and published independently.

## Installation

```bash
npm install spinning-board-sdk
```

## Quick Start

```javascript
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

- `network`: `'mainnet'`, `'testnet'`, or `'mocknet'` (default: `'mainnet'`)
- `coreApiUrl`: optional custom Stacks API URL
- `contractAddress`: defaults to `SP2KYZRNME33Y39GP3RKC90DQJ45EF1N0NZNVRE09`
- `contractName`: defaults to `spinning-board`

## API

- `buildPlayTransaction({ spinValue, senderKey, nonce?, fee? })`
- `getContractIdentifier()`

## License

MIT
