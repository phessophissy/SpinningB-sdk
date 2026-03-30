import {
  CONTRACT_NAME,
  SpinningBoardSDK,
} from 'spinning-board-sdk';

console.log('Spinning Board Growth Bot running...');
console.log('SDK Default Contract Name:', CONTRACT_NAME);

if (typeof SpinningBoardSDK !== 'function') {
  console.error('Smoke check failed: SpinningBoardSDK is not available.');
  process.exit(1);
}

const sdk = new SpinningBoardSDK();
console.log('Smoke check passed: SpinningBoardSDK instantiated successfully.');
console.log('Contract identifier:', sdk.getContractIdentifier());
