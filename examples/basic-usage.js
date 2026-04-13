/**
 * Basic usage example for SpinningBoardSDK.
 *
 * Usage:
 *   SENDER_KEY=<your-private-key> node examples/basic-usage.js
 */
import { broadcastTransaction } from '@stacks/transactions';
import { SpinningBoardSDK } from '../index.js';

const senderKey = process.env.SENDER_KEY;
if (!senderKey) {
  console.error('Set SENDER_KEY environment variable');
  process.exit(1);
}

const sdk = new SpinningBoardSDK({ network: 'mainnet' });

console.log('Contract:', sdk.getContractIdentifier());

const spinValue = Math.floor(Math.random() * 10) + 1;
console.log('Spin value:', spinValue);

const tx = await sdk.buildPlayTransaction({ spinValue, senderKey });
const result = await broadcastTransaction(tx, sdk.network);

if (result.error) {
  console.error('Broadcast failed:', result.error);
  process.exit(1);
}

console.log('TX ID:', result.txid);
